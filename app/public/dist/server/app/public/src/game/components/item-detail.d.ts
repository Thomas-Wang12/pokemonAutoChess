import { GameObjects } from "phaser";
import { Item } from "../../../../types/enum/Item";
import "./item-detail.css";
export declare function ItemDetailTooltip({ item, depth }: {
    item: Item;
    depth?: number;
}): import("react/jsx-runtime").JSX.Element;
export default class ItemDetail extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    constructor(scene: Phaser.Scene, x: number, y: number, name: Item);
}
