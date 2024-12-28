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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnvironmentMultiAtlas = loadEnvironmentMultiAtlas;
const i18next_1 = require("i18next");
const AnimatedTiles_min_js_1 = __importDefault(require("phaser-animated-tiles-phaser3.5/dist/AnimatedTiles.min.js"));
const package_json_1 = __importDefault(require("../../../../../package.json"));
const Dungeon_1 = require("../../../../types/enum/Dungeon");
const schemas_1 = require("../../../../utils/schemas");
const indexList_json_1 = __importDefault(require("../../../src/assets/pokemons/indexList.json"));
const atlas_json_1 = __importDefault(require("../../assets/atlas.json"));
const audio_1 = require("../../pages/utils/audio");
const avatar_1 = require("../../../../utils/avatar");
const game_scene_1 = __importDefault(require("../scenes/game-scene"));
class LoadingManager {
    constructor(scene) {
        this.loadingBar = null;
        this.scene = scene;
        this.statusMessage = (0, i18next_1.t)("loading");
        this.scene.load.on("fileprogress", (file, percentComplete) => {
            if (percentComplete < 1) {
                this.statusMessage = (0, i18next_1.t)("loading_asset") + " " + file.key;
            }
        });
        this.scene.load.on("complete", () => {
            this.statusMessage = (0, i18next_1.t)("loading_complete");
        });
        this.preload();
    }
    preload() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const scene = this.scene;
            scene.load.xhr.timeout = 5000;
            scene.load.scenePlugin("animatedTiles", AnimatedTiles_min_js_1.default, "animatedTiles", "animatedTiles");
            scene.load.json("pokemons-atlas", `/assets/pokemons.json?v=${package_json_1.default.version}`);
            scene.load.once("filecomplete-json-pokemons-atlas", (key, type, compressedAtlas) => {
                var _a;
                for (const image in compressedAtlas) {
                    const data = compressedAtlas[image];
                    function traverse(obj, path, frames) {
                        if (Array.isArray(obj)) {
                            const [sourceSizew, sourceSizeh, spriteSourceSizex, spriteSourceSizey, spriteSourceSizew, spriteSourceSizeh, framex, framey, framew, frameh] = obj;
                            frames.push({
                                filename: path,
                                rotated: false,
                                trimmed: true,
                                sourceSize: {
                                    w: sourceSizew,
                                    h: sourceSizeh
                                },
                                spriteSourceSize: {
                                    x: spriteSourceSizex,
                                    y: spriteSourceSizey,
                                    w: spriteSourceSizew,
                                    h: spriteSourceSizeh
                                },
                                frame: {
                                    x: framex,
                                    y: framey,
                                    w: framew,
                                    h: frameh
                                }
                            });
                        }
                        else if (obj instanceof Object) {
                            for (const key in obj) {
                                traverse(obj[key], path ? path + "/" + key : key, frames);
                            }
                        }
                    }
                    const frames = [];
                    traverse(data.a, "", frames);
                    const multiatlas = {
                        textures: [
                            {
                                image: image,
                                format: "RGBA8888",
                                size: {
                                    w: data.s[0],
                                    h: data.s[1]
                                },
                                scale: (_a = data.s[2]) !== null && _a !== void 0 ? _a : 1,
                                frames
                            }
                        ]
                    };
                    const index = image.replace(".png", "");
                    scene.load.multiatlas(index, multiatlas, "/assets/pokemons");
                }
            });
            indexList_json_1.default.forEach((id) => {
                scene.load.image(`portrait-${id}`, (0, avatar_1.getPortraitSrc)(id));
            });
            if (scene instanceof game_scene_1.default) {
                const players = (0, schemas_1.values)((_a = scene.room) === null || _a === void 0 ? void 0 : _a.state.players);
                const player = (_b = players.find((p) => p.id === scene.uid)) !== null && _b !== void 0 ? _b : players[0];
                yield scene.preloadMaps(players.map((p) => p.map));
                (0, audio_1.preloadMusic)(scene, Dungeon_1.DungeonDetails[player.map].music);
            }
            scene.load.image("rain", "/assets/ui/rain.png");
            scene.load.image("sand", "/assets/ui/sand.png");
            scene.load.image("wind", "/assets/ui/wind.png");
            scene.load.image("smog", "/assets/ui/smog.png");
            scene.load.image("sun", "/assets/ui/sun.png");
            scene.load.image("clouds", "/assets/ui/clouds.png");
            scene.load.multiatlas("snowflakes", "/assets/ui/snowflakes.json", "/assets/ui/");
            scene.load.image("money", "/assets/icons/money.svg");
            scene.load.image("arrowDown", "/assets/ui/arrowDown.png");
            scene.load.spritesheet({
                key: "cell",
                url: "/assets/ui/cell.png",
                frameConfig: {
                    frameWidth: 64,
                    frameHeight: 64,
                    startFrame: 0,
                    endFrame: 23
                }
            });
            for (const pack in atlas_json_1.default.packs) {
                scene.load.multiatlas(atlas_json_1.default.packs[pack].name, `/assets/${pack}/${atlas_json_1.default.packs[pack].name}.json?v=${package_json_1.default.version}`, `/assets/${pack}/`);
            }
            loadEnvironmentMultiAtlas(this.scene);
        });
    }
}
exports.default = LoadingManager;
function loadEnvironmentMultiAtlas(scene) {
    scene.load.multiatlas("portal", "/assets/environment/portal.json", "/assets/environment/");
    scene.load.multiatlas("chest", "/assets/environment/chest.json", "/assets/environment/");
    scene.load.multiatlas("shine", "/assets/environment/shine.json", "/assets/environment/");
    scene.load.multiatlas("berry_trees", "/assets/environment/berry_trees.json", "/assets/environment/");
}
//# sourceMappingURL=loading-manager.js.map