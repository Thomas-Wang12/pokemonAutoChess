import { Dispatcher } from "@colyseus/command";
import { Client, ClientArray, Room } from "colyseus";
import { EloRank } from "../types/Config";
import { GameMode } from "../types/enum/Game";
import PreparationState from "./states/preparation-state";
import { UserRecord } from "firebase-admin/lib/auth/user-record";
export default class PreparationRoom extends Room<PreparationState> {
    dispatcher: Dispatcher<this>;
    clients: ClientArray<undefined, UserRecord>;
    constructor();
    setName(name: string): Promise<void>;
    setPassword(password: string): Promise<void>;
    setNoElo(noElo: boolean): Promise<void>;
    setMinMaxRanks(minRank: EloRank, maxRank: EloRank): Promise<void>;
    setGameStarted(gameStartedAt: string): Promise<void>;
    onCreate(options: {
        ownerId?: string;
        roomName: string;
        minRank?: EloRank;
        maxRank?: EloRank;
        gameMode: GameMode;
        noElo?: boolean;
        password?: string;
        autoStartDelayInSeconds?: number;
        whitelist?: string[];
        blacklist?: string[];
        tournamentId?: string;
        bracketId?: string;
    }): void;
    onAuth(client: Client, options: any, request: any): Promise<UserRecord | undefined>;
    onJoin(client: Client<undefined, UserRecord>, options: any, auth: UserRecord | undefined): Promise<void>;
    onLeave(client: Client, consented: boolean): Promise<void>;
    onDispose(): void;
    onServerAnnouncement(message: string): void;
    onGameStart({ gameId, preparationId }: {
        gameId: string;
        preparationId: string;
    }): void;
    updatePlayersInfo(): void;
}
