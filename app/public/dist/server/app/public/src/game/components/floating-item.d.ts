import { GameObjects } from "phaser";
import { Item } from "../../../../types/enum/Item";
export declare class FloatingItem extends GameObjects.Container {
    circle: GameObjects.Ellipse;
    sprite: GameObjects.Image;
    id: string;
    constructor(scene: Phaser.Scene, id: string, x: number, y: number, item: Item);
    onGrab(playerId: any): void;
}
