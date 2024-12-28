"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreloadingScene = void 0;
const loading_manager_1 = __importDefault(require("../components/loading-manager"));
class PreloadingScene extends Phaser.Scene {
    constructor(onProgress, onComplete) {
        super();
        this.loadingManager = null;
        this.onProgress = onProgress;
        this.onComplete = onComplete;
    }
    preload() {
        this.loadingManager = new loading_manager_1.default(this);
        this.load.on("progress", (value) => {
            this.onProgress(value);
        });
        this.load.on("complete", () => {
            this.onComplete();
        });
    }
}
exports.PreloadingScene = PreloadingScene;
//# sourceMappingURL=preloading-scene.js.map