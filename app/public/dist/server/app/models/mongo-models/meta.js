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
exports.fetchMeta = fetchMeta;
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    cluster_id: {
        type: String
    },
    rank: {
        type: Number
    },
    x: {
        type: Number
    },
    y: {
        type: Number
    },
    pokemons: Object
});
const metaSchema = new mongoose_1.Schema({
    cluster_id: {
        type: String
    },
    count: {
        type: Number
    },
    ratio: {
        type: Number
    },
    winrate: {
        type: Number
    },
    mean_rank: {
        type: Number
    },
    types: Object,
    pokemons: Object,
    teams: [teamSchema]
});
exports.default = (0, mongoose_1.model)("Meta", metaSchema, "meta");
function fetchMeta() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch("/meta").then((res) => res.json());
    });
}
//# sourceMappingURL=meta.js.map