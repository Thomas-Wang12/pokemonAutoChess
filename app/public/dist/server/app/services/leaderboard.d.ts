import { ILeaderboardBotInfo, ILeaderboardInfo } from "../types/interfaces/LeaderboardInfo";
export declare function fetchLeaderboards(): Promise<[ILeaderboardInfo[], ILeaderboardBotInfo[], ILeaderboardInfo[]]>;
export declare function fetchUserLeaderboard(): Promise<ILeaderboardInfo[]>;
export declare function fetchLevelLeaderboard(): Promise<ILeaderboardInfo[]>;
export declare function fetchBotsLeaderboard(): Promise<ILeaderboardBotInfo[]>;
export declare function getLeaderboard(): {
    leaderboard: ILeaderboardInfo[];
    botLeaderboard: ILeaderboardBotInfo[];
    levelLeaderboard: ILeaderboardInfo[];
};
