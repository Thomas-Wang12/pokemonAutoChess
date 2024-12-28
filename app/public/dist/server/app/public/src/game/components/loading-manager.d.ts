import { GameObjects } from "phaser";
export default class LoadingManager {
    scene: Phaser.Scene;
    loadingBar: GameObjects.Container | null;
    statusMessage: string;
    constructor(scene: Phaser.Scene);
    preload(): Promise<void>;
}
export declare function loadEnvironmentMultiAtlas(scene: Phaser.Scene): void;
