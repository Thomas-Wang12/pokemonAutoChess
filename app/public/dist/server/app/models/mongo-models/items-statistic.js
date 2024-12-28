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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsStatistics = void 0;
exports.fetchMetaItems = fetchMetaItems;
const mongoose_1 = require("mongoose");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const itemsStatistic = new mongoose_1.Schema({
    rank: {
        type: Number
    },
    count: {
        type: Number
    },
    name: {
        type: String,
        enum: Item_1.Item
    },
    pokemons: [
        {
            type: String,
            enum: Object.values(Pokemon_1.Pkm)
        }
    ]
});
exports.ItemsStatistics = (0, mongoose_1.model)("ItemsStatistic", itemsStatistic, "items-statistic");
exports.default = exports.ItemsStatistics;
function fetchMetaItems() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch("/meta/items").then((res) => res.json());
    });
}
//# sourceMappingURL=items-statistic.js.map