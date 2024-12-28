import Board from "../board";
import { PokemonEntity } from "../pokemon-entity";
import PokemonState from "../pokemon-state";
export declare class AbilityStrategy {
    copyable: boolean;
    process(pokemon: PokemonEntity, state: PokemonState, board: Board, target: PokemonEntity, crit: boolean, preventDefaultAnim?: boolean): void;
}
export declare function soundBoost(pokemon: PokemonEntity, board: Board): void;
