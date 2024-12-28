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
exports.fetchTitles = fetchTitles;
const mongoose_1 = require("mongoose");
const types_1 = require("../../types");
const titleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        enum: types_1.Title
    },
    rarity: {
        type: Number
    }
});
exports.default = (0, mongoose_1.model)("TitleStatistic", titleSchema);
function fetchTitles() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch("/titles").then((res) => res.json());
    });
}
//# sourceMappingURL=title-statistic.js.map