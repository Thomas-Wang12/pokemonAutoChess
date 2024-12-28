import { ArraySchema } from "@colyseus/schema";
export declare const groupBy: <T, K extends keyof any>(arr: T[], key: (i: T) => K) => Record<K, T[]>;
export declare function sum(arr: number[]): number;
export declare function deduplicateArray<T>(arr: T[]): T[];
export declare function removeInArray<T>(arr: T[] | ArraySchema<T>, el: T): T[] | ArraySchema<T>;
export declare function count<T>(arr: T[] | ArraySchema<T>, el: T): number;
