import Board, { Cell } from "../core/board";
import { PokemonEntity } from "../core/pokemon-entity";
import { Orientation } from "../types/enum/Game";
export declare const OrientationVector: Record<Orientation, [number, number]>;
export declare const OrientationArray: Orientation[];
export declare function effectInLine(board: Board, pokemon: PokemonEntity, target: PokemonEntity | Orientation, effect: (cell: Cell) => void): void;
export declare function getOrientation(x1: number, y1: number, x2: number, y2: number): Orientation;
