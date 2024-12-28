import { GameObjects } from "phaser";
import { ISynergySymbol } from "../../../../types";
import { Synergy } from "../../../../types/enum/Synergy";
export declare class Portal extends GameObjects.Container {
    sprite: GameObjects.Sprite;
    id: string;
    constructor(scene: Phaser.Scene, id: string, x: number, y: number);
}
export declare class SynergySymbol extends GameObjects.Sprite implements ISynergySymbol {
    id: string;
    synergy: Synergy;
    constructor(scene: Phaser.Scene, id: string, x: number, y: number, synergy: Synergy);
}
