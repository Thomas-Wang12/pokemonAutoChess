import Board from "./board";
import { PokemonEntity } from "./pokemon-entity";
export declare abstract class Effect {
    apply: (entity: PokemonEntity, ...others: any[]) => void;
    constructor(effect: (entity: PokemonEntity, ...others: any[]) => void);
}
export declare class OnItemGainedEffect extends Effect {
}
export declare class OnItemRemovedEffect extends Effect {
}
export declare class OnKillEffect extends Effect {
    apply: (entity: PokemonEntity, target: PokemonEntity, board: Board) => void;
    constructor(effect: (entity: PokemonEntity, target: PokemonEntity, board: Board) => void);
}
