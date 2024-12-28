"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Weather_1 = require("../../types/enum/Weather");
const array_1 = require("../../utils/array");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
class Status extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.burn = false;
        this.silence = false;
        this.fatigue = false;
        this.poisonStacks = 0;
        this.freeze = false;
        this.protect = false;
        this.sleep = false;
        this.confusion = false;
        this.wound = false;
        this.resurection = false;
        this.resurecting = false;
        this.paralysis = false;
        this.pokerus = false;
        this.locked = false;
        this.blinded = false;
        this.armorReduction = false;
        this.runeProtect = false;
        this.charm = false;
        this.flinch = false;
        this.electricField = false;
        this.psychicField = false;
        this.grassField = false;
        this.fairyField = false;
        this.spikeArmor = false;
        this.magicBounce = false;
        this.light = false;
        this.curse = false;
        this.curseVulnerability = false;
        this.curseWeakness = false;
        this.curseTorment = false;
        this.curseFate = false;
        this.enraged = false;
        this.skydiving = false;
        this.tree = false;
        this.magmaStorm = false;
        this.soulDew = false;
        this.clearWing = false;
        this.guts = false;
        this.toxicBoost = false;
        this.burnOrigin = undefined;
        this.poisonOrigin = undefined;
        this.silenceOrigin = undefined;
        this.woundOrigin = undefined;
        this.charmOrigin = undefined;
        this.magmaStormOrigin = null;
        this.clearWingCooldown = 1000;
        this.burnCooldown = 0;
        this.burnDamageCooldown = 1000;
        this.silenceCooldown = 0;
        this.fatigueCooldown = 0;
        this.poisonCooldown = 0;
        this.poisonDamageCooldown = 1000;
        this.freezeCooldown = 0;
        this.protectCooldown = 0;
        this.sleepCooldown = 0;
        this.confusionCooldown = 0;
        this.woundCooldown = 0;
        this.soulDewCooldown = 0;
        this.paralysisCooldown = 0;
        this.armorReductionCooldown = 0;
        this.runeProtectCooldown = 0;
        this.charmCooldown = 0;
        this.flinchCooldown = 0;
        this.enrageCooldown = 0;
        this.spikeArmorCooldown = 0;
        this.magicBounceCooldown = 0;
        this.synchroCooldown = 3000;
        this.magmaStormCooldown = 0;
        this.synchro = false;
        this.resurectingCooldown = 0;
        this.doubleDamage = false;
        this.drySkin = false;
        this.drySkinCooldown = 1000;
        this.curseCooldown = 0;
        this.pokerusCooldown = 2000;
        this.lockedCooldown = 0;
        this.blindCooldown = 0;
        this.enrageDelay = 35000;
        this.darkHarvest = false;
        this.darkHarvestCooldown = 0;
        this.darkHarvestDamageCooldown = 0;
        this.stoneEdge = false;
        this.stoneEdgeCooldown = 0;
        this.bideCooldown = 0;
    }
    clearNegativeStatus() {
        this.burnCooldown = 0;
        this.silenceCooldown = 0;
        this.fatigueCooldown = 0;
        this.poisonCooldown = 0;
        this.freezeCooldown = 0;
        this.sleepCooldown = 0;
        this.confusionCooldown = 0;
        this.woundCooldown = 0;
        this.paralysisCooldown = 0;
        this.charmCooldown = 0;
        this.flinchCooldown = 0;
        this.armorReductionCooldown = 0;
        this.curseCooldown = 0;
        this.curse = false;
        this.lockedCooldown = 0;
        this.enrageCooldown = 0;
        this.blindCooldown = 0;
    }
    hasNegativeStatus() {
        return (this.burn ||
            this.silence ||
            this.fatigue ||
            this.poisonStacks > 0 ||
            this.freeze ||
            this.sleep ||
            this.confusion ||
            this.wound ||
            this.paralysis ||
            this.charm ||
            this.flinch ||
            this.armorReduction ||
            this.curse ||
            this.locked ||
            this.blinded);
    }
    updateAllStatus(dt, pokemon, board) {
        if (pokemon.effects.has(Effect_1.Effect.POISON_GAS) && this.poisonStacks === 0) {
            this.triggerPoison(1500, pokemon, undefined);
        }
        if (pokemon.effects.has(Effect_1.Effect.SMOKE) && !this.blinded) {
            this.triggerBlinded(1000, pokemon);
        }
        if (pokemon.effects.has(Effect_1.Effect.STICKY_WEB) && !this.paralysis) {
            this.triggerParalysis(2000, pokemon, null);
        }
        if (pokemon.status.runeProtect) {
            this.updateRuneProtect(dt);
        }
        if (this.burn) {
            this.updateBurn(dt, pokemon, board);
        }
        if (this.poisonStacks > 0) {
            this.updatePoison(dt, pokemon, board);
        }
        if (this.sleep) {
            this.updateSleep(dt);
        }
        if (this.silence) {
            this.updateSilence(dt);
        }
        if (this.fatigue) {
            this.updateFatigue(dt);
        }
        if (this.protect) {
            this.updateProtect(dt);
        }
        if (this.freeze) {
            this.updateFreeze(dt);
        }
        if (this.confusion) {
            this.updateConfusion(dt);
        }
        if (this.wound) {
            this.updateWound(dt);
        }
        if (this.soulDew) {
            this.updateSoulDew(dt, pokemon);
        }
        if (this.darkHarvest) {
            this.updateDarkHarvest(dt, pokemon, board);
        }
        if (this.paralysis) {
            this.updateParalysis(dt, pokemon);
        }
        if (this.locked) {
            this.updateLocked(dt, pokemon);
        }
        if (this.blinded) {
            this.updateBlinded(dt);
        }
        if (this.pokerus) {
            this.updatePokerus(dt, pokemon, board);
        }
        if (this.armorReduction) {
            this.updateArmorReduction(dt);
        }
        if (this.charm) {
            this.updateCharm(dt);
        }
        if (this.flinch) {
            this.updateFlinch(dt);
        }
        if (this.spikeArmor) {
            this.updateSpikeArmor(dt);
        }
        if (this.magicBounce) {
            this.updateMagicBounce(dt);
        }
        if (this.synchro) {
            this.updateSynchro(dt, board, pokemon);
        }
        if (this.resurecting) {
            this.updateResurecting(dt, pokemon);
        }
        if (this.magmaStorm) {
            this.updateMagmaStorm(dt, board, pokemon);
        }
        if (this.clearWing) {
            this.updateClearWing(dt, pokemon);
        }
        if (this.drySkin) {
            this.updateDrySkin(dt, pokemon);
        }
        if (this.curse) {
            this.updateCurse(dt, board, pokemon);
        }
        if (!this.enraged) {
            this.updateRage(dt, pokemon);
        }
        if (pokemon.status.curseVulnerability && !pokemon.status.flinch) {
            this.triggerFlinch(30000, pokemon);
        }
        if (pokemon.status.curseWeakness && !pokemon.status.paralysis) {
            this.triggerParalysis(30000, pokemon, null);
        }
        if (pokemon.status.curseTorment && !pokemon.status.fatigue) {
            this.triggerFatigue(30000, pokemon);
        }
        if (pokemon.status.curseFate && !pokemon.status.curse) {
            this.triggerCurse(6500);
        }
    }
    triggerMagmaStorm(delay, origin) {
        if (!this.magmaStorm && origin) {
            this.magmaStorm = true;
            this.magmaStormCooldown = delay;
            this.magmaStormOrigin = origin;
        }
    }
    updateMagmaStorm(dt, board, pkm) {
        if (this.magmaStormCooldown - dt <= 0) {
            this.magmaStorm = false;
            const adjacentCells = board.getAdjacentCells(pkm.positionX, pkm.positionY);
            for (let i = 0; i < adjacentCells.length; i++) {
                const cell = adjacentCells[i];
                if (cell && cell.value && cell.value.team === pkm.team) {
                    cell.value.status.triggerMagmaStorm(500, this.magmaStormOrigin);
                    break;
                }
            }
            pkm.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pkm.simulation.id,
                skill: Ability_1.Ability.MAGMA_STORM,
                positionX: pkm.positionX,
                positionY: pkm.positionY,
                targetX: pkm.positionX,
                targetY: pkm.positionY
            });
            pkm.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, this.magmaStormOrigin, false);
            this.magmaStormOrigin = null;
            this.magmaStormCooldown = 0;
        }
        else {
            this.magmaStormCooldown -= dt;
        }
    }
    triggerArmorReduction(duration, pkm) {
        if (!this.runeProtect) {
            this.armorReduction = true;
            duration = this.applyAquaticReduction(duration, pkm);
            if (duration > this.armorReductionCooldown) {
                this.armorReductionCooldown = Math.round(duration);
            }
        }
    }
    updateArmorReduction(dt) {
        if (this.armorReductionCooldown - dt <= 0) {
            this.armorReduction = false;
        }
        else {
            this.armorReductionCooldown -= dt;
        }
    }
    triggerRage(duration, pokemon) {
        this.enraged = true;
        this.protect = false;
        duration = this.applyAquaticReduction(duration, pokemon);
        this.enrageCooldown = Math.round(duration);
        pokemon.addAttackSpeed(100, pokemon, 0, false);
    }
    updateRage(dt, pokemon) {
        if (!this.enraged &&
            this.enrageDelay - dt <= 0 &&
            !pokemon.simulation.finished) {
            this.enraged = true;
            this.protect = false;
            pokemon.addAttackSpeed(100, pokemon, 0, false);
        }
        else if (this.enraged &&
            this.enrageCooldown - dt <= 0 &&
            this.enrageDelay - dt > 0) {
            this.enraged = false;
            pokemon.addAttackSpeed(-100, pokemon, 0, false);
        }
        this.enrageDelay -= dt;
    }
    triggerClearWing(timer) {
        if (!this.clearWing) {
            this.clearWing = true;
            this.clearWingCooldown = timer;
        }
    }
    updateClearWing(dt, pkm) {
        if (this.clearWingCooldown - dt <= 0) {
            this.clearWing = false;
            this.triggerClearWing(1000);
            pkm.addAttackSpeed(2, pkm, 0, false);
        }
        else {
            this.clearWingCooldown -= dt;
        }
    }
    triggerStoneEdge(timer, pkm) {
        if (!this.stoneEdge) {
            this.stoneEdge = true;
            this.stoneEdgeCooldown = timer;
            pkm.addCritChance(20, pkm, 1, false);
            pkm.range += 2;
        }
    }
    updateStoneEdge(dt, pkm) {
        if (this.stoneEdgeCooldown - dt <= 0) {
            this.stoneEdge = false;
            pkm.addCritChance(-20, pkm, 1, false);
            pkm.range = (0, number_1.min)(pkm.baseRange)(pkm.range - 2);
        }
        else {
            this.stoneEdgeCooldown -= dt;
        }
    }
    triggerDrySkin(timer) {
        if (!this.drySkin) {
            this.drySkin = true;
            this.drySkinCooldown = timer;
        }
    }
    updateDrySkin(dt, pkm) {
        if (this.drySkinCooldown - dt <= 0) {
            this.drySkin = false;
            this.triggerDrySkin(1000);
            pkm.handleHeal(8, pkm, 0, false);
        }
        else {
            this.drySkinCooldown -= dt;
        }
    }
    triggerSynchro() {
        this.synchro = true;
        this.synchroCooldown = 3000;
    }
    updateSynchro(dt, board, pkm) {
        if (this.synchroCooldown - dt <= 0) {
            this.synchro = false;
            this.triggerSynchro();
            if (this.burn && this.burnOrigin) {
                this.burnOrigin.status.triggerBurn(3000, this.burnOrigin, pkm);
            }
            if (this.poisonStacks && this.poisonOrigin) {
                this.poisonOrigin.status.triggerPoison(3000, this.poisonOrigin, pkm);
            }
            if (this.wound && this.woundOrigin) {
                this.woundOrigin.status.triggerWound(3000, this.woundOrigin, pkm);
            }
            if (this.silence && this.silenceOrigin) {
                this.silenceOrigin.status.triggerSilence(3000, this.silenceOrigin, pkm);
            }
        }
        else {
            this.synchroCooldown -= dt;
        }
    }
    triggerSoulDew(timer) {
        this.soulDew = true;
        this.soulDewCooldown = timer;
    }
    updateSoulDew(dt, pkm) {
        if (this.soulDewCooldown - dt <= 0) {
            this.soulDew = false;
            pkm.addAbilityPower(10, pkm, 0, false);
            pkm.count.soulDewCount++;
            if (pkm.items.has(Item_1.Item.SOUL_DEW)) {
                this.triggerSoulDew(1000);
            }
        }
        else {
            this.soulDewCooldown -= dt;
        }
    }
    triggerDarkHarvest(duration) {
        this.darkHarvest = true;
        if (duration > this.darkHarvestCooldown) {
            this.darkHarvestCooldown = duration;
            this.darkHarvestDamageCooldown = 0;
        }
    }
    updateDarkHarvest(dt, pkm, board) {
        if (this.darkHarvestDamageCooldown - dt <= 0) {
            pkm.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pkm.simulation.id,
                skill: Ability_1.Ability.DARK_HARVEST,
                positionX: pkm.positionX,
                positionY: pkm.positionY
            });
            const crit = pkm.items.has(Item_1.Item.REAPER_CLOTH)
                ? (0, random_1.chance)(pkm.critChance, pkm)
                : false;
            board.getAdjacentCells(pkm.positionX, pkm.positionY).forEach((cell) => {
                var _a;
                if ((cell === null || cell === void 0 ? void 0 : cell.value) && cell.value.team !== pkm.team) {
                    const darkHarvestDamage = (_a = [5, 10, 20][pkm.stars - 1]) !== null && _a !== void 0 ? _a : 20;
                    cell.value.handleSpecialDamage(darkHarvestDamage, board, Game_1.AttackType.SPECIAL, pkm, crit, true);
                    const healFactor = 0.3;
                    pkm.handleHeal(Math.round(darkHarvestDamage * healFactor), pkm, 0, false);
                    this.darkHarvestDamageCooldown = 1000;
                }
            });
        }
        else {
            this.darkHarvestDamageCooldown -= dt;
        }
        if (this.darkHarvestCooldown - dt <= 0) {
            this.darkHarvest = false;
        }
        else {
            this.darkHarvestCooldown -= dt;
        }
    }
    triggerBurn(duration, pkm, origin) {
        if (!pkm.effects.has(Effect_1.Effect.IMMUNITY_BURN) &&
            !this.runeProtect &&
            pkm.passive !== Passive_1.Passive.WATER_BUBBLE) {
            this.burn = true;
            duration = this.applyAquaticReduction(duration, pkm);
            if (duration > this.burnCooldown) {
                this.burnCooldown = duration;
                if (origin) {
                    this.burnOrigin = origin;
                }
            }
            if (pkm.passive === Passive_1.Passive.GUTS && !this.guts) {
                this.guts = true;
                pkm.addAttack(5, pkm, 0, false);
            }
            if (pkm.items.has(Item_1.Item.RAWST_BERRY)) {
                pkm.eatBerry(Item_1.Item.RAWST_BERRY);
            }
        }
    }
    updateBurn(dt, pkm, board) {
        if (this.burnDamageCooldown - dt <= 0) {
            if (this.burnOrigin) {
                let burnDamage = pkm.hp * 0.05;
                if (pkm.simulation.weather === Weather_1.Weather.SUN) {
                    burnDamage *= 1.3;
                    const nbHeatRocks = pkm.player
                        ? (0, array_1.count)(pkm.player.items, Item_1.Item.HEAT_ROCK)
                        : 0;
                    if (nbHeatRocks > 0) {
                        burnDamage *= 1 - 0.2 * nbHeatRocks;
                    }
                }
                else if (pkm.simulation.weather === Weather_1.Weather.RAIN) {
                    burnDamage *= 0.7;
                }
                if (pkm.items.has(Item_1.Item.ASSAULT_VEST)) {
                    burnDamage *= 0.5;
                }
                pkm.handleDamage({
                    damage: Math.round(burnDamage),
                    board,
                    attackType: Game_1.AttackType.TRUE,
                    attacker: this.burnOrigin,
                    shouldTargetGainMana: true
                });
                this.burnDamageCooldown = 1000;
            }
        }
        else {
            this.burnDamageCooldown -= dt;
        }
        if (this.burnCooldown - dt <= 0) {
            this.healBurn(pkm);
        }
        else {
            this.burnCooldown -= dt;
        }
    }
    healBurn(pkm) {
        this.burn = false;
        this.burnOrigin = undefined;
        this.burnDamageCooldown = 1000;
        if (pkm.passive === Passive_1.Passive.GUTS && this.poisonStacks === 0) {
            this.guts = false;
            pkm.addAttack(-5, pkm, 0, false);
        }
    }
    triggerSilence(duration, pkm, origin) {
        if (!this.runeProtect && !this.tree) {
            duration = this.applyAquaticReduction(duration, pkm);
            this.silence = true;
            if (duration > this.silenceCooldown) {
                this.silenceCooldown = duration;
                if (origin) {
                    this.silenceOrigin = origin;
                }
            }
        }
    }
    updateSilence(dt) {
        if (this.silenceCooldown - dt <= 0) {
            this.silence = false;
            this.silenceOrigin = undefined;
        }
        else {
            this.silenceCooldown -= dt;
        }
    }
    triggerFatigue(duration, pkm) {
        if (!this.runeProtect) {
            duration = this.applyAquaticReduction(duration, pkm);
            this.fatigue = true;
            if (duration > this.fatigueCooldown) {
                this.fatigueCooldown = duration;
            }
        }
    }
    updateFatigue(dt) {
        if (this.fatigueCooldown - dt <= 0) {
            this.fatigue = false;
        }
        else {
            this.fatigueCooldown -= dt;
        }
    }
    triggerPoison(duration, pkm, origin) {
        if (!pkm.effects.has(Effect_1.Effect.IMMUNITY_POISON) && !this.runeProtect) {
            let maxStacks = 3;
            if (origin) {
                this.poisonOrigin = origin;
                if (origin.effects.has(Effect_1.Effect.VENOMOUS)) {
                    maxStacks = 4;
                }
                if (origin.effects.has(Effect_1.Effect.TOXIC)) {
                    maxStacks = 5;
                }
            }
            this.poisonStacks = (0, number_1.max)(maxStacks)(this.poisonStacks + 1);
            duration = this.applyAquaticReduction(duration, pkm);
            if (duration > this.poisonCooldown) {
                this.poisonCooldown = duration;
            }
            if (pkm.passive === Passive_1.Passive.GUTS && !this.guts) {
                this.guts = true;
                pkm.addAttack(5, pkm, 0, false);
            }
            if (pkm.passive === Passive_1.Passive.TOXIC_BOOST && !this.toxicBoost) {
                this.toxicBoost = true;
                pkm.addAttack(10, pkm, 0, false);
            }
            if (pkm.items.has(Item_1.Item.PECHA_BERRY)) {
                pkm.eatBerry(Item_1.Item.PECHA_BERRY);
            }
        }
    }
    updatePoison(dt, pkm, board) {
        var _a;
        if (this.poisonDamageCooldown - dt <= 0) {
            let poisonDamage = Math.ceil(pkm.hp * 0.05 * this.poisonStacks);
            if (pkm.simulation.weather === Weather_1.Weather.RAIN) {
                poisonDamage *= 0.7;
            }
            if (pkm.items.has(Item_1.Item.ASSAULT_VEST)) {
                poisonDamage *= 0.5;
            }
            if (pkm.passive === Passive_1.Passive.TOXIC_BOOST) {
                poisonDamage *= 0.5;
            }
            if (pkm.passive === Passive_1.Passive.POISON_HEAL ||
                pkm.passive === Passive_1.Passive.GLIGAR) {
                pkm.handleHeal(Math.round(poisonDamage), pkm, 0, false);
            }
            else {
                pkm.handleDamage({
                    damage: Math.round(poisonDamage),
                    board,
                    attackType: Game_1.AttackType.TRUE,
                    attacker: (_a = this.poisonOrigin) !== null && _a !== void 0 ? _a : null,
                    shouldTargetGainMana: false
                });
            }
            if (pkm.effects.has(Effect_1.Effect.POISON_GAS)) {
                this.triggerPoison(1500, pkm, undefined);
            }
            this.poisonDamageCooldown = 1000;
        }
        else {
            this.poisonDamageCooldown -= dt;
        }
        if (this.poisonCooldown - dt <= 0) {
            this.poisonStacks = 0;
            this.poisonOrigin = undefined;
            this.poisonDamageCooldown = 1000;
            if (pkm.passive === Passive_1.Passive.GUTS && !this.burn) {
                this.guts = false;
                pkm.addAttack(-5, pkm, 0, false);
            }
            if (pkm.passive === Passive_1.Passive.TOXIC_BOOST) {
                this.toxicBoost = false;
                pkm.addAttack(-10, pkm, 0, false);
            }
        }
        else {
            this.poisonCooldown = this.poisonCooldown - dt;
        }
    }
    triggerFreeze(duration, pkm) {
        if (!this.freeze &&
            !this.runeProtect &&
            !this.skydiving &&
            !pkm.effects.has(Effect_1.Effect.IMMUNITY_FREEZE)) {
            if (pkm.simulation.weather === Weather_1.Weather.SNOW) {
                duration *= 1.3;
                const nbIcyRocks = pkm.player
                    ? (0, array_1.count)(pkm.player.items, Item_1.Item.ICY_ROCK)
                    : 0;
                if (nbIcyRocks > 0) {
                    duration *= 1 - 0.2 * nbIcyRocks;
                }
            }
            else if (pkm.simulation.weather === Weather_1.Weather.SUN) {
                duration *= 0.7;
            }
            if (pkm.status.enraged) {
                duration = duration / 2;
            }
            duration = this.applyAquaticReduction(duration, pkm);
            this.freeze = true;
            this.freezeCooldown = Math.round(duration);
            if (pkm.items.has(Item_1.Item.ASPEAR_BERRY)) {
                pkm.eatBerry(Item_1.Item.ASPEAR_BERRY);
            }
        }
    }
    updateFreeze(dt) {
        if (this.freezeCooldown - dt <= 0) {
            this.freeze = false;
        }
        else {
            this.freezeCooldown -= dt;
        }
    }
    triggerProtect(timer) {
        if (!this.protect && !this.enraged) {
            this.protect = true;
            this.protectCooldown = timer;
        }
    }
    updateProtect(dt) {
        if (this.protectCooldown - dt <= 0) {
            this.protect = false;
        }
        else {
            this.protectCooldown -= dt;
        }
    }
    triggerSleep(duration, pkm) {
        if (!this.sleep &&
            !this.runeProtect &&
            !this.skydiving &&
            !pkm.effects.has(Effect_1.Effect.IMMUNITY_SLEEP)) {
            if (pkm.simulation.weather === Weather_1.Weather.NIGHT) {
                duration *= 1.3;
            }
            if (pkm.status.enraged) {
                duration = duration / 2;
            }
            duration = this.applyAquaticReduction(duration, pkm);
            this.sleep = true;
            this.sleepCooldown = Math.round(duration);
            if (pkm.items.has(Item_1.Item.CHESTO_BERRY)) {
                pkm.eatBerry(Item_1.Item.CHESTO_BERRY);
            }
        }
    }
    updateSleep(dt) {
        if (this.sleepCooldown - dt <= 0) {
            this.sleep = false;
        }
        else {
            this.sleepCooldown = this.sleepCooldown - dt;
        }
    }
    triggerConfusion(duration, pkm, origin, apBoost = false) {
        if (!this.confusion &&
            !this.runeProtect &&
            !pkm.effects.has(Effect_1.Effect.IMMUNITY_CONFUSION)) {
            const boost = apBoost && origin ? (duration * origin.ap) / 100 : 0;
            duration = duration + boost;
            if (pkm.simulation.weather === Weather_1.Weather.SANDSTORM) {
                duration *= 1.3;
            }
            duration = this.applyAquaticReduction(duration, pkm);
            this.confusion = true;
            this.confusionCooldown = Math.round(duration);
            if (pkm.items.has(Item_1.Item.PERSIM_BERRY)) {
                pkm.eatBerry(Item_1.Item.PERSIM_BERRY);
            }
            if (pkm.passive === Passive_1.Passive.PSYDUCK) {
                pkm.addAbilityPower(100, pkm, 0, false);
            }
        }
    }
    updateConfusion(dt) {
        if (this.confusionCooldown - dt <= 0) {
            this.confusion = false;
        }
        else {
            this.confusionCooldown -= dt;
        }
    }
    triggerCharm(duration, pkm, origin, apBoost = false) {
        if (!this.charm && !this.runeProtect) {
            const boost = apBoost && origin ? (duration * origin.ap) / 100 : 0;
            duration = duration + boost;
            if (pkm.simulation.weather === Weather_1.Weather.MISTY) {
                duration *= 1.3;
            }
            duration = this.applyAquaticReduction(duration, pkm);
            this.charm = true;
            this.charmCooldown = duration;
            this.charmOrigin = origin;
            if (origin) {
                pkm.targetX = origin === null || origin === void 0 ? void 0 : origin.positionX;
                pkm.targetY = origin === null || origin === void 0 ? void 0 : origin.positionY;
            }
        }
    }
    updateCharm(dt) {
        if (this.charmCooldown - dt <= 0) {
            this.charm = false;
            this.charmOrigin = undefined;
        }
        else {
            this.charmCooldown -= dt;
        }
    }
    triggerWound(duration, pkm, origin) {
        if (!this.runeProtect) {
            this.wound = true;
            if (pkm.simulation.weather === Weather_1.Weather.BLOODMOON) {
                duration *= 1.3;
            }
            duration = this.applyAquaticReduction(duration, pkm);
            if (duration > this.woundCooldown) {
                this.woundCooldown = duration;
                if (origin) {
                    this.woundOrigin = origin;
                }
            }
        }
    }
    updateWound(dt) {
        if (this.woundCooldown - dt <= 0) {
            this.wound = false;
            this.woundOrigin = undefined;
        }
        else {
            this.woundCooldown -= dt;
        }
    }
    triggerParalysis(duration, pkm, origin, apBoost = false) {
        if (!this.runeProtect && !pkm.effects.has(Effect_1.Effect.IMMUNITY_PARALYSIS)) {
            if (!this.paralysis) {
                this.paralysis = true;
                pkm.addAttackSpeed(-40, pkm, 0, false);
            }
            const boost = apBoost && origin ? (duration * origin.ap) / 100 : 0;
            duration = duration + boost;
            if (pkm.simulation.weather === Weather_1.Weather.STORM) {
                duration *= 1.3;
                const nbElectricQuartz = pkm.player
                    ? (0, array_1.count)(pkm.player.items, Item_1.Item.ELECTRIC_QUARTZ)
                    : 0;
                if (nbElectricQuartz > 0) {
                    duration *= 1 - 0.2 * nbElectricQuartz;
                }
            }
            duration = this.applyAquaticReduction(duration, pkm);
            if (duration > this.paralysisCooldown) {
                this.paralysisCooldown = Math.round(duration);
            }
            if (pkm.items.has(Item_1.Item.CHERI_BERRY)) {
                pkm.eatBerry(Item_1.Item.CHERI_BERRY);
            }
        }
    }
    updateParalysis(dt, pkm) {
        if (this.paralysisCooldown - dt <= 0) {
            this.healParalysis(pkm);
        }
        else {
            this.paralysisCooldown -= dt;
        }
    }
    healParalysis(pkm) {
        if (this.paralysis) {
            this.paralysis = false;
            this.paralysisCooldown = 0;
            pkm.addAttackSpeed(40, pkm, 0, false);
        }
    }
    triggerRuneProtect(timer) {
        this.runeProtect = true;
        this.clearNegativeStatus();
        if (timer > this.runeProtectCooldown) {
            this.runeProtectCooldown = timer;
        }
    }
    updateRuneProtect(dt) {
        if (this.runeProtectCooldown - dt <= 0) {
            this.runeProtect = false;
        }
        else {
            this.runeProtectCooldown -= dt;
        }
    }
    triggerFlinch(duration, pkm, origin) {
        if (!this.runeProtect) {
            this.flinch = true;
            duration = this.applyAquaticReduction(duration, pkm);
            if (duration > this.flinchCooldown) {
                this.flinchCooldown = Math.round(duration);
            }
        }
    }
    updateFlinch(dt) {
        if (this.flinchCooldown - dt <= 0) {
            this.flinch = false;
        }
        else {
            this.flinchCooldown -= dt;
        }
    }
    triggerSpikeArmor(timer) {
        this.spikeArmor = true;
        if (timer > this.spikeArmorCooldown) {
            this.spikeArmorCooldown = timer;
        }
    }
    updateSpikeArmor(dt) {
        if (this.spikeArmorCooldown - dt <= 0) {
            this.spikeArmor = false;
        }
        else {
            this.spikeArmorCooldown -= dt;
        }
    }
    triggerMagicBounce(timer) {
        this.magicBounce = true;
        if (timer > this.magicBounceCooldown) {
            this.magicBounceCooldown = timer;
        }
    }
    updateMagicBounce(dt) {
        if (this.magicBounceCooldown - dt <= 0) {
            this.magicBounce = false;
        }
        else {
            this.magicBounceCooldown -= dt;
        }
    }
    addResurrection(pokemon) {
        if (pokemon.passive === Passive_1.Passive.INANIMATE)
            return;
        this.resurection = true;
    }
    triggerResurection(pokemon) {
        this.resurection = false;
        this.resurecting = true;
        this.resurectingCooldown = 2000;
        pokemon.status.clearNegativeStatus();
    }
    updateResurecting(dt, pokemon) {
        if (this.resurectingCooldown - dt <= 0) {
            this.resurecting = false;
            pokemon.resurrect();
            pokemon.toMovingState();
            pokemon.cooldown = 0;
        }
        else {
            this.resurectingCooldown -= dt;
        }
    }
    triggerCurse(timer) {
        if (!this.runeProtect) {
            if (this.curse) {
                this.curseCooldown = 0;
            }
            else {
                this.curse = true;
                this.curseCooldown = timer;
            }
        }
    }
    updateCurse(dt, board, pokemon) {
        if (this.curseCooldown - dt <= 0) {
            this.curse = false;
            pokemon.handleDamage({
                damage: 9999,
                board,
                attacker: null,
                attackType: Game_1.AttackType.TRUE,
                shouldTargetGainMana: false
            });
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: "CURSE_EFFECT",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                orientation: pokemon.orientation
            });
        }
        else {
            this.curseCooldown -= dt;
        }
    }
    triggerPokerus(pokemon) {
        if ((pokemon.passive = Passive_1.Passive.INANIMATE))
            return;
        if (!this.pokerus) {
            this.pokerus = true;
        }
    }
    updatePokerus(dt, pokemon, board) {
        if (this.pokerusCooldown - dt <= 0) {
            pokemon.addAttack(1, pokemon, 0, false);
            pokemon.addAbilityPower(10, pokemon, 0, false);
            let infectCount = 0;
            const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
            cells.forEach((cell) => {
                if (infectCount < 2 && cell.value !== undefined) {
                    if (cell.value.team === pokemon.team &&
                        cell.value.status.pokerus === false) {
                        cell.value.status.triggerPokerus(cell.value);
                        infectCount++;
                    }
                }
            });
            this.pokerusCooldown = 2000;
        }
        else {
            this.pokerusCooldown -= dt;
        }
    }
    triggerLocked(duration, pkm) {
        if (!this.locked &&
            !this.skydiving &&
            !this.runeProtect) {
            if (pkm.status.enraged) {
                duration = duration / 2;
            }
            duration = this.applyAquaticReduction(duration, pkm);
            this.locked = true;
            this.lockedCooldown = Math.round(duration);
            pkm.range = 1;
            pkm.toMovingState();
        }
    }
    updateLocked(dt, pokemon) {
        if (this.lockedCooldown - dt <= 0) {
            this.locked = false;
            pokemon.range =
                pokemon.baseRange + (pokemon.items.has(Item_1.Item.WIDE_LENS) ? 2 : 0);
        }
        else {
            this.lockedCooldown -= dt;
        }
    }
    triggerBlinded(duration, pkm) {
        if (!this.blinded && !this.runeProtect) {
            if (pkm.status.enraged) {
                duration = duration / 2;
            }
            duration = this.applyAquaticReduction(duration, pkm);
            this.blinded = true;
            this.blindCooldown = Math.round(duration);
        }
    }
    updateBlinded(dt) {
        if (this.blindCooldown - dt <= 0) {
            this.blinded = false;
        }
        else {
            this.blindCooldown -= dt;
        }
    }
    applyAquaticReduction(duration, pkm) {
        if (pkm.effects.has(Effect_1.Effect.SWIFT_SWIM)) {
            duration = Math.round(duration * 0.7);
        }
        else if (pkm.effects.has(Effect_1.Effect.HYDRATION)) {
            duration = Math.round(duration * 0.4);
        }
        else if (pkm.effects.has(Effect_1.Effect.WATER_VEIL)) {
            duration = Math.round(duration * 0.1);
        }
        return duration;
    }
}
exports.default = Status;
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "burn", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "silence", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "fatigue", void 0);
__decorate([
    (0, schema_1.type)("number")
], Status.prototype, "poisonStacks", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "freeze", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "protect", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "sleep", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "confusion", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "wound", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "resurection", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "resurecting", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "paralysis", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "pokerus", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "locked", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "blinded", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "armorReduction", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "runeProtect", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "charm", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "flinch", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "electricField", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "psychicField", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "grassField", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "fairyField", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "spikeArmor", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "magicBounce", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "light", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curse", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curseVulnerability", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curseWeakness", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curseTorment", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curseFate", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "enraged", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "skydiving", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "tree", void 0);
//# sourceMappingURL=status.js.map