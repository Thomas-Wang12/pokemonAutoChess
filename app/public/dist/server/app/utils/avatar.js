"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortraitSrc = getPortraitSrc;
exports.getAvatarSrc = getAvatarSrc;
exports.getAvatarString = getAvatarString;
exports.getPokemonConfigFromAvatar = getPokemonConfigFromAvatar;
const types_1 = require("../types");
const Pokemon_1 = require("../types/enum/Pokemon");
function getPortraitSrc(index, shiny, emotion) {
    return getAvatarSrc(getAvatarString(index, shiny, emotion));
}
function getAvatarSrc(avatar) {
    return `${types_1.CDN_PORTRAIT_URL}${avatar.replace(/(\d+)\-(\d+)/, "$1/$2")}.png`;
}
function getAvatarString(index, shiny, emotion) {
    const defaultIndex = index !== null && index !== void 0 ? index : Pokemon_1.PkmIndex[Pokemon_1.Pkm.MAGIKARP];
    const shinyPad = shiny
        ? defaultIndex.length === 4
            ? "/0000/0001"
            : "/0001"
        : "";
    return `${defaultIndex.replace("-", "/")}${shinyPad}/${emotion || types_1.Emotion.NORMAL}`;
}
function getPokemonConfigFromAvatar(avatar) {
    let emotion = types_1.Emotion.NORMAL;
    let shiny = false;
    let index = "0019";
    let noEmotion = avatar;
    Object.values(types_1.Emotion).forEach((e_) => {
        const e = e_;
        if (avatar.includes(e)) {
            noEmotion = avatar.replace(e, "");
            emotion = e;
        }
    });
    if (noEmotion.endsWith("/")) {
        noEmotion = noEmotion.slice(0, noEmotion.length - 1);
    }
    if (noEmotion.endsWith("/")) {
        noEmotion = noEmotion.slice(0, noEmotion.length - 1);
    }
    const split = noEmotion.split("/");
    if (noEmotion.includes("/0000/0001")) {
        index = split[0];
        shiny = true;
    }
    else if (split.length === 1) {
        index = split[0];
        shiny = false;
    }
    else {
        if (split.length === 2) {
            index = noEmotion.replace("/", "-");
            shiny = false;
        }
        if (split.length === 3) {
            index = `${split[0]}-${split[1]}`;
            shiny = true;
        }
    }
    return {
        emotion: emotion,
        shiny: shiny,
        index: index
    };
}
//# sourceMappingURL=avatar.js.map