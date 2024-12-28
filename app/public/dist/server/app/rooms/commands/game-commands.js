"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnUpdatePhaseCommand = exports.OnUpdateCommand = exports.OnJoinCommand = exports.OnPickBerryCommand = exports.OnLevelUpCommand = exports.OnSpectateCommand = exports.OnLockCommand = exports.OnRefreshCommand = exports.OnSellDropCommand = exports.OnDragDropItemCommand = exports.OnDragDropCombineCommand = exports.OnSwitchBenchAndBoardCommand = exports.OnDragDropCommand = exports.OnPokemonCatchCommand = exports.OnRemoveFromShopCommand = exports.OnShopCommand = void 0;
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const nanoid_1 = require("nanoid");
const evolution_rules_1 = require("../../core/evolution-rules");
const matchmaking_1 = require("../../core/matchmaking");
const pokemon_entity_1 = require("../../core/pokemon-entity");
const simulation_1 = __importDefault(require("../../core/simulation"));
const experience_manager_1 = require("../../models/colyseus-models/experience-manager");
const pokemon_1 = require("../../models/colyseus-models/pokemon");
const egg_factory_1 = require("../../models/egg-factory");
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const pve_stages_1 = require("../../models/pve-stages");
const shop_1 = require("../../models/shop");
const types_1 = require("../../types");
const Config_1 = require("../../types/Config");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../types/enum/Synergy");
const array_1 = require("../../utils/array");
const avatar_1 = require("../../utils/avatar");
const board_1 = require("../../utils/board");
const function_1 = require("../../utils/function");
const logger_1 = require("../../utils/logger");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const weather_1 = require("../../utils/weather");
class OnShopCommand extends command_1.Command {
    execute({ playerId, index }) {
        if (playerId === undefined ||
            index === undefined ||
            !this.state.players.has(playerId))
            return;
        const player = this.state.players.get(playerId);
        if (!player || !player.shop[index] || player.shop[index] === Pokemon_1.Pkm.DEFAULT)
            return;
        const name = player.shop[index];
        const pokemon = pokemon_factory_1.default.createPokemonFromName(name, player);
        const isEvolution = pokemon.evolutionRule &&
            pokemon.evolutionRule instanceof evolution_rules_1.CountEvolutionRule &&
            pokemon.evolutionRule.canEvolveIfBuyingOne(pokemon, player);
        let cost = (0, shop_1.getBuyPrice)(name, this.state.specialGameRule);
        const freeSpaceOnBench = (0, board_1.getFreeSpaceOnBench)(player.board);
        const hasSpaceOnBench = freeSpaceOnBench > 0 || isEvolution;
        if (isEvolution &&
            this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.BUYER_FEVER) {
            cost = 0;
        }
        const canBuy = player.money >= cost && hasSpaceOnBench;
        if (!canBuy)
            return;
        player.money -= cost;
        const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
        pokemon.positionX = x !== undefined ? x : -1;
        pokemon.positionY = 0;
        player.board.set(pokemon.id, pokemon);
        pokemon.onAcquired(player);
        if (pokemon.passive === Passive_1.Passive.UNOWN &&
            player.shopFreeRolls > 0 &&
            player.shop.every((p) => Pokemon_1.Unowns.includes(p) || p === Pokemon_1.Pkm.DEFAULT)) {
            this.state.shop.assignShop(player, true, this.state);
            player.shopFreeRolls -= 1;
        }
        else {
            player.shop = player.shop.with(index, Pokemon_1.Pkm.DEFAULT);
        }
        this.room.checkEvolutionsAfterPokemonAcquired(playerId);
    }
}
exports.OnShopCommand = OnShopCommand;
class OnRemoveFromShopCommand extends command_1.Command {
    execute({ playerId, index }) {
        if (playerId === undefined ||
            index === undefined ||
            !this.state.players.has(playerId))
            return;
        const player = this.state.players.get(playerId);
        if (!player || !player.shop[index] || player.shop[index] === Pokemon_1.Pkm.DEFAULT)
            return;
        const name = player.shop[index];
        const cost = (0, shop_1.getBuyPrice)(name, this.state.specialGameRule);
        if (player.money >= cost) {
            player.shop = player.shop.with(index, Pokemon_1.Pkm.DEFAULT);
            player.shopLocked = true;
            this.state.shop.releasePokemon(name, player);
        }
    }
}
exports.OnRemoveFromShopCommand = OnRemoveFromShopCommand;
class OnPokemonCatchCommand extends command_1.Command {
    execute({ playerId, pkm }) {
        if (playerId === undefined ||
            pkm === undefined ||
            !this.state.players.has(playerId))
            return;
        const player = this.state.players.get(playerId);
        if (!player)
            return;
        const pokemon = pokemon_factory_1.default.createPokemonFromName(pkm, player);
        const freeSpaceOnBench = (0, board_1.getFreeSpaceOnBench)(player.board);
        const hasSpaceOnBench = freeSpaceOnBench > 0 ||
            (pokemon.evolutionRule &&
                pokemon.evolutionRule instanceof evolution_rules_1.CountEvolutionRule &&
                pokemon.evolutionRule.canEvolveIfBuyingOne(pokemon, player));
        if (hasSpaceOnBench) {
            const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            pokemon.positionX = x !== undefined ? x : -1;
            pokemon.positionY = 0;
            player.board.set(pokemon.id, pokemon);
            pokemon.onAcquired(player);
            this.room.checkEvolutionsAfterPokemonAcquired(playerId);
        }
    }
}
exports.OnPokemonCatchCommand = OnPokemonCatchCommand;
class OnDragDropCommand extends command_1.Command {
    execute({ client, detail }) {
        const commands = [];
        let success = false;
        let dittoReplaced = false;
        const message = {
            updateBoard: true,
            updateItems: true
        };
        const playerId = client.auth.uid;
        const player = this.state.players.get(playerId);
        if (player) {
            message.updateItems = false;
            const pokemon = player.board.get(detail.id);
            if (pokemon) {
                const { x, y } = detail;
                const dropOnBench = y == 0;
                const dropFromBench = (0, board_1.isOnBench)(pokemon);
                if (pokemon.name === Pokemon_1.Pkm.DITTO &&
                    dropFromBench &&
                    !(0, board_1.isPositionEmpty)(x, y, player.board)) {
                    const pokemonToClone = this.room.getPokemonByPosition(player, x, y);
                    if (pokemonToClone && pokemonToClone.canBeCloned) {
                        dittoReplaced = true;
                        const replaceDitto = pokemon_factory_1.default.createPokemonFromName(pokemon_factory_1.default.getPokemonBaseEvolution(pokemonToClone.name), player);
                        pokemon.items.forEach((item) => {
                            player.items.push(item);
                        });
                        player.board.delete(detail.id);
                        const position = (0, board_1.getFirstAvailablePositionInBench)(player.board);
                        if (position !== undefined) {
                            replaceDitto.positionX = position;
                            replaceDitto.positionY = 0;
                            player.board.set(replaceDitto.id, replaceDitto);
                            success = true;
                            message.updateBoard = false;
                        }
                    }
                    else if (y === 0) {
                        this.room.swap(player, pokemon, x, y);
                        success = true;
                    }
                }
                else if (dropOnBench && dropFromBench) {
                    this.room.swap(player, pokemon, x, y);
                    pokemon.onChangePosition(x, y, player);
                    success = true;
                }
                else if (this.state.phase == Game_1.GamePhaseState.PICK) {
                    const teamSize = this.room.getTeamSize(player.board);
                    const isBoardFull = teamSize >=
                        (0, board_1.getMaxTeamSize)(player.experienceManager.level, this.room.state.specialGameRule);
                    const dropToEmptyPlace = (0, board_1.isPositionEmpty)(x, y, player.board);
                    if (dropOnBench) {
                        if (pokemon.canBeBenched) {
                            this.room.swap(player, pokemon, x, y);
                            if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.SLAMINGO) {
                                pokemon.items.forEach((item) => {
                                    if (item !== Item_1.Item.RARE_CANDY) {
                                        player.items.push(item);
                                        pokemon.removeItem(item);
                                    }
                                });
                            }
                            pokemon.onChangePosition(x, y, player);
                            success = true;
                        }
                    }
                    else if (pokemon.canBePlaced &&
                        !(dropFromBench && dropToEmptyPlace && isBoardFull)) {
                        this.room.swap(player, pokemon, x, y);
                        pokemon.onChangePosition(x, y, player);
                        success = true;
                    }
                }
            }
            if (!success && client.send) {
                client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            }
            if (dittoReplaced) {
                this.room.checkEvolutionsAfterPokemonAcquired(playerId);
            }
            if (success) {
                player.updateSynergies();
                player.boardSize = this.room.getTeamSize(player.board);
            }
        }
        if (commands.length > 0) {
            return commands;
        }
    }
}
exports.OnDragDropCommand = OnDragDropCommand;
class OnSwitchBenchAndBoardCommand extends command_1.Command {
    execute({ client, pokemonId }) {
        const playerId = client.auth.uid;
        const player = this.room.state.players.get(playerId);
        if (!player)
            return;
        const pokemon = player.board.get(pokemonId);
        if (!pokemon)
            return;
        if (this.state.phase !== Game_1.GamePhaseState.PICK)
            return;
        if (pokemon.positionY === 0) {
            const teamSize = this.room.getTeamSize(player.board);
            const isBoardFull = teamSize >=
                (0, board_1.getMaxTeamSize)(player.experienceManager.level, this.room.state.specialGameRule);
            const destination = (0, board_1.getFirstAvailablePositionOnBoard)(player.board);
            if (pokemon.canBePlaced && destination && !isBoardFull) {
                const [dx, dy] = destination;
                this.room.swap(player, pokemon, dx, dy);
                pokemon.onChangePosition(dx, dy, player);
            }
        }
        else {
            const dx = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            if (dx !== undefined) {
                this.room.swap(player, pokemon, dx, 0);
                pokemon.onChangePosition(dx, 0, player);
            }
        }
        player.updateSynergies();
        player.boardSize = this.room.getTeamSize(player.board);
    }
}
exports.OnSwitchBenchAndBoardCommand = OnSwitchBenchAndBoardCommand;
class OnDragDropCombineCommand extends command_1.Command {
    execute({ client, detail }) {
        const playerId = client.auth.uid;
        const message = {
            updateBoard: true,
            updateItems: true
        };
        const player = this.state.players.get(playerId);
        if (player) {
            message.updateBoard = false;
            message.updateItems = true;
            const itemA = detail.itemA;
            const itemB = detail.itemB;
            if (!player.items.includes(itemA) || !player.items.includes(itemB)) {
                client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
                return;
            }
            else if (itemA == itemB) {
                let count = 0;
                player.items.forEach((item) => {
                    if (item == itemA) {
                        count++;
                    }
                });
                if (count < 2) {
                    client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
                    return;
                }
            }
            let result = undefined;
            for (const [key, value] of Object.entries(Item_1.ItemRecipe)) {
                if ((value[0] == itemA && value[1] == itemB) ||
                    (value[0] == itemB && value[1] == itemA)) {
                    result = key;
                    break;
                }
            }
            if (!result) {
                client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
                return;
            }
            else {
                player.items.push(result);
                (0, array_1.removeInArray)(player.items, itemA);
                (0, array_1.removeInArray)(player.items, itemB);
            }
            player.updateSynergies();
        }
    }
}
exports.OnDragDropCombineCommand = OnDragDropCombineCommand;
class OnDragDropItemCommand extends command_1.Command {
    execute({ client, detail }) {
        var _a;
        const playerId = client.auth.uid;
        const message = {
            updateBoard: true,
            updateItems: true
        };
        const player = this.state.players.get(playerId);
        if (!player)
            return;
        message.updateBoard = false;
        message.updateItems = true;
        const { x, y, id: item } = detail;
        if (!player.items.includes(item)) {
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        let pokemon = player.getPokemonAt(x, y);
        if (pokemon === undefined) {
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        if (item === Item_1.Item.METEORITE) {
            if ((pokemon === null || pokemon === void 0 ? void 0 : pokemon.passive) === Passive_1.Passive.ALIEN_DNA) {
                if (pokemon.name === Pokemon_1.Pkm.DEOXYS) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.DEOXYS_ATTACK);
                }
                else if (pokemon.name === Pokemon_1.Pkm.DEOXYS_ATTACK) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.DEOXYS_DEFENSE);
                }
                else if (pokemon.name === Pokemon_1.Pkm.DEOXYS_DEFENSE) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.DEOXYS_SPEED);
                }
                else if (pokemon.name === Pokemon_1.Pkm.DEOXYS_SPEED) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.DEOXYS);
                }
            }
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        if (item === Item_1.Item.ZYGARDE_CUBE) {
            if ((pokemon === null || pokemon === void 0 ? void 0 : pokemon.passive) === Passive_1.Passive.ZYGARDE10 ||
                (pokemon === null || pokemon === void 0 ? void 0 : pokemon.passive) === Passive_1.Passive.ZYGARDE50) {
                if (pokemon.name === Pokemon_1.Pkm.ZYGARDE_10) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ZYGARDE_50);
                }
                else if (pokemon.name === Pokemon_1.Pkm.ZYGARDE_50) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ZYGARDE_10);
                }
            }
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        if (Item_1.OgerponMasks.includes(item)) {
            if (pokemon.passive === Passive_1.Passive.OGERPON_TEAL ||
                pokemon.passive === Passive_1.Passive.OGERPON_WELLSPRING ||
                pokemon.passive === Passive_1.Passive.OGERPON_HEARTHFLAME ||
                pokemon.passive === Passive_1.Passive.OGERPON_CORNERSTONE) {
                const currentMask = (0, schemas_1.values)(pokemon.items).find((i) => Item_1.OgerponMasks.includes(i));
                if (currentMask) {
                    pokemon.items.delete(currentMask);
                }
                else if (pokemon.items.size >= 3) {
                    client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
                    return;
                }
                if (item === Item_1.Item.TEAL_MASK) {
                    pokemon.items.add(Item_1.Item.TEAL_MASK);
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.OGERPON_TEAL_MASK);
                }
                else if (item === Item_1.Item.WELLSPRING_MASK) {
                    pokemon.items.add(Item_1.Item.WELLSPRING_MASK);
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.OGERPON_WELLSPRING_MASK);
                }
                else if (item === Item_1.Item.HEARTHFLAME_MASK) {
                    pokemon.items.add(Item_1.Item.HEARTHFLAME_MASK);
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.OGERPON_HEARTHFLAME_MASK);
                }
                else if (item === Item_1.Item.CORNERSTONE_MASK) {
                    pokemon.items.add(Item_1.Item.CORNERSTONE_MASK);
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.OGERPON_CORNERSTONE_MASK);
                }
            }
            else {
                client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
                return;
            }
        }
        if (item === Item_1.Item.FIRE_SHARD) {
            if (pokemon.types.has(Synergy_1.Synergy.FIRE) && player.life > 3) {
                pokemon.atk += 3;
                player.life = (0, number_1.min)(1)(player.life - 3);
                (0, array_1.removeInArray)(player.items, item);
            }
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        if (item === Item_1.Item.EVIOLITE && pokemon.evolution === Pokemon_1.Pkm.DEFAULT) {
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        if (item === Item_1.Item.BLACK_AUGURITE && pokemon.passive === Passive_1.Passive.SCYTHER) {
            pokemon.items.add(item);
            pokemon.evolutionRule.tryEvolve(pokemon, player, this.state.stageLevel);
            pokemon.items.delete(item);
        }
        if (Item_1.TMs.includes(item) || Item_1.HMs.includes(item)) {
            if (pokemon.types.has(Synergy_1.Synergy.HUMAN)) {
                pokemon.tm = Item_1.AbilityPerTM[item];
                pokemon.skill = Item_1.AbilityPerTM[item];
                pokemon.maxPP = 100;
                (0, array_1.removeInArray)(player.items, item);
                const tmIndex = player.tms.findIndex((tm) => tm === item);
                if (tmIndex !== -1) {
                    player.tms[tmIndex] = null;
                }
                return;
            }
            else {
                client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
                return;
            }
        }
        if (Item_1.NonHoldableItems.includes(item) || !pokemon.canHoldItems) {
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        const isBasicItem = Item_1.ItemComponents.includes(item);
        const existingBasicItemToCombine = (0, schemas_1.values)(pokemon.items).find((i) => Item_1.ItemComponents.includes(i));
        if (pokemon.items.size >= 3 &&
            (!isBasicItem || !existingBasicItemToCombine)) {
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        if (Item_1.SynergyStones.includes(item) &&
            pokemon.types.has(Item_1.SynergyGivenByItem[item])) {
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        if (!isBasicItem && pokemon.items.has(item)) {
            client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
            return;
        }
        if (item === Item_1.Item.RARE_CANDY) {
            const evolution = (_a = pokemon.evolutionRule) === null || _a === void 0 ? void 0 : _a.getEvolution(pokemon, player);
            if (!evolution ||
                evolution === Pokemon_1.Pkm.DEFAULT ||
                pokemon.items.has(Item_1.Item.EVIOLITE)) {
                client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
                return;
            }
            pokemon = player.transformPokemon(pokemon, evolution);
        }
        if (isBasicItem && existingBasicItemToCombine) {
            const recipe = Object.entries(Item_1.ItemRecipe).find(([_result, recipe]) => (recipe[0] === existingBasicItemToCombine && recipe[1] === item) ||
                (recipe[0] === item && recipe[1] === existingBasicItemToCombine));
            if (!recipe) {
                client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
                return;
            }
            const itemCombined = recipe[0];
            if (Item_1.SynergyStones.includes(itemCombined) &&
                pokemon.types.has(Item_1.SynergyGivenByItem[itemCombined])) {
                client.send(types_1.Transfer.DRAG_DROP_FAILED, message);
                return;
            }
            pokemon.items.delete(existingBasicItemToCombine);
            (0, array_1.removeInArray)(player.items, item);
            if (pokemon.items.has(itemCombined)) {
                player.items.push(itemCombined);
            }
            else {
                pokemon.items.add(itemCombined);
            }
        }
        else {
            pokemon.items.add(item);
            (0, array_1.removeInArray)(player.items, item);
        }
        if (pokemon.items.has(Item_1.Item.SHINY_CHARM)) {
            pokemon.shiny = true;
        }
        this.room.checkEvolutionsAfterItemAcquired(playerId, pokemon);
        player.updateSynergies();
    }
}
exports.OnDragDropItemCommand = OnDragDropItemCommand;
class OnSellDropCommand extends command_1.Command {
    execute({ client, pokemonId }) {
        const player = this.state.players.get(client.auth.uid);
        if (player) {
            const pokemon = player.board.get(pokemonId);
            if (pokemon &&
                !(0, board_1.isOnBench)(pokemon) &&
                this.state.phase === Game_1.GamePhaseState.FIGHT) {
                return;
            }
            if (pokemon &&
                (0, pokemon_entity_1.canSell)(pokemon.name, this.state.specialGameRule) === false) {
                return;
            }
            if (pokemon) {
                this.state.shop.releasePokemon(pokemon.name, player);
                const sellPrice = (0, shop_1.getSellPrice)(pokemon, this.state.specialGameRule);
                player.addMoney(sellPrice, false, null);
                pokemon.items.forEach((it) => {
                    player.items.push(it);
                });
                player.board.delete(pokemonId);
                player.updateSynergies();
                player.boardSize = this.room.getTeamSize(player.board);
                pokemon.afterSell(player);
            }
        }
    }
}
exports.OnSellDropCommand = OnSellDropCommand;
class OnRefreshCommand extends command_1.Command {
    execute(id) {
        var _a, _b;
        const player = this.state.players.get(id);
        if (!player)
            return;
        const rollCost = player.shopFreeRolls > 0 ? 0 : 1;
        const rollCostType = this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.DESPERATE_MOVES
            ? "life"
            : "money";
        const canRoll = rollCostType === "life"
            ? ((_a = player === null || player === void 0 ? void 0 : player.life) !== null && _a !== void 0 ? _a : 0) >= rollCost + 1
            : ((_b = player === null || player === void 0 ? void 0 : player.money) !== null && _b !== void 0 ? _b : 0) >= rollCost;
        if (canRoll && player.alive) {
            player.rerollCount++;
            player[rollCostType] -= rollCost;
            this.state.shop.assignShop(player, true, this.state);
            if (player.shopFreeRolls > 0)
                player.shopFreeRolls--;
        }
    }
}
exports.OnRefreshCommand = OnRefreshCommand;
class OnLockCommand extends command_1.Command {
    execute(id) {
        const player = this.state.players.get(id);
        if (player) {
            player.shopLocked = !player.shopLocked;
        }
    }
}
exports.OnLockCommand = OnLockCommand;
class OnSpectateCommand extends command_1.Command {
    execute({ id, spectatedPlayerId }) {
        const player = this.state.players.get(id);
        if (player) {
            player.spectatedPlayerId = spectatedPlayerId;
        }
    }
}
exports.OnSpectateCommand = OnSpectateCommand;
class OnLevelUpCommand extends command_1.Command {
    execute(id) {
        const player = this.state.players.get(id);
        if (!player)
            return;
        const cost = (0, experience_manager_1.getLevelUpCost)(this.state.specialGameRule);
        if (player.money >= cost && player.experienceManager.canLevel()) {
            player.experienceManager.addExperience(4);
            player.money -= cost;
        }
    }
}
exports.OnLevelUpCommand = OnLevelUpCommand;
class OnPickBerryCommand extends command_1.Command {
    execute({ playerId, berryIndex }) {
        const player = this.state.players.get(playerId);
        if (player && player.berryTreesStage[berryIndex] >= 3) {
            player.berryTreesStage[berryIndex] = 0;
            player.items.push(player.berryTreesType[berryIndex]);
            player.berryTreesType[berryIndex] = (0, random_1.pickRandomIn)(Item_1.Berries);
        }
    }
}
exports.OnPickBerryCommand = OnPickBerryCommand;
class OnJoinCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client }) {
            try {
                const players = (0, schemas_1.values)(this.state.players);
                if (players.some((p) => p.id === client.auth.uid)) {
                    if (this.state.players.size >= Config_1.MAX_PLAYERS_PER_GAME) {
                        const humanPlayers = players.filter((p) => !p.isBot);
                        if (humanPlayers.length === 1) {
                            humanPlayers[0].titles.add(types_1.Title.LONE_WOLF);
                        }
                    }
                }
                else {
                    this.state.spectators.add(client.auth.uid);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnJoinCommand = OnJoinCommand;
class OnUpdateCommand extends command_1.Command {
    execute({ deltaTime }) {
        if (deltaTime) {
            this.state.time -= deltaTime;
            if (Math.round(this.state.time / 1000) != this.state.roundTime) {
                this.state.roundTime = Math.round(this.state.time / 1000);
            }
            if (this.state.time < 0) {
                this.state.updatePhaseNeeded = true;
            }
            else if (this.state.phase == Game_1.GamePhaseState.FIGHT) {
                let everySimulationFinished = true;
                this.state.simulations.forEach((simulation) => {
                    if (!simulation.finished) {
                        simulation.update(deltaTime);
                        everySimulationFinished = false;
                    }
                });
                if (everySimulationFinished && !this.state.updatePhaseNeeded) {
                    this.state.time = 3000;
                    this.state.updatePhaseNeeded = true;
                }
            }
            else if (this.state.phase === Game_1.GamePhaseState.MINIGAME) {
                this.room.miniGame.update(deltaTime);
            }
            if (this.state.updatePhaseNeeded && this.state.time < 0) {
                return [new OnUpdatePhaseCommand()];
            }
        }
    }
}
exports.OnUpdateCommand = OnUpdateCommand;
class OnUpdatePhaseCommand extends command_1.Command {
    execute() {
        this.state.updatePhaseNeeded = false;
        if (this.state.phase == Game_1.GamePhaseState.MINIGAME) {
            this.room.miniGame.stop(this.room);
            this.initializePickingPhase();
        }
        else if (this.state.phase == Game_1.GamePhaseState.PICK) {
            this.stopPickingPhase();
            this.checkForLazyTeam();
            this.initializeFightingPhase();
        }
        else if (this.state.phase == Game_1.GamePhaseState.FIGHT) {
            this.stopFightingPhase();
            if (Config_1.ItemCarouselStages.includes(this.state.stageLevel) ||
                Config_1.PortalCarouselStages.includes(this.state.stageLevel)) {
                this.initializeMinigamePhase();
            }
            else {
                this.initializePickingPhase();
            }
        }
    }
    computeAchievements() {
        this.state.players.forEach((player) => {
            this.checkSuccess(player);
        });
    }
    checkSuccess(player) {
        var _a, _b;
        player.titles.add(types_1.Title.NOVICE);
        const effects = (_a = this.state.simulations
            .get(player.simulationId)) === null || _a === void 0 ? void 0 : _a.getEffects(player.id);
        if (effects) {
            effects.forEach((effect) => {
                switch (effect) {
                    case Effect_1.Effect.PURE_POWER:
                        player.titles.add(types_1.Title.POKEFAN);
                        break;
                    case Effect_1.Effect.SPORE:
                        player.titles.add(types_1.Title.POKEMON_RANGER);
                        break;
                    case Effect_1.Effect.DESOLATE_LAND:
                        player.titles.add(types_1.Title.KINDLER);
                        break;
                    case Effect_1.Effect.PRIMORDIAL_SEA:
                        player.titles.add(types_1.Title.FIREFIGHTER);
                        break;
                    case Effect_1.Effect.POWER_SURGE:
                        player.titles.add(types_1.Title.ELECTRICIAN);
                        break;
                    case Effect_1.Effect.JUSTIFIED:
                        player.titles.add(types_1.Title.BLACK_BELT);
                        break;
                    case Effect_1.Effect.EERIE_SPELL:
                        player.titles.add(types_1.Title.TELEKINESIST);
                        break;
                    case Effect_1.Effect.BEAT_UP:
                        player.titles.add(types_1.Title.DELINQUENT);
                        break;
                    case Effect_1.Effect.STEEL_SURGE:
                        player.titles.add(types_1.Title.ENGINEER);
                        break;
                    case Effect_1.Effect.DEEP_MINER:
                        player.titles.add(types_1.Title.GEOLOGIST);
                        break;
                    case Effect_1.Effect.TOXIC:
                        player.titles.add(types_1.Title.TEAM_ROCKET_GRUNT);
                        break;
                    case Effect_1.Effect.DRAGON_DANCE:
                        player.titles.add(types_1.Title.DRAGON_TAMER);
                        break;
                    case Effect_1.Effect.ANGER_POINT:
                        player.titles.add(types_1.Title.CAMPER);
                        break;
                    case Effect_1.Effect.MERCILESS:
                        player.titles.add(types_1.Title.MYTH_TRAINER);
                        break;
                    case Effect_1.Effect.CALM_MIND:
                        player.titles.add(types_1.Title.RIVAL);
                        break;
                    case Effect_1.Effect.WATER_VEIL:
                        player.titles.add(types_1.Title.DIVER);
                        break;
                    case Effect_1.Effect.HEART_OF_THE_SWARM:
                        player.titles.add(types_1.Title.BUG_MANIAC);
                        break;
                    case Effect_1.Effect.SKYDIVE:
                        player.titles.add(types_1.Title.BIRD_KEEPER);
                        break;
                    case Effect_1.Effect.SUN_FLOWER:
                        player.titles.add(types_1.Title.GARDENER);
                        break;
                    case Effect_1.Effect.GOOGLE_SPECS:
                        player.titles.add(types_1.Title.ALCHEMIST);
                        break;
                    case Effect_1.Effect.BERSERK:
                        player.titles.add(types_1.Title.BERSERKER);
                        break;
                    case Effect_1.Effect.ETHEREAL:
                        player.titles.add(types_1.Title.BLOB);
                        break;
                    case Effect_1.Effect.DIAMOND_STORM:
                        player.titles.add(types_1.Title.HIKER);
                        break;
                    case Effect_1.Effect.CURSE_OF_FATE:
                        player.titles.add(types_1.Title.HEX_MANIAC);
                        break;
                    case Effect_1.Effect.MOON_FORCE:
                        player.titles.add(types_1.Title.CUTE_MANIAC);
                        break;
                    case Effect_1.Effect.SHEER_COLD:
                        player.titles.add(types_1.Title.SKIER);
                        break;
                    case Effect_1.Effect.FORGOTTEN_POWER:
                        player.titles.add(types_1.Title.MUSEUM_DIRECTOR);
                        break;
                    case Effect_1.Effect.PRESTO:
                        player.titles.add(types_1.Title.MUSICIAN);
                        break;
                    case Effect_1.Effect.GOLDEN_EGGS:
                        player.titles.add(types_1.Title.BABYSITTER);
                        break;
                    case Effect_1.Effect.MAX_ILLUMINATION:
                        player.titles.add(types_1.Title.CHOSEN_ONE);
                        break;
                    default:
                        break;
                }
            });
            if (effects.size >= 5) {
                player.titles.add(types_1.Title.HARLEQUIN);
            }
            if (effects.size >= 10) {
                player.titles.add(types_1.Title.TACTICIAN);
            }
            if (effects.size >= 15) {
                player.titles.add(types_1.Title.STRATEGIST);
            }
            let shield = 0;
            let heal = 0;
            const dpsMeter = (_b = this.state.simulations
                .get(player.simulationId)) === null || _b === void 0 ? void 0 : _b.getDpsMeter(player.id);
            if (dpsMeter) {
                dpsMeter.forEach((v) => {
                    shield += v.shield;
                    heal += v.heal;
                });
            }
            if (shield > 1000) {
                player.titles.add(types_1.Title.GARDIAN);
            }
            if (heal > 1000) {
                player.titles.add(types_1.Title.NURSE);
            }
            if (this.state.stageLevel >= 40) {
                player.titles.add(types_1.Title.ETERNAL);
            }
        }
    }
    checkEndGame() {
        const playersAlive = (0, schemas_1.values)(this.state.players).filter((p) => p.alive);
        if (playersAlive.length <= 1) {
            this.state.gameFinished = true;
            const winner = playersAlive[0];
            if (winner) {
                const client = this.room.clients.find((cli) => cli.auth.uid === winner.id);
                if (client) {
                    client.send(types_1.Transfer.FINAL_RANK, 1);
                }
            }
            this.clock.setTimeout(() => {
                this.room.broadcast(types_1.Transfer.GAME_END);
                this.room.disconnect();
            }, 30 * 1000);
            return true;
        }
        return false;
    }
    computeStreak(isPVE) {
        if (isPVE)
            return;
        this.state.players.forEach((player) => {
            if (!player.alive) {
                return;
            }
            const [previousBattleResult, lastBattleResult] = player.history
                .filter((stage) => stage.id !== "pve" && stage.result !== Game_1.BattleResult.DRAW)
                .map((stage) => stage.result)
                .slice(-2);
            if (lastBattleResult === Game_1.BattleResult.DRAW) {
            }
            else if (lastBattleResult !== previousBattleResult) {
                player.streak = 0;
            }
            else {
                player.streak += 1;
            }
        });
    }
    computeIncome(isPVE) {
        this.state.players.forEach((player) => {
            let income = 0;
            if (player.alive && !player.isBot) {
                player.interest = Math.min(Math.floor(player.money / 10), 5);
                income += player.interest;
                if (!isPVE) {
                    income += (0, number_1.max)(5)(player.streak);
                }
                income += 5;
                player.addMoney(income, true, null);
                if (income > 0) {
                    const client = this.room.clients.find((cli) => cli.auth.uid === player.id);
                    client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_INCOME, income);
                }
                player.experienceManager.addExperience(2);
            }
        });
    }
    checkDeath() {
        this.state.players.forEach((player) => {
            if (player.life <= 0 && player.alive) {
                if (!player.isBot) {
                    player.shop.forEach((pkm) => {
                        this.state.shop.releasePokemon(pkm, player);
                    });
                    player.board.forEach((pokemon) => {
                        this.state.shop.releasePokemon(pokemon.name, player);
                    });
                }
                player.alive = false;
                const client = this.room.clients.find((cli) => cli.auth.uid === player.id);
                if (client) {
                    client.send(types_1.Transfer.FINAL_RANK, player.rank);
                }
            }
        });
    }
    initializePickingPhase() {
        var _a;
        this.state.phase = Game_1.GamePhaseState.PICK;
        this.state.time =
            ((_a = Config_1.StageDuration[this.state.stageLevel]) !== null && _a !== void 0 ? _a : Config_1.StageDuration.DEFAULT) * 1000;
        if (Config_1.ItemProposalStages.includes(this.state.stageLevel)) {
            this.state.players.forEach((player) => {
                let itemSet = Item_1.ItemComponents;
                if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.TECHNOLOGIC) {
                    itemSet = Item_1.ArtificialItems.filter((item) => player.artificialItems.includes(item) === false);
                }
                (0, schemas_1.resetArraySchema)(player.itemsProposition, (0, random_1.pickNRandomIn)(itemSet, 3));
            });
        }
        if (Config_1.AdditionalPicksStages.includes(this.state.stageLevel)) {
            const pool = this.state.stageLevel === Config_1.AdditionalPicksStages[0]
                ? this.room.additionalUncommonPool
                : this.state.stageLevel === Config_1.AdditionalPicksStages[1]
                    ? this.room.additionalRarePool
                    : this.room.additionalEpicPool;
            let remainingAddPicks = 8;
            this.state.players.forEach((player) => {
                var _a;
                if (!player.isBot) {
                    const items = (0, random_1.pickNRandomIn)(Item_1.ItemComponents, 3);
                    for (let i = 0; i < 3; i++) {
                        const p = pool.pop();
                        if (p) {
                            const regionalVariants = ((_a = Pokemon_1.PkmRegionalVariants[p]) !== null && _a !== void 0 ? _a : []).filter((pkm) => new pokemon_1.PokemonClasses[pkm]().isInRegion(player.map));
                            if (regionalVariants.length > 0) {
                                player.pokemonsProposition.push((0, random_1.pickRandomIn)(regionalVariants));
                            }
                            else {
                                player.pokemonsProposition.push(p);
                            }
                            player.itemsProposition.push(items[i]);
                        }
                    }
                    remainingAddPicks--;
                }
            });
            (0, function_1.repeat)(remainingAddPicks)(() => {
                const p = pool.pop();
                if (p) {
                    this.state.additionalPokemons.push(p);
                    this.state.shop.addAdditionalPokemon(p);
                }
            });
            this.state.players.forEach((p) => p.updateRegionalPool(this.state, false));
        }
        const isAfterPVE = this.state.stageLevel - 1 in pve_stages_1.PVEStages;
        const commands = new Array();
        this.state.players.forEach((player) => {
            var _a, _b;
            const fireLevel = (_a = player.synergies.get(Synergy_1.Synergy.FIRE)) !== null && _a !== void 0 ? _a : 0;
            const fireSynergLevel = Config_1.SynergyTriggers[Synergy_1.Synergy.FIRE].filter((n) => n <= fireLevel).length;
            if (fireSynergLevel === 4 &&
                player.items.includes(Item_1.Item.FIRE_SHARD) === false &&
                player.life > 2) {
                player.items.push(Item_1.Item.FIRE_SHARD);
            }
            const bestRod = Item_1.FishingRods.find((rod) => player.items.includes(rod));
            if (bestRod && (0, board_1.getFreeSpaceOnBench)(player.board) > 0 && !isAfterPVE) {
                const fish = this.state.shop.pickFish(player, bestRod);
                this.room.spawnOnBench(player, fish, "fishing");
            }
            const grassLevel = (_b = player.synergies.get(Synergy_1.Synergy.GRASS)) !== null && _b !== void 0 ? _b : 0;
            const nbTrees = Config_1.SynergyTriggers[Synergy_1.Synergy.GRASS].filter((n) => n <= grassLevel).length;
            for (let i = 0; i < nbTrees; i++) {
                player.berryTreesStage[i] = (0, number_1.max)(3)(player.berryTreesStage[i] + 1);
            }
            if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.FIRST_PARTNER &&
                this.state.stageLevel < 10 &&
                player.firstPartner) {
                this.room.spawnOnBench(player, player.firstPartner, "spawn");
            }
        });
        this.spawnWanderingPokemons();
        return commands;
    }
    checkForLazyTeam() {
        this.state.players.forEach((player, key) => {
            const teamSize = this.room.getTeamSize(player.board);
            const maxTeamSize = (0, board_1.getMaxTeamSize)(player.experienceManager.level, this.state.specialGameRule);
            if (teamSize < maxTeamSize) {
                const numberOfPokemonsToMove = maxTeamSize - teamSize;
                for (let i = 0; i < numberOfPokemonsToMove; i++) {
                    const pokemon = (0, schemas_1.values)(player.board).find((p) => (0, board_1.isOnBench)(p) && p.canBePlaced);
                    const coordinate = (0, board_1.getFirstAvailablePositionOnBoard)(player.board);
                    if (coordinate && pokemon) {
                        this.room.swap(player, pokemon, coordinate[0], coordinate[1]);
                        pokemon.onChangePosition(coordinate[0], coordinate[1], player);
                    }
                }
                if (numberOfPokemonsToMove > 0) {
                    player.updateSynergies();
                }
            }
        });
    }
    stopPickingPhase() {
        this.state.players.forEach((player) => {
            if (player.pokemonsProposition.length > 0) {
                this.room.pickPokemonProposition(player.id, (0, random_1.pickRandomIn)([...player.pokemonsProposition]), true);
                player.pokemonsProposition.clear();
            }
            else if (player.itemsProposition.length > 0) {
                this.room.pickItemProposition(player.id, (0, random_1.pickRandomIn)([...player.itemsProposition]));
                player.itemsProposition.clear();
            }
        });
    }
    stopFightingPhase() {
        const isPVE = this.state.stageLevel in pve_stages_1.PVEStages;
        this.state.simulations.forEach((simulation) => {
            if (!simulation.finished) {
                simulation.onFinish();
            }
            simulation.stop();
        });
        this.computeAchievements();
        this.computeStreak(isPVE);
        this.checkDeath();
        const isGameFinished = this.checkEndGame();
        if (!isGameFinished) {
            this.state.stageLevel += 1;
            this.computeIncome(isPVE);
            this.state.players.forEach((player) => {
                var _a;
                if (player.alive) {
                    if (player.isBot) {
                        player.experienceManager.level = (0, number_1.max)(9)(Math.round(this.state.stageLevel / 2));
                    }
                    if (isPVE && ((_a = player.history.at(-1)) === null || _a === void 0 ? void 0 : _a.result) === Game_1.BattleResult.WIN) {
                        while (player.pveRewards.length > 0) {
                            const reward = player.pveRewards.pop();
                            player.items.push(reward);
                        }
                        if (player.pveRewardsPropositions.length > 0) {
                            (0, schemas_1.resetArraySchema)(player.itemsProposition, player.pveRewardsPropositions);
                            player.pveRewardsPropositions.clear();
                        }
                    }
                    this.spawnBabyEggs(player, isPVE);
                    player.board.forEach((pokemon, key) => {
                        if (pokemon.evolutionRule) {
                            if (pokemon.evolutionRule instanceof evolution_rules_1.HatchEvolutionRule) {
                                pokemon.evolutionRule.updateHatch(pokemon, player, this.state.stageLevel);
                            }
                            if (pokemon.evolutionRule instanceof evolution_rules_1.ConditionBasedEvolutionRule) {
                                pokemon.evolutionRule.tryEvolve(pokemon, player, this.state.stageLevel);
                            }
                        }
                        if (pokemon.passive === Passive_1.Passive.UNOWN && !(0, board_1.isOnBench)(pokemon)) {
                            player.board.delete(key);
                            player.board.delete(pokemon.id);
                        }
                    });
                    player.updateSynergies();
                    if (!player.isBot) {
                        if (!player.shopLocked) {
                            if (player.shop.every((p) => Pokemon_1.Unowns.includes(p))) {
                                player.shopFreeRolls -= 1;
                            }
                            this.state.shop.assignShop(player, false, this.state);
                        }
                        else {
                            this.state.shop.refillShop(player, this.state);
                            player.shopLocked = false;
                        }
                    }
                }
            });
        }
    }
    initializeMinigamePhase() {
        this.state.phase = Game_1.GamePhaseState.MINIGAME;
        const nbPlayersAlive = (0, schemas_1.values)(this.state.players).filter((p) => p.alive).length;
        let minigamePhaseDuration = Config_1.ITEM_CAROUSEL_BASE_DURATION;
        if (Config_1.PortalCarouselStages.includes(this.state.stageLevel)) {
            minigamePhaseDuration = Config_1.PORTAL_CAROUSEL_BASE_DURATION;
        }
        else if (this.state.stageLevel !== Config_1.ItemCarouselStages[0]) {
            minigamePhaseDuration += nbPlayersAlive * 2000;
        }
        this.state.time = minigamePhaseDuration;
        this.room.miniGame.initialize(this.state, this.room);
    }
    initializeFightingPhase() {
        var _a;
        this.state.simulations.clear();
        this.state.phase = Game_1.GamePhaseState.FIGHT;
        this.state.time = Config_1.FIGHTING_PHASE_DURATION;
        this.room.setMetadata({ stageLevel: this.state.stageLevel });
        (0, colyseus_1.updateLobby)(this.room);
        this.state.botManager.updateBots();
        const pveStage = pve_stages_1.PVEStages[this.state.stageLevel];
        if (pveStage) {
            this.state.shinyEncounter =
                this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.SHINY_HUNTER ||
                    (0, random_1.chance)((_a = pveStage.shinyChance) !== null && _a !== void 0 ? _a : 0);
            this.state.players.forEach((player) => {
                var _a, _b, _c, _d;
                if (player.alive) {
                    player.opponentId = "pve";
                    player.opponentName = pveStage.name;
                    player.opponentAvatar = (0, avatar_1.getAvatarString)(Pokemon_1.PkmIndex[pveStage.avatar], this.state.shinyEncounter, pveStage.emotion);
                    player.opponentTitle = "WILD";
                    player.team = Game_1.Team.BLUE_TEAM;
                    const rewards = (_b = (_a = pveStage.getRewards) === null || _a === void 0 ? void 0 : _a.call(pveStage, player)) !== null && _b !== void 0 ? _b : [];
                    (0, schemas_1.resetArraySchema)(player.pveRewards, rewards);
                    const rewardsPropositions = this.state.shinyEncounter
                        ? (0, random_1.pickNRandomIn)(Item_1.ShinyItems, 3)
                        : ((_d = (_c = pveStage.getRewardsPropositions) === null || _c === void 0 ? void 0 : _c.call(pveStage, player)) !== null && _d !== void 0 ? _d : []);
                    (0, schemas_1.resetArraySchema)(player.pveRewardsPropositions, rewardsPropositions);
                    const pveBoard = pokemon_factory_1.default.makePveBoard(pveStage, this.state.shinyEncounter);
                    const weather = (0, weather_1.getWeather)(player, null, pveBoard);
                    const simulation = new simulation_1.default((0, nanoid_1.nanoid)(), this.room, player.board, pveBoard, player, undefined, this.state.stageLevel, weather);
                    player.simulationId = simulation.id;
                    this.state.simulations.set(simulation.id, simulation);
                }
            });
        }
        else {
            const matchups = (0, matchmaking_1.selectMatchups)(this.state);
            matchups.forEach((matchup) => {
                var _a, _b, _c, _d;
                const { bluePlayer, redPlayer } = matchup;
                const weather = (0, weather_1.getWeather)(bluePlayer, redPlayer, redPlayer.board);
                const simulationId = (0, nanoid_1.nanoid)();
                bluePlayer.simulationId = simulationId;
                bluePlayer.team = Game_1.Team.BLUE_TEAM;
                bluePlayer.opponents.set(redPlayer.id, ((_a = bluePlayer.opponents.get(redPlayer.id)) !== null && _a !== void 0 ? _a : 0) + 1);
                bluePlayer.opponentId = redPlayer.id;
                bluePlayer.opponentName = matchup.ghost
                    ? `Ghost of ${redPlayer.name}`
                    : redPlayer.name;
                bluePlayer.opponentAvatar = redPlayer.avatar;
                bluePlayer.opponentTitle = (_b = redPlayer.title) !== null && _b !== void 0 ? _b : "";
                if (!matchup.ghost) {
                    redPlayer.simulationId = simulationId;
                    redPlayer.team = Game_1.Team.RED_TEAM;
                    redPlayer.opponents.set(bluePlayer.id, ((_c = redPlayer.opponents.get(bluePlayer.id)) !== null && _c !== void 0 ? _c : 0) + 1);
                    redPlayer.opponentId = bluePlayer.id;
                    redPlayer.opponentName = bluePlayer.name;
                    redPlayer.opponentAvatar = bluePlayer.avatar;
                    redPlayer.opponentTitle = (_d = bluePlayer.title) !== null && _d !== void 0 ? _d : "";
                }
                const simulation = new simulation_1.default(simulationId, this.room, bluePlayer.board, redPlayer.board, bluePlayer, redPlayer, this.state.stageLevel, weather, matchup.ghost);
                this.state.simulations.set(simulation.id, simulation);
            });
        }
    }
    spawnWanderingPokemons() {
        const isPVE = this.state.stageLevel in pve_stages_1.PVEStages;
        this.state.players.forEach((player) => {
            if (player.alive && !player.isBot) {
                const client = this.room.clients.find((cli) => cli.auth.uid === player.id);
                if (!client)
                    return;
                const UNOWN_ENCOUNTER_CHANCE = 0.037;
                if ((0, random_1.chance)(UNOWN_ENCOUNTER_CHANCE)) {
                    setTimeout(() => {
                        client.send(types_1.Transfer.UNOWN_WANDERING);
                    }, Math.round((5 + 15 * Math.random()) * 1000));
                }
                if (isPVE &&
                    this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.GOTTA_CATCH_EM_ALL) {
                    const nbPokemonsToSpawn = Math.ceil(this.state.stageLevel / 2);
                    for (let i = 0; i < nbPokemonsToSpawn; i++) {
                        setTimeout(() => {
                            client.send(types_1.Transfer.POKEMON_WANDERING, this.state.shop.pickPokemon(player, this.state));
                        }, 4000 + i * 400);
                    }
                }
            }
        });
    }
    spawnBabyEggs(player, isPVE) {
        var _a;
        const hasBabyActive = player.effects.has(Effect_1.Effect.HATCHER) ||
            player.effects.has(Effect_1.Effect.BREEDER) ||
            player.effects.has(Effect_1.Effect.GOLDEN_EGGS);
        const hasLostLastBattle = ((_a = player.history.at(-1)) === null || _a === void 0 ? void 0 : _a.result) === Game_1.BattleResult.DEFEAT;
        const eggsOnBench = (0, schemas_1.values)(player.board).filter((p) => p.name === Pokemon_1.Pkm.EGG);
        const nbOfGoldenEggsOnBench = eggsOnBench.filter((p) => p.shiny).length;
        let nbEggsFound = 0;
        let goldenEggFound = false;
        if (hasLostLastBattle && hasBabyActive) {
            const EGG_CHANCE = 0.1;
            const GOLDEN_EGG_CHANCE = 0.04;
            const playerEggChanceStacked = player.eggChance;
            const babies = (0, schemas_1.values)(player.board).filter((p) => !(0, board_1.isOnBench)(p) && p.types.has(Synergy_1.Synergy.BABY));
            for (const baby of babies) {
                if (player.effects.has(Effect_1.Effect.GOLDEN_EGGS) &&
                    nbOfGoldenEggsOnBench === 0 &&
                    (0, random_1.chance)(GOLDEN_EGG_CHANCE, baby)) {
                    nbEggsFound++;
                    goldenEggFound = true;
                }
                else if ((0, random_1.chance)(EGG_CHANCE, baby)) {
                    nbEggsFound++;
                }
                if (player.effects.has(Effect_1.Effect.GOLDEN_EGGS) && !goldenEggFound) {
                    player.eggChance += GOLDEN_EGG_CHANCE * (1 + baby.luck / 100);
                }
                else if (player.effects.has(Effect_1.Effect.HATCHER) && nbEggsFound === 0) {
                    player.eggChance += EGG_CHANCE * (1 + baby.luck / 100);
                }
            }
            if (nbEggsFound === 0 &&
                (player.effects.has(Effect_1.Effect.BREEDER) ||
                    player.effects.has(Effect_1.Effect.GOLDEN_EGGS) ||
                    (0, random_1.chance)(playerEggChanceStacked))) {
                nbEggsFound = 1;
            }
            if (goldenEggFound === false &&
                player.effects.has(Effect_1.Effect.GOLDEN_EGGS) &&
                nbOfGoldenEggsOnBench === 0 &&
                (0, random_1.chance)(playerEggChanceStacked)) {
                goldenEggFound = true;
            }
        }
        else if (!isPVE) {
            player.eggChance = 0;
        }
        if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.OMELETTE_COOK &&
            [2, 3, 4].includes(this.state.stageLevel)) {
            nbEggsFound = 1;
        }
        for (let i = 0; i < nbEggsFound; i++) {
            if ((0, board_1.getFreeSpaceOnBench)(player.board) === 0)
                continue;
            const isGoldenEgg = goldenEggFound && i === 0 && nbOfGoldenEggsOnBench === 0;
            const egg = (0, egg_factory_1.createRandomEgg)(isGoldenEgg, player);
            const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            egg.positionX = x !== undefined ? x : -1;
            egg.positionY = 0;
            player.board.set(egg.id, egg);
            if (player.effects.has(Effect_1.Effect.HATCHER) ||
                (player.effects.has(Effect_1.Effect.GOLDEN_EGGS) && isGoldenEgg)) {
                player.eggChance = 0;
            }
        }
    }
}
exports.OnUpdatePhaseCommand = OnUpdatePhaseCommand;
//# sourceMappingURL=game-commands.js.map