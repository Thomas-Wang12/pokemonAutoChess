export default class Terrain {
    width: number;
    height: number;
    frequency: number;
    persistance: number;
    terrain: number[][];
    constructor(width: number, height: number, frequency: number, persistance: number);
    newRandom(seed: number): () => number;
    simplexNoise(table: any, x: number, y: number): number;
    createPermutationTable(seed: number): number[];
    createNoiseMatrix(width: number, height: number, frequency: number, amplitude: number, lacunarity: number, persistance: number, table: any): any[];
    create(width: number, height: number, params: any): any[];
}
