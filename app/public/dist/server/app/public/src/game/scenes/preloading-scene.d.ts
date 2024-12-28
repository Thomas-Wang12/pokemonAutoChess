import LoadingManager from "../components/loading-manager";
export declare class PreloadingScene extends Phaser.Scene {
    loadingManager: LoadingManager | null;
    onProgress: (value: number) => void;
    onComplete: () => void;
    constructor(onProgress: (value: number) => void, onComplete: () => void);
    preload(): void;
}
