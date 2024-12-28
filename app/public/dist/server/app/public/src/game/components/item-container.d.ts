import { GameObjects } from "phaser";
import { Item } from "../../../../types/enum/Item";
import DraggableObject from "./draggable-object";
import ItemDetail from "./item-detail";
export default class ItemContainer extends DraggableObject {
    detail: ItemDetail | undefined;
    sprite: GameObjects.Image;
    tempDetail: ItemDetail | undefined;
    tempSprite: GameObjects.Image | undefined;
    countText: GameObjects.Text | undefined;
    circle?: GameObjects.Image;
    name: Item;
    scene: Phaser.Scene;
    pokemonId: string | null;
    playerId: string;
    mouseoutTimeout: NodeJS.Timeout | null;
    constructor(scene: Phaser.Scene, x: number, y: number, item: Item, pokemonId: string | null, playerId: string);
    get cellIndex(): 0 | 1 | 2 | 3 | 4 | 5 | 6;
    updateDropZone(value: boolean): void;
    onPointerOver(pointer: any): void;
    onPointerOut(): void;
    onPointerDown(pointer: Phaser.Input.Pointer): void;
    onPointerUp(): void;
    openDetail(): void;
    closeDetail(): void;
    showTempDetail(item: Item): void;
    updateCount(value: number): void;
    destroy(fromScene?: boolean | undefined): void;
}
