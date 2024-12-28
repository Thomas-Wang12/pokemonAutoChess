"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemEffects = void 0;
exports.getWonderboxItems = getWonderboxItems;
exports.onItemRemoved = onItemRemoved;
const Item_1 = require("../types/enum/Item");
const effect_1 = require("./effect");
const random_1 = require("../utils/random");
const number_1 = require("../utils/number");
function getWonderboxItems(existingItems) {
    const wonderboxItems = [];
    for (let n = 0; n < 2; n++) {
        const elligibleItems = Item_1.CraftableItems.filter((i) => !Item_1.SynergyStones.includes(i) &&
            !wonderboxItems.includes(i) &&
            !existingItems.has(i) &&
            i !== Item_1.Item.WONDER_BOX);
        wonderboxItems.push((0, random_1.pickRandomIn)(elligibleItems));
    }
    return wonderboxItems;
}
function onItemRemoved(item, pokemon) {
    if (item in Item_1.SynergyGivenByItem) {
        pokemon.types.delete(Item_1.SynergyGivenByItem[item]);
    }
}
exports.ItemEffects = {
    [Item_1.Item.SOUL_DEW]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.triggerSoulDew(1000);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.soulDew = false;
            pokemon.status.soulDewCooldown = 0;
            pokemon.addAbilityPower(-10 * pokemon.count.soulDewCount, pokemon, 0, false);
            pokemon.count.soulDewCount = 0;
        })
    ],
    [Item_1.Item.WIDE_LENS]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.range += 2;
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.range = (0, number_1.min)(1)(pokemon.range - 2);
        })
    ],
    [Item_1.Item.MAX_REVIVE]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.addResurrection(pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.resurection = false;
        })
    ],
    [Item_1.Item.SWIFT_WING]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addDodgeChance(0.1, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addDodgeChance(-0.1, pokemon, 0, false);
        })
    ],
    [Item_1.Item.FLAME_ORB]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addAttack(pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.triggerBurn(60000, pokemon, pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addAttack(-pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.burnCooldown = 0;
        })
    ],
    [Item_1.Item.TOXIC_ORB]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addAttack(pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.triggerPoison(60000, pokemon, pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addAttack(-pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.poisonCooldown = 0;
        })
    ],
    [Item_1.Item.POKERUS_VIAL]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.triggerPokerus(pokemon);
        })
    ],
    [Item_1.Item.FLUFFY_TAIL]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.triggerRuneProtect(60000);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.runeProtectCooldown = 0;
        })
    ],
    [Item_1.Item.KINGS_ROCK]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addShield(0.3 * pokemon.baseHP, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addShield(-0.3 * pokemon.baseHP, pokemon, 0, false);
        })
    ],
    [Item_1.Item.DYNAMAX_BAND]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addMaxHP(2.5 * pokemon.baseHP, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addMaxHP(-2.5 * pokemon.baseHP, pokemon, 0, false);
        })
    ],
    [Item_1.Item.GOLD_BOTTLE_CAP]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            var _a, _b, _c, _d;
            pokemon.addCritChance((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) !== null && _b !== void 0 ? _b : 0, pokemon, 0, false);
            pokemon.addCritPower((_d = (_c = pokemon.player) === null || _c === void 0 ? void 0 : _c.money) !== null && _d !== void 0 ? _d : 0, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            var _a, _b, _c, _d;
            pokemon.addCritChance(-((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) !== null && _b !== void 0 ? _b : 0), pokemon, 0, false);
            pokemon.addCritPower(-((_d = (_c = pokemon.player) === null || _c === void 0 ? void 0 : _c.money) !== null && _d !== void 0 ? _d : 0), pokemon, 0, false);
        }),
        new effect_1.OnKillEffect((pokemon, target, board) => {
            if (pokemon.player) {
                const isLastEnemy = board.cells.some((p) => p &&
                    p.team !== pokemon.team &&
                    (p.life > 0 || p.status.resurecting)) === false;
                pokemon.count.bottleCapCount++;
                const moneyGained = isLastEnemy ? pokemon.count.bottleCapCount + 1 : 1;
                pokemon.player.addMoney(moneyGained, true, pokemon);
                pokemon.count.moneyCount += moneyGained;
            }
        })
    ],
    [Item_1.Item.REPEAT_BALL]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            var _a, _b;
            pokemon.addAbilityPower(Math.floor((((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.rerollCount) !== null && _b !== void 0 ? _b : 0) + pokemon.simulation.stageLevel) /
                2), pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            var _a, _b;
            pokemon.addAbilityPower(-Math.floor((((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.rerollCount) !== null && _b !== void 0 ? _b : 0) + pokemon.simulation.stageLevel) /
                2), pokemon, 0, false);
        })
    ],
    [Item_1.Item.SACRED_ASH]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.addResurrection(pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.resurection = false;
        })
    ],
    [Item_1.Item.UPGRADE]: [
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addAttackSpeed(-5 * pokemon.count.upgradeCount, pokemon, 0, false);
            pokemon.count.upgradeCount = 0;
        })
    ],
    [Item_1.Item.DEFENSIVE_RIBBON]: [
        new effect_1.OnItemRemovedEffect((pokemon) => {
            const stacks = Math.floor(pokemon.count.defensiveRibbonCount / 2);
            pokemon.addAttack(-stacks, pokemon, 0, false);
            pokemon.addDefense(-stacks, pokemon, 0, false);
            pokemon.addAttackSpeed(-5 * stacks, pokemon, 0, false);
            pokemon.count.defensiveRibbonCount = 0;
        })
    ],
    [Item_1.Item.AMULET_COIN]: [
        new effect_1.OnKillEffect((pokemon) => {
            if (pokemon.player) {
                pokemon.player.addMoney(1, true, pokemon);
                pokemon.count.moneyCount += 1;
                pokemon.count.amuletCoinCount += 1;
            }
        })
    ]
};
//# sourceMappingURL=items.js.map