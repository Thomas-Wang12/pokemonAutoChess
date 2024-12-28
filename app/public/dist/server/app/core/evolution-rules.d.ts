import Player from "../models/colyseus-models/player";
import { Pokemon } from "../models/colyseus-models/pokemon";
import { Item } from "../types/enum/Item";
import { Pkm } from "../types/enum/Pokemon";
type DivergentEvolution = (pokemon: Pokemon, player: Player, ...additionalArgs: unknown[]) => Pkm;
export declare abstract class EvolutionRule {
    abstract canEvolve(pokemon: Pokemon, player: Player, stageLevel: number): boolean;
    abstract evolve(pokemon: Pokemon, player: Player, stageLevel: number): Pokemon;
    divergentEvolution?: DivergentEvolution;
    constructor(divergentEvolution?: DivergentEvolution);
    getEvolution(pokemon: Pokemon, player: Player, ...additionalArgs: unknown[]): Pkm;
    tryEvolve(pokemon: Pokemon, player: Player, stageLevel: number): void | Pokemon;
    afterEvolve(pokemonEvolved: Pokemon, player: Player, stageLevel: number): void;
}
export declare class CountEvolutionRule extends EvolutionRule {
    numberRequired: number;
    constructor(numberRequired: number, divergentEvolution?: (pokemon: Pokemon, player: Player) => Pkm);
    canEvolve(pokemon: Pokemon, player: Player, stageLevel: number): boolean;
    canEvolveIfBuyingOne(pokemon: Pokemon, player: Player): boolean;
    evolve(pokemon: Pokemon, player: Player, stageLevel: number): Pokemon;
}
export declare class ItemEvolutionRule extends EvolutionRule {
    itemsTriggeringEvolution: Item[];
    constructor(itemsTriggeringEvolution: Item[], divergentEvolution?: DivergentEvolution);
    canEvolve(pokemon: Pokemon, player: Player, stageLevel: number): boolean;
    evolve(pokemon: Pokemon, player: Player, stageLevel: number): Pokemon;
}
export declare class HatchEvolutionRule extends EvolutionRule {
    evolutionTimer: number;
    constructor(roundsRequired?: number, divergentEvolution?: DivergentEvolution);
    updateHatch(pokemon: Pokemon, player: Player, stageLevel: number): void;
    canEvolve(pokemon: Pokemon, player: Player, stageLevel: number): boolean;
    evolve(pokemon: Pokemon, player: Player, stageLevel: number): Pokemon;
}
type EvolutionCondition = (pokemon: Pokemon, player: Player, stageLevel: number) => boolean;
export declare class ConditionBasedEvolutionRule extends EvolutionRule {
    condition: EvolutionCondition;
    constructor(condition: EvolutionCondition, divergentEvolution?: DivergentEvolution);
    canEvolve(pokemon: Pokemon, player: Player, stageLevel: number): boolean;
    evolve(pokemon: Pokemon, player: Player, stageLevel: number): Pokemon;
}
export declare function carryOverPermanentStats(pokemonEvolved: Pokemon, pokemonsBeforeEvolution: Pokemon[]): void;
export {};
