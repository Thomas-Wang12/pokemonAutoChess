import { SetSchema } from "@colyseus/schema";
import { Item } from "../types/enum/Item";
import { Effect } from "./effect";
import { Pokemon } from "../models/colyseus-models/pokemon";
export declare function getWonderboxItems(existingItems: SetSchema<Item>): Item[];
export declare function onItemRemoved(item: Item, pokemon: Pokemon): void;
export declare const ItemEffects: {
    [i in Item]?: Effect[];
};
