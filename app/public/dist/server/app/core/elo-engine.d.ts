export declare class EloEngine {
    k: number;
    getExpected(a: number, b: number): number;
    updateRating(expected: number, actual: number, current: number): number;
}
