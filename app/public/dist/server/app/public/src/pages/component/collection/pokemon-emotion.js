"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonEmotion;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const Config_1 = require("../../../../../types/Config");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
require("./pokemon-emotion.css");
function PokemonEmotion(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const cost = (0, Config_1.getEmotionCost)(props.emotion, props.shiny);
    const canUnlock = !props.unlocked && cost <= props.dust;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("my-box", "clickable", "pokemon-emotion", {
            unlocked: !!props.unlocked,
            unlockable: canUnlock,
            selected: !!props.selected,
            shimmer: canUnlock
        }), onClick: props.onClick, children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(props.index, props.shiny, props.emotion) }), types_1.AvatarEmotions.includes(props.emotion) && ((0, jsx_runtime_1.jsxs)("span", { className: "shortcut", children: ["Ctrl+", types_1.AvatarEmotions.indexOf(props.emotion) + 1] })), props.unlocked ? ((0, jsx_runtime_1.jsx)("p", { children: t(`emotion.${props.emotion}`) })) : ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: cost }), (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(props.index) })] }))] }));
}
//# sourceMappingURL=pokemon-emotion.js.map