import { IPokemon, IPokemonEntity } from "../types";
export declare function chance(probability: number, pokemon?: IPokemonEntity | IPokemon): boolean;
export declare function randomBetween(min: number, max: number): number;
export declare function pickRandomIn<T>(list: T[] | Record<string, T>): T;
export declare function pickNRandomIn<T>(array: T[], number: number): T[];
export declare function shuffleArray<T extends Array<unknown>>(array: T): T;
