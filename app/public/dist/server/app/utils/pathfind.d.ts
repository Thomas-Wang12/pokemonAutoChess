import Board from "../core/board";
export type Node = {
    x: number;
    y: number;
    g: number;
    h: number;
    f: number;
    parent?: Node;
};
export declare const getHeuristic: (a: Node, b: Node) => number;
export declare const getNeighbors: (node: Node, grid: number[][]) => Node[];
export declare const findPath: (board: Board, start: [number, number], goal: [number, number]) => [number, number][];
