"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTileId = getTileId;
const fs_extra_1 = require("fs-extra");
const Config_1 = require("../types/Config");
const logger_1 = require("../utils/logger");
const random_1 = require("../utils/random");
const src = "app/public/dist/client/assets/tilesets";
class Tileset {
    constructor(id) {
        this.id = id;
        this.metadata = (0, fs_extra_1.readJsonSync)(`${src}/${this.id}/metadata.json`);
    }
    getTilemapId(terrain, mask) {
        const mappedTile = new Array();
        const possibleStaticVariations = this.getPossibleStaticVariations(terrain, mask);
        const chosenStaticVariation = Math.random() > 0.8
            ? (0, random_1.pickRandomIn)(possibleStaticVariations)
            : possibleStaticVariations[0];
        mappedTile.push(chosenStaticVariation);
        const animatedVariations = this.getAnimatedVariation(chosenStaticVariation.layerId, terrain, mask);
        animatedVariations.forEach((anim) => mappedTile.push(anim));
        return mappedTile;
    }
    getAnimatedVariation(layerId, terrain, mask) {
        const mappedAnimations = new Array();
        if (Object.keys(this.metadata).includes(layerId)) {
            ;
            this.metadata[layerId].animation.forEach((animatedFrame) => {
                if (animatedFrame.maskDefinition[terrain].includes(mask)) {
                    mappedAnimations.push({
                        id: getTileId(terrain, mask, animatedFrame.firstgid),
                        layerId: animatedFrame.name
                    });
                }
            });
        }
        else {
            logger_1.logger.warn("error with layer id", layerId);
        }
        return mappedAnimations;
    }
    getPossibleStaticVariations(terrain, mask) {
        const possibleStaticVariations = new Array();
        [
            this.metadata.tileset_0,
            this.metadata.tileset_1,
            this.metadata.tileset_2
        ].forEach((metadata) => {
            if (metadata) {
                const possibleVariation = this.getPossibleStaticVariation(terrain, mask, metadata);
                possibleVariation && possibleStaticVariations.push(possibleVariation);
            }
        });
        return possibleStaticVariations;
    }
    getPossibleStaticVariation(terrain, mask, dtef) {
        return dtef.static.maskDefinition[terrain].includes(mask)
            ? {
                id: getTileId(terrain, mask, dtef.static.firstgid),
                layerId: dtef.static.name
            }
            : undefined;
    }
    exportToTiled() {
        const tilesets = new Array();
        for (let i = 0; i < 3; i++) {
            const t = this.metadata[`tileset_${i}`];
            tilesets.push((0, fs_extra_1.readJsonSync)(`${src}/${this.id}/${t.static.name}.json`));
            t.animation.forEach((animatedFrame) => {
                tilesets.push((0, fs_extra_1.readJsonSync)(`${src}/${this.id}/${animatedFrame.name}.json`));
            });
        }
        return tilesets;
    }
}
exports.default = Tileset;
function getTileId(terrain, mask, firstGid) {
    const maskCoordinate = Config_1.MaskCoordinate[mask];
    const pixelX = maskCoordinate.x + terrain * Config_1.DTEF_TILESET_WIDTH;
    const pixelY = maskCoordinate.y;
    return pixelY * Config_1.DTEF_TILESET_WIDTH * 3 + pixelX + firstGid;
}
//# sourceMappingURL=tileset.js.map