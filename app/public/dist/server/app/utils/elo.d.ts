import { EloRank } from "../types/enum/EloRank";
export declare function getRank(elo: number): EloRank;
export declare function formatMinMaxRanks(minRank: EloRank | null, maxRank: EloRank | null): string;
