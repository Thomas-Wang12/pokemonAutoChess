import { Command } from "@colyseus/command";
import { Client } from "colyseus";
import { IUserMetadata } from "../../models/mongo-models/user-metadata";
import { Emotion, IPlayer, Role, Title } from "../../types";
import { GameMode } from "../../types/enum/Game";
import { Language } from "../../types/enum/Language";
import CustomLobbyRoom from "../custom-lobby-room";
export declare class OnJoinCommand extends Command<CustomLobbyRoom, {
    client: Client;
    user: IUserMetadata | null;
}> {
    execute({ client, user }: {
        client: Client;
        user: IUserMetadata | null;
    }): Promise<void>;
}
export declare class OnLeaveCommand extends Command<CustomLobbyRoom, {
    client: Client;
}> {
    execute({ client }: {
        client: Client;
    }): void;
}
export declare class GiveTitleCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    title: Title;
}> {
    execute({ client, uid, title }: {
        client: Client;
        uid: string;
        title: Title;
    }): Promise<void>;
}
export declare class HeapSnapshotCommand extends Command<CustomLobbyRoom> {
    execute(): void;
}
export declare class GiveBoostersCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    numberOfBoosters: number;
}> {
    execute({ client, uid, numberOfBoosters }: {
        client: Client;
        uid: string;
        numberOfBoosters: number;
    }): Promise<void>;
}
export declare class GiveRoleCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    role: Role;
}> {
    execute({ client, uid, role }: {
        client: Client;
        uid: string;
        role: Role;
    }): Promise<void>;
}
export declare class OnNewMessageCommand extends Command<CustomLobbyRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message }: {
        client: Client;
        message: string;
    }): void;
}
export declare class RemoveMessageCommand extends Command<CustomLobbyRoom, {
    client: Client;
    messageId: string;
}> {
    execute({ client, messageId }: {
        client: Client;
        messageId: string;
    }): void;
}
export declare class OpenBoosterCommand extends Command<CustomLobbyRoom, {
    client: Client;
}> {
    execute({ client }: {
        client: Client;
    }): Promise<void>;
}
export declare class ChangeNameCommand extends Command<CustomLobbyRoom, {
    client: Client;
    name: string;
}> {
    execute({ client, name }: {
        client: Client;
        name: string;
    }): Promise<void>;
}
export declare class ChangeTitleCommand extends Command<CustomLobbyRoom, {
    client: Client;
    title: Title | "";
}> {
    execute({ client, title }: {
        client: Client;
        title: Title | "";
    }): Promise<void>;
}
export declare class ChangeSelectedEmotionCommand extends Command<CustomLobbyRoom, {
    client: Client;
    index: string;
    emotion: Emotion;
    shiny: boolean;
}> {
    execute({ client, emotion, index, shiny }: {
        client: Client;
        index: string;
        emotion: Emotion;
        shiny: boolean;
    }): Promise<void>;
}
export declare class ChangeAvatarCommand extends Command<CustomLobbyRoom, {
    client: Client;
    index: string;
    emotion: Emotion;
    shiny: boolean;
}> {
    execute({ client, index, emotion, shiny }: {
        client: Client;
        index: string;
        emotion: Emotion;
        shiny: boolean;
    }): Promise<void>;
}
export declare class BuyEmotionCommand extends Command<CustomLobbyRoom, {
    client: Client;
    index: string;
    emotion: Emotion;
    shiny: boolean;
}> {
    execute({ client, emotion, index, shiny }: {
        client: Client;
        index: string;
        emotion: Emotion;
        shiny: boolean;
    }): Promise<void>;
}
export declare class BuyBoosterCommand extends Command<CustomLobbyRoom, {
    client: Client;
    index: string;
}> {
    execute({ client, index }: {
        client: Client;
        index: string;
    }): Promise<void>;
}
export declare class OnSearchByIdCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
}> {
    execute({ client, uid }: {
        client: Client;
        uid: string;
    }): Promise<void>;
}
export declare class OnSearchCommand extends Command<CustomLobbyRoom, {
    client: Client;
    name: string;
}> {
    execute({ client, name }: {
        client: Client;
        name: string;
    }): Promise<void>;
}
export declare class BanUserCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    reason: string;
}> {
    execute({ client, uid, reason }: {
        client: Client;
        uid: string;
        reason: string;
    }): Promise<void>;
}
export declare class UnbanUserCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    name: string;
}> {
    execute({ client, uid, name }: {
        client: Client;
        uid: string;
        name: string;
    }): Promise<void>;
}
export declare class SelectLanguageCommand extends Command<CustomLobbyRoom, {
    client: Client;
    message: Language;
}> {
    execute({ client, message }: {
        client: Client;
        message: Language;
    }): Promise<void>;
}
export declare class AddBotCommand extends Command<CustomLobbyRoom, {
    client: Client;
    url: string;
}> {
    execute({ client, url }: {
        client: Client;
        url: string;
    }): Promise<void>;
}
export declare class DeleteBotCommand extends Command<CustomLobbyRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message }: {
        client: Client;
        message: string;
    }): Promise<void>;
}
export declare class JoinOrOpenRoomCommand extends Command<CustomLobbyRoom, {
    client: Client;
    gameMode: GameMode;
}> {
    execute({ client, gameMode }: {
        client: Client;
        gameMode: GameMode;
    }): Promise<OpenGameCommand[] | undefined>;
}
export declare class OpenGameCommand extends Command<CustomLobbyRoom, {
    gameMode: GameMode;
    client: Client;
}> {
    execute({ gameMode, client }: {
        gameMode: GameMode;
        client: Client;
    }): Promise<void>;
}
export declare class OnCreateTournamentCommand extends Command<CustomLobbyRoom, {
    client: Client;
    name: string;
    startDate: string;
}> {
    execute({ client, name, startDate }: {
        client: Client;
        name: string;
        startDate: string;
    }): Promise<void>;
}
export declare class RemoveTournamentCommand extends Command<CustomLobbyRoom, {
    client: Client;
    tournamentId: string;
}> {
    execute({ client, tournamentId }: {
        client: Client;
        tournamentId: string;
    }): void;
}
export declare class ParticipateInTournamentCommand extends Command<CustomLobbyRoom, {
    client: Client;
    tournamentId: string;
    participate: boolean;
}> {
    execute({ client, tournamentId, participate }: {
        client: Client;
        tournamentId: string;
        participate: boolean;
    }): Promise<void>;
}
export declare class NextTournamentStageCommand extends Command<CustomLobbyRoom, {
    tournamentId: string;
}> {
    execute({ tournamentId }: {
        tournamentId: string;
    }): Promise<void | EndTournamentCommand[]>;
}
export declare class CreateTournamentLobbiesCommand extends Command<CustomLobbyRoom, {
    client?: Client;
    tournamentId: string;
}> {
    execute({ tournamentId, client }: {
        tournamentId: string;
        client?: Client;
    }): Promise<void>;
}
export declare class EndTournamentMatchCommand extends Command<CustomLobbyRoom, {
    tournamentId: string;
    bracketId: string;
    players: {
        id: string;
        rank: number;
    }[];
}> {
    execute({ tournamentId, bracketId, players }: {
        tournamentId: string;
        bracketId: string;
        players: IPlayer[];
    }): Promise<void | NextTournamentStageCommand[]>;
}
export declare class EndTournamentCommand extends Command<CustomLobbyRoom, {
    tournamentId: string;
}> {
    execute({ tournamentId }: {
        tournamentId: string;
    }): Promise<void>;
}
