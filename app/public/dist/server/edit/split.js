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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDurationsFile = loadDurationsFile;
exports.loadDelaysFile = loadDelaysFile;
exports.saveDurationsFile = saveDurationsFile;
exports.saveDelaysFile = saveDelaysFile;
exports.saveMissingFiles = saveMissingFiles;
const fast_xml_parser_1 = require("fast-xml-parser");
const fs_1 = __importDefault(require("fs"));
const graceful_fs_1 = __importDefault(require("graceful-fs"));
const jimp_1 = require("jimp");
const Animation_1 = require("../app/types/Animation");
const Game_1 = require("../app/types/enum/Game");
const Pokemon_1 = require("../app/types/enum/Pokemon");
const logger_1 = require("../app/utils/logger");
const pathlib = __importStar(require("path"));
const os = __importStar(require("os"));
const fs_extra_1 = require("fs-extra");
graceful_fs_1.default.gracefulify(fs_1.default);
const args = process.argv.slice(2);
const path = args[0];
const specificIndexToSplit = args[1];
function expandHomeDir(filePath) {
    if (filePath.startsWith("~")) {
        return pathlib.join(os.homedir(), filePath.slice(1));
    }
    return filePath;
}
const mapName = new Map();
mapName.set("0000", "missingno");
const pkmaIndexes = ["0000"];
Object.values(Pokemon_1.Pkm).forEach((pkm) => {
    const index = Pokemon_1.PkmIndex[pkm];
    if (!pkmaIndexes.includes(index)) {
        pkmaIndexes.push(index);
        mapName.set(index, pkm);
    }
});
logger_1.logger.debug(mapName);
const durations = {};
const delays = {};
let missing = "";
function splitAll() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < pkmaIndexes.length; i++) {
            const index = pkmaIndexes[i];
            logger_1.logger.debug(`${i}/${pkmaIndexes.length - 1} (${((i * 100) / (pkmaIndexes.length - 1)).toFixed(2)}%) #${index} ${mapName.get(index)}`);
            yield splitIndex(index);
        }
    });
}
function loadDurationsFile() {
    const rawdata = fs_1.default.readFileSync("../app/public/src/assets/pokemons/durations.json", "utf8");
    Object.assign(durations, JSON.parse(rawdata));
    logger_1.logger.debug(`Loaded durations file, ${Object.keys(durations).length} durations already computed`);
}
function loadDelaysFile() {
    try {
        const rawdata = fs_1.default.readFileSync("../app/types/delays.json", "utf8");
        Object.assign(delays, JSON.parse(rawdata));
        logger_1.logger.debug(`Loaded delays file, ${Object.keys(delays).length} delays already computed`);
    }
    catch (error) {
        logger_1.logger.error(error);
    }
}
function saveDurationsFile() {
    const fileA = fs_1.default.createWriteStream("./sheets/durations.json");
    fileA.on("error", function (err) {
        logger_1.logger.error(err);
    });
    fileA.write(JSON.stringify(durations));
    fileA.end();
    logger_1.logger.debug(`Saved durations file, ${Object.keys(durations).length} durations entries`);
}
function saveDelaysFile() {
    const fileA = fs_1.default.createWriteStream("./sheets/delays.json");
    fileA.on("error", function (err) {
        logger_1.logger.error(err);
    });
    fileA.write(JSON.stringify(delays));
    fileA.end();
    logger_1.logger.debug(`Saved delays file, ${Object.keys(delays).length} delays entries`);
}
function saveMissingFiles() {
    const fileB = fs_1.default.createWriteStream("sheets/missing.txt");
    fileB.on("error", function (err) {
        logger_1.logger.error(err);
    });
    fileB.write(missing);
    fileB.end();
}
function removeBlue(cropImg) {
    cropImg.scan(0, 0, cropImg.bitmap.width, cropImg.bitmap.height, (x, y, idx) => {
        if (cropImg.bitmap.data[idx] == 0 &&
            cropImg.bitmap.data[idx + 1] == 0 &&
            cropImg.bitmap.data[idx + 2] != 0) {
            cropImg.bitmap.data[idx] = 0;
            cropImg.bitmap.data[idx + 1] = 0;
            cropImg.bitmap.data[idx + 2] = 0;
            cropImg.bitmap.data[idx + 3] = 0;
        }
    });
}
function removeRed(cropImg) {
    cropImg.scan(0, 0, cropImg.bitmap.width, cropImg.bitmap.height, (x, y, idx) => {
        if (cropImg.bitmap.data[idx] != 0 &&
            cropImg.bitmap.data[idx + 1] == 0 &&
            cropImg.bitmap.data[idx + 2] == 0) {
            cropImg.bitmap.data[idx] = 0;
            cropImg.bitmap.data[idx + 1] = 0;
            cropImg.bitmap.data[idx + 2] = 0;
            cropImg.bitmap.data[idx + 3] = 0;
        }
    });
}
function zeroPad(num) {
    return ("0000" + num).slice(-4);
}
function splitIndex(index) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const pathIndex = index.replace("-", "/");
        const shinyPad = pathIndex.length == 4 ? `${pathIndex}/0000/0001` : `${pathIndex}/0001`;
        const allPads = [pathIndex, shinyPad];
        for (let j = 0; j < allPads.length; j++) {
            const pad = allPads[j];
            try {
                const shiny = pathIndex == pad ? Game_1.PokemonTint.NORMAL : Game_1.PokemonTint.SHINY;
                const xmlFile = fs_1.default.readFileSync(expandHomeDir(`${path}/sprite/${pad}/AnimData.xml`));
                const parser = new fast_xml_parser_1.XMLParser();
                const xmlData = parser.parse(xmlFile);
                let attackMetadata = xmlData.AnimData.Anims.Anim.find((m) => m.Name === Pokemon_1.AnimationConfig[mapName.get(index)].attack);
                if (attackMetadata) {
                    if (attackMetadata && attackMetadata.CopyOf) {
                        attackMetadata =
                            (_a = xmlData.AnimData.Anims.Anim.find((m) => m.Name == (attackMetadata === null || attackMetadata === void 0 ? void 0 : attackMetadata.CopyOf))) !== null && _a !== void 0 ? _a : attackMetadata;
                    }
                    if (!((_b = attackMetadata === null || attackMetadata === void 0 ? void 0 : attackMetadata.Durations) === null || _b === void 0 ? void 0 : _b.Duration)) {
                        logger_1.logger.error("no duration found for attack metadata", attackMetadata);
                    }
                    else {
                        const attackDurations = attackMetadata.Durations.Duration.length !== undefined
                            ? [...attackMetadata.Durations.Duration]
                            : [attackMetadata.Durations.Duration];
                        delays[index] = {
                            d: attackDurations
                                .slice(0, attackMetadata.HitFrame)
                                .reduce((prev, curr) => prev + curr, 0),
                            t: attackDurations.reduce((prev, curr) => prev + curr, 0)
                        };
                    }
                }
                for (let k = 0; k < Object.values(Game_1.SpriteType).length; k++) {
                    const anim = Object.values(Game_1.SpriteType)[k];
                    const conf = mapName.get(index);
                    const actions = [
                        Animation_1.AnimationType.Idle,
                        Animation_1.AnimationType.Walk,
                        Animation_1.AnimationType.Sleep,
                        Animation_1.AnimationType.Hop,
                        Animation_1.AnimationType.Hurt
                    ];
                    if (conf && Pokemon_1.AnimationConfig[conf]) {
                        if (!actions.includes(Pokemon_1.AnimationConfig[conf].attack)) {
                            actions.push(Pokemon_1.AnimationConfig[conf].attack);
                        }
                        if (!actions.includes(Pokemon_1.AnimationConfig[conf].ability)) {
                            actions.push(Pokemon_1.AnimationConfig[conf].ability);
                        }
                        if (!actions.includes(Pokemon_1.AnimationConfig[conf].emote)) {
                            actions.push(Pokemon_1.AnimationConfig[conf].emote);
                        }
                    }
                    else {
                        actions.push(Animation_1.AnimationType.Attack);
                    }
                    for (let l = 0; l < actions.length; l++) {
                        const action = actions[l];
                        try {
                            let metadata = xmlData.AnimData.Anims.Anim.find((m) => m.Name == action);
                            const img = metadata && metadata.CopyOf
                                ? yield jimp_1.Jimp.read(expandHomeDir(`${path}/sprite/${pad}/${metadata.CopyOf}-${anim}.png`))
                                : yield jimp_1.Jimp.read(expandHomeDir(`${path}/sprite/${pad}/${action}-${anim}.png`));
                            if (metadata === null || metadata === void 0 ? void 0 : metadata.CopyOf) {
                                metadata = xmlData.AnimData.Anims.Anim.find((m) => m.Name == (metadata === null || metadata === void 0 ? void 0 : metadata.CopyOf));
                            }
                            if (!((_c = metadata === null || metadata === void 0 ? void 0 : metadata.Durations) === null || _c === void 0 ? void 0 : _c.Duration)) {
                                logger_1.logger.error("no duration found for metadata", metadata);
                            }
                            else {
                                durations[`${index}/${shiny}/${action}/${anim}`] =
                                    (metadata === null || metadata === void 0 ? void 0 : metadata.Durations.Duration.length) !== undefined
                                        ? [...metadata.Durations.Duration]
                                        : [metadata.Durations.Duration];
                                const frameHeight = metadata === null || metadata === void 0 ? void 0 : metadata.FrameHeight;
                                const frameWidth = metadata === null || metadata === void 0 ? void 0 : metadata.FrameWidth;
                                if (frameWidth && frameHeight) {
                                    const width = img.width / frameWidth;
                                    const height = img.height / frameHeight;
                                    for (let x = 0; x < width; x++) {
                                        for (let y = 0; y < height; y++) {
                                            const cropImg = img.clone();
                                            if (anim == Game_1.SpriteType.SHADOW) {
                                                const shadow = xmlData.AnimData.ShadowSize;
                                                if (shadow == 0) {
                                                    removeRed(cropImg);
                                                    removeBlue(cropImg);
                                                }
                                                else if (shadow == 1) {
                                                    removeBlue(cropImg);
                                                }
                                                cropImg.scan(0, 0, cropImg.bitmap.width, cropImg.bitmap.height, (x, y, idx) => {
                                                    if (cropImg.bitmap.data[idx + 3] != 0) {
                                                        cropImg.bitmap.data[idx] = 0;
                                                        cropImg.bitmap.data[idx + 1] = 0;
                                                        cropImg.bitmap.data[idx + 2] = 0;
                                                    }
                                                });
                                            }
                                            cropImg.crop({
                                                x: x * frameWidth,
                                                y: y * frameHeight,
                                                w: frameWidth,
                                                h: frameHeight
                                            });
                                            yield (0, fs_extra_1.ensureDir)(`split/${index}/${shiny}/${action}/${anim}/${y}`);
                                            yield cropImg.write(`split/${index}/${shiny}/${action}/${anim}/${y}/${zeroPad(x)}.png`);
                                        }
                                    }
                                }
                            }
                        }
                        catch (error) {
                            logger_1.logger.error(error);
                            logger_1.logger.warn("action", action, "is missing for index", index, mapName.get(index));
                        }
                        logger_1.logger.debug("split", index, shiny, anim, action);
                    }
                }
            }
            catch (error) {
                logger_1.logger.warn("pokemon with index", index, "not found", mapName.get(index), "path: ", `${path}/sprite/${pad}/AnimData.xml`, error);
                missing += `${mapName.get(index)},${pad}/AnimData.xml\n`;
            }
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        loadDelaysFile();
        loadDurationsFile();
        if (specificIndexToSplit) {
            yield splitIndex(specificIndexToSplit);
            saveDurationsFile();
            saveDelaysFile();
        }
        else {
            logger_1.logger.info("started spliting all ...");
            yield splitAll();
            logger_1.logger.info("saving durations files ...");
            saveDurationsFile();
            logger_1.logger.info("saving missing files ...");
            saveMissingFiles();
            logger_1.logger.info("saving delays files ...");
            saveDelaysFile();
        }
    });
}
main();
//# sourceMappingURL=split.js.map