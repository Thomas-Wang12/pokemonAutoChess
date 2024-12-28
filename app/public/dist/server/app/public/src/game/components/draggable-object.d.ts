import { GameObjects } from "phaser";
export default class DraggableObject extends GameObjects.Container {
    dragDisabled: boolean;
    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, dragDisabled?: boolean);
    get draggable(): boolean;
    set draggable(isDraggable: boolean);
    onPointerOver(pointer: any): void;
    onPointerOut(): void;
    onPointerDown(pointer: any): void;
    onPointerUp(): void;
}
