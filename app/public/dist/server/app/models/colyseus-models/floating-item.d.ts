import { Schema } from "@colyseus/schema";
import { IFloatingItem } from "../../types";
import { Item } from "../../types/enum/Item";
export declare class FloatingItem extends Schema implements IFloatingItem {
    id: string;
    name: Item;
    x: number;
    y: number;
    avatarId: string;
    index: number;
    constructor(name: Item, x: number, y: number, index: number);
}
