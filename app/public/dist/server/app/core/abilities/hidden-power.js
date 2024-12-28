"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiddenPowerEMStrategy = exports.HiddenPowerQMStrategy = exports.HiddenPowerZStrategy = exports.HiddenPowerYStrategy = exports.HiddenPowerXStrategy = exports.HiddenPowerWStrategy = exports.HiddenPowerVStrategy = exports.HiddenPowerUStrategy = exports.HiddenPowerTStrategy = exports.HiddenPowerSStrategy = exports.HiddenPowerRStrategy = exports.HiddenPowerQStrategy = exports.HiddenPowerPStrategy = exports.HiddenPowerOStrategy = exports.HiddenPowerNStrategy = exports.HiddenPowerMStrategy = exports.HiddenPowerLStrategy = exports.HiddenPowerKStrategy = exports.HiddenPowerJStrategy = exports.HiddenPowerIStrategy = exports.HiddenPowerHStrategy = exports.HiddenPowerGStrategy = exports.HiddenPowerFStrategy = exports.HiddenPowerEStrategy = exports.HiddenPowerDStrategy = exports.HiddenPowerCStrategy = exports.HiddenPowerBStrategy = exports.HiddenPowerAStrategy = exports.HiddenPowerStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_and_categories_1 = require("../../models/precomputed/precomputed-types-and-categories");
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Synergy_1 = require("../../types/enum/Synergy");
const random_1 = require("../../utils/random");
const abilities_1 = require("./abilities");
const ability_strategy_1 = require("./ability-strategy");
const board_1 = require("../../utils/board");
const egg_factory_1 = require("../../models/egg-factory");
class HiddenPowerStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        unown.handleDamage({
            damage: unown.life + unown.shield,
            board,
            attackType: Game_1.AttackType.TRUE,
            attacker: null,
            shouldTargetGainMana: false
        });
    }
}
exports.HiddenPowerStrategy = HiddenPowerStrategy;
class HiddenPowerAStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const corners = [
            [0, 0],
            [board.columns - 1, 0],
            [0, board.rows - 1],
            [board.columns - 1, board.rows - 1]
        ];
        corners.forEach(([x, y]) => {
            const abra = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.ABRA, unown.player);
            const coord = unown.simulation.getClosestAvailablePlaceOnBoardTo(x, y, unown.team);
            unown.simulation.addPokemon(abra, coord.x, coord.y, unown.team, false);
        });
    }
}
exports.HiddenPowerAStrategy = HiddenPowerAStrategy;
class HiddenPowerBStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, enemy) => {
            if (enemy && unown.team != enemy.team) {
                enemy.status.triggerBurn(30000, enemy, unown);
            }
        });
    }
}
exports.HiddenPowerBStrategy = HiddenPowerBStrategy;
class HiddenPowerCStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                pokemon.addItem(Item_1.Item.AMULET_COIN);
            }
        });
    }
}
exports.HiddenPowerCStrategy = HiddenPowerCStrategy;
class HiddenPowerDStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const player = unown.player;
        if (player && !unown.isGhostOpponent) {
            const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            if (x !== undefined) {
                const ditto = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.DITTO, player);
                ditto.positionX = x;
                ditto.positionY = 0;
                player.board.set(ditto.id, ditto);
            }
        }
    }
}
exports.HiddenPowerDStrategy = HiddenPowerDStrategy;
class HiddenPowerEStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const egg = (0, egg_factory_1.createRandomEgg)(false);
        const player = unown.player;
        if (player && !unown.isGhostOpponent) {
            const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            if (x !== undefined) {
                egg.positionX = x;
                egg.positionY = 0;
                egg.evolutionRule.evolutionTimer = 1;
                player.board.set(egg.id, egg);
            }
        }
    }
}
exports.HiddenPowerEStrategy = HiddenPowerEStrategy;
class HiddenPowerFStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const nbFishes = 3;
        const player = unown.player;
        if (player && !unown.isGhostOpponent) {
            for (let i = 0; i < nbFishes; i++) {
                const fish = unown.simulation.room.state.shop.pickFish(player, Item_1.Item.SUPER_ROD);
                unown.simulation.room.spawnOnBench(player, fish, "fishing");
            }
        }
    }
}
exports.HiddenPowerFStrategy = HiddenPowerFStrategy;
class HiddenPowerGStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        if (unown.player && !unown.isGhostOpponent) {
            unown.player.addMoney(5, true, unown);
        }
    }
}
exports.HiddenPowerGStrategy = HiddenPowerGStrategy;
class HiddenPowerHStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                pokemon.handleHeal(pokemon.hp - pokemon.life, unown, 1, crit);
            }
        });
    }
}
exports.HiddenPowerHStrategy = HiddenPowerHStrategy;
class HiddenPowerIStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        if (unown.player && !unown.isGhostOpponent) {
            unown.player.items.push((0, random_1.pickRandomIn)(Item_1.ItemComponents));
        }
    }
}
exports.HiddenPowerIStrategy = HiddenPowerIStrategy;
class HiddenPowerJStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const numberToSpawn = 2;
        for (let i = 0; i < numberToSpawn; i++) {
            const coord = unown.simulation.getClosestAvailablePlaceOnBoardToPokemon(unown, unown.team);
            const sharpedo = unown.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SHARPEDO, unown.player), coord.x, coord.y, unown.team, false);
            sharpedo.addItem(Item_1.Item.RAZOR_CLAW);
        }
    }
}
exports.HiddenPowerJStrategy = HiddenPowerJStrategy;
class HiddenPowerKStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const coord = unown.simulation.getClosestAvailablePlaceOnBoardToPokemon(unown, unown.team);
        const hitmonlee = unown.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.HITMONLEE, unown.player), coord.x, coord.y, unown.team, false);
        hitmonlee.addItem(Item_1.Item.RED_ORB);
        hitmonlee.pp = hitmonlee.maxPP - 1;
    }
}
exports.HiddenPowerKStrategy = HiddenPowerKStrategy;
class HiddenPowerLStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team !== pokemon.team) {
                pokemon.status.triggerLocked(5000, pokemon);
            }
        });
    }
}
exports.HiddenPowerLStrategy = HiddenPowerLStrategy;
class HiddenPowerMStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                pokemon.pp = pokemon.maxPP;
            }
        });
    }
}
exports.HiddenPowerMStrategy = HiddenPowerMStrategy;
class HiddenPowerNStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                const target = board.getValue(pokemon.targetX, pokemon.targetY);
                if (target) {
                    pokemon.addShield(50, unown, 0, false);
                    abilities_1.AbilityStrategies[Ability_1.Ability.EXPLOSION].process(pokemon, pokemon.state, board, target, false);
                    pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                        id: pokemon.simulation.id,
                        skill: Ability_1.Ability.EXPLOSION,
                        positionX: pokemon.positionX,
                        positionY: pokemon.positionY,
                        targetX: target.positionX,
                        targetY: target.positionY,
                        orientation: pokemon.orientation
                    });
                }
            }
        });
    }
}
exports.HiddenPowerNStrategy = HiddenPowerNStrategy;
class HiddenPowerOStrategy extends HiddenPowerStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, value) => {
            if (value && pokemon.team === value.team) {
                value.addItem(Item_1.Item.ORAN_BERRY);
            }
        });
    }
}
exports.HiddenPowerOStrategy = HiddenPowerOStrategy;
class HiddenPowerPStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const numberToSpawn = 5;
        const bugs = [
            ...precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[Synergy_1.Synergy.BUG].pokemons,
            ...precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[Synergy_1.Synergy.BUG]
                .additionalPokemons
        ].filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).stars === 1);
        for (let i = 0; i < numberToSpawn; i++) {
            const bug = (0, random_1.pickRandomIn)(bugs);
            const coord = unown.simulation.getClosestAvailablePlaceOnBoardToPokemon(unown, unown.team);
            unown.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(bug, unown.player), coord.x, coord.y, unown.team, false);
        }
    }
}
exports.HiddenPowerPStrategy = HiddenPowerPStrategy;
class HiddenPowerQStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        unown.simulation.redTeam.clear();
        unown.simulation.blueTeam.clear();
    }
}
exports.HiddenPowerQStrategy = HiddenPowerQStrategy;
class HiddenPowerRStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        if (unown.player && !unown.isGhostOpponent) {
            unown.player.shopFreeRolls += 6;
        }
    }
}
exports.HiddenPowerRStrategy = HiddenPowerRStrategy;
class HiddenPowerSStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, enemy) => {
            if (enemy && unown.team != enemy.team) {
                enemy.status.triggerFreeze(2000, enemy);
            }
        });
    }
}
exports.HiddenPowerSStrategy = HiddenPowerSStrategy;
class HiddenPowerTStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        if (unown.player && !unown.isGhostOpponent) {
            const player = unown.player;
            (0, random_1.pickNRandomIn)(Item_1.Berries, 3).forEach((item) => {
                player.items.push(item);
            });
        }
    }
}
exports.HiddenPowerTStrategy = HiddenPowerTStrategy;
class HiddenPowerUStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const coord = unown.simulation.getClosestAvailablePlaceOnBoardToPokemon(unown, unown.team);
        const uxie = unown.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.UXIE, unown.player), coord.x, coord.y, unown.team, false);
        uxie.addItem(Item_1.Item.AQUA_EGG);
        uxie.pp = uxie.maxPP - 1;
    }
}
exports.HiddenPowerUStrategy = HiddenPowerUStrategy;
class HiddenPowerVStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, enemy) => {
            if (enemy && unown.team !== enemy.team) {
                abilities_1.AbilityStrategies[Ability_1.Ability.THUNDER].process(unown, unown.state, board, enemy, false);
                unown.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: unown.simulation.id,
                    skill: Ability_1.Ability.THUNDER,
                    positionX: unown.positionX,
                    positionY: unown.positionY,
                    targetX: enemy.positionX,
                    targetY: enemy.positionY,
                    orientation: unown.orientation
                });
            }
        });
    }
}
exports.HiddenPowerVStrategy = HiddenPowerVStrategy;
class HiddenPowerWStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const player = unown.player;
        if (player && !unown.isGhostOpponent) {
            const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            if (x !== undefined) {
                const synergiesSortedByLevel = Array.from(player.synergies).sort(([s1, v1], [s2, v2]) => v2 - v1);
                const topSynergyCount = synergiesSortedByLevel[0][1];
                const topSynergies = synergiesSortedByLevel.filter(([s, v]) => v >= topSynergyCount);
                const topSynergy = (0, random_1.pickRandomIn)(topSynergies)[0];
                const candidates = [
                    ...precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[topSynergy].pokemons,
                    ...precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[topSynergy]
                        .additionalPokemons
                ]
                    .map((p) => pokemon_factory_1.default.createPokemonFromName(p, player))
                    .filter((p) => p.stars === 1 &&
                    [Game_1.Rarity.RARE, Game_1.Rarity.EPIC, Game_1.Rarity.ULTRA].includes(p.rarity));
                const pokemon = (0, random_1.pickRandomIn)(candidates);
                pokemon.positionX = x;
                pokemon.positionY = 0;
                player.board.set(pokemon.id, pokemon);
                unown.simulation.room.checkEvolutionsAfterPokemonAcquired(player.id);
            }
        }
    }
}
exports.HiddenPowerWStrategy = HiddenPowerWStrategy;
class HiddenPowerXStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                pokemon.addItem(Item_1.Item.XRAY_VISION);
            }
        });
    }
}
exports.HiddenPowerXStrategy = HiddenPowerXStrategy;
class HiddenPowerYStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const numberToSpawn = 2;
        for (let i = 0; i < numberToSpawn; i++) {
            const coord = unown.simulation.getClosestAvailablePlaceOnBoardToPokemon(unown, unown.team);
            const meditite = unown.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.MEDITITE, unown.player), coord.x, coord.y, unown.team, false);
            meditite.addItem(Item_1.Item.SOUL_DEW);
        }
    }
}
exports.HiddenPowerYStrategy = HiddenPowerYStrategy;
class HiddenPowerZStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        board.forEach((x, y, enemy) => {
            if (enemy && unown.team != enemy.team) {
                enemy.status.triggerSleep(5000, enemy);
            }
        });
    }
}
exports.HiddenPowerZStrategy = HiddenPowerZStrategy;
class HiddenPowerQMStrategy extends HiddenPowerStrategy {
    process(unown, state, board, target, crit) {
        super.process(unown, state, board, target, crit);
        const player = unown.player;
        if (player && !unown.isGhostOpponent) {
            const stageLevel = unown.simulation.stageLevel;
            const candidates = (0, Pokemon_1.getUnownsPoolPerStage)(stageLevel).filter((u) => u !== Pokemon_1.Pkm.UNOWN_QUESTION);
            const nbUnownsObtained = 4;
            for (let i = 0; i < nbUnownsObtained; i++) {
                const pkm = (0, random_1.pickRandomIn)(candidates);
                const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
                if (x !== undefined) {
                    const pokemon = pokemon_factory_1.default.createPokemonFromName(pkm, player);
                    pokemon.positionX = x;
                    pokemon.positionY = 0;
                    player.board.set(pokemon.id, pokemon);
                }
            }
        }
    }
}
exports.HiddenPowerQMStrategy = HiddenPowerQMStrategy;
class HiddenPowerEMStrategy extends HiddenPowerStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const corners = [
            [0, 0],
            [board.columns - 1, 0],
            [0, board.rows - 1],
            [board.columns - 1, board.rows - 1]
        ];
        const stageLevel = pokemon.simulation.stageLevel;
        const candidates = (0, Pokemon_1.getUnownsPoolPerStage)(stageLevel).filter((u) => u !== Pokemon_1.Pkm.UNOWN_EXCLAMATION);
        corners.forEach(([x, y]) => {
            const unownName = (0, random_1.pickRandomIn)(candidates);
            const unown = pokemon_factory_1.default.createPokemonFromName(unownName, pokemon.player);
            const coord = pokemon.simulation.getClosestAvailablePlaceOnBoardTo(x, y, pokemon.team);
            pokemon.simulation.addPokemon(unown, coord.x, coord.y, pokemon.team, false);
        });
    }
}
exports.HiddenPowerEMStrategy = HiddenPowerEMStrategy;
//# sourceMappingURL=hidden-power.js.map