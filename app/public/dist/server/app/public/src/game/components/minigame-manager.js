"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = require("i18next");
const types_1 = require("../../../../types");
const Game_1 = require("../../../../types/enum/Game");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../../../types/enum/SpecialGameRule");
const logger_1 = require("../../../../utils/logger");
const number_1 = require("../../../../utils/number");
const utils_1 = require("../../pages/utils/utils");
const floating_item_1 = require("./floating-item");
const pokemon_avatar_1 = __importDefault(require("./pokemon-avatar"));
const pokemon_special_1 = __importDefault(require("./pokemon-special"));
const portal_1 = require("./portal");
class MinigameManager {
    constructor(scene, animationManager, uid, avatars, items) {
        var _a;
        this.kecleon = null;
        this.pokemons = new Map();
        this.items = new Map();
        this.portals = new Map();
        this.symbols = new Map();
        this.uid = uid;
        this.scene = scene;
        this.display = false;
        this.animationManager = animationManager;
        this.buildPokemons(avatars);
        this.buildItems(items);
        (_a = this.scene.room) === null || _a === void 0 ? void 0 : _a.onMessage(types_1.Transfer.NPC_DIALOG, (message) => this.onNpcDialog(message));
    }
    initialize() {
        var _a, _b;
        if (((_b = (_a = this.scene.room) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.specialGameRule) === SpecialGameRule_1.SpecialGameRule.KECLEONS_SHOP) {
            this.addKecleon();
        }
    }
    dispose() {
        if (this.kecleon) {
            this.kecleon.destroy();
            this.kecleon = null;
        }
    }
    update() {
        const interpolatePosition = (min = 0.2, max = min, acceleration = 100) => (item) => {
            if (!item.data)
                return;
            const { serverX, serverY } = item.data.values;
            item.x = Phaser.Math.Linear(item.x, serverX, (0, number_1.clamp)(acceleration / Math.abs(serverX - item.x), min, max));
            item.y = Phaser.Math.Linear(item.y, serverY, (0, number_1.clamp)(acceleration / Math.abs(serverY - item.y), 0.05, 0.25));
        };
        this.pokemons.forEach(interpolatePosition(0.2));
        this.items.forEach(interpolatePosition(0.05, 0.25, 100));
        this.portals.forEach(interpolatePosition(0.05, 0.25, 100));
        this.symbols.forEach(interpolatePosition(0.02, 0.25, 50));
    }
    buildPokemons(avatars) {
        avatars.forEach((pkm) => {
            this.addPokemon(pkm);
        });
    }
    buildItems(items) {
        items.forEach((item) => {
            this.addItem(item);
        });
    }
    buildPortals(portals) {
        portals.forEach((portal) => {
            this.addPortal(portal);
        });
    }
    getVector(x, y) {
        const avatar = this.pokemons.get(this.uid);
        if (avatar) {
            return {
                x: x - avatar.x,
                y: y - avatar.y
            };
        }
        else {
            return { x: 0, y: 0 };
        }
    }
    addItem(item) {
        const it = new floating_item_1.FloatingItem(this.scene, item.id, (0, utils_1.transformMiniGameXCoordinate)(item.x), (0, utils_1.transformMiniGameYCoordinate)(item.y), item.name);
        this.items.set(it.id, it);
    }
    removeItem(itemToRemove) {
        const itemUI = this.items.get(itemToRemove.id);
        if (itemUI) {
            itemUI.destroy();
        }
        this.items.delete(itemToRemove.id);
    }
    changeItem(item, field, value) {
        const itemUI = this.items.get(item.id);
        const coordinate = typeof value === "number" ? value : Number.parseFloat(value);
        if (itemUI) {
            switch (field) {
                case "x":
                    itemUI.setData("serverX", (0, utils_1.transformMiniGameXCoordinate)(coordinate));
                    break;
                case "y":
                    itemUI.setData("serverY", (0, utils_1.transformMiniGameYCoordinate)(coordinate));
                    break;
                case "avatarId":
                    itemUI.onGrab(value);
            }
        }
    }
    addPortal(portal) {
        const p = new portal_1.Portal(this.scene, portal.id, (0, utils_1.transformMiniGameXCoordinate)(portal.x), (0, utils_1.transformMiniGameYCoordinate)(portal.y));
        this.portals.set(p.id, p);
    }
    removePortal(portalToRemove) {
        const portalUI = this.portals.get(portalToRemove.id);
        if (portalUI) {
            portalUI.destroy();
        }
        this.portals.delete(portalToRemove.id);
    }
    changePortal(portal, field, value) {
        const portalUI = this.portals.get(portal.id);
        const coordinate = typeof value === "number" ? value : Number.parseFloat(value);
        if (portalUI) {
            switch (field) {
                case "x":
                    portalUI.setData("serverX", (0, utils_1.transformMiniGameXCoordinate)(coordinate));
                    break;
                case "y":
                    portalUI.setData("serverY", (0, utils_1.transformMiniGameYCoordinate)(coordinate));
                    break;
                case "avatarId":
                    if (value != "" && typeof value === "string") {
                        const avatar = this.pokemons.get(value);
                        this.symbols.forEach((symbol) => {
                            if (symbol.getData("portalId") === portal.id) {
                                this.removeSymbol(symbol);
                            }
                        });
                        this.scene.tweens.add({
                            targets: [portalUI, avatar],
                            x: portalUI.x,
                            y: portalUI.y,
                            scale: 0,
                            duration: 800,
                            ease: Phaser.Math.Easing.Sine.In
                        });
                    }
            }
        }
    }
    addSymbol(symbol) {
        const s = new portal_1.SynergySymbol(this.scene, symbol.id, (0, utils_1.transformMiniGameXCoordinate)(symbol.x), (0, utils_1.transformMiniGameYCoordinate)(symbol.y), symbol.synergy);
        this.symbols.set(s.id, s);
    }
    removeSymbol(symbolToRemove) {
        const symbolUI = this.symbols.get(symbolToRemove.id);
        if (symbolUI) {
            symbolUI.destroy();
        }
        if (this.symbols.has(symbolToRemove.id)) {
            this.symbols.delete(symbolToRemove.id);
        }
    }
    changeSymbol(symbol, field, value) {
        const symbolUI = this.symbols.get(symbol.id);
        const coordinate = typeof value === "number" ? value : Number.parseFloat(value);
        if (symbolUI) {
            switch (field) {
                case "x":
                    symbolUI.setData("serverX", (0, utils_1.transformMiniGameXCoordinate)(coordinate));
                    break;
                case "y":
                    symbolUI.setData("serverY", (0, utils_1.transformMiniGameYCoordinate)(coordinate));
                    break;
                case "portalId":
                    symbolUI.setData("portalId", value);
                    break;
            }
        }
    }
    addPokemon(pokemon) {
        const pokemonUI = new pokemon_avatar_1.default(this.scene, (0, utils_1.transformMiniGameXCoordinate)(pokemon.x), (0, utils_1.transformMiniGameYCoordinate)(pokemon.y), pokemon, pokemon.id);
        if (pokemonUI.isCurrentPlayerAvatar) {
            const arrowIndicator = this.scene.add
                .sprite(pokemonUI.x + pokemonUI.width / 2 - 16, pokemonUI.y - 70, "arrowDown")
                .setDepth(10)
                .setScale(2);
            this.scene.tweens.add({
                targets: arrowIndicator,
                y: pokemonUI.y - 50,
                duration: 500,
                ease: Phaser.Math.Easing.Sine.InOut,
                loop: 3,
                yoyo: true,
                onComplete() {
                    arrowIndicator.destroy();
                }
            });
        }
        this.animationManager.animatePokemon(pokemonUI, pokemon.action, false);
        this.pokemons.set(pokemonUI.playerId, pokemonUI);
    }
    removePokemon(pokemonToRemove) {
        const pokemonUI = this.pokemons.get(pokemonToRemove.id);
        if (pokemonUI) {
            pokemonUI.destroy();
        }
        this.pokemons.delete(pokemonToRemove.id);
    }
    changePokemon(pokemon, field, value) {
        const pokemonUI = this.pokemons.get(pokemon.id);
        if (pokemonUI) {
            switch (field) {
                case "orientation":
                    pokemonUI.orientation = value;
                    this.animationManager.animatePokemon(pokemonUI, pokemonUI.action, false);
                    break;
                case "action":
                    pokemonUI.action = value;
                    this.animationManager.animatePokemon(pokemonUI, value, false);
                    break;
                case "x":
                    pokemonUI.setData("serverX", (0, utils_1.transformMiniGameXCoordinate)(value));
                    break;
                case "y":
                    pokemonUI.setData("serverY", (0, utils_1.transformMiniGameYCoordinate)(value));
                    break;
                case "timer":
                    if (pokemonUI instanceof pokemon_avatar_1.default) {
                        pokemonUI.updateCircleTimer(value);
                    }
                    break;
            }
        }
        else {
            logger_1.logger.warn("cant find pokemon for id", pokemon.id);
        }
    }
    addKecleon() {
        this.kecleon = new pokemon_special_1.default(this.scene, 1000, 408, Pokemon_1.Pkm.KECLEON, this.animationManager, (0, i18next_1.t)("kecleon_dialog.tell_price"), (0, i18next_1.t)("kecleon_dialog.welcome"));
    }
    showEmote(id, emote) {
        const pokemonAvatar = this.pokemons.get(id);
        if (pokemonAvatar) {
            pokemonAvatar.action = Game_1.PokemonActionState.EMOTE;
            this.animationManager.animatePokemon(pokemonAvatar, Game_1.PokemonActionState.EMOTE, false, false);
            pokemonAvatar.drawSpeechBubble(emote, false);
        }
    }
    onNpcDialog({ npc, dialog }) {
        var _a;
        if (npc === "kecleon" && this.kecleon) {
            (_a = this.scene.board) === null || _a === void 0 ? void 0 : _a.displayText(960, 370, (0, i18next_1.t)(`kecleon_dialog.${dialog}`));
        }
    }
}
exports.default = MinigameManager;
//# sourceMappingURL=minigame-manager.js.map