"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmoteBubble = void 0;
const phaser_1 = require("phaser");
const pokemon_factory_1 = __importDefault(require("../../../../models/pokemon-factory"));
const types_1 = require("../../../../types");
const Game_1 = require("../../../../types/enum/Game");
const function_1 = require("../../../../utils/function");
const audio_1 = require("../../pages/utils/audio");
const stores_1 = __importDefault(require("../../stores"));
const NetworkStore_1 = require("../../stores/NetworkStore");
const avatar_1 = require("../../../../utils/avatar");
const emote_menu_1 = __importDefault(require("./emote-menu"));
const life_bar_1 = __importDefault(require("./life-bar"));
const pokemon_1 = __importDefault(require("./pokemon"));
class PokemonAvatar extends pokemon_1.default {
    constructor(scene, x, y, pokemon, playerId, scouting) {
        var _a;
        super(scene, x, y, pokemon_factory_1.default.createPokemonFromName(pokemon.name, {
            selectedShiny: pokemon.shiny
        }), playerId, false, false);
        this.circleHitbox = null;
        this.circleTimer = null;
        this.scene = scene;
        this.shouldShowTooltip = false;
        this.draggable = false;
        this.emoteBubble = null;
        this.emoteMenu = null;
        this.isCurrentPlayerAvatar = this.playerId === scene.uid;
        if (((_a = scene.room) === null || _a === void 0 ? void 0 : _a.state.phase) === Game_1.GamePhaseState.MINIGAME) {
            this.drawCircles();
        }
        else if (!scouting) {
            this.drawLifebar();
        }
        if (this.isCurrentPlayerAvatar) {
            this.registerKeys();
        }
        else {
            this.disableInteractive();
        }
        this.setDepth(2);
        this.sendEmote = (0, function_1.throttle)(this.sendEmote, 1000).bind(this);
    }
    registerKeys() {
        this.scene.input.keyboard.on("keydown-A", () => {
            if (this.isCurrentPlayerAvatar && this.scene && this.scene.game) {
                this.playAnimation();
            }
        });
        this.scene.input.keyboard.on("keydown-CTRL", () => {
            var _a;
            if (this.isCurrentPlayerAvatar && ((_a = this.scene) === null || _a === void 0 ? void 0 : _a.game)) {
                this.showEmoteMenu();
            }
        });
        this.scene.input.keyboard.on("keyup-CTRL", () => {
            this.hideEmoteMenu();
        });
        const NUM_KEYS = [
            "ONE",
            "TWO",
            "THREE",
            "FOUR",
            "FIVE",
            "SIX",
            "SEVEN",
            "EIGHT",
            "NINE"
        ];
        NUM_KEYS.forEach((keycode, i) => {
            const onKeydown = (event) => {
                var _a;
                if (this.isCurrentPlayerAvatar && ((_a = this.scene) === null || _a === void 0 ? void 0 : _a.game) && event.ctrlKey) {
                    event.preventDefault();
                    this.sendEmote(types_1.AvatarEmotions[i]);
                }
            };
            this.scene.input.keyboard.on("keydown-" + keycode, onKeydown);
            this.scene.input.keyboard.on("keydown-NUMPAD_" + keycode, onKeydown);
        });
        this.sprite.once("destroy", () => {
            this.scene.input.keyboard.off("keydown-A");
            this.scene.input.keyboard.off("keydown-CTRL");
            this.scene.input.keyboard.off("keyup-CTRL");
            NUM_KEYS.forEach((keycode) => {
                this.scene.input.keyboard.off("keydown-" + keycode);
                this.scene.input.keyboard.off("keydown-NUMPAD_" + keycode);
            });
        });
    }
    drawCircles() {
        var _a;
        const scene = this.scene;
        this.circleHitbox = new phaser_1.GameObjects.Ellipse(scene, 0, 0, 50, 50);
        this.add(this.circleHitbox);
        this.circleHitbox.setDepth(-1);
        this.circleHitbox.setVisible(((_a = scene.room) === null || _a === void 0 ? void 0 : _a.state.phase) === Game_1.GamePhaseState.MINIGAME);
        this.circleTimer = new phaser_1.GameObjects.Graphics(scene);
        this.add(this.circleTimer);
        this.circleTimer.setDepth(-1);
        if (this.isCurrentPlayerAvatar) {
            this.circleHitbox.setStrokeStyle(2, 0xffffff, 0.8);
        }
        else {
            this.circleHitbox.setStrokeStyle(1, 0xffffff, 0.5);
        }
    }
    updateCircleTimer(timer) {
        var _a, _b, _c, _d, _e, _f;
        if (timer <= 0) {
            (_a = this.circleTimer) === null || _a === void 0 ? void 0 : _a.destroy();
            if (this.isCurrentPlayerAvatar) {
                (0, audio_1.playSound)(audio_1.SOUNDS.CAROUSEL_UNLOCK);
            }
        }
        else {
            (_b = this.circleTimer) === null || _b === void 0 ? void 0 : _b.clear();
            (_c = this.circleTimer) === null || _c === void 0 ? void 0 : _c.lineStyle(8, 0xf7d51d, this.isCurrentPlayerAvatar ? 0.8 : 0.5);
            (_d = this.circleTimer) === null || _d === void 0 ? void 0 : _d.beginPath();
            const angle = (Math.min(timer, 8000) / 8000) * Math.PI * 2;
            (_e = this.circleTimer) === null || _e === void 0 ? void 0 : _e.arc(0, 0, 30, 0, angle);
            (_f = this.circleTimer) === null || _f === void 0 ? void 0 : _f.strokePath();
        }
    }
    updateLife(life) {
        var _a;
        (_a = this.lifebar) === null || _a === void 0 ? void 0 : _a.setAmount(life);
    }
    drawSpeechBubble(emoteAvatar, isOpponent) {
        if (this.emoteMenu) {
            this.emoteMenu.destroy();
            this.emoteMenu = null;
        }
        this.emoteBubble = new EmoteBubble(this.scene, emoteAvatar, isOpponent);
        this.add(this.emoteBubble);
        const x = isOpponent ? -40 : +40;
        const y = isOpponent ? +100 : -120;
        this.emoteBubble.setPosition(x, y);
        setTimeout(() => {
            if (this.emoteBubble) {
                this.emoteBubble.destroy();
                this.emoteBubble = null;
            }
        }, 3000);
    }
    drawLifebar() {
        this.lifebar = new life_bar_1.default(this.scene, 0, 28, 60, 100, 0, this.isCurrentPlayerAvatar ? 0 : 1, false);
        this.add(this.lifebar);
    }
    showEmoteMenu() {
        if (this.isCurrentPlayerAvatar && !this.emoteMenu) {
            this.emoteMenu = new emote_menu_1.default(this.scene, this.index, this.shiny, this.sendEmote);
            this.add(this.emoteMenu);
        }
    }
    hideEmoteMenu() {
        if (this.emoteMenu) {
            this.emoteMenu.destroy();
            this.emoteMenu = null;
        }
    }
    toggleEmoteMenu() {
        if (this.emoteMenu)
            this.hideEmoteMenu();
        else
            this.showEmoteMenu();
    }
    sendEmote(emotion) {
        const state = stores_1.default.getState();
        const player = state.game.players.find((p) => p.id === this.scene.uid);
        const pokemonCollection = player === null || player === void 0 ? void 0 : player.pokemonCollection;
        const pConfig = pokemonCollection === null || pokemonCollection === void 0 ? void 0 : pokemonCollection[this.index];
        const emotions = this.shiny ? pConfig.shinyEmotions : pConfig.emotions;
        const unlocked = pConfig && emotions.includes(emotion);
        if (unlocked) {
            stores_1.default.dispatch((0, NetworkStore_1.showEmote)((0, avatar_1.getAvatarString)(this.index, this.shiny, emotion)));
            this.hideEmoteMenu();
        }
    }
    playAnimation() {
        try {
            stores_1.default.dispatch((0, NetworkStore_1.showEmote)());
        }
        catch (err) {
            console.error("could not play animation", err);
        }
    }
    onPointerDown(pointer) {
        var _a;
        super.onPointerDown(pointer);
        const scene = this.scene;
        if (!this.isCurrentPlayerAvatar ||
            ((_a = scene.room) === null || _a === void 0 ? void 0 : _a.state.phase) === Game_1.GamePhaseState.MINIGAME) {
            return;
        }
        if (pointer.rightButtonDown()) {
            this.toggleEmoteMenu();
        }
        else {
            this.playAnimation();
        }
    }
}
exports.default = PokemonAvatar;
class EmoteBubble extends phaser_1.GameObjects.DOMElement {
    constructor(scene, emoteAvatar, isOpponent) {
        super(scene, 0, 0);
        this.dom = document.createElement("div");
        this.dom.className =
            "game-emote-bubble " + (isOpponent ? "opponent" : "current");
        const emoteImg = document.createElement("img");
        emoteImg.src = (0, avatar_1.getAvatarSrc)(emoteAvatar);
        this.dom.appendChild(emoteImg);
        this.setElement(this.dom);
    }
}
exports.EmoteBubble = EmoteBubble;
//# sourceMappingURL=pokemon-avatar.js.map