"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSynergies = computeSynergies;
exports.addSynergiesGivenByItems = addSynergiesGivenByItems;
const schema_1 = require("@colyseus/schema");
const Config_1 = require("../../types/Config");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Synergy_1 = require("../../types/enum/Synergy");
const schemas_1 = require("../../utils/schemas");
class Synergies extends schema_1.MapSchema {
    constructor() {
        super();
        Object.keys(Synergy_1.Synergy).forEach((key) => {
            this.set(key, 0);
        });
    }
    countActiveSynergies() {
        let count = 0;
        this.forEach((value, key) => {
            if (value >= Config_1.SynergyTriggers[key][0]) {
                count++;
            }
        });
        return count;
    }
    isActiveSynergy(syn, lvl) {
        return lvl >= Config_1.SynergyTriggers[syn][0];
    }
}
exports.default = Synergies;
function computeSynergies(board) {
    var _a;
    const synergies = new Map();
    Object.keys(Synergy_1.Synergy).forEach((key) => {
        synergies.set(key, 0);
    });
    const typesPerFamily = new Map();
    const dragonDoubleTypes = new Map();
    board.forEach((pkm) => {
        var _a;
        if (pkm.passive === Passive_1.Passive.PROTEAN2 || pkm.passive === Passive_1.Passive.PROTEAN3) {
            pkm.types.forEach((type) => pkm.types.delete(type));
        }
        addSynergiesGivenByItems(pkm);
        if (pkm.positionY != 0) {
            const family = Pokemon_1.PkmFamily[pkm.name];
            if (!typesPerFamily.has(family))
                typesPerFamily.set(family, new Set());
            const types = typesPerFamily.get(family);
            pkm.types.forEach((type) => types.add(type));
            if (pkm.types.has(Synergy_1.Synergy.DRAGON) && pkm.types.size > 1) {
                if (!dragonDoubleTypes.has(family))
                    dragonDoubleTypes.set(family, new Set());
                dragonDoubleTypes.get(family).add((0, schemas_1.values)(pkm.types)[1]);
            }
            if (pkm.items.has(Item_1.Item.SHINY_STONE)) {
                synergies.set(Synergy_1.Synergy.LIGHT, ((_a = synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) + 1);
            }
        }
    });
    typesPerFamily.forEach((types) => {
        types.forEach((type, i) => {
            var _a;
            synergies.set(type, ((_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0) + 1);
        });
    });
    board.forEach((pkm) => {
        var _a;
        if (pkm.positionY !== 0 &&
            (pkm.passive === Passive_1.Passive.PROTEAN2 || pkm.passive === Passive_1.Passive.PROTEAN3)) {
            const n = pkm.passive === Passive_1.Passive.PROTEAN3 ? 3 : 2;
            const synergiesSorted = [...synergies.keys()].sort((a, b) => +synergies.get(b) - synergies.get(a));
            for (let i = 0; i < n; i++) {
                const type = synergiesSorted.shift();
                if (type && !pkm.types.has(type) && synergies.get(type) > 0) {
                    pkm.types.add(type);
                    synergies.set(type, ((_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0) + 1);
                }
            }
        }
    });
    if (((_a = synergies.get(Synergy_1.Synergy.DRAGON)) !== null && _a !== void 0 ? _a : 0) >= Config_1.SynergyTriggers[Synergy_1.Synergy.DRAGON][0]) {
        dragonDoubleTypes.forEach((types) => {
            types.forEach((type, i) => {
                var _a;
                synergies.set(type, ((_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0) + 1);
            });
        });
    }
    return synergies;
}
function addSynergiesGivenByItems(pkm) {
    for (const item of Item_1.SynergyItems) {
        if (pkm.items.has(item) &&
            !(pkm.passive === Passive_1.Passive.RECYCLE && Item_1.ArtificialItems.includes(item))) {
            pkm.types.add(Item_1.SynergyGivenByItem[item]);
        }
    }
}
//# sourceMappingURL=synergies.js.map