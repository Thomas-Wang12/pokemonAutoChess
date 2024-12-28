"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const pokemon = new mongoose_1.Schema({
    name: {
        type: String,
        enum: Object.values(Pokemon_1.Pkm)
    },
    avatar: {
        type: String
    },
    items: [
        {
            type: String,
            enum: Item_1.Item
        }
    ]
});
const statisticSchema = new mongoose_1.Schema({
    playerId: {
        type: String
    },
    elo: {
        type: Number
    },
    time: {
        type: Number
    },
    name: {
        type: String
    },
    rank: {
        type: Number
    },
    nbplayers: {
        type: Number
    },
    avatar: {
        type: String
    },
    pokemons: [pokemon],
    synergies: {
        type: Map,
        of: Number
    }
});
exports.default = (0, mongoose_1.model)("DetailledStatisticV2", statisticSchema);
//# sourceMappingURL=detailled-statistic-v2.js.map