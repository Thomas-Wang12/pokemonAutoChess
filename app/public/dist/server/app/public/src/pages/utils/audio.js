"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOUNDS = void 0;
exports.preloadSounds = preloadSounds;
exports.preloadMusic = preloadMusic;
exports.playSound = playSound;
exports.playMusic = playMusic;
const logger_1 = require("../../../../utils/logger");
const preferences_1 = require("../../preferences");
exports.SOUNDS = {
    BUTTON_CLICK: "buttonclick.ogg",
    BUTTON_HOVER: "buttonhover.ogg",
    CAROUSEL_UNLOCK: "carouselunlock.ogg",
    EVOLUTION_T2: "evolutiont2.ogg",
    EVOLUTION_T3: "evolutiont3.ogg",
    FINISH1: "finish1.ogg",
    FINISH2: "finish2.ogg",
    FINISH3: "finish3.ogg",
    FINISH4: "finish4.ogg",
    FINISH5: "finish5.ogg",
    FINISH6: "finish6.ogg",
    FINISH7: "finish7.ogg",
    FINISH8: "finish8.ogg",
    JOIN_ROOM: "joinroom.ogg",
    LEAVE_ROOM: "leaveroom.ogg",
    REFRESH: "refresh.ogg",
    SET_READY: "setready.ogg",
    START_GAME: "startgame.ogg"
};
const AUDIO_ELEMENTS = {};
function preloadSounds() {
    Object.values(exports.SOUNDS).forEach((sound) => (AUDIO_ELEMENTS[sound] = new Audio(`assets/sounds/${sound}`)));
}
function preloadMusic(scene, dungeonMusic) {
    scene.load.audio("music_" + dungeonMusic, [
        `assets/musics/ogg/${dungeonMusic}.ogg`
    ]);
}
function setupSounds() {
    document.body.addEventListener("mouseover", (e) => {
        if (e.target instanceof HTMLButtonElement) {
            playSound(exports.SOUNDS.BUTTON_HOVER);
        }
    });
    document.body.addEventListener("click", (e) => {
        if (e.target instanceof HTMLButtonElement ||
            (e.target instanceof HTMLElement && e.target.closest("button") != null)) {
            playSound(exports.SOUNDS.BUTTON_CLICK);
        }
    });
}
preloadSounds();
setupSounds();
function playSound(key, volume = 1) {
    const sound = AUDIO_ELEMENTS[key];
    if (sound) {
        sound.currentTime = 0;
        sound.volume = (volume * preferences_1.preferences.sfxVolume) / 100;
        sound.play();
    }
}
function playMusic(scene, name) {
    var _a;
    if (scene == null || ((_a = scene.music) === null || _a === void 0 ? void 0 : _a.key) === "music_" + name)
        return;
    if (scene.music)
        scene.music.destroy();
    scene.music = scene.sound.add("music_" + name, {
        loop: true
    });
    scene.sound.pauseOnBlur = !preferences_1.preferences.playInBackground;
    const musicVolume = preferences_1.preferences.musicVolume / 100;
    try {
        scene.music.play({ volume: musicVolume, loop: true });
    }
    catch (err) {
        logger_1.logger.error("can't play music", err);
    }
}
//# sourceMappingURL=audio.js.map