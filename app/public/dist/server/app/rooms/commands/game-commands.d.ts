import { Command } from "@colyseus/command";
import { Client } from "colyseus";
import Player from "../../models/colyseus-models/player";
import { IClient, IDragDropCombineMessage, IDragDropItemMessage, IDragDropMessage } from "../../types";
import { Pkm } from "../../types/enum/Pokemon";
import GameRoom from "../game-room";
export declare class OnShopCommand extends Command<GameRoom, {
    playerId: string;
    index: number;
}> {
    execute({ playerId, index }: {
        playerId: any;
        index: any;
    }): void;
}
export declare class OnRemoveFromShopCommand extends Command<GameRoom, {
    playerId: string;
    index: number;
}> {
    execute({ playerId, index }: {
        playerId: any;
        index: any;
    }): void;
}
export declare class OnPokemonCatchCommand extends Command<GameRoom, {
    playerId: string;
    pkm: Pkm;
}> {
    execute({ playerId, pkm }: {
        playerId: any;
        pkm: any;
    }): void;
}
export declare class OnDragDropCommand extends Command<GameRoom, {
    client: IClient;
    detail: IDragDropMessage;
}> {
    execute({ client, detail }: {
        client: any;
        detail: any;
    }): never[] | undefined;
}
export declare class OnSwitchBenchAndBoardCommand extends Command<GameRoom, {
    client: Client;
    pokemonId: string;
}> {
    execute({ client, pokemonId }: {
        client: any;
        pokemonId: any;
    }): void;
}
export declare class OnDragDropCombineCommand extends Command<GameRoom, {
    client: Client;
    detail: IDragDropCombineMessage;
}> {
    execute({ client, detail }: {
        client: any;
        detail: any;
    }): void;
}
export declare class OnDragDropItemCommand extends Command<GameRoom, {
    client: Client;
    detail: IDragDropItemMessage;
}> {
    execute({ client, detail }: {
        client: any;
        detail: any;
    }): void;
}
export declare class OnSellDropCommand extends Command<GameRoom, {
    client: Client;
    pokemonId: string;
}> {
    execute({ client, pokemonId }: {
        client: any;
        pokemonId: any;
    }): void;
}
export declare class OnRefreshCommand extends Command<GameRoom, string> {
    execute(id: any): void;
}
export declare class OnLockCommand extends Command<GameRoom, string> {
    execute(id: any): void;
}
export declare class OnSpectateCommand extends Command<GameRoom, {
    id: string;
    spectatedPlayerId: string;
}> {
    execute({ id, spectatedPlayerId }: {
        id: any;
        spectatedPlayerId: any;
    }): void;
}
export declare class OnLevelUpCommand extends Command<GameRoom, {
    id: string;
}> {
    execute(id: any): void;
}
export declare class OnPickBerryCommand extends Command<GameRoom, {
    playerId: string;
    berryIndex: number;
}> {
    execute({ playerId, berryIndex }: {
        playerId: any;
        berryIndex: any;
    }): void;
}
export declare class OnJoinCommand extends Command<GameRoom, {
    client: Client;
}> {
    execute({ client }: {
        client: any;
    }): Promise<void>;
}
export declare class OnUpdateCommand extends Command<GameRoom, {
    deltaTime: number;
}> {
    execute({ deltaTime }: {
        deltaTime: any;
    }): OnUpdatePhaseCommand[] | undefined;
}
export declare class OnUpdatePhaseCommand extends Command<GameRoom> {
    execute(): void;
    computeAchievements(): void;
    checkSuccess(player: Player): void;
    checkEndGame(): boolean;
    computeStreak(isPVE: boolean): void;
    computeIncome(isPVE: boolean): void;
    checkDeath(): void;
    initializePickingPhase(): Command<import("colyseus").Room<any, any>, unknown>[];
    checkForLazyTeam(): void;
    stopPickingPhase(): void;
    stopFightingPhase(): void;
    initializeMinigamePhase(): void;
    initializeFightingPhase(): void;
    spawnWanderingPokemons(): void;
    spawnBabyEggs(player: Player, isPVE: boolean): void;
}
