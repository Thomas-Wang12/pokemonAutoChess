"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityStrategy = void 0;
exports.soundBoost = soundBoost;
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Effect_1 = require("../../types/enum/Effect");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Synergy_1 = require("../../types/enum/Synergy");
const distance_1 = require("../../utils/distance");
const abilities_1 = require("./abilities");
const number_1 = require("../../utils/number");
class AbilityStrategy {
    constructor() {
        this.copyable = true;
    }
    process(pokemon, state, board, target, crit, preventDefaultAnim) {
        pokemon.pp = (0, number_1.min)(0)(pokemon.pp - pokemon.maxPP);
        pokemon.count.ult += 1;
        if (!preventDefaultAnim) {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: pokemon.skill,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: target.positionX,
                targetY: target.positionY,
                orientation: pokemon.orientation
            });
        }
        if (pokemon.types.has(Synergy_1.Synergy.SOUND)) {
            soundBoost(pokemon, board);
            if (pokemon.passive === Passive_1.Passive.MEGA_LAUNCHER) {
                soundBoost(pokemon, board);
                soundBoost(pokemon, board);
            }
        }
        board.forEach((x, y, pkm) => {
            if ((pkm === null || pkm === void 0 ? void 0 : pkm.passive) === Passive_1.Passive.WATER_SPRING &&
                pkm &&
                pkm.team !== pokemon.team &&
                pkm.id !== pokemon.id) {
                pkm.addPP(5, pkm, 0, false);
                pkm.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: pkm.skill,
                    positionX: pkm.positionX,
                    positionY: pkm.positionY
                });
            }
        });
        if (pokemon.items.has(Item_1.Item.AQUA_EGG)) {
            pokemon.addPP(20, pokemon, 0, false);
        }
        if (pokemon.items.has(Item_1.Item.STAR_DUST)) {
            pokemon.addShield(Math.round(0.5 * pokemon.maxPP), pokemon, 0, false);
            pokemon.count.starDustCount++;
        }
        if (pokemon.items.has(Item_1.Item.LEPPA_BERRY)) {
            pokemon.eatBerry(Item_1.Item.LEPPA_BERRY);
        }
        if (pokemon.items.has(Item_1.Item.COMFEY)) {
            abilities_1.AbilityStrategies[Ability_1.Ability.FLORAL_HEALING].process(pokemon, state, board, target, crit, true);
        }
        if (pokemon.passive === Passive_1.Passive.SLOW_START && pokemon.count.ult === 1) {
            pokemon.addAttackSpeed(30, pokemon, 0, false);
            pokemon.addAttack(10, pokemon, 0, false);
        }
    }
}
exports.AbilityStrategy = AbilityStrategy;
function soundBoost(pokemon, board) {
    pokemon.count.soundCount++;
    const chimecho = board.find((x, y, e) => e.passive === Passive_1.Passive.CHIMECHO && e.team === pokemon.team);
    const chimechoBoost = chimecho &&
        (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, chimecho.positionX, chimecho.positionY) <= 1;
    board.forEach((x, y, ally) => {
        if (ally && pokemon.team === ally.team) {
            ally.status.sleep = false;
            if (pokemon.effects.has(Effect_1.Effect.LARGO)) {
                ally.addAttack(chimechoBoost ? 4 : 2, pokemon, 0, false);
            }
            if (pokemon.effects.has(Effect_1.Effect.ALLEGRO) ||
                pokemon.effects.has(Effect_1.Effect.PRESTO)) {
                ally.addAttack(chimechoBoost ? 2 : 1, pokemon, 0, false);
                ally.addAttackSpeed(chimechoBoost ? 10 : 5, pokemon, 0, false);
            }
            if (pokemon.effects.has(Effect_1.Effect.PRESTO)) {
                const manaBoost = chimechoBoost ? 6 : 3;
                ally.addPP(manaBoost, pokemon, 0, false);
            }
        }
    });
}
//# sourceMappingURL=ability-strategy.js.map