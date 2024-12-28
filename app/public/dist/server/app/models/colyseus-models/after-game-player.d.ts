import { ArraySchema, Schema } from "@colyseus/schema";
import { IAfterGamePlayer, Role } from "../../types";
import { Synergy } from "../../types/enum/Synergy";
import { IPokemonRecord } from "./game-record";
export declare class SampleSynergy extends Schema {
    name: Synergy;
    value: number;
    constructor(name: Synergy, value: number);
}
export default class AfterGamePlayer extends Schema implements IAfterGamePlayer {
    id: string;
    name: string;
    avatar: string;
    rank: number;
    pokemons: ArraySchema<IPokemonRecord>;
    elo: number;
    title: string;
    role: Role;
    synergies: ArraySchema<{
        name: Synergy;
        value: number;
    }>;
    moneyEarned: number;
    playerDamageDealt: number;
    rerollCount: number;
    constructor(id: string, name: string, avatar: string, rank: number, pokemons: IPokemonRecord[] | ArraySchema<IPokemonRecord>, title: string, role: Role, synergies: Array<{
        name: Synergy;
        value: number;
    }> | ArraySchema<{
        name: Synergy;
        value: number;
    }>, elo: number, moneyEarned: number, playerDamageDealt: number, rerollCount: number);
}
