"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTilemap = initTilemap;
const Config_1 = require("../types/Config");
const logger_1 = require("../utils/logger");
const masker_1 = __importDefault(require("./masker"));
const terrain_1 = __importDefault(require("./terrain"));
const tileset_1 = __importDefault(require("./tileset"));
class Design {
    constructor(id, frequency, persistance, width, height, arenaRect, wallRect) {
        this.terrain = [];
        this.bitmask = [];
        this.layers = [];
        this.width = 50;
        this.height = 32;
        this.arenaRect = [13, 2, 29, 18];
        this.wallRect = [14, 15, 28, 15];
        this.id = id;
        this.frequency = frequency;
        this.persistance = persistance;
        this.width = width !== null && width !== void 0 ? width : this.width;
        this.height = height !== null && height !== void 0 ? height : this.height;
        this.arenaRect = arenaRect !== null && arenaRect !== void 0 ? arenaRect : this.arenaRect;
        this.wallRect = wallRect !== null && wallRect !== void 0 ? wallRect : this.wallRect;
        this.tileset = new tileset_1.default(this.id);
        this.create();
    }
    create() {
        this.generateTerrain();
        this.generateMask();
        this.generateLayers();
    }
    generateTerrain() {
        const t = new terrain_1.default(this.width, this.height, this.frequency, this.persistance);
        const generation = t.terrain;
        for (let i = 0; i < this.height; i++) {
            const row = [];
            for (let j = 0; j < this.width; j++) {
                const v = generation[i][j];
                if (v > 0.66) {
                    row.push(Config_1.TerrainType.WALL);
                }
                else if (v > 0.33) {
                    row.push(Config_1.TerrainType.GROUND);
                }
                else {
                    row.push(Config_1.TerrainType.WATER);
                }
            }
            this.terrain.push(row);
        }
        for (let i = this.arenaRect[0]; i <= this.arenaRect[2]; i++) {
            for (let j = this.arenaRect[1]; j <= this.arenaRect[3]; j++) {
                if (j in this.terrain && i in this.terrain[j]) {
                    this.terrain[j][i] = Config_1.TerrainType.GROUND;
                }
                else {
                    logger_1.logger.error(`Arena rect is out of terrain`, {
                        arenaRect: this.arenaRect,
                        width: this.width,
                        height: this.height
                    });
                }
            }
        }
        for (let i = this.wallRect[0]; i <= this.wallRect[2]; i++) {
            for (let j = this.wallRect[1]; j <= this.wallRect[3]; j++) {
                if (j in this.terrain && i in this.terrain[j]) {
                    if (i === this.wallRect[0] ||
                        j === this.wallRect[1] ||
                        i === this.wallRect[2] ||
                        j === this.wallRect[3]) {
                        this.terrain[j][i] = Config_1.TerrainType.WALL;
                    }
                }
                else {
                    logger_1.logger.error(`Wall rect is out of terrain`, {
                        wallRect: this.wallRect,
                        width: this.width,
                        height: this.height
                    });
                }
            }
        }
        this.drawGroundRect(9, 13, 3, 3);
        this.drawGroundRect(30, 1, 3, 3);
        for (let y = 4; y < 12; y++)
            this.terrain[y][31] = Config_1.TerrainType.GROUND;
        this.terrain[14][8] = Config_1.TerrainType.GROUND;
        this.terrain[14][7] = Config_1.TerrainType.GROUND;
        this.terrain[14][6] = Config_1.TerrainType.GROUND;
        this.terrain[8][31] = Config_1.TerrainType.GROUND;
    }
    drawGroundRect(x, y, width, height) {
        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                if (j in this.terrain && i in this.terrain[j]) {
                    this.terrain[j][i] =
                        i === x || i === x + width - 1 || j === y || j === y + height - 1
                            ? Config_1.TerrainType.WALL
                            : Config_1.TerrainType.GROUND;
                }
            }
        }
    }
    generateMask() {
        const masker = new masker_1.default();
        for (let i = 0; i < this.height; i++) {
            const row = new Array();
            for (let j = 0; j < this.width; j++) {
                row.push(masker.mask8bits(this.terrain, i, j));
            }
            this.bitmask.push(row);
        }
    }
    generateLayers() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                const tileMapping = this.tileset.getTilemapId(this.terrain[i][j], this.bitmask[i][j]);
                this.layers.push(tileMapping);
            }
        }
    }
    exportLayerToTiled() {
        const layerNames = this.getLayerNames();
        return layerNames.map((name, index) => ({
            data: this.getDataLayer(name),
            height: this.height,
            id: index + 1,
            name: name,
            opacity: 1,
            type: "tilelayer",
            visible: true,
            width: this.width,
            x: 0,
            y: 0
        }));
    }
    getDataLayer(layerId) {
        return this.layers.map((tileMapping) => tileMapping.find((v) => v.layerId === layerId)
            ? tileMapping.find((v) => v.layerId === layerId).id
            : 0);
    }
    getLayerNames() {
        const names = new Array();
        this.layers.forEach((layer) => layer.forEach((tileMapping) => {
            if (!names.includes(tileMapping.layerId)) {
                names.push(tileMapping.layerId);
            }
        }));
        return names;
    }
    exportToTiled() {
        return {
            compressionlevel: -1,
            height: this.height,
            infinite: false,
            layers: this.exportLayerToTiled(),
            nextlayerid: 2,
            nextobjectid: 1,
            orientation: "orthogonal",
            renderorder: "right-down",
            tiledversion: "1.7.2",
            tileheight: 24,
            tilesets: this.tileset.exportToTiled(),
            tilewidth: 24,
            type: "map",
            version: "1.10",
            width: this.width
        };
    }
}
exports.default = Design;
function initTilemap(mapName) {
    const design = new Design(mapName, 5, 0.1);
    design.create();
    const tilemap = design.exportToTiled();
    return tilemap;
}
//# sourceMappingURL=design.js.map