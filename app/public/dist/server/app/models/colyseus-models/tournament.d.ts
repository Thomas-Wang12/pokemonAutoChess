import { Schema, MapSchema, ArraySchema } from "@colyseus/schema";
import { ITournament, ITournamentBracket, ITournamentPlayer } from "../../types/interfaces/Tournament";
export declare class TournamentPlayerSchema extends Schema implements ITournamentPlayer {
    name: string;
    avatar: string;
    elo: number;
    ranks: ArraySchema<number>;
    eliminated: boolean;
    constructor(name: string, avatar: string, elo: number, ranks?: number[] | ArraySchema<number>, eliminated?: boolean);
}
export declare class TournamentBracketSchema extends Schema implements ITournamentBracket {
    name: string;
    playersId: ArraySchema<string>;
    finished: boolean;
    constructor(name: string, playersId: string[] | ArraySchema<string>, finished?: boolean);
}
export declare class TournamentSchema extends Schema implements ITournament {
    id: string;
    name: string;
    startDate: string;
    players: MapSchema<TournamentPlayerSchema, string>;
    brackets: MapSchema<TournamentBracketSchema, string>;
    finished: boolean;
    constructor(id: string, name: string, startDate: string, players: Map<string, ITournamentPlayer>, brackets: Map<string, ITournamentBracket>, finished?: boolean);
}
