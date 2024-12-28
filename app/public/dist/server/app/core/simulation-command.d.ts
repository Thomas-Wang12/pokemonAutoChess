import { ISimulationCommand } from "../types";
import Board from "./board";
import { PokemonEntity } from "./pokemon-entity";
export declare abstract class SimulationCommand implements ISimulationCommand {
    delay: number;
    executed: boolean;
    constructor(delay: number);
    execute(): void;
    update(dt: number): void;
}
export declare class DelayedCommand extends SimulationCommand {
    delayedFunction: () => void;
    constructor(delayedFunction: () => void, delay: number);
    execute(): void;
}
export declare class AttackCommand extends SimulationCommand {
    pokemon: PokemonEntity;
    target: PokemonEntity;
    board: Board;
    constructor(delay: number, pokemon: PokemonEntity, target: PokemonEntity, board: Board);
    execute(): void;
}
