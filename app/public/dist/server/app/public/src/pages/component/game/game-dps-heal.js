"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameDpsHeal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const avatar_1 = require("../../../../../utils/avatar");
const progress_bar_1 = __importDefault(require("../progress-bar/progress-bar"));
function GameDpsHeal(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-dps-bar", children: [(0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", src: (0, avatar_1.getAvatarSrc)(props.dpsMeter.name) }), (0, jsx_runtime_1.jsxs)("div", { className: "game-dps-progress-wrapper", children: [(0, jsx_runtime_1.jsx)("p", { children: props.dpsMeter.heal + props.dpsMeter.shield }), (0, jsx_runtime_1.jsxs)(progress_bar_1.default, { className: "my-progress is-primary", children: [(0, jsx_runtime_1.jsx)(progress_bar_1.default, { style: { backgroundColor: "#76c442" }, max: props.maxHeal, now: props.dpsMeter.heal, title: `${t("hp_healed")}: ${props.dpsMeter.heal}` }, "heal"), (0, jsx_runtime_1.jsx)(progress_bar_1.default, { style: { backgroundColor: "#8d8d8d" }, max: props.maxHeal, now: props.dpsMeter.shield, title: `${t("shield_given")}: ${props.dpsMeter.shield}` }, "shield")] })] })] }));
}
//# sourceMappingURL=game-dps-heal.js.map