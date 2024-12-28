"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Pokemon_1 = require("../app/types/enum/Pokemon");
const pathlib = __importStar(require("path"));
const os = __importStar(require("os"));
const args = process.argv.slice(2);
const path = args[0];
const pkmIndex = args[1];
function expandHomeDir(filePath) {
    if (filePath.startsWith('~')) {
        return pathlib.join(os.homedir(), filePath.slice(1));
    }
    return filePath;
}
const creditsName = fs_1.default.readFileSync(expandHomeDir(`${path}/credit_names.txt`));
fs_1.default.writeFileSync("sheets/credit_names.txt", creditsName);
fs_extra_1.default.copySync(`sheets/durations.json`, `../app/public/src/assets/pokemons/durations.json`, {
    overwrite: true
});
fs_extra_1.default.copySync(`sheets/delays.json`, `../app/types/delays.json`, {
    overwrite: true
});
if (pkmIndex) {
    moveSheet(pkmIndex);
}
else {
    moveAll();
}
function moveSheet(pkmIndex) {
    try {
        fs_extra_1.default.copySync(`sheets/${pkmIndex}.json`, `../app/public/src/assets/pokemons/${pkmIndex}.json`, {
            overwrite: true
        });
        fs_extra_1.default.copySync(`sheets/${pkmIndex}.png`, `../app/public/src/assets/pokemons/${pkmIndex}.png`, {
            overwrite: true
        });
    }
    catch (err) {
        console.warn(`Sheet not found for ${pkmIndex}`);
    }
}
function moveAll() {
    Object.values(Pokemon_1.PkmIndex).forEach((index) => moveSheet(index));
}
//# sourceMappingURL=move.js.map