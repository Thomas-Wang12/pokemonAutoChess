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
const app_1 = __importDefault(require("firebase/compat/app"));
const phaser_1 = require("phaser");
const pokemon_entity_1 = require("../../../../core/pokemon-entity");
const pokemon_1 = require("../../../../models/colyseus-models/pokemon");
const types_1 = require("../../../../types");
const Dungeon_1 = require("../../../../types/enum/Dungeon");
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const SpecialGameRule_1 = require("../../../../types/enum/SpecialGameRule");
const logger_1 = require("../../../../utils/logger");
const schemas_1 = require("../../../../utils/schemas");
const window_1 = require("../../../../utils/window");
const game_1 = require("../../pages/game");
const audio_1 = require("../../pages/utils/audio");
const utils_1 = require("../../pages/utils/utils");
const preferences_1 = require("../../preferences");
const animation_manager_1 = __importDefault(require("../animation-manager"));
const battle_manager_1 = __importDefault(require("../components/battle-manager"));
const board_manager_1 = __importDefault(require("../components/board-manager"));
const item_container_1 = __importDefault(require("../components/item-container"));
const items_container_1 = __importDefault(require("../components/items-container"));
const loading_manager_1 = __importDefault(require("../components/loading-manager"));
const minigame_manager_1 = __importDefault(require("../components/minigame-manager"));
const pokemon_2 = __importDefault(require("../components/pokemon"));
const sell_zone_1 = require("../components/sell-zone");
const unown_manager_1 = __importDefault(require("../components/unown-manager"));
const weather_manager_1 = __importDefault(require("../components/weather-manager"));
class GameScene extends phaser_1.Scene {
    constructor() {
        super({
            key: "gameScene",
            active: false
        });
        this.tilemaps = new Map();
        this.pokemonHovered = null;
        this.pokemonDragged = null;
        this.shopIndexHovered = null;
        this.itemDragged = null;
        this.dropSpots = [];
        this.zones = [];
        this.lastPokemonDetail = null;
        this.minigameManager = null;
        this.loadingManager = null;
        this.started = false;
        this.spectate = false;
    }
    init(data) {
        var _a;
        this.tilemaps = new Map();
        this.room = data.room;
        this.spectate = data.spectate;
        this.uid = (_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.uid;
        this.started = false;
    }
    preload() {
        this.loadingManager = new loading_manager_1.default(this);
        this.load.on("progress", (value) => {
            var _a;
            (_a = this.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LOADING_PROGRESS, value * 100);
        });
        this.load.on("complete", () => {
            var _a;
            (_a = this.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LOADING_COMPLETE);
        });
        this.room.onMessage(types_1.Transfer.LOADING_COMPLETE, () => {
            if (!this.started) {
                this.started = true;
                this.startGame();
            }
        });
    }
    startGame() {
        var _a;
        if (this.uid && this.room) {
            this.registerKeys();
            this.input.dragDistanceThreshold = 1;
            const playerUids = (0, schemas_1.values)(this.room.state.players).map((p) => p.id);
            const player = this.room.state.players.get(this.spectate ? playerUids[0] : this.uid);
            this.setMap(player.map);
            this.setupMouseEvents();
            this.battleGroup = this.add.group();
            this.animationManager = new animation_manager_1.default(this);
            this.minigameManager = new minigame_manager_1.default(this, this.animationManager, this.uid, this.room.state.avatars, this.room.state.floatingItems);
            this.itemsContainer = new items_container_1.default(this, player.items, 22 * 24 + 10, 5 * 24 + 10, null, this.uid);
            this.board = new board_manager_1.default(this, player, this.animationManager, this.uid, this.room.state);
            this.battle = new battle_manager_1.default(this, this.battleGroup, this.room.state.simulations.get(player.simulationId), this.animationManager, player);
            this.weatherManager = new weather_manager_1.default(this);
            this.unownManager = new unown_manager_1.default(this);
            (0, audio_1.playSound)(audio_1.SOUNDS.CAROUSEL_UNLOCK);
            (0, audio_1.playMusic)(this, (_a = Dungeon_1.DungeonDetails[player.map].music) !== null && _a !== void 0 ? _a : Dungeon_1.DungeonMusic.RANDOM_DUNGEON_1);
            this.sys.animatedTiles.init(this.map);
            (0, window_1.clearTitleNotificationIcon)();
        }
    }
    update(time, delta) {
        var _a, _b;
        super.update(time, delta);
        if (this.lastPokemonDetail) {
            this.lastPokemonDetail.updateTooltipPosition();
        }
        if (((_b = (_a = this.room) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.phase) === Game_1.GamePhaseState.MINIGAME &&
            this.minigameManager) {
            this.minigameManager.update();
        }
    }
    registerKeys() {
        const preferences = (0, preferences_1.loadPreferences)();
        this.input.keyboard.removeAllListeners();
        this.input.keyboard.on("keydown-" + preferences.keybindings.refresh, () => {
            (0, audio_1.playSound)(audio_1.SOUNDS.REFRESH, 0.5);
            this.refreshShop();
        });
        this.input.keyboard.on("keydown-" + preferences.keybindings.lock, () => {
            var _a;
            (_a = this.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LOCK);
        });
        this.input.keyboard.on("keydown-" + preferences.keybindings.buy_xp, () => {
            this.buyExperience();
        });
        this.input.keyboard.on("keydown-" + preferences.keybindings.sell, (e) => {
            if (this.pokemonDragged != null)
                return;
            if (this.shopIndexHovered !== null) {
                this.removeFromShop(this.shopIndexHovered);
                this.shopIndexHovered = null;
            }
            else if (this.pokemonHovered &&
                this.pokemonHovered.sprite
                    .getBounds()
                    .contains(this.game.input.activePointer.x, this.game.input.activePointer.y)) {
                this.sellPokemon(this.pokemonHovered);
                this.pokemonHovered = null;
            }
        });
        this.input.keyboard.on("keydown-" + preferences.keybindings.switch, () => {
            if (this.pokemonHovered) {
                this.switchBetweenBenchAndBoard(this.pokemonHovered);
            }
        });
    }
    refreshShop() {
        var _a, _b, _c, _d, _e, _f, _g;
        const player = (_a = this.room) === null || _a === void 0 ? void 0 : _a.state.players.get(this.uid);
        const rollCost = ((_b = player === null || player === void 0 ? void 0 : player.shopFreeRolls) !== null && _b !== void 0 ? _b : 0) > 0 ? 0 : 1;
        const rollCostType = ((_c = this.room) === null || _c === void 0 ? void 0 : _c.state.specialGameRule) === SpecialGameRule_1.SpecialGameRule.DESPERATE_MOVES
            ? "life"
            : "money";
        const canRoll = rollCostType === "life"
            ? ((_d = player === null || player === void 0 ? void 0 : player.life) !== null && _d !== void 0 ? _d : 0) >= rollCost + 1
            : ((_e = player === null || player === void 0 ? void 0 : player.money) !== null && _e !== void 0 ? _e : 0) >= rollCost;
        if (player && player.alive && canRoll && player === ((_f = this.board) === null || _f === void 0 ? void 0 : _f.player)) {
            (_g = this.room) === null || _g === void 0 ? void 0 : _g.send(types_1.Transfer.REFRESH);
            (0, audio_1.playSound)(audio_1.SOUNDS.REFRESH, 0.5);
        }
    }
    buyExperience() {
        var _a;
        (_a = this.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LEVEL_UP);
    }
    sellPokemon(pokemon) {
        var _a;
        if (!pokemon)
            return;
        (_a = this.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SELL_POKEMON, pokemon.id);
    }
    removeFromShop(index) {
        var _a;
        (_a = this.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REMOVE_FROM_SHOP, index);
    }
    switchBetweenBenchAndBoard(pokemon) {
        var _a;
        if (!pokemon)
            return;
        (_a = this.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SWITCH_BENCH_AND_BOARD, pokemon.id);
    }
    updatePhase(newPhase, previousPhase) {
        var _a, _b, _c, _d, _e, _f;
        (_a = this.weatherManager) === null || _a === void 0 ? void 0 : _a.clearWeather();
        this.resetDragState();
        if (previousPhase === Game_1.GamePhaseState.MINIGAME) {
            (_b = this.minigameManager) === null || _b === void 0 ? void 0 : _b.dispose();
        }
        if (newPhase === Game_1.GamePhaseState.FIGHT) {
            (_c = this.board) === null || _c === void 0 ? void 0 : _c.battleMode();
        }
        else if (newPhase === Game_1.GamePhaseState.MINIGAME) {
            (_d = this.board) === null || _d === void 0 ? void 0 : _d.minigameMode();
            (_e = this.minigameManager) === null || _e === void 0 ? void 0 : _e.initialize();
        }
        else {
            (_f = this.board) === null || _f === void 0 ? void 0 : _f.pickMode();
        }
    }
    preloadMaps(mapNames) {
        return Promise.all(mapNames.map((mapName) => fetch(`/tilemap/${mapName}`)
            .then((res) => res.json())
            .then((tilemap) => {
            this.tilemaps.set(mapName, tilemap);
            tilemap.tilesets.forEach((t) => {
                this.load.image(mapName + "/" + t.name, "/assets/tilesets/" + mapName + "/" + t.image);
            });
            this.load.tilemapTiledJSON("map_" + mapName, tilemap);
        })));
    }
    setMap(mapName) {
        return __awaiter(this, void 0, void 0, function* () {
            const tilemap = this.tilemaps.get(mapName);
            if (!tilemap)
                return logger_1.logger.error(`Tilemap not yet loaded for map ${mapName}`);
            const map = this.make.tilemap({ key: "map_" + mapName });
            if (this.map)
                this.map.destroy();
            this.map = map;
            tilemap.layers.forEach((layer) => {
                var _a;
                const tileset = map.addTilesetImage(layer.name, mapName + "/" + layer.name);
                (_a = map.createLayer(layer.name, tileset, 0, 0)) === null || _a === void 0 ? void 0 : _a.setScale(2, 2);
            });
            const sys = this.sys;
            if (sys.animatedTiles) {
                sys.animatedTiles.init(map);
                if (preferences_1.preferences.disableAnimatedTilemap) {
                    sys.animatedTiles.pause();
                }
            }
        });
    }
    resetDragState() {
        if (this.pokemonDragged) {
            this.input.emit("dragend", this.input.activePointer, this.pokemonDragged, false);
            this.pokemonDragged = null;
        }
        else if (this.itemDragged) {
            this.itemDragged.closeDetail();
            if (this.itemDragged.input) {
                this.itemDragged.x = this.itemDragged.input.dragStartX;
                this.itemDragged.y = this.itemDragged.input.dragStartY;
            }
            this.input.emit("dragend", this.input.pointer1, this.itemDragged, false);
            this.itemDragged = null;
        }
        this.input.setDragState(this.input.pointer1, 0);
    }
    setupMouseEvents() {
        this.sellZone = new sell_zone_1.SellZone(this);
        this.dropSpots = [];
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 8; x++) {
                const coord = (0, utils_1.transformCoordinate)(x, y);
                const zone = this.add.zone(coord[0], coord[1], 96, 96);
                zone.setRectangleDropZone(96, 96);
                zone.setName("board-zone");
                const spotSprite = this.add
                    .image(zone.x, zone.y, "cell", 0)
                    .setVisible(false)
                    .setData({ x, y })
                    .setDepth(2);
                zone.setData({ x, y, sprite: spotSprite });
                this.dropSpots.push(spotSprite);
            }
        }
        this.input.on("pointerdown", (pointer) => {
            var _a, _b;
            if (this.minigameManager &&
                ((_a = this.room) === null || _a === void 0 ? void 0 : _a.state.phase) === Game_1.GamePhaseState.MINIGAME &&
                !this.spectate) {
                const vector = this.minigameManager.getVector(pointer.x, pointer.y);
                (_b = this.room) === null || _b === void 0 ? void 0 : _b.send(types_1.Transfer.VECTOR, vector);
                const clickAnimation = this.add.sprite(pointer.x, pointer.y, "attacks", `WATER/cell/000.png`);
                clickAnimation.setDepth(7);
                clickAnimation.anims.play("WATER/cell");
                this.tweens.add({
                    targets: clickAnimation,
                    x: pointer.x,
                    y: pointer.y,
                    ease: "linear",
                    yoyo: true,
                    duration: 200,
                    onComplete: () => {
                        clickAnimation.destroy();
                    }
                });
            }
            if (this.board && !pointer.rightButtonDown()) {
                this.board.closeTooltips();
            }
        });
        this.input.on(Phaser.Input.Events.GAMEOBJECT_OVER, (pointer, gameObject) => {
            if (gameObject instanceof pokemon_2.default && gameObject.draggable) {
                this.setHovered(gameObject);
            }
        });
        this.input.on(Phaser.Input.Events.GAMEOBJECT_OUT, (pointer, gameObject) => {
            if (this.pokemonHovered === gameObject) {
                this.clearHovered(this.pokemonHovered);
                this.pokemonHovered = null;
            }
        });
        this.input.on("dragstart", (pointer, gameObject) => {
            var _a;
            if (gameObject instanceof pokemon_2.default) {
                this.pokemonDragged = gameObject;
                this.dropSpots.forEach((spot) => {
                    var _a;
                    if (((_a = this.room) === null || _a === void 0 ? void 0 : _a.state.phase) === Game_1.GamePhaseState.PICK ||
                        spot.getData("y") === 0) {
                        spot.setFrame(0).setVisible(true);
                    }
                });
                if (this.sellZone &&
                    (0, pokemon_entity_1.canSell)(this.pokemonDragged.name, (_a = this.room) === null || _a === void 0 ? void 0 : _a.state.specialGameRule)) {
                    this.sellZone.showForPokemon(this.pokemonDragged);
                }
            }
            else if (gameObject instanceof item_container_1.default) {
                this.itemDragged = gameObject;
            }
        });
        this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
            var _a, _b;
            const g = gameObject;
            g.x = dragX;
            g.y = dragY;
            if (g && this.pokemonDragged != null) {
                const pokemon = new pokemon_1.PokemonClasses[this.pokemonDragged.name]();
                this.dropSpots.forEach((spot) => {
                    var _a;
                    const inBench = spot.getData("y") === 0;
                    let visible = false;
                    if (inBench) {
                        visible = pokemon.canBeBenched;
                    }
                    else if (((_a = this.room) === null || _a === void 0 ? void 0 : _a.state.phase) === Game_1.GamePhaseState.PICK) {
                        visible = true;
                    }
                    spot.setVisible(visible);
                });
                if (((_a = this.sellZone) === null || _a === void 0 ? void 0 : _a.visible) === false &&
                    (0, pokemon_entity_1.canSell)(this.pokemonDragged.name, (_b = this.room) === null || _b === void 0 ? void 0 : _b.state.specialGameRule)) {
                    this.sellZone.setVisible(true);
                }
            }
        });
        this.input.on("drop", (pointer, gameObject, dropZone) => {
            var _a, _b, _c, _d, _e, _f;
            this.dropSpots.forEach((spot) => spot.setVisible(false));
            (_a = this.sellZone) === null || _a === void 0 ? void 0 : _a.hide();
            if (gameObject instanceof pokemon_2.default) {
                if (dropZone.name == "board-zone") {
                    const [x, y] = [dropZone.getData("x"), dropZone.getData("y")];
                    if (gameObject.positionX !== x || gameObject.positionY !== y) {
                        (_b = document.getElementById("game")) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new CustomEvent(types_1.Transfer.DRAG_DROP, {
                            detail: { x, y, id: gameObject.id }
                        }));
                        this.lastDragDropPokemon = gameObject;
                    }
                    else {
                        gameObject.setPosition(...(0, utils_1.transformCoordinate)(x, y));
                    }
                }
                else if (dropZone.name == "sell-zone") {
                    if (gameObject === this.pokemonDragged) {
                        this.sellPokemon(this.pokemonDragged);
                    }
                }
                else {
                    const [x, y] = (0, utils_1.transformCoordinate)(gameObject.positionX, gameObject.positionY);
                    gameObject.setPosition(x, y);
                }
                this.pokemonDragged = null;
            }
            else if (gameObject instanceof item_container_1.default &&
                this.itemDragged != null) {
                if (dropZone instanceof item_container_1.default) {
                    (_c = document.getElementById("game")) === null || _c === void 0 ? void 0 : _c.dispatchEvent(new CustomEvent(types_1.Transfer.DRAG_DROP_COMBINE, {
                        detail: {
                            itemA: dropZone.name,
                            itemB: gameObject.name
                        }
                    }));
                }
                else if (dropZone.name == "board-zone" &&
                    !(((_d = this.room) === null || _d === void 0 ? void 0 : _d.state.phase) == Game_1.GamePhaseState.FIGHT &&
                        dropZone.getData("y") != 0)) {
                    (_e = document.getElementById("game")) === null || _e === void 0 ? void 0 : _e.dispatchEvent(new CustomEvent(types_1.Transfer.DRAG_DROP_ITEM, {
                        detail: {
                            x: dropZone.getData("x"),
                            y: dropZone.getData("y"),
                            id: gameObject.name
                        }
                    }));
                }
                else {
                    const player = (0, game_1.getGameContainer)().player;
                    if (player)
                        (_f = this.itemsContainer) === null || _f === void 0 ? void 0 : _f.render(player.items);
                }
                this.itemDragged = null;
            }
        }, this);
        this.input.on("dragend", (pointer, gameObject, dropped) => {
            var _a;
            (_a = this.sellZone) === null || _a === void 0 ? void 0 : _a.hide();
            this.dropSpots.forEach((spot) => spot.setVisible(false));
            if (!dropped && (gameObject === null || gameObject === void 0 ? void 0 : gameObject.input)) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        });
        this.input.on("dragenter", (pointer, gameObject, dropZone) => {
            var _a, _b, _c;
            if (gameObject instanceof item_container_1.default &&
                dropZone instanceof item_container_1.default) {
                for (const [key, value] of Object.entries(Item_1.ItemRecipe)) {
                    if ((value[0] == gameObject.name && value[1] == dropZone.name) ||
                        (value[0] == dropZone.name && value[1] == gameObject.name)) {
                        (_a = this.itemsContainer) === null || _a === void 0 ? void 0 : _a.sendToBack(dropZone);
                        gameObject.showTempDetail(key);
                        break;
                    }
                }
            }
            if (dropZone.name === "board-zone" &&
                gameObject instanceof pokemon_2.default) {
                (_b = dropZone.getData("sprite")) === null || _b === void 0 ? void 0 : _b.setFrame(1);
            }
            if (dropZone.name === "sell-zone" &&
                gameObject instanceof pokemon_2.default) {
                (_c = dropZone.getData("rectangle")) === null || _c === void 0 ? void 0 : _c.setFillStyle(0x6b8bb2);
            }
        }, this);
        this.input.on("dragleave", (pointer, gameObject, dropZone) => {
            var _a, _b;
            if (gameObject instanceof item_container_1.default &&
                dropZone instanceof item_container_1.default) {
                gameObject.closeDetail();
            }
            if (dropZone.name === "board-zone" &&
                gameObject instanceof pokemon_2.default) {
                (_a = dropZone.getData("sprite")) === null || _a === void 0 ? void 0 : _a.setFrame(0);
            }
            if (dropZone.name === "sell-zone" &&
                gameObject instanceof pokemon_2.default) {
                (_b = dropZone.getData("rectangle")) === null || _b === void 0 ? void 0 : _b.setFillStyle(0x61738a);
            }
        }, this);
    }
    setHovered(gameObject) {
        const outline = this.plugins.get("rexOutline");
        if (this.pokemonHovered != null)
            this.clearHovered(this.pokemonHovered);
        this.pokemonHovered = gameObject;
        const thickness = Math.round(1 + Math.log(gameObject.def + gameObject.speDef));
        this.pokemonHovered = gameObject;
        outline.add(gameObject.sprite, {
            thickness,
            outlineColor: 0xffffff
        });
    }
    clearHovered(gameObject) {
        const outline = this.plugins.get("rexOutline");
        outline.remove(gameObject.sprite);
    }
}
exports.default = GameScene;
//# sourceMappingURL=game-scene.js.map