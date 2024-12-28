"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayAbility = displayAbility;
exports.hiddenPowerAnimation = hiddenPowerAnimation;
const phaser_1 = require("phaser");
const pokemon_factory_1 = __importDefault(require("../../../../models/pokemon-factory"));
const types_1 = require("../../../../types");
const Animation_1 = require("../../../../types/Animation");
const Config_1 = require("../../../../types/Config");
const Ability_1 = require("../../../../types/enum/Ability");
const Game_1 = require("../../../../types/enum/Game");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const distance_1 = require("../../../../utils/distance");
const orientation_1 = require("../../../../utils/orientation");
const random_1 = require("../../../../utils/random");
const utils_1 = require("../../pages/utils/utils");
const pokemon_1 = __importDefault(require("./pokemon"));
const unown_manager_1 = require("./unown-manager");
function displayAbility(scene, pokemonsOnBoard, skill, orientation, positionX, positionY, targetX, targetY, flip, delay) {
    var _a;
    const coordinates = (0, utils_1.transformAttackCoordinate)(positionX, positionY, flip);
    const coordinatesTarget = (0, utils_1.transformAttackCoordinate)(targetX, targetY, flip);
    function addAbilitySprite(skill, coordinates, destroyOnComplete) {
        const abilityFx = scene.add.sprite(coordinates[0], coordinates[1], "abilities", skill + `/000.png`);
        abilityFx.setOrigin(0.5, 0.5).setDepth(7).play(skill);
        if (destroyOnComplete) {
            abilityFx.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                abilityFx.destroy();
            });
        }
        return abilityFx;
    }
    switch (skill) {
        case Ability_1.Ability.FIRE_BLAST:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.FIERY_DANCE:
            addAbilitySprite(Ability_1.Ability.FIRE_BLAST, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.FIRE_SPIN:
            addAbilitySprite(Ability_1.Ability.MAGMA_STORM, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.CRABHAMMER:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.DIAMOND_STORM:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.DRACO_ENERGY:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.DYNAMAX_CANNON:
        case Ability_1.Ability.MOONGEIST_BEAM:
            addAbilitySprite(skill, coordinates, true)
                .setScale(2)
                .setOrigin(0.5, 0)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            break;
        case Ability_1.Ability.FREEZING_GLARE:
            addAbilitySprite(skill, [coordinates[0], coordinates[1] - 50], true)
                .setScale(2)
                .setOrigin(0.5, 0.98)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) +
                Math.PI / 2);
            break;
        case Ability_1.Ability.BLOOD_MOON: {
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoordinates = [
                coordinates[0] + dx * 16,
                coordinates[1] - dy * 16 - 24
            ];
            addAbilitySprite(Ability_1.Ability.DYNAMAX_CANNON, finalCoordinates, true)
                .setScale(2)
                .setTint(0xff5060)
                .setOrigin(0.5, 0)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            addAbilitySprite("COSMIC_POWER", coordinates, true)
                .setTint(0xff5060)
                .setOrigin(0.5, 1)
                .setScale(2);
            break;
        }
        case Ability_1.Ability.DYNAMIC_PUNCH:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.ELECTRO_WEB:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.MYSTICAL_FIRE:
            addAbilitySprite(skill, [coordinatesTarget[0], coordinatesTarget[1] - 25], true).setScale(2);
            break;
        case Ability_1.Ability.FLAME_CHARGE:
            addAbilitySprite(skill, coordinates, true)
                .setScale(2)
                .setDepth(1)
                .setOrigin(1, 1)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) +
                Math.PI / 2);
            break;
        case Ability_1.Ability.PASTEL_VEIL:
            addAbilitySprite(skill, coordinates, true)
                .setScale(2)
                .setDepth(1)
                .setOrigin(1, 1)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) + Math.PI);
            break;
        case Ability_1.Ability.AQUA_JET:
            addAbilitySprite(skill, coordinates, true)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            break;
        case Ability_1.Ability.EXTREME_SPEED:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.PSYSHIELD_BASH:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.POWER_WHIP:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case "POWER_WHIP/hit":
            addAbilitySprite("POWER_WHIP/hit", coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.LANDS_WRATH:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case "LANDS_WRATH/hit":
            addAbilitySprite("LANDS_WRATH/hit", coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.CORE_ENFORCER:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case "CORE_ENFORCER/hit":
            addAbilitySprite("CORE_ENFORCER/hit", coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.LEECH_SEED:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.LOCK_ON:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.PSYCH_UP:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.MAGIC_POWDER:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.RAZOR_WIND:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.TWISTING_NETHER:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setScale(4)
                .setOrigin(0.5);
            break;
        case Ability_1.Ability.DARK_VOID:
            addAbilitySprite(Ability_1.Ability.TWISTING_NETHER, coordinatesTarget, true).setScale(4);
            break;
        case Ability_1.Ability.WHEEL_OF_FIRE: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "Power2",
                yoyo: true,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.INFERNAL_PARADE: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "Power2",
                yoyo: true,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.BLUE_FLARE: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(3);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.GLACIATE: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(3);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 1350,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SHADOW_BALL: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.FUSION_BOLT: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(3);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ICY_WIND: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(1);
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoordinates[0],
                y: finalCoordinates[1],
                ease: "linear",
                yoyo: false,
                duration: 2000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SOLAR_BEAM: {
            const specialProjectile = addAbilitySprite(skill, (0, utils_1.transformAttackCoordinate)(targetX, targetY - 3, flip)).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ORIGIN_PULSE: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(0, targetY, flip);
            const finalCoords = (0, utils_1.transformAttackCoordinate)(8, targetY, flip);
            const specialProjectile = addAbilitySprite(skill, startCoords).setScale(4);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoords[0],
                y: finalCoords[1],
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SPACIAL_REND: {
            const coords = (0, utils_1.transformAttackCoordinate)(4, targetY, flip);
            addAbilitySprite(skill, coords, true).setScale(4);
            break;
        }
        case Ability_1.Ability.SEED_FLARE:
            addAbilitySprite(skill, coordinates, true).setScale(3, 3);
            break;
        case Ability_1.Ability.MULTI_ATTACK:
            addAbilitySprite(skill, coordinates, true).setScale(4);
            break;
        case Ability_1.Ability.SEISMIC_TOSS:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.GUILLOTINE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.ROCK_SLIDE:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setScale(2)
                .setOrigin(0.5, 0.9);
            break;
        case Ability_1.Ability.FLAMETHROWER:
            addAbilitySprite(skill, coordinates, true)
                .setOrigin(0.5, 1)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) +
                Math.PI / 2);
            break;
        case Ability_1.Ability.FIERY_WRATH:
            addAbilitySprite(Ability_1.Ability.FLAMETHROWER, coordinates, true)
                .setScale(2)
                .setTint(0xc000c0);
            break;
        case Ability_1.Ability.PSYBEAM:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) +
                Math.PI / 2);
            break;
        case Ability_1.Ability.THUNDER:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setScale(2)
                .setOrigin(0.5, 1);
            break;
        case Ability_1.Ability.HYDRO_PUMP:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) +
                Math.PI / 2);
            break;
        case Ability_1.Ability.DRACO_METEOR:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setOrigin(0.5, 0.9)
                .setScale(2);
            break;
        case Ability_1.Ability.BLAZE_KICK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.WISH:
            addAbilitySprite(skill, coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.LUNAR_BLESSING:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.CALM_MIND:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.GRAVITY:
            addAbilitySprite(Ability_1.Ability.CALM_MIND, coordinates, true)
                .setScale(3)
                .setTint(0xccff33)
                .setDepth(0);
            break;
        case Ability_1.Ability.COSMIC_POWER_MOON:
            addAbilitySprite("COSMIC_POWER", coordinates, true)
                .setTint(0xccb0ff)
                .setOrigin(0.5, 1)
                .setScale(2);
            break;
        case Ability_1.Ability.COSMIC_POWER_SUN:
            addAbilitySprite("COSMIC_POWER", coordinates, true)
                .setTint(0xffffd0)
                .setOrigin(0.5, 1)
                .setScale(2);
            break;
        case Ability_1.Ability.FORECAST:
            addAbilitySprite(skill, coordinates, true).setDepth(0).setScale(2);
            break;
        case Ability_1.Ability.CHATTER:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.DEFENSE_CURL:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.METRONOME:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.SOAK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.IRON_TAIL:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.BLAST_BURN:
            addAbilitySprite(skill, coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.CHARGE:
            addAbilitySprite(skill, coordinates, true)
                .setDepth(0)
                .setOrigin(0.5, 0.8)
                .setScale(4);
            break;
        case Ability_1.Ability.DISCHARGE:
            addAbilitySprite(skill, coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.OVERDRIVE:
            addAbilitySprite(skill, coordinates, true).setOrigin(0.5).setScale(2);
            break;
        case Ability_1.Ability.SMOG:
            addAbilitySprite(skill, coordinates, true).setDepth(1).setScale(4);
            break;
        case Ability_1.Ability.SLUDGE:
            addAbilitySprite(Ability_1.Ability.SMOG, coordinatesTarget, true)
                .setScale(3, 3)
                .setTint(0xa0c020);
            break;
        case Ability_1.Ability.BITE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.CRUNCH:
            addAbilitySprite(Ability_1.Ability.BITE, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.DRAGON_TAIL:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.DRAGON_BREATH: {
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 1.5, positionY + dy * 1.5, flip);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoordinates[0],
                y: finalCoordinates[1],
                ease: "linear",
                yoyo: false,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ICICLE_CRASH:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.ROOT:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.TORMENT:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.RAGE:
            addAbilitySprite(Ability_1.Ability.TORMENT, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.STOMP:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.PAYBACK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.NIGHT_SLASH:
        case Ability_1.Ability.KOWTOW_CLEAVE:
            addAbilitySprite(Ability_1.Ability.NIGHT_SLASH, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.BUG_BUZZ:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.VENOSHOCK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.FELL_STINGER:
            addAbilitySprite(Ability_1.Ability.VENOSHOCK, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.LEECH_LIFE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.HAPPY_HOUR:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.TELEPORT:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.NASTY_PLOT:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.THIEF:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.STUN_SPORE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.HURRICANE: {
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoordinates[0],
                y: finalCoordinates[1],
                ease: "linear",
                yoyo: false,
                duration: 2000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ROAR: {
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
            const specialProjectile = addAbilitySprite(Ability_1.Ability.WHIRLWIND, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoordinates[0],
                y: finalCoordinates[1],
                ease: "linear",
                yoyo: false,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.FLEUR_CANNON: {
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoordinates[0],
                y: finalCoordinates[1],
                ease: "linear",
                yoyo: false,
                duration: 2000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SANDSEAR_STORM:
        case Ability_1.Ability.WILDBOLT_STORM:
        case Ability_1.Ability.BLEAKWIND_STORM:
        case Ability_1.Ability.SPRINGTIDE_STORM: {
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoordinates[0],
                y: finalCoordinates[1],
                ease: "linear",
                yoyo: false,
                duration: 2000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ROAR_OF_TIME:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.ROCK_TOMB:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setOrigin(0.5, 0.9)
                .setScale(1);
            break;
        case Ability_1.Ability.ILLUSION:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.SLACK_OFF:
            addAbilitySprite(Ability_1.Ability.ILLUSION, coordinates, true).setScale(1);
            break;
        case Ability_1.Ability.ROCK_SMASH:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.LIQUIDATION:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.FISHIOUS_REND:
            addAbilitySprite(skill, coordinates, true)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            break;
        case Ability_1.Ability.CUT:
            addAbilitySprite(Ability_1.Ability.FISHIOUS_REND, coordinates, true)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.GOLD_RUSH:
        case Ability_1.Ability.MAKE_IT_RAIN: {
            const specialProjectile = addAbilitySprite(Ability_1.Ability.GOLD_RUSH, coordinates).setScale(skill === Ability_1.Ability.MAKE_IT_RAIN ? 3 : 2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.POLTERGEIST: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(3);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ZAP_CANNON: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(3);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SPARKLING_ARIA: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(3);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SKY_ATTACK: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(targetX, 9, false);
            const specialProjectile = addAbilitySprite(skill, startCoords).setScale(1.5);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SKY_ATTACK_SHADOW: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(targetX, 9, false);
            const specialProjectile = addAbilitySprite(skill, startCoords).setScale(1.5);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.FLYING_PRESS: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(targetX, 9, false);
            const specialProjectile = addAbilitySprite(skill, startCoords).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                    addAbilitySprite(Ability_1.Ability.HEAVY_SLAM, coordinatesTarget, true);
                }
            });
            break;
        }
        case Ability_1.Ability.SUNSTEEL_STRIKE: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(targetX, 9, false);
            const specialProjectile = addAbilitySprite(skill, startCoords);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case "COMET_CRASH": {
            const startCoords = (0, utils_1.transformAttackCoordinate)(targetX, 9, false);
            const specialProjectile = addAbilitySprite(Ability_1.Ability.SUNSTEEL_STRIKE, startCoords)
                .setScale(0.5)
                .setTint(0x2020ff);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ACROBATICS: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(targetX + 1, targetY + 1, flip);
            const specialProjectile = addAbilitySprite(skill, startCoords).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 300,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ROLLOUT: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ICE_BALL: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: (8 * 1000) / 15,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.PRESENT: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.TOPSY_TURVY: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.WHIRLWIND: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.EMPTY_LIGHT: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.WATER_PULSE: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(3);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.POLLEN_PUFF: {
            const specialProjectile = addAbilitySprite(Ability_1.Ability.HEAL_ORDER, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.PSYSTRIKE: {
            const specialProjectile = addAbilitySprite(Ability_1.Ability.PSYSTRIKE, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.EGGSPLOSION: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(3);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SPARK: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 300,
                delay: (delay || 0) * 300,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.PAYDAY:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            addAbilitySprite(Ability_1.Ability.FACADE, coordinatesTarget, true).setScale(1);
            break;
        case Ability_1.Ability.AIR_SLASH:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.DREAM_EATER:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.VINE_WHIP:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.VOLT_SWITCH:
            addAbilitySprite(skill, coordinates, true)
                .setScale(2)
                .setOrigin(0.5, 0)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            break;
        case Ability_1.Ability.MUDDY_WATER:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setScale(2)
                .setOrigin(0.5, 1);
            break;
        case Ability_1.Ability.ANCIENT_POWER: {
            const rock = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: rock,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    rock.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.MOON_DREAM: {
            const aboveTargetCoordinates = (0, utils_1.transformAttackCoordinate)(positionX, positionY, flip);
            aboveTargetCoordinates[1] -= 100;
            const moon = addAbilitySprite(skill, aboveTargetCoordinates).setScale(1.5);
            scene.tweens.add({
                targets: moon,
                scale: 0.5,
                x: coordinates[0],
                y: coordinates[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    moon.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.FAIRY_LOCK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(1);
            break;
        case Ability_1.Ability.STEAM_ERUPTION:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.SEARING_SHOT:
            addAbilitySprite(Ability_1.Ability.STEAM_ERUPTION, coordinates, true)
                .setDepth(0)
                .setScale(3, 3);
            break;
        case Ability_1.Ability.APPLE_ACID:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.POWER_HUG:
            addAbilitySprite(Ability_1.Ability.ANCHOR_SHOT, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.BURN_UP:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.IVY_CUDGEL:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.PSYCHO_BOOST:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.HEAVY_SLAM:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.FACADE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.FAKE_OUT:
            addAbilitySprite(Ability_1.Ability.FACADE, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.ICE_HAMMER:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.MANTIS_BLADES:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.PSYCHIC_FANGS:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.THUNDER_FANG:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.ICE_FANG:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.FIRE_FANG:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.POPULATION_BOMB:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.SCREECH:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.SAND_TOMB:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.MAGICAL_LEAF: {
            addAbilitySprite("MAGICAL_LEAF_CHARGE", coordinates, true).setScale(2);
            const leaf = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: leaf,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    leaf.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SHIELDS_DOWN:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.SHIELDS_UP:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.BRAVE_BIRD:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.AQUA_RING:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.NATURAL_GIFT: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.NIGHT_SHADE: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ASSURANCE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.CRUSH_GRIP:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.FISSURE: {
            const specialProjectile = addAbilitySprite(skill, coordinatesTarget).setScale(1);
            scene.tweens.add({
                targets: specialProjectile,
                scaleX: 3,
                scaleY: 3,
                yoyo: true,
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.CLOSE_COMBAT:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.SUPER_FANG:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.PARABOLIC_CHARGE: {
            const specialProjectile = addAbilitySprite(skill, coordinates);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.PLAY_ROUGH:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.ATTRACT:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.MAGNET_RISE:
            addAbilitySprite(Ability_1.Ability.ELECTRO_BOOST, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.ANCHOR_SHOT:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.FORCE_PALM:
            addAbilitySprite(Ability_1.Ability.ANCHOR_SHOT, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.HYPERSPACE_FURY: {
            const nbHits = Number(orientation);
            for (let i = 0; i < nbHits; i++) {
                setTimeout(() => {
                    addAbilitySprite(Ability_1.Ability.HYPERSPACE_FURY, [
                        coordinatesTarget[0] + (0, random_1.randomBetween)(-30, +30),
                        coordinatesTarget[1] + (0, random_1.randomBetween)(-30, +30)
                    ], true)
                        .setScale(1)
                        .setRotation(-Math.PI / 2)
                        .setTint(0xc080ff);
                }, i * 150);
            }
            break;
        }
        case Ability_1.Ability.FLORAL_HEALING:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.LEAF_BLADE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.WATERFALL:
            addAbilitySprite(skill, coordinates, true).setScale(2).setDepth(1);
            break;
        case Ability_1.Ability.HELPING_HAND:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.MUD_BUBBLE:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.ERUPTION: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(targetX + 3, targetY + 3, flip);
            const specialProjectile = addAbilitySprite(skill, startCoords);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.THOUSAND_ARROWS: {
            const specialProjectile = addAbilitySprite(skill, [
                coordinatesTarget[0],
                Config_1.BOARD_HEIGHT - 1
            ]).setScale(4);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 300,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SLASHING_CLAW:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.MAGMA_STORM:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(1);
            break;
        case Ability_1.Ability.THRASH:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.ABSORB:
            addAbilitySprite(skill, coordinates, true).setDepth(0).setScale(2);
            break;
        case Ability_1.Ability.GIGATON_HAMMER:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.COUNTER:
            addAbilitySprite(skill, coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.HEX:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.SPECTRAL_THIEF:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.PLASMA_FIST:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.SACRED_SWORD_IRON:
            addAbilitySprite("SACRED_SWORD", coordinatesTarget, true)
                .setScale(2)
                .setOrigin(0.5, 0.2)
                .setRotation(Math.PI);
            break;
        case Ability_1.Ability.SACRED_SWORD_GRASS:
            addAbilitySprite("SACRED_SWORD", coordinatesTarget, true)
                .setScale(2)
                .setOrigin(0.5, 0.2)
                .setRotation(Math.PI)
                .setTint(0xb0ffa0);
            break;
        case Ability_1.Ability.SACRED_SWORD_CAVERN:
            addAbilitySprite("SACRED_SWORD", coordinatesTarget, true)
                .setScale(2)
                .setOrigin(0.5, 0.2)
                .setRotation(Math.PI)
                .setTint(0xe0c0a0);
            break;
        case Ability_1.Ability.SECRET_SWORD: {
            const specialProjectile = addAbilitySprite("SACRED_SWORD", [coordinatesTarget[0], coordinatesTarget[1] - 30], true)
                .setScale(2)
                .setOrigin(0.5, 0.5)
                .setTint(0xfff0b0);
            scene.tweens.add({
                targets: specialProjectile,
                angle: 540,
                duration: 400
            });
            break;
        }
        case Ability_1.Ability.METAL_BURST:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.JUDGEMENT:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setOrigin(0.5, 1)
                .setScale(2);
            break;
        case Ability_1.Ability.SHADOW_SNEAK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.DIVE:
            addAbilitySprite(skill, coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.SMOKE_SCREEN:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.BARB_BARRAGE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.OUTRAGE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.KNOCK_OFF:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.SLASH:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.HYPER_VOICE: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(0, targetY, flip);
            const finalCoords = (0, utils_1.transformAttackCoordinate)(8, targetY, flip);
            const specialProjectile = addAbilitySprite(skill, startCoords).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoords[0],
                y: finalCoords[1],
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SHADOW_CLONE:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.ECHO:
            addAbilitySprite(skill, coordinates, true).setOrigin(0.5, 0.7).setScale(2);
            break;
        case Ability_1.Ability.EXPLOSION:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.CHLOROBLAST:
            addAbilitySprite(Ability_1.Ability.EXPLOSION, coordinates, true)
                .setScale(2)
                .setTint(0x90ffd0);
            break;
        case Ability_1.Ability.CLANGOROUS_SOUL:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.GROWL:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.FAIRY_WIND:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.RELIC_SONG:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.HIGH_JUMP_KICK:
        case Ability_1.Ability.LUNGE:
            addAbilitySprite(Ability_1.Ability.HIGH_JUMP_KICK, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.SHELL_TRAP:
            addAbilitySprite(Ability_1.Ability.COUNTER, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.SHELL_SMASH:
            addAbilitySprite(Ability_1.Ability.COUNTER, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.TRI_ATTACK: {
            const specialProjectile = addAbilitySprite(skill, coordinates);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.PSYCHIC: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(3);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.PYRO_BALL: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(1);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 500,
                scale: 2,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SLUDGE_WAVE: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(1);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 800,
                scale: 2,
                onComplete: () => {
                    specialProjectile.destroy();
                    addAbilitySprite(Ability_1.Ability.DIVE, coordinatesTarget, true)
                        .setTint(0xf060a0)
                        .setScale(3)
                        .setDepth(1);
                }
            });
            break;
        }
        case Ability_1.Ability.LAVA_PLUME: {
            const specialProjectile = addAbilitySprite(Ability_1.Ability.SLUDGE_WAVE, coordinates)
                .setScale(1)
                .setTint(0xffc020);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 800,
                scale: 2,
                onComplete: () => {
                    specialProjectile.destroy();
                    addAbilitySprite("FLAME_HIT", coordinatesTarget, true).setScale(2);
                }
            });
            break;
        }
        case Ability_1.Ability.WHIRLPOOL: {
            for (let i = 0; i < 4; i++) {
                const whirlpool = addAbilitySprite(skill, coordinates);
                scene.tweens.add({
                    targets: whirlpool,
                    x: coordinatesTarget[0],
                    y: coordinatesTarget[1],
                    duration: 1000,
                    scale: 2,
                    delay: i * 100,
                    ease: "Power1",
                    onComplete: () => {
                        whirlpool.destroy();
                    }
                });
            }
            break;
        }
        case Ability_1.Ability.BONEMERANG: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(positionX, positionY, flip);
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoords = (0, utils_1.transformAttackCoordinate)(positionX + dx * 5, positionY + dy * 5, flip);
            const specialProjectile = addAbilitySprite(skill, startCoords).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoords[0],
                y: finalCoords[1],
                ease: "Power2",
                yoyo: true,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SHADOW_BONE: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(positionX, positionY, flip);
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoords = (0, utils_1.transformAttackCoordinate)(positionX + dx * 5, positionY + dy * 5, flip);
            const specialProjectile = addAbilitySprite(Ability_1.Ability.BONEMERANG, startCoords)
                .setTint(0x301030)
                .setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoords[0],
                y: finalCoords[1],
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.PRISMATIC_LASER: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(positionX, 0, flip);
            const finalCoords = (0, utils_1.transformAttackCoordinate)(positionX, 6, flip);
            const specialProjectile = addAbilitySprite(skill, startCoords).setScale(5);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoords[0],
                y: finalCoords[1],
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case "GULP_MISSILE/pikachu": {
            const duration = (0, distance_1.distanceM)(positionX, positionY, targetX, targetY) * 150;
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: duration,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case "GULP_MISSILE/arrokuda": {
            const duration = (0, distance_1.distanceM)(positionX, positionY, targetX, targetY) * 150;
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: duration,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.AURORA_BEAM: {
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoords = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoords[0],
                y: finalCoords[1],
                ease: "linear",
                yoyo: false,
                duration: 1500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SONG_OF_DESIRE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.CONFUSING_MIND:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.DOUBLE_SHOCK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.MIND_BLOWN:
            addAbilitySprite(skill, coordinates, true).setOrigin(0.5, 0.8).setScale(2);
            break;
        case Ability_1.Ability.FIRE_LASH:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(4);
            break;
        case Ability_1.Ability.DRAIN_PUNCH:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case "MIND_BLOWN/hit":
            addAbilitySprite("MIND_BLOWN/hit", coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.SOFT_BOILED:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.FAKE_TEARS:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.TEA_TIME:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.DRAGON_DARTS: {
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(1)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SPIRIT_SHACKLE: {
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(1)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]));
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoordinates[0],
                y: finalCoordinates[1],
                ease: "linear",
                yoyo: false,
                duration: 2000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ASTRAL_BARRAGE: {
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(1)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) - Math.PI);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.WATER_SHURIKEN: {
            const orientations = [
                orientation,
                orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(orientation) + 1) % 8],
                orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(orientation) + 7) % 8]
            ];
            orientations.forEach((orientation) => {
                const [dx, dy] = orientation_1.OrientationVector[orientation];
                const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
                const projectile = addAbilitySprite(skill, coordinates).setScale(2);
                scene.tweens.add({
                    targets: projectile,
                    x: finalCoordinates[0],
                    y: finalCoordinates[1],
                    ease: "linear",
                    yoyo: false,
                    duration: 2000,
                    onComplete: () => {
                        projectile.destroy();
                    }
                });
            });
            break;
        }
        case Ability_1.Ability.SPIKE_ARMOR:
            orientation_1.OrientationArray.forEach((orientation) => {
                const [dx, dy] = orientation_1.OrientationVector[orientation];
                const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
                const spike = addAbilitySprite("SPIKE", coordinates).setRotation(Math.atan2(finalCoordinates[1] - coordinates[1], finalCoordinates[0] - coordinates[0]) +
                    Math.PI / 2);
                scene.tweens.add({
                    targets: spike,
                    x: finalCoordinates[0],
                    y: finalCoordinates[1],
                    ease: "linear",
                    duration: 1000,
                    onComplete: () => {
                        spike.destroy();
                    }
                });
            });
            break;
        case Ability_1.Ability.MACH_PUNCH:
        case Ability_1.Ability.UPPERCUT: {
            const specialProjectile = addAbilitySprite("FIGHTING/FIST", coordinatesTarget).setScale(0.25);
            scene.tweens.add({
                targets: specialProjectile,
                scale: 3,
                ease: Phaser.Math.Easing.Cubic.Out,
                yoyo: false,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.MAWASHI_GERI:
        case Ability_1.Ability.THUNDEROUS_KICK: {
            const specialProjectile = addAbilitySprite("FIGHTING/FOOT", coordinatesTarget).setScale(0.25);
            scene.tweens.add({
                targets: specialProjectile,
                scale: 3,
                ease: Phaser.Math.Easing.Cubic.Out,
                yoyo: false,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.TRIPLE_KICK:
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const projectile = addAbilitySprite("FIGHTING/PAW", [
                        coordinates[0] + Math.round(50 * Math.cos((Math.PI * 2 * i) / 3)),
                        coordinates[1] + Math.round(50 * Math.sin((Math.PI * 2 * i) / 3))
                    ]).setScale(1.5);
                    setTimeout(() => projectile.destroy(), 500);
                }, i * 250);
            }
            break;
        case Ability_1.Ability.STRING_SHOT: {
            const specialProjectile = addAbilitySprite(skill, coordinatesTarget).setScale(0.25);
            scene.tweens.add({
                targets: specialProjectile,
                scale: 2,
                alpha: 0.9,
                ease: Phaser.Math.Easing.Cubic.Out,
                yoyo: false,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.ENTANGLING_THREAD: {
            const specialProjectile = addAbilitySprite("STRING_SHOT", coordinates)
                .setScale(0.25)
                .setTint(0x80a080);
            scene.tweens.add({
                targets: specialProjectile,
                scale: 3,
                alpha: 0.9,
                ease: Phaser.Math.Easing.Cubic.Out,
                yoyo: false,
                duration: 1200,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.WONDER_GUARD:
            addAbilitySprite(skill, coordinates, true).setDepth(2).setScale(2);
            break;
        case Ability_1.Ability.X_SCISSOR:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.DEATH_WING:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.GEOMANCY:
            addAbilitySprite(skill, [coordinates[0], coordinates[1] - 50], true)
                .setDepth(1)
                .setScale(2);
            break;
        case Ability_1.Ability.BLIZZARD:
            addAbilitySprite(Ability_1.Ability.BLIZZARD, coordinates, true)
                .setDepth(0)
                .setScale(2);
            break;
        case Ability_1.Ability.OVERHEAT:
            addAbilitySprite(Ability_1.Ability.FIRE_BLAST, coordinates, true)
                .setDepth(0)
                .setScale(3);
            break;
        case Ability_1.Ability.MIST_BALL: {
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoords = (0, utils_1.transformAttackCoordinate)(positionX + dx * 4, positionY + dy * 4, flip);
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(1);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoords[0],
                y: finalCoords[1],
                ease: "Power2",
                yoyo: true,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.LUSTER_PURGE: {
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoords = (0, utils_1.transformAttackCoordinate)(positionX + dx * 5, positionY + dy * 5, flip);
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(1);
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoords[0],
                y: finalCoords[1],
                ease: "Power2",
                yoyo: true,
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.AERIAL_ACE: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(targetX, 8, false);
            const specialProjectile = addAbilitySprite(skill, startCoords).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.STEALTH_ROCKS:
            addAbilitySprite(skill, coordinates, true).setDepth(1).setScale(2);
            break;
        case Ability_1.Ability.SPIKES: {
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(1)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case "TOXIC_SPIKES": {
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(2)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                yoyo: false,
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case "LINK_CABLE_link": {
            const distance = (0, distance_1.distanceE)(positionX, positionY, targetX, targetY);
            addAbilitySprite(Ability_1.Ability.LINK_CABLE, coordinates, true)
                .setScale(2, distance * 0.36)
                .setOrigin(0.5, 0)
                .setRotation(Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]) -
                Math.PI / 2);
            break;
        }
        case "LINK_CABLE_discharge":
            addAbilitySprite(Ability_1.Ability.DISCHARGE, coordinates, true).setScale(2);
            break;
        case "GRASS_HEAL":
            addAbilitySprite("GRASS_HEAL", coordinates, true).setDepth(1).setScale(2);
            break;
        case "FLAME_HIT":
            addAbilitySprite("FLAME_HIT", coordinates, true).setDepth(1).setScale(2);
            break;
        case "TORCH_SONG_CAST": {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "Linear",
                yoyo: true,
                duration: 300,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.TORCH_SONG:
            addAbilitySprite(Ability_1.Ability.TORCH_SONG, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.HIDDEN_POWER_A:
        case Ability_1.Ability.HIDDEN_POWER_B:
        case Ability_1.Ability.HIDDEN_POWER_C:
        case Ability_1.Ability.HIDDEN_POWER_D:
        case Ability_1.Ability.HIDDEN_POWER_E:
        case Ability_1.Ability.HIDDEN_POWER_F:
        case Ability_1.Ability.HIDDEN_POWER_G:
        case Ability_1.Ability.HIDDEN_POWER_H:
        case Ability_1.Ability.HIDDEN_POWER_I:
        case Ability_1.Ability.HIDDEN_POWER_J:
        case Ability_1.Ability.HIDDEN_POWER_K:
        case Ability_1.Ability.HIDDEN_POWER_L:
        case Ability_1.Ability.HIDDEN_POWER_M:
        case Ability_1.Ability.HIDDEN_POWER_N:
        case Ability_1.Ability.HIDDEN_POWER_O:
        case Ability_1.Ability.HIDDEN_POWER_P:
        case Ability_1.Ability.HIDDEN_POWER_Q:
        case Ability_1.Ability.HIDDEN_POWER_R:
        case Ability_1.Ability.HIDDEN_POWER_S:
        case Ability_1.Ability.HIDDEN_POWER_T:
        case Ability_1.Ability.HIDDEN_POWER_U:
        case Ability_1.Ability.HIDDEN_POWER_V:
        case Ability_1.Ability.HIDDEN_POWER_W:
        case Ability_1.Ability.HIDDEN_POWER_X:
        case Ability_1.Ability.HIDDEN_POWER_Y:
        case Ability_1.Ability.HIDDEN_POWER_Z:
        case Ability_1.Ability.HIDDEN_POWER_QM:
        case Ability_1.Ability.HIDDEN_POWER_EM:
            hiddenPowerAnimation(scene, skill, positionX, positionY, flip);
            break;
        case Ability_1.Ability.ENTRAINMENT: {
            const target = pokemonsOnBoard.find((pkmUI) => pkmUI.positionX === targetX && pkmUI.positionY === targetY);
            if (target)
                target.emoteAnimation();
            break;
        }
        case Ability_1.Ability.TEETER_DANCE:
            pokemonsOnBoard.forEach((pkmUI) => {
                const coordinates = (0, utils_1.transformAttackCoordinate)(pkmUI.positionX, pkmUI.positionY, flip);
                addAbilitySprite(skill, coordinates, true).setDepth(1).setScale(2);
            });
            break;
        case Ability_1.Ability.STRUGGLE_BUG:
            addAbilitySprite(Ability_1.Ability.PSYCHIC, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.SNIPE_SHOT: {
            const targetAngle = Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]);
            const specialProjectile = addAbilitySprite("SNIPE_SHOT/projectile", coordinates)
                .setScale(3)
                .setRotation(targetAngle - Math.PI / 2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinates[0] + Math.round(Math.cos(targetAngle) * 1000),
                y: coordinates[1] + Math.round(Math.sin(targetAngle) * 1000),
                ease: "linear",
                duration: 1000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            addAbilitySprite("SNIPE_SHOT/shoot", [
                coordinates[0] + Math.round(Math.cos(targetAngle) * 50),
                coordinates[1] + Math.round(Math.sin(targetAngle) * 50)
            ], true)
                .setScale(1, 1)
                .setRotation(targetAngle + Math.PI / 2);
            break;
        }
        case "CURSE_EFFECT": {
            const effect = scene.add.sprite(coordinates[0], coordinates[1], "status", "CURSE_EFFECT/000.png");
            effect.anims.play("CURSE_EFFECT");
            scene.tweens.add({
                targets: effect,
                y: coordinates[1] - 80,
                ease: "linear",
                duration: 1500,
                onComplete: () => {
                    effect.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.AURASPHERE: {
            const [dx, dy] = orientation_1.OrientationVector[orientation];
            const finalCoordinates = (0, utils_1.transformAttackCoordinate)(positionX + dx * 8, positionY + dy * 8, flip);
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(2)
                .setRotation(Math.atan2(finalCoordinates[1] - coordinates[1], finalCoordinates[0] - coordinates[0]));
            scene.tweens.add({
                targets: specialProjectile,
                x: finalCoordinates[0],
                y: finalCoordinates[1],
                ease: "linear",
                yoyo: false,
                duration: 2000,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.FUTURE_SIGHT:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.LICK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.SPIRIT_BREAK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.AURA_WHEEL: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(1);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 500,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.CROSS_POISON:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.PSYSHOCK:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.PETAL_DANCE:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.PETAL_BLIZZARD:
            addAbilitySprite(skill, coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.NIGHTMARE:
            addAbilitySprite(skill, coordinates, true).setOrigin(0.5, 1).setScale(2);
            break;
        case Ability_1.Ability.AROMATHERAPY:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.SHEER_COLD:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.DARK_HARVEST:
            {
                const darkHarvestGroup = scene.add.group();
                const [x, y] = (0, utils_1.transformAttackCoordinate)(positionX, positionY, flip);
                for (let i = 0; i < 5; i++) {
                    const darkHarvestSprite = scene.add
                        .sprite(0, 0, "abilities", `${Ability_1.Ability.DARK_HARVEST}/000.png`)
                        .setScale(2);
                    darkHarvestSprite.anims.play({
                        key: Ability_1.Ability.DARK_HARVEST,
                        frameRate: 8
                    });
                    darkHarvestGroup.add(darkHarvestSprite);
                }
                const circle = new phaser_1.Geom.Circle(x, y, 48);
                Phaser.Actions.PlaceOnCircle(darkHarvestGroup.getChildren(), circle);
                scene.tweens.add({
                    targets: circle,
                    radius: 96,
                    ease: Phaser.Math.Easing.Quartic.Out,
                    duration: 1000,
                    onUpdate: function (tween) {
                        Phaser.Actions.RotateAroundDistance(darkHarvestGroup.getChildren(), { x, y }, 0.08, circle.radius);
                    },
                    onComplete: function () {
                        darkHarvestGroup.destroy(true, true);
                    }
                });
            }
            break;
        case Ability_1.Ability.AQUA_TAIL:
            addAbilitySprite(types_1.AttackSprite.WATER_MELEE, coordinatesTarget, true).setScale(2);
            break;
        case "HAIL_PROJECTILE": {
            const specialProjectile = addAbilitySprite(skill, [
                coordinatesTarget[0] + 60,
                coordinatesTarget[1] - 240
            ]).setScale(1);
            const randomDelay = (0, random_1.randomBetween)(0, 300);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                duration: 800,
                delay: randomDelay,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            setTimeout(() => addAbilitySprite(Ability_1.Ability.SHEER_COLD, coordinatesTarget, true).setScale(1), 800 + randomDelay);
            break;
        }
        case Ability_1.Ability.RAPID_SPIN:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(1.5);
            break;
        case Ability_1.Ability.BOUNCE:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.MAGNET_BOMB:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.GUNK_SHOT: {
            const specialProjectile = addAbilitySprite(skill, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "Power2",
                duration: 700,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.SCHOOLING:
            addAbilitySprite(skill, coordinates, true).setDepth(0).setScale(4);
            break;
        case Ability_1.Ability.STONE_AXE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.CRUSH_CLAW:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.EARTHQUAKE:
            addAbilitySprite(skill, coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.OKTZOOKA:
            addAbilitySprite(Ability_1.Ability.SMOKE_SCREEN, coordinatesTarget, true).setScale(3);
            break;
        case Ability_1.Ability.WOOD_HAMMER:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setScale(1)
                .setOrigin(0.5, 1);
            break;
        case Ability_1.Ability.TRICK_OR_TREAT:
            addAbilitySprite(skill, coordinatesTarget, true)
                .setScale(2)
                .setOrigin(0.5, 1);
            break;
        case Ability_1.Ability.INFESTATION:
            {
                if (positionX !== undefined && positionY !== undefined) {
                    const duration = (0, distance_1.distanceM)(positionX, positionY, targetX, targetY) * 150;
                    const projectile = addAbilitySprite("HEAL_ORDER", coordinates, true).setScale(3);
                    scene.tweens.add({
                        targets: projectile,
                        x: coordinatesTarget[0],
                        y: coordinatesTarget[1],
                        ease: "linear",
                        yoyo: false,
                        duration: duration,
                        onComplete: () => {
                            projectile.destroy();
                        }
                    });
                }
                else {
                    addAbilitySprite("ATTACK_ORDER", coordinatesTarget, true).setScale(2);
                }
            }
            break;
        case "FIELD_DEATH":
            addAbilitySprite("FIELD_DEATH", coordinates, true).setScale(2);
            break;
        case "GROUND_GROW":
            addAbilitySprite(skill, coordinates, true).setScale(1.5);
            break;
        case "FIGHTING_KNOCKBACK":
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.HEADBUTT:
            addAbilitySprite("FIGHTING_KNOCKBACK", coordinatesTarget, true).setScale(2);
            break;
        case "FAIRY_CRIT":
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case "POWER_LENS":
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case "STAR_DUST":
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case "HEAL_ORDER":
        case "ATTACK_ORDER":
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case "FISHING":
            addAbilitySprite(Ability_1.Ability.DIVE, coordinates, true)
                .setOrigin(0.5, -2)
                .setDepth(0)
                .setScale(1);
            break;
        case "SPAWN":
            addAbilitySprite("SPAWN", coordinates, true)
                .setOrigin(0.5, -1.5)
                .setDepth(0)
                .setScale(2);
            break;
        case "EVOLUTION":
            addAbilitySprite("EVOLUTION", coordinates, true)
                .setOrigin(0.5, -0.4)
                .setDepth(0)
                .setScale(2);
            break;
        case "HATCH":
            addAbilitySprite("SOFT_BOILED", coordinates, true)
                .setOrigin(0.5, -0.4)
                .setDepth(0)
                .setScale(2);
            break;
        case "FLYING_TAKEOFF":
            addAbilitySprite("FLYING_TAKEOFF", coordinates, true)
                .setDepth(0)
                .setScale(2);
            break;
        case "FLYING_SKYDIVE":
            {
                const startCoords = (0, utils_1.transformAttackCoordinate)(targetX, 9, false);
                const specialProjectile = addAbilitySprite(skill, startCoords).setScale(2);
                scene.tweens.add({
                    targets: specialProjectile,
                    x: coordinatesTarget[0],
                    y: coordinatesTarget[1],
                    ease: "linear",
                    duration: 500,
                    onComplete: () => {
                        specialProjectile.destroy();
                    }
                });
            }
            break;
        case "TIDAL_WAVE":
            {
                const down = orientation === (flip ? Game_1.Orientation.UP : Game_1.Orientation.DOWN);
                const startCoords = (0, utils_1.transformAttackCoordinate)(3.6, -4, down);
                const endCoords = (0, utils_1.transformAttackCoordinate)(3.6, 10, down);
                const wave = scene.add
                    .sprite(startCoords[0], startCoords[1], "abilities", `TIDAL_WAVE/00${targetY}.png`)
                    .setOrigin(0.5, 0.5)
                    .setDepth(7)
                    .setScale(3)
                    .setAlpha(0)
                    .setRotation(down ? Math.PI : 0);
                scene.tweens.add({
                    targets: wave,
                    x: endCoords[0],
                    y: endCoords[1],
                    ease: "linear",
                    duration: 1800,
                    onComplete: () => {
                        wave.destroy();
                    },
                    onUpdate: function (tween) {
                        if (tween.progress < 0.2) {
                            wave.setAlpha(tween.progress * 5);
                        }
                        else if (tween.progress > 0.8) {
                            wave.setAlpha((1 - tween.progress) * 5);
                        }
                    }
                });
            }
            break;
        case Ability_1.Ability.PURIFY:
            addAbilitySprite(Ability_1.Ability.SMOG, coordinatesTarget, true).setScale(1);
            addAbilitySprite(Ability_1.Ability.MUD_BUBBLE, coordinates, true).setScale(1);
            break;
        case Ability_1.Ability.PSYCHO_SHIFT:
            {
                const pkmSprite = addAbilitySprite(Ability_1.Ability.PRESENT, coordinates).setScale(2);
                if (targetX !== undefined && targetY !== undefined) {
                    const targetSprite = addAbilitySprite(Ability_1.Ability.PRESENT, coordinatesTarget).setScale(2);
                    scene.tweens.add({
                        targets: pkmSprite,
                        x: coordinatesTarget[0],
                        y: coordinatesTarget[1],
                        ease: "linear",
                        duration: 300,
                        repeat: 1,
                        yoyo: true,
                        onComplete: () => {
                            pkmSprite.destroy();
                        }
                    });
                    scene.tweens.add({
                        targets: targetSprite,
                        x: coordinates[0],
                        y: coordinates[1],
                        ease: "linear",
                        duration: 300,
                        repeat: 1,
                        yoyo: true,
                        onComplete: () => {
                            targetSprite.destroy();
                        }
                    });
                }
            }
            break;
        case Ability_1.Ability.GLAIVE_RUSH:
            addAbilitySprite(Ability_1.Ability.ICE_HAMMER, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.STEEL_WING:
            addAbilitySprite(Ability_1.Ability.STEEL_WING, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.FOUL_PLAY:
            addAbilitySprite(Ability_1.Ability.NIGHT_SLASH, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.DOUBLE_IRON_BASH:
            addAbilitySprite(Ability_1.Ability.DRAIN_PUNCH, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.STONE_EDGE:
            addAbilitySprite(Ability_1.Ability.TORMENT, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.THUNDER_CAGE:
            addAbilitySprite(Ability_1.Ability.THUNDER_CAGE, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.BIDE:
            addAbilitySprite(Ability_1.Ability.COUNTER, coordinates, true).setScale(3);
            break;
        case Ability_1.Ability.SHORE_UP:
            addAbilitySprite(Ability_1.Ability.EARTHQUAKE, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.METAL_CLAW:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.BONE_ARMOR: {
            const startCoords = (0, utils_1.transformAttackCoordinate)(targetX, targetY, flip);
            Object.values(Game_1.Orientation).forEach((o) => {
                const [dx, dy] = orientation_1.OrientationVector[o];
                const finalCoords = (0, utils_1.transformAttackCoordinate)(positionX + dx * 1, positionY + dy * 1, flip);
                const specialProjectile = addAbilitySprite(Ability_1.Ability.BONEMERANG, startCoords).setScale(2);
                scene.tweens.add({
                    targets: specialProjectile,
                    x: finalCoords[0],
                    y: finalCoords[1],
                    yoyo: false,
                    duration: 1000,
                    onComplete: () => {
                        specialProjectile.destroy();
                    }
                });
            });
            break;
        }
        case Ability_1.Ability.FIRESTARTER: {
            const abilitySprite = addAbilitySprite(skill, [coordinatesTarget[0], coordinatesTarget[1] - 25], true).setScale(2);
            scene.tweens.add({
                targets: abilitySprite,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1] + 25,
                ease: "linear",
                duration: 800,
                onComplete: () => {
                    abilitySprite.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.BRICK_BREAK:
        case Ability_1.Ability.BULK_UP:
        case Ability_1.Ability.FLASH:
            addAbilitySprite(skill, coordinates, true).setScale(2);
            break;
        case Ability_1.Ability.TAUNT:
            addAbilitySprite(skill, [coordinates[0], coordinates[1] - 30], true).setScale(2);
            break;
        case "TAUNT_HIT":
            addAbilitySprite(skill, [coordinatesTarget[0], coordinatesTarget[1] - 30], true).setScale(2);
            break;
        case Ability_1.Ability.RETALIATE:
            addAbilitySprite(skill, coordinatesTarget, true).setScale(2);
            break;
        case Ability_1.Ability.STRENGTH: {
            const specialProjectile = addAbilitySprite(skill, [coordinatesTarget[0], coordinatesTarget[1] - 150], true).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                y: coordinatesTarget[1],
                ease: Phaser.Math.Easing.Quadratic.In,
                duration: 450
            });
            break;
        }
        case Ability_1.Ability.SURF: {
            const angle = Math.atan2(coordinatesTarget[1] - coordinates[1], coordinatesTarget[0] - coordinates[0]);
            const specialProjectile = addAbilitySprite(skill, coordinates)
                .setScale(2)
                .setRotation(angle - (3 / 4) * Math.PI);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                ease: "linear",
                duration: 600,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        case Ability_1.Ability.COLUMN_CRUSH: {
            const distance = (0, distance_1.distanceE)(coordinates[0], coordinates[1], coordinatesTarget[0], coordinatesTarget[1]);
            const pillarType = (_a = [Pokemon_1.Pkm.PILLAR_WOOD, Pokemon_1.Pkm.PILLAR_IRON, Pokemon_1.Pkm.PILLAR_CONCRETE][orientation]) !== null && _a !== void 0 ? _a : Pokemon_1.Pkm.PILLAR_WOOD;
            const animKey = `${Pokemon_1.PkmIndex[pillarType]}/${Game_1.PokemonTint.NORMAL}/${Animation_1.AnimationType.Idle}/${Game_1.SpriteType.ANIM}/${Game_1.Orientation.DOWN}`;
            const specialProjectile = addAbilitySprite(animKey, coordinates).setScale(2);
            scene.tweens.add({
                targets: specialProjectile,
                x: coordinatesTarget[0],
                y: coordinatesTarget[1],
                angle: 270,
                ease: "linear",
                duration: distance * 2,
                onComplete: () => {
                    specialProjectile.destroy();
                }
            });
            break;
        }
        default:
            break;
    }
}
function hiddenPowerAnimation(scene, skill, originX, originY, flip) {
    const [x, y] = (0, utils_1.transformAttackCoordinate)(originX, originY, flip);
    const unownsGroup = scene.add.group();
    const letters = unown_manager_1.UNOWNS_PER_ABILITY.get(skill);
    for (let n = 0; n < 8; n++) {
        letters === null || letters === void 0 ? void 0 : letters.forEach((letter, i) => {
            var _a;
            const unown = new pokemon_1.default(scene, x, y, pokemon_factory_1.default.createPokemonFromName(letter), "unown", false, flip);
            unown.draggable = false;
            unownsGroup.add(unown);
            (_a = scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(unown, Game_1.PokemonActionState.IDLE, flip);
        });
    }
    const circle = new Phaser.Geom.Circle(x, y, 10);
    Phaser.Actions.PlaceOnCircle(unownsGroup.getChildren(), circle);
    scene.tweens.add({
        targets: circle,
        radius: 500,
        ease: Phaser.Math.Easing.Quartic.Out,
        duration: 2500,
        onUpdate: function (tween) {
            Phaser.Actions.RotateAroundDistance(unownsGroup.getChildren(), { x, y }, -0.02 * (1 - tween.progress), circle.radius);
            if (tween.progress > 0.8) {
                unownsGroup.setAlpha((1 - tween.progress) * 5);
            }
        },
        onComplete() {
            unownsGroup.destroy(true, true);
        }
    });
}
//# sourceMappingURL=abilities-animations.js.map