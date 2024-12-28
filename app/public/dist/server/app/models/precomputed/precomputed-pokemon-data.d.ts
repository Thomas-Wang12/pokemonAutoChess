import { IPokemonData } from "../../types/interfaces/PokemonData";
import { Pkm } from "../../types/enum/Pokemon";
export declare const PRECOMPUTED_POKEMONS_DATA: { [pkm in Pkm]?: Omit<IPokemonData, "name" | "index">; };
export declare const PRECOMPUTED_REGIONAL_MONS: Pkm[];
export declare function getPokemonData(name: Pkm): IPokemonData;
