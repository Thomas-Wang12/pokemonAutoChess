import { GameObjects } from "phaser";
export default class Bar extends GameObjects.DOMElement {
    max: number;
    color: string;
    progress: HTMLDivElement;
    dom: HTMLDivElement;
    wrap: HTMLDivElement;
    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, max: number, value: number, color: string);
    setAmount(value: number): void;
}
