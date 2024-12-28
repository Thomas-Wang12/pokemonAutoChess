import { DtefTileset, Mask, TerrainType, TilesetExchangeFile } from "../types/Config";
import { DungeonPMDO } from "../types/enum/Dungeon";
import { TileMapping } from "./design";
export type TilesetTiled = {
    image: string;
    firstgid: number;
    columns: number;
    tileheight: number;
    tilewidth: number;
    tiles?: AnimationTiled[];
    imageheight: number;
    imagewidth: number;
    margin: number;
    spacing: number;
    name: string;
    tilecount: number;
};
export type LayerTiled = {
    data: number[];
    height: number;
    id: number;
    name: string;
    opacity: number;
    type: string;
    visible: boolean;
    width: number;
    x: number;
    y: number;
};
export type AnimationTiled = {
    animation: FrameTiled[];
    id: number;
};
export type FrameTiled = {
    duration: number;
    tileid: number;
};
export default class Tileset {
    id: DungeonPMDO;
    metadata: TilesetExchangeFile;
    constructor(id: DungeonPMDO);
    getTilemapId(terrain: TerrainType, mask: Mask): TileMapping[];
    getAnimatedVariation(layerId: string, terrain: TerrainType, mask: Mask): TileMapping[];
    getPossibleStaticVariations(terrain: TerrainType, mask: Mask): TileMapping[];
    getPossibleStaticVariation(terrain: TerrainType, mask: Mask, dtef: DtefTileset): TileMapping | undefined;
    exportToTiled(): TilesetTiled[];
}
export declare function getTileId(terrain: TerrainType, mask: Mask, firstGid: number): number;
