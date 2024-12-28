"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PVEStages = void 0;
const types_1 = require("../types");
const Item_1 = require("../types/enum/Item");
const Pokemon_1 = require("../types/enum/Pokemon");
const random_1 = require("../utils/random");
exports.PVEStages = {
    1: {
        name: "pkm.MAGIKARP",
        avatar: Pokemon_1.Pkm.MAGIKARP,
        board: [
            [Pokemon_1.Pkm.MAGIKARP, 3, 1],
            [Pokemon_1.Pkm.MAGIKARP, 5, 1]
        ],
        shinyChance: 1 / 40,
        getRewards(player) {
            const randomComponent = (0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents);
            player.randomComponentsGiven.push(randomComponent);
            return [randomComponent];
        }
    },
    2: {
        name: "pkm.RATTATA",
        avatar: Pokemon_1.Pkm.RATTATA,
        board: [
            [Pokemon_1.Pkm.RATTATA, 3, 1],
            [Pokemon_1.Pkm.RATTATA, 5, 1]
        ],
        getRewards(player) {
            const randomComponent = (0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents.filter((i) => player.randomComponentsGiven.includes(i) === false));
            player.randomComponentsGiven.push(randomComponent);
            return [randomComponent];
        }
    },
    3: {
        name: "pkm.SPEAROW",
        avatar: Pokemon_1.Pkm.SPEAROW,
        board: [
            [Pokemon_1.Pkm.SPEAROW, 3, 1],
            [Pokemon_1.Pkm.SPEAROW, 5, 1],
            [Pokemon_1.Pkm.SPEAROW, 4, 2]
        ],
        getRewards(player) {
            const randomComponent = (0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents.filter((i) => player.randomComponentsGiven.includes(i) === false));
            player.randomComponentsGiven.push(randomComponent);
            return [randomComponent];
        }
    },
    9: {
        name: "pkm.GYARADOS",
        avatar: Pokemon_1.Pkm.GYARADOS,
        shinyChance: 1 / 40,
        board: [[Pokemon_1.Pkm.GYARADOS, 4, 2]],
        getRewards(player) {
            const randomComponents = (0, random_1.pickNRandomIn)(Item_1.ItemComponents, 1);
            return randomComponents;
        }
    },
    14: {
        name: "pkm.MEWTWO",
        avatar: Pokemon_1.Pkm.MEWTWO,
        emotion: types_1.Emotion.DETERMINED,
        shinyChance: 0,
        board: [
            [Pokemon_1.Pkm.MEWTWO, 4, 2],
            [Pokemon_1.Pkm.MEW, 7, 1]
        ],
        getRewards(player) {
            return [(0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents)];
        }
    },
    19: {
        name: "tower_duo",
        avatar: Pokemon_1.Pkm.LUGIA,
        emotion: types_1.Emotion.DETERMINED,
        shinyChance: 1 / 40,
        board: [
            [Pokemon_1.Pkm.LUGIA, 3, 1],
            [Pokemon_1.Pkm.HO_OH, 5, 1]
        ],
        getRewards(player) {
            return [(0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents)];
        }
    },
    24: {
        name: "legendary_birds",
        avatar: Pokemon_1.Pkm.ZAPDOS,
        board: [
            [Pokemon_1.Pkm.ZAPDOS, 2, 2],
            [Pokemon_1.Pkm.MOLTRES, 4, 2],
            [Pokemon_1.Pkm.ARTICUNO, 6, 2]
        ],
        getRewardsPropositions(player) {
            return (0, random_1.pickNRandomIn)(Item_1.CraftableItems, 3);
        }
    },
    28: {
        name: "legendary_beasts",
        avatar: Pokemon_1.Pkm.SUICUNE,
        emotion: types_1.Emotion.DETERMINED,
        board: [
            [Pokemon_1.Pkm.ENTEI, 2, 2],
            [Pokemon_1.Pkm.RAIKOU, 4, 2],
            [Pokemon_1.Pkm.SUICUNE, 6, 2]
        ],
        getRewardsPropositions(player) {
            return (0, random_1.pickNRandomIn)(Item_1.CraftableItems, 3);
        }
    },
    32: {
        name: "super_ancients",
        avatar: Pokemon_1.Pkm.RAYQUAZA,
        emotion: types_1.Emotion.DETERMINED,
        board: [
            [Pokemon_1.Pkm.PRIMAL_KYOGRE, 2, 2],
            [Pokemon_1.Pkm.MEGA_RAYQUAZA, 4, 2],
            [Pokemon_1.Pkm.PRIMAL_GROUDON, 6, 2]
        ],
        getRewardsPropositions(player) {
            return (0, random_1.pickNRandomIn)(Item_1.CraftableItems, 3);
        }
    },
    36: {
        name: "legendary_giants",
        avatar: Pokemon_1.Pkm.REGICE,
        emotion: types_1.Emotion.DETERMINED,
        board: [
            [Pokemon_1.Pkm.REGIELEKI, 2, 2],
            [Pokemon_1.Pkm.REGICE, 2, 3],
            [Pokemon_1.Pkm.REGIGIGAS, 3, 3],
            [Pokemon_1.Pkm.REGIROCK, 4, 3],
            [Pokemon_1.Pkm.REGISTEEL, 5, 3],
            [Pokemon_1.Pkm.REGIDRAGO, 5, 2]
        ],
        getRewardsPropositions(player) {
            return (0, random_1.pickNRandomIn)(Item_1.CraftableItems, 3);
        }
    },
    40: {
        name: "pkm.ARCEUS",
        avatar: Pokemon_1.Pkm.ARCEUS,
        emotion: types_1.Emotion.INSPIRED,
        board: [
            [Pokemon_1.Pkm.DIALGA, 2, 3],
            [Pokemon_1.Pkm.GIRATINA, 4, 3],
            [Pokemon_1.Pkm.PALKIA, 6, 3],
            [Pokemon_1.Pkm.ARCEUS, 4, 1]
        ],
        getRewardsPropositions(player) {
            return (0, random_1.pickNRandomIn)(Item_1.ShinyItems, 3);
        }
    }
};
//# sourceMappingURL=pve-stages.js.map