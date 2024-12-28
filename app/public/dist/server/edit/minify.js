"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Pokemon_1 = require("../app/types/enum/Pokemon");
const logger_1 = require("../app/utils/logger");
const args = process.argv.slice(2);
const specificIndexToMinify = args[0];
function minifySheet(id) {
    try {
        logger_1.logger.debug(`Minifying sheet ${id}...`);
        const buffer = fs_1.default.readFileSync(`sheets/${id}.json`);
        const json = JSON.parse(buffer.toString());
        delete json.meta;
        fs_1.default.writeFileSync(`sheets/${id}.json`, JSON.stringify(json, null, 0));
        const indexList = JSON.parse(fs_1.default
            .readFileSync("../app/public/src/assets/pokemons/indexList.json")
            .toString());
        if (!indexList.includes(id)) {
            indexList.push(id);
        }
        fs_1.default.writeFileSync("../app/public/src/assets/pokemons/indexList.json", JSON.stringify(indexList, null, 0));
    }
    catch (error) {
        logger_1.logger.error("error id#", id, error);
    }
}
function minifyAll() {
    const pkmaIndexes = new Array();
    Object.values(Pokemon_1.Pkm).forEach((pkm) => {
        const index = Pokemon_1.PkmIndex[pkm];
        if (!pkmaIndexes.includes(index)) {
            pkmaIndexes.push(index);
        }
    });
    pkmaIndexes.forEach((id) => {
        minifySheet(id);
    });
    logger_1.logger.debug(`indexList.json updated`);
}
if (specificIndexToMinify) {
    minifySheet(specificIndexToMinify);
}
else {
    minifyAll();
}
//# sourceMappingURL=minify.js.map