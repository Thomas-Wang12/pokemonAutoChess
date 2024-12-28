import { Emotion } from ".";
import { EloRank } from "./enum/EloRank";
import { AttackType, Rarity, Stat } from "./enum/Game";
import { FishingRod, Item } from "./enum/Item";
import { PkmProposition } from "./enum/Pokemon";
import { Synergy } from "./enum/Synergy";
import { Weather } from "./enum/Weather";
export declare const ON_ATTACK_MANA = 5;
export declare const MANA_SCARF_MANA = 8;
export declare const SCOPE_LENS_MANA = 15;
export declare const ARMOR_FACTOR = 0.1;
export declare const BOARD_WIDTH = 8;
export declare const BOARD_HEIGHT = 6;
export declare const RarityHpCost: {
    [key in Rarity]: number;
};
export declare const RarityCost: {
    [key in Rarity]: number;
};
export declare const EmotionCost: {
    [key in Emotion]: number;
};
export declare function getEmotionCost(emotion: Emotion, isShiny: boolean): number;
export declare const ExpTable: {
    [key: number]: number;
};
export declare const SynergyTriggers: {
    [key in Synergy]: number[];
};
export declare const MinStageLevelForGameToCount = 10;
export declare const ExpPlace: number[];
export declare const RarityColor: {
    [key in Rarity]: string;
};
export declare const BoosterRarityProbability: {
    [key in Rarity]: number;
};
export declare const DITTO_RATE = 0.005;
export declare const KECLEON_RATE: number;
export declare const ARCEUS_RATE: number;
export declare const AttackTypeColor: {
    [key in AttackType]: ;
};
export declare const RarityProbabilityPerLevel: {
    [key: number]: number[];
};
export declare const EvolutionTime: {
    EGG_HATCH: number;
    EVOLVE_HATCH: number;
};
export declare const KECLEON_SHOP_COST = 10;
export declare const PoolSize: {
    [key in Rarity]: [number, number, number];
};
export declare const UniqueShop: PkmProposition[];
export declare const LegendaryShop: PkmProposition[];
export declare const NB_UNIQUE_PROPOSITIONS = 6;
export declare const SHOP_SIZE = 6;
export declare const FishRarityProbability: {
    [rod in FishingRod]: {
        [key in Rarity]?: number;
    };
};
export declare const MAX_POOL_CONNECTIONS_SIZE = 16;
export declare const MAX_CONCURRENT_PLAYERS_ON_SERVER = 1000;
export declare const MAX_CONCURRENT_PLAYERS_ON_LOBBY = 500;
export declare const MAX_PLAYERS_PER_GAME = 8;
export declare const MIN_HUMAN_PLAYERS: number;
export declare const INACTIVITY_TIMEOUT: number;
export declare const DEFAULT_ATK_SPEED = 0.75;
export declare const DEFAULT_CRIT_CHANCE = 10;
export declare const DEFAULT_CRIT_POWER = 2;
export declare const PROJECTILE_SPEED = 4;
export declare const StageDuration: Record<number | "DEFAULT", number>;
export declare const FIGHTING_PHASE_DURATION = 40000;
export declare const ITEM_CAROUSEL_BASE_DURATION = 15000;
export declare const PORTAL_CAROUSEL_BASE_DURATION = 20000;
export declare const ItemCarouselStages: number[];
export declare const ItemProposalStages: number[];
export declare const AdditionalPicksStages: number[];
export declare const PortalCarouselStages: number[];
export declare const EloRankThreshold: {
    [key in EloRank]: number;
};
export declare const WeatherThreshold: {
    [weather in Weather]: number;
};
export declare const MaskCoordinate: {
    [key in Mask]: {
        x: number;
        y: number;
    };
};
export declare enum Mask {
    X = "X",
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    AB = "AB",
    AC = "AC",
    AD = "AD",
    BC = "BC",
    BD = "BD",
    CD = "CD",
    ABC = "ABC",
    ABD = "ABD",
    ACD = "ACD",
    BCD = "BCD",
    ABCD = "ABCD",
    A1B = "A1B",
    B2C = "B2C",
    C3D = "C3D",
    AD4 = "AD4",
    A1BC = "A1BC",
    AB2C = "AB2C",
    B2CD = "B2CD",
    BC3D = "BC3D",
    AC3D = "AC3D",
    ACD4 = "ACD4",
    A1BD = "A1BD",
    ABD4 = "ABD4",
    A1B2C = "A1B2C",
    B2C3D = "B2C3D",
    AC3D4 = "AC3D4",
    A1BD4 = "A1BD4",
    A1BCD = "A1BCD",
    AB2CD = "AB2CD",
    ABC3D = "ABC3D",
    ABCD4 = "ABCD4",
    A1B2CD = "A1B2CD",
    AB2C3D = "AB2C3D",
    ABC3D4 = "ABC3D4",
    A1BCD4 = "A1BCD4",
    A1B2C3D = "A1B2C3D",
    AB2C3D4 = "AB2C3D4",
    A1BC3D4 = "A1BC3D4",
    A1B2CD4 = "A1B2CD4",
    A1BC3D = "A1BC3D",
    AB2CD4 = "AB2CD4",
    A1B2C3D4 = "A1B2C3D4"
}
export declare enum TerrainType {
    WALL = 0,
    WATER = 1,
    GROUND = 2
}
export declare const IdTable: {
    [key: number]: Mask;
};
export declare const ItemStats: Record<Item, {
    [stat in Stat]?: number;
}>;
export type TilesetExchangeFile = {
    tileset_0: DtefTileset | undefined;
    tileset_1: DtefTileset | undefined;
    tileset_2: DtefTileset | undefined;
};
export type DtefTileset = {
    static: StaticFrame;
    animation: AnimatedFrame[];
};
export type StaticFrame = {
    firstgid: number;
    name: string;
    maskDefinition: MaskDefinition;
};
export type MaskDefinition = {
    [TerrainType.GROUND]: Mask[];
    [TerrainType.WALL]: Mask[];
    [TerrainType.WATER]: Mask[];
};
export type AnimatedFrame = {
    frameDuration: number;
    numberOfFrames: number;
    name: string;
    maskDefinition: MaskDefinition;
    firstgid: number;
};
export declare const DTEF_WIDTH = 144;
export declare const DTEF_HEIGHT = 192;
export declare const DTEF_TILESET_WIDTH = 6;
export declare const DTEF_TILESET_HEIGHT = 8;
export declare const DTEF_TILESET_TILE_WIDTH = 24;
export declare const SCRIBBLE_LOBBY_CRON = "0 0 0-20/4 * * *";
export declare const GREATBALL_RANKED_LOBBY_CRON = "0 0 2,6,14,18 * * *";
export declare const ULTRABALL_RANKED_LOBBY_CRON = "0 0 22 * * *";
export declare const DUST_PER_BOOSTER = 50;
export declare const DUST_PER_SHINY = 250;
export declare const TOURNAMENT_REGISTRATION_TIME: number;
export declare const TOURNAMENT_CLEANUP_DELAY: number;
export declare const MAX_SIMULATION_DELTA_TIME = 50;
export declare const CRON_ELO_DECAY_DELAY: number;
export declare const CRON_ELO_DECAY_MINIMUM_ELO = 1100;
export declare const CRON_HISTORY_CLEANUP_DELAY: number;
export declare const BOTS_ENABLED = true;
export { EloRank };
