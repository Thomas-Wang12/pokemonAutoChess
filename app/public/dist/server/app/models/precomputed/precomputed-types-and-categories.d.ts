import { Pkm } from "../../types/enum/Pokemon";
import { Synergy } from "../../types/enum/Synergy";
export declare const PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY: { [key in Synergy]: {
    pokemons: Pkm[];
    uniquePokemons: Pkm[];
    legendaryPokemons: Pkm[];
    additionalPokemons: Pkm[];
    specialPokemons: Pkm[];
}; };
