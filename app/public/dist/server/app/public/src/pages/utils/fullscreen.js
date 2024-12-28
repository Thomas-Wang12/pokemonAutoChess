"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enterFullScreen = enterFullScreen;
exports.exitFullScreen = exitFullScreen;
exports.toggleFullScreen = toggleFullScreen;
function enterFullScreen() {
    if (document.fullscreenEnabled) {
        try {
            document.documentElement.requestFullscreen();
        }
        catch (e) {
            console.info(e);
        }
    }
}
function exitFullScreen() {
    if (document.fullscreenEnabled) {
        try {
            document.exitFullscreen();
        }
        catch (e) {
            console.info(e);
        }
    }
}
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        enterFullScreen();
    }
    else {
        exitFullScreen();
    }
}
//# sourceMappingURL=fullscreen.js.map