import { IBot, IDetailledPokemon, IStep } from "../../../../../models/mongo-models/bot-v2";
import { Pkm } from "../../../../../types/enum/Pokemon";
export declare const MAX_BOTS_STAGE = 30;
export declare const DEFAULT_BOT_STATE: {
    steps: IStep[];
    avatar: string;
    author: string;
    elo: number;
    name: Pkm;
    id: string;
};
export declare const POWER_SCORE_BY_CATEGORY: {
    "COMMON T1": number;
    "COMMON 2S T2": number;
    "COMMON 2S T3": number;
    "COMMON 3S T2": number;
    "COMMON 3S T3": number;
    "COMMON 3S T4": number;
    "UNCOMMON T1": number;
    "UNCOMMON 2S T2": number;
    "UNCOMMON 2S T3": number;
    "UNCOMMON 3S T2": number;
    "UNCOMMON 3S T3": number;
    "UNCOMMON 3S T4": number;
    "RARE T1": number;
    "RARE 2S T2": number;
    "RARE 3S T2": number;
    "RARE 3S T3": number;
    "HATCH T1": number;
    "HATCH 3S T2": number;
    "HATCH 3S T3": number;
    "EPIC T1": number;
    "EPIC 2S T2": number;
    "EPIC 2S T3": number;
    "EPIC 3S T2": number;
    "EPIC 3S T3": number;
    "EPIC 2S T2 DUO": number;
    "ULTRA T1": number;
    "ULTRA 3S T2": number;
    "ULTRA 3S T3": number;
    "UNIQUE T1": number;
    "UNIQUE T2": number;
    "UNIQUE T3": number;
    "UNIQUE T4": number;
    "UNIQUE T3 DUO": number;
    "LEGENDARY T3": number;
    "LEGENDARY T4": number;
    "LEGENDARY DUO": number;
    "SPECIAL T1": number;
    "SPECIAL T2": number;
    "SPECIAL T3": number;
    "SPECIAL T4": number;
};
export declare const POWER_AVERAGES: number[];
export declare const BOT_SCORES: {
    INCOMPLETE: {
        label: string;
        color: string;
    };
    VERY_EASY: {
        label: string;
        color: string;
    };
    EASY: {
        label: string;
        color: string;
    };
    MEDIUM: {
        label: string;
        color: string;
    };
    HARD: {
        label: string;
        color: string;
    };
    VERY_HARD: {
        label: string;
        color: string;
    };
    ILLEGAL: {
        label: string;
        color: string;
    };
};
export declare function getBotScore(value: number): {
    label: string;
    color: string;
};
export declare function getCategory(pkm: Pkm): string;
export declare function getPowerScore(board: IDetailledPokemon[]): number;
export declare function getUnitPowerScore(pkm: Pkm): number;
export declare function getPowerEvaluation(powerScore: number, stage: number): number;
export declare function getMaxItemComponents(stage: number): number;
export declare function getNbComponentsOnBoard(board: IDetailledPokemon[]): number;
export declare function rewriteBotRoundsRequiredto1(bot: IBot): IBot;
export declare function estimateElo(bot: IBot): number;
export declare function validateBot(bot: IBot): string[];
export declare function validateBoard(board: IDetailledPokemon[], stage: number): void;
