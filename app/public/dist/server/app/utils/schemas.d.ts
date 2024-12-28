import { ArraySchema, CollectionSchema, MapSchema, SetSchema } from "@colyseus/schema";
export declare function keys(schema: MapSchema): string[];
export declare function values<T>(schema: MapSchema<T, any> | SetSchema<T> | CollectionSchema<T> | ArraySchema<T>): T[];
export declare function entries<V, K extends string>(schema: MapSchema<V, K>): [K, V][];
export declare function resetArraySchema<T>(schema: ArraySchema<T>, newArray: T[] | ArraySchema<T>): void;
export declare function convertSchemaToRawObject(schema: any): any;
