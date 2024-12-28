"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttackAnimTimeScale = getAttackAnimTimeScale;
const Animation_1 = require("../../../types/Animation");
const Game_1 = require("../../../types/enum/Game");
const Item_1 = require("../../../types/enum/Item");
const Pokemon_1 = require("../../../types/enum/Pokemon");
const logger_1 = require("../../../utils/logger");
const number_1 = require("../../../utils/number");
const atlas_json_1 = __importDefault(require("../assets/atlas.json"));
const delays_json_1 = __importDefault(require("../../../types/delays.json"));
const durations_json_1 = __importDefault(require("../assets/pokemons/durations.json"));
const indexList_json_1 = __importDefault(require("../assets/pokemons/indexList.json"));
const precomputed_pokemon_data_1 = require("../../../models/precomputed/precomputed-pokemon-data");
const Passive_1 = require("../../../types/enum/Passive");
const FPS_EFFECTS = 20;
const FPS_POKEMON_ANIMS = 36;
class AnimationManager {
    constructor(game) {
        this.game = game;
        indexList_json_1.default.forEach((index) => {
            const tints = Object.values(Game_1.PokemonTint);
            tints.forEach((shiny) => {
                const actions = [
                    Animation_1.AnimationType.Idle,
                    Animation_1.AnimationType.Hurt
                ];
                const pkm = Pokemon_1.PkmByIndex[index];
                const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
                if (pokemonData.passive !== Passive_1.Passive.INANIMATE) {
                    actions.push(Animation_1.AnimationType.Walk, Animation_1.AnimationType.Sleep, Animation_1.AnimationType.Hop);
                }
                if (pkm && Pokemon_1.AnimationConfig[pkm]) {
                    if (Pokemon_1.AnimationConfig[pkm].shinyUnavailable &&
                        shiny === Game_1.PokemonTint.SHINY)
                        return;
                    const config = Pokemon_1.AnimationConfig[pkm];
                    if (!actions.includes(config.attack)) {
                        actions.push(config.attack);
                    }
                    if (!actions.includes(config.ability)) {
                        actions.push(config.ability);
                    }
                    if (!actions.includes(config.emote)) {
                        actions.push(config.emote);
                    }
                }
                else {
                    actions.push(Animation_1.AnimationType.Attack);
                }
                actions.forEach((action) => {
                    const config = Pokemon_1.AnimationConfig[pkm];
                    const spriteTypes = config.noShadow
                        ? [Game_1.SpriteType.ANIM]
                        : [Game_1.SpriteType.ANIM, Game_1.SpriteType.SHADOW];
                    spriteTypes.forEach((mode) => {
                        const directionArray = Animation_1.AnimationComplete[action] === false
                            ? [Game_1.Orientation.DOWN]
                            : Object.values(Game_1.Orientation);
                        directionArray.forEach((direction) => {
                            const durationArray = durations_json_1.default[`${index}/${shiny}/${action}/${mode}`];
                            if (durationArray) {
                                const frameArray = this.game.anims.generateFrameNames(index, {
                                    start: 0,
                                    end: durationArray.length - 1,
                                    zeroPad: 4,
                                    prefix: `${shiny}/${action}/${mode}/${direction}/`
                                });
                                for (let i = 0; i < durationArray.length; i++) {
                                    if (frameArray[i]) {
                                        frameArray[i]["duration"] =
                                            durationArray[i] * (1000 / FPS_POKEMON_ANIMS);
                                    }
                                }
                                const shouldLoop = [
                                    Animation_1.AnimationType.Idle,
                                    Animation_1.AnimationType.Sleep,
                                    Animation_1.AnimationType.Hop
                                ].includes(action);
                                this.game.anims.create({
                                    key: `${index}/${shiny}/${action}/${mode}/${direction}`,
                                    frames: frameArray,
                                    repeat: shouldLoop ? -1 : 0
                                });
                            }
                            else {
                                logger_1.logger.warn("duration array missing for", `${index}/${shiny}/${action}/${mode}`);
                            }
                        });
                    });
                });
            });
        });
        for (const pack in atlas_json_1.default.packs) {
            if (atlas_json_1.default.packs[pack].anims) {
                const doesContainMultipleAnims = Object.keys(atlas_json_1.default.packs[pack].anims).length > 1;
                for (const anim in atlas_json_1.default.packs[pack].anims) {
                    const animConfig = atlas_json_1.default.packs[pack].anims[anim];
                    this.createAnimation(Object.assign({ key: anim, atlas: atlas_json_1.default.packs[pack].name, prefix: doesContainMultipleAnims ? anim + "/" : "" }, animConfig));
                }
            }
        }
        this.createMinigameAnimations();
        this.createEnvironmentAnimations();
    }
    createAnimation({ key, atlas, prefix = "", frames, repeat = 0, fps = FPS_EFFECTS, yoyo = false }) {
        this.game.anims.create({
            key,
            frames: this.game.anims.generateFrameNames(atlas !== null && atlas !== void 0 ? atlas : key, {
                start: 0,
                end: frames - 1,
                zeroPad: 3,
                prefix,
                suffix: ".png"
            }),
            duration: (0, number_1.fpsToDuration)(fps)(frames),
            repeat,
            yoyo
        });
    }
    createMinigameAnimations() {
        this.game.anims.create({
            key: "portal",
            frames: this.game.anims.generateFrameNames("portal", {
                start: 0,
                end: 7,
                zeroPad: 3
            }),
            duration: 600,
            repeat: -1
        });
        this.game.anims.create({
            key: "open_chest",
            frames: this.game.anims.generateFrameNames("chest", {
                start: 1,
                end: 4,
                suffix: ".png"
            }),
            duration: 600,
            repeat: 0
        });
        this.game.anims.create({
            key: "shine",
            frames: this.game.anims.generateFrameNames("shine", {
                start: 0,
                end: 47,
                suffix: ".png"
            }),
            duration: 1000,
            repeat: -1
        });
    }
    createEnvironmentAnimations() {
        Item_1.Berries.forEach((berryName) => {
            for (let step = 1; step <= 3; step++) {
                this.game.anims.create({
                    key: `${berryName}_TREE_STEP_${step}`,
                    frames: this.game.anims.generateFrameNames("berry_trees", {
                        start: step * 2 - 1,
                        end: step * 2,
                        prefix: berryName + "_"
                    }),
                    duration: 600,
                    repeat: -1
                });
            }
        });
        this.game.anims.create({
            key: `CROP`,
            frames: this.game.anims.generateFrameNames("berry_trees", {
                start: 1,
                end: 2,
                prefix: "CROP_"
            }),
            duration: 600,
            repeat: -1
        });
    }
    convertPokemonActionStateToAnimationType(state, entity) {
        switch (state) {
            case Game_1.PokemonActionState.HOP:
            case Game_1.PokemonActionState.FISH:
                return Animation_1.AnimationType.Hop;
            case Game_1.PokemonActionState.HURT:
                return Animation_1.AnimationType.Hurt;
            case Game_1.PokemonActionState.SLEEP:
                return Animation_1.AnimationType.Sleep;
            case Game_1.PokemonActionState.WALK:
                return Animation_1.AnimationType.Walk;
            case Game_1.PokemonActionState.ATTACK:
                return Pokemon_1.AnimationConfig[Pokemon_1.PkmByIndex[entity.index]].attack;
            case Game_1.PokemonActionState.EMOTE:
                return Pokemon_1.AnimationConfig[Pokemon_1.PkmByIndex[entity.index]].emote;
            case Game_1.PokemonActionState.IDLE:
            default:
                return Animation_1.AnimationType.Idle;
        }
    }
    animatePokemon(entity, action, flip, loop = true) {
        const animation = this.convertPokemonActionStateToAnimationType(action, entity);
        const shouldLock = action === Game_1.PokemonActionState.HOP ||
            action === Game_1.PokemonActionState.HURT ||
            action === Game_1.PokemonActionState.EMOTE;
        const timeScale = action === Game_1.PokemonActionState.ATTACK
            ? getAttackAnimTimeScale(entity.index, entity.atkSpeed)
            : 1;
        try {
            this.play(entity, animation, {
                flip,
                lock: shouldLock,
                repeat: loop ? -1 : 0,
                timeScale
            });
        }
        catch (err) {
            logger_1.logger.warn(`Can't play animation ${animation} for ${entity === null || entity === void 0 ? void 0 : entity.name}`, err);
        }
    }
    play(entity, animation, config = {}) {
        var _a, _b, _c;
        if (entity.animationLocked || !((_a = entity.sprite) === null || _a === void 0 ? void 0 : _a.anims))
            return;
        const orientation = config.flip
            ? Game_1.OrientationFlip[entity.orientation]
            : entity.orientation;
        const orientationCorrected = Animation_1.AnimationComplete[animation] === true ? orientation : Game_1.Orientation.DOWN;
        const textureIndex = entity.scene && entity.scene.textures.exists(entity.index)
            ? entity.index
            : "0000";
        const tint = entity.shiny &&
            !Pokemon_1.AnimationConfig[Pokemon_1.PkmByIndex[entity.index]].shinyUnavailable
            ? Game_1.PokemonTint.SHINY
            : Game_1.PokemonTint.NORMAL;
        const animKey = `${textureIndex}/${tint}/${animation}/${Game_1.SpriteType.ANIM}/${orientationCorrected}`;
        const shadowKey = `${textureIndex}/${tint}/${animation}/${Game_1.SpriteType.SHADOW}/${orientationCorrected}`;
        if (((_b = entity.sprite.anims.currentAnim) === null || _b === void 0 ? void 0 : _b.key) === animKey &&
            ((_c = entity.sprite.anims.currentAnim) === null || _c === void 0 ? void 0 : _c.repeat) === -1)
            return;
        entity.sprite.anims.play({
            key: animKey,
            repeat: config.repeat,
            timeScale: config.timeScale
        });
        if (entity.shadow) {
            entity.shadow.anims.play({
                key: shadowKey,
                repeat: config.repeat,
                timeScale: config.timeScale
            });
        }
        if (config.lock) {
            entity.animationLocked = true;
        }
    }
}
exports.default = AnimationManager;
function getAttackAnimTimeScale(pokemonIndex, atkSpeed) {
    var _a;
    const t = ((_a = delays_json_1.default[pokemonIndex]) === null || _a === void 0 ? void 0 : _a.t) || 36;
    const timeScale = (t * atkSpeed) / FPS_POKEMON_ANIMS;
    return timeScale;
}
//# sourceMappingURL=animation-manager.js.map