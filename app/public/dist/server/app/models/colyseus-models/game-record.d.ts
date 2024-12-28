import { ArraySchema, Schema } from "@colyseus/schema";
import { Item } from "../../types/enum/Item";
import { Pkm } from "../../types/enum/Pokemon";
export interface IPokemonRecord {
    name: Pkm;
    items: Item[] | ArraySchema<Item>;
    avatar: string;
}
export declare class PokemonRecord extends Schema implements IPokemonRecord {
    name: Pkm;
    avatar: string;
    items: ArraySchema<Item>;
    constructor(mongoPokemon: IPokemonRecord);
}
export interface IGameRecord {
    time: number;
    rank: number;
    pokemons: IPokemonRecord[] | ArraySchema<IPokemonRecord>;
    elo: number;
}
export declare class GameRecord extends Schema implements IGameRecord {
    time: number;
    rank: number;
    pokemons: ArraySchema<IPokemonRecord>;
    elo: number;
    constructor(time: number, rank: number, elo: number, pokemons: any[]);
}
