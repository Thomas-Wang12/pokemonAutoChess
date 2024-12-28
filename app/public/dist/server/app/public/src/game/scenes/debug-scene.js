"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugScene = void 0;
const pokemon_factory_1 = __importDefault(require("../../../../models/pokemon-factory"));
const Animation_1 = require("../../../../types/Animation");
const Dungeon_1 = require("../../../../types/enum/Dungeon");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const Status_1 = require("../../../../types/enum/Status");
const logger_1 = require("../../../../utils/logger");
const number_1 = require("../../../../utils/number");
const orientation_1 = require("../../../../utils/orientation");
const audio_1 = require("../../pages/utils/audio");
const utils_1 = require("../../pages/utils/utils");
const animation_manager_1 = __importDefault(require("../animation-manager"));
const abilities_animations_1 = require("../components/abilities-animations");
const loading_manager_1 = __importDefault(require("../components/loading-manager"));
const pokemon_1 = __importDefault(require("../components/pokemon"));
class DebugScene extends Phaser.Scene {
    constructor(height, width, onProgress, onComplete) {
        super();
        this.animationManager = null;
        this.loadingManager = null;
        this.uid = "debug";
        this.music = null;
        this.height = height;
        this.width = width;
        this.onProgress = onProgress;
        this.onComplete = onComplete;
    }
    preload() {
        this.loadingManager = new loading_manager_1.default(this);
        this.load.on("progress", (value) => {
            this.onProgress(value);
        });
        this.load.once("complete", () => {
            this.animationManager = new animation_manager_1.default(this);
            this.onComplete();
        });
    }
    create() { }
    updateSprite(pkm, orientation, animationType, status, shiny) {
        var _a;
        if (this.pokemon) {
            this.pokemon.destroy();
        }
        if (this.target) {
            this.target.destroy();
            clearInterval(this.attackAnimInterval);
        }
        const [px, py] = (0, utils_1.transformAttackCoordinate)(3, 3, false);
        this.pokemon = new pokemon_1.default(this, px, py, pokemon_factory_1.default.createPokemonFromName(pkm, { selectedShiny: shiny }), "debug", false, false);
        this.pokemon.orientation = orientation;
        this.pokemon.positionX = 3;
        this.pokemon.positionY = 3;
        let animationName = Animation_1.AnimationType[animationType];
        if (animationType === "Attack") {
            animationName = Pokemon_1.AnimationConfig[pkm].attack;
            this.showTarget();
            this.addAttackAnim();
        }
        if (animationType === "Ability") {
            animationName = Pokemon_1.AnimationConfig[pkm].ability;
            this.showTarget();
            this.addAbilityAnim();
        }
        if (animationType === "Emote") {
            animationName = Pokemon_1.AnimationConfig[pkm].emote;
        }
        try {
            (_a = this.animationManager) === null || _a === void 0 ? void 0 : _a.play(this.pokemon, animationName, { repeat: -1 });
        }
        catch (err) {
            logger_1.logger.error(`Error playing animation ${this.pokemon.name} ${animationType}: ${animationName}`, err);
        }
        this.applyStatusAnimation(status);
    }
    updateMap(mapName) {
        if (this.map)
            this.map.destroy();
        return fetch(`/tilemap/${mapName}`)
            .then((res) => res.json())
            .then((tilemap) => {
            this.tilemap = tilemap;
            return new Promise((resolve) => {
                this.load.reset();
                tilemap.tilesets.forEach((t) => {
                    this.load.image(mapName + "/" + t.name, "/assets/tilesets/" + mapName + "/" + t.image);
                });
                this.load.tilemapTiledJSON("map", tilemap);
                (0, audio_1.preloadMusic)(this, Dungeon_1.DungeonDetails[mapName].music);
                this.load.once("complete", resolve);
                this.load.start();
            });
        })
            .then(() => {
            const map = this.make.tilemap({ key: "map" });
            this.map = map;
            this.tilemap.layers.forEach((layer) => {
                var _a;
                const tileset = map.addTilesetImage(layer.name, mapName + "/" + layer.name);
                (_a = map.createLayer(layer.name, tileset, 0, 0)) === null || _a === void 0 ? void 0 : _a.setScale(2, 2);
            });
            this.sys.animatedTiles.init(map);
            (0, audio_1.playMusic)(this, Dungeon_1.DungeonDetails[mapName].music);
        });
    }
    applyStatusAnimation(status) {
        if (this.pokemon) {
            this.pokemon.sprite.setTint(0xffffff);
            this.pokemon.removePoison();
            this.pokemon.removeSleep();
            this.pokemon.removeBurn();
            this.pokemon.removeSilence();
            this.pokemon.removeFatigue();
            this.pokemon.removeConfusion();
            this.pokemon.removeFreeze();
            this.pokemon.removeProtect();
            this.pokemon.removeWound();
            this.pokemon.removeResurection();
            this.pokemon.removeParalysis();
            this.pokemon.removePokerus();
            this.pokemon.removeLocked();
            this.pokemon.removeBlinded();
            this.pokemon.removeArmorReduction();
            this.pokemon.removeCharm();
            this.pokemon.removeRuneProtect();
            this.pokemon.removeSpikeArmor();
            this.pokemon.removeMagicBounce();
            this.pokemon.removeFlinch();
            this.pokemon.removeCurse();
            this.pokemon.removeElectricField();
            this.pokemon.removePsychicField();
            this.pokemon.removeGrassField();
            this.pokemon.removeFairyField();
            if (status === Status_1.Status.POISONNED) {
                this.pokemon.addPoison();
            }
            if (status === Status_1.Status.SLEEP) {
                this.pokemon.addSleep();
            }
            if (status === Status_1.Status.BURN) {
                this.pokemon.addBurn();
            }
            if (status == Status_1.Status.SILENCE) {
                this.pokemon.addSilence();
            }
            if (status == Status_1.Status.FATIGUE) {
                this.pokemon.addFatigue();
            }
            if (status == Status_1.Status.CONFUSION) {
                this.pokemon.addConfusion();
            }
            if (status == Status_1.Status.FREEZE) {
                this.pokemon.addFreeze();
            }
            if (status == Status_1.Status.PROTECT) {
                this.pokemon.addProtect();
            }
            if (status == Status_1.Status.WOUND) {
                this.pokemon.addWound();
            }
            if (status == Status_1.Status.RESURECTION) {
                this.pokemon.addResurection();
            }
            if (status == Status_1.Status.RESURECTING) {
                this.pokemon.resurectAnimation();
            }
            if (status == Status_1.Status.PARALYSIS) {
                this.pokemon.addParalysis();
            }
            if (status == Status_1.Status.POKERUS) {
                this.pokemon.addPokerus();
            }
            if (status == Status_1.Status.ARMOR_REDUCTION) {
                this.pokemon.addArmorReduction();
            }
            if (status == Status_1.Status.CHARM) {
                this.pokemon.addCharm();
            }
            if (status === Status_1.Status.FLINCH) {
                this.pokemon.addFlinch();
            }
            if (status === Status_1.Status.CURSE) {
                this.pokemon.addCurse();
            }
            if (status == Status_1.Status.RUNE_PROTECT) {
                this.pokemon.addRuneProtect();
            }
            if (status == Status_1.Status.RAGE) {
                this.pokemon.addRageEffect();
            }
            if (status == Status_1.Status.LOCKED) {
                this.pokemon.addLocked();
            }
            if (status == Status_1.Status.BLINDED) {
                this.pokemon.addBlinded();
            }
            if (status == Status_1.Status.SPIKE_ARMOR) {
                this.pokemon.addSpikeArmor();
            }
            if (status == Status_1.Status.MAGIC_BOUNCE) {
                this.pokemon.addMagicBounce();
            }
            if (status == Status_1.Status.ELECTRIC_FIELD) {
                this.pokemon.addElectricField();
            }
            if (status == Status_1.Status.PSYCHIC_FIELD) {
                this.pokemon.addPsychicField();
            }
            if (status == Status_1.Status.GRASS_FIELD) {
                this.pokemon.addGrassField();
            }
            if (status == Status_1.Status.FAIRY_FIELD) {
                this.pokemon.addFairyField();
            }
        }
    }
    showTarget() {
        var _a;
        const or = this.pokemon.orientation;
        const range = (0, number_1.max)(2)(this.pokemon.range);
        const tx = this.pokemon.positionX + orientation_1.OrientationVector[or][0] * range;
        const ty = this.pokemon.positionY + orientation_1.OrientationVector[or][1] * range;
        this.pokemon.targetX = tx;
        this.pokemon.targetY = ty;
        const [rtx, rty] = (0, utils_1.transformAttackCoordinate)(tx, ty, false);
        this.target = new pokemon_1.default(this, rtx, rty, pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SUBSTITUTE), "debug", false, false);
        this.target.positionX = tx;
        this.target.positionY = ty;
        (_a = this.animationManager) === null || _a === void 0 ? void 0 : _a.play(this.target, Animation_1.AnimationType.Idle, { repeat: -1 });
    }
    addAttackAnim() {
        const attack = () => {
            var _a;
            return (_a = this.pokemon) === null || _a === void 0 ? void 0 : _a.attackAnimation(this.pokemon.targetX || 0, this.pokemon.targetY || 0, 0, 1000);
        };
        this.attackAnimInterval = setInterval(attack, 2000);
    }
    addAbilityAnim() {
        const showAbilityAnim = () => {
            var _a, _b;
            (0, abilities_animations_1.displayAbility)(this, [this.target], this.pokemon.skill, this.pokemon.orientation, this.pokemon.positionX, this.pokemon.positionY, (_a = this.pokemon.targetX) !== null && _a !== void 0 ? _a : -1, (_b = this.pokemon.targetY) !== null && _b !== void 0 ? _b : -1, false);
        };
        showAbilityAnim();
        this.attackAnimInterval = setInterval(showAbilityAnim, 2000);
    }
}
exports.DebugScene = DebugScene;
//# sourceMappingURL=debug-scene.js.map