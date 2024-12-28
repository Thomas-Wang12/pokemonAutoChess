"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonCollectionItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const precomputed_emotions_1 = require("../../../../../models/precomputed/precomputed-emotions");
const Config_1 = require("../../../../../types/Config");
const Emotion_1 = require("../../../../../types/enum/Emotion");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
require("./pokemon-collection-item.css");
function PokemonCollectionItem(props) {
    var _a, _b, _c;
    if (props.index in precomputed_emotions_1.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX === false ||
        precomputed_emotions_1.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX[props.index].includes(1) === false) {
        return null;
    }
    const { dust, emotions, shinyEmotions } = (_a = props.config) !== null && _a !== void 0 ? _a : {
        dust: 0,
        emotions: [],
        shinyEmotions: []
    };
    const isUnlocked = (!props.shinyOnly && (emotions === null || emotions === void 0 ? void 0 : emotions.length) > 0) || (shinyEmotions === null || shinyEmotions === void 0 ? void 0 : shinyEmotions.length) > 0;
    const availableEmotions = Object.values(Emotion_1.Emotion).filter((e, i) => { var _a; return ((_a = precomputed_emotions_1.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX[props.index]) === null || _a === void 0 ? void 0 : _a[i]) === 1; });
    const canUnlock = availableEmotions.some((e) => (emotions.includes(e) === false &&
        dust >= (0, Config_1.getEmotionCost)(e, false) &&
        !props.shinyOnly) ||
        (shinyEmotions.includes(e) === false && dust >= (0, Config_1.getEmotionCost)(e, true)));
    if (props.filter === "unlocked" && !isUnlocked)
        return null;
    if (props.filter === "unlockable" && !canUnlock)
        return null;
    if (props.filter === "locked" && isUnlocked)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("my-box", "clickable", "pokemon-collection-item", {
            unlocked: isUnlocked,
            unlockable: canUnlock,
            shimmer: canUnlock
        }), onClick: () => {
            props.setPokemon(props.name);
        }, children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(props.index, (_b = props.config) === null || _b === void 0 ? void 0 : _b.selectedShiny, (_c = props.config) === null || _c === void 0 ? void 0 : _c.selectedEmotion), loading: "lazy" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: props.config ? props.config.dust : 0 }), (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(props.index) })] })] }));
}
//# sourceMappingURL=pokemon-collection-item.js.map