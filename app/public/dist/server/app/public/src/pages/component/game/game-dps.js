"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameDps;
const jsx_runtime_1 = require("react/jsx-runtime");
const avatar_1 = require("../../../../../utils/avatar");
const react_i18next_1 = require("react-i18next");
const progress_bar_1 = __importDefault(require("../progress-bar/progress-bar"));
function GameDps(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-dps-bar", children: [(0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", src: (0, avatar_1.getAvatarSrc)(props.dps.name) }), (0, jsx_runtime_1.jsxs)("div", { className: "game-dps-progress-wrapper", children: [(0, jsx_runtime_1.jsx)("p", { children: props.dps.physicalDamage +
                            props.dps.specialDamage +
                            props.dps.trueDamage }), (0, jsx_runtime_1.jsxs)(progress_bar_1.default, { className: "my-progress is-primary", children: [(0, jsx_runtime_1.jsx)(progress_bar_1.default, { style: { backgroundColor: "#e76e55" }, max: props.maxDamage, now: props.dps.physicalDamage, title: `${t("physical_damage_dealt")}: ${props.dps.physicalDamage}` }, "physical"), (0, jsx_runtime_1.jsx)(progress_bar_1.default, { style: { backgroundColor: "#209cee" }, max: props.maxDamage, now: props.dps.specialDamage, title: `${t("special_damage_dealt")}: ${props.dps.specialDamage}` }, "special"), (0, jsx_runtime_1.jsx)(progress_bar_1.default, { style: { backgroundColor: "#f7d51d" }, max: props.maxDamage, now: props.dps.trueDamage, title: `${t("true_damage_dealt")}: ${props.dps.trueDamage}` }, "true")] })] })] }));
}
//# sourceMappingURL=game-dps.js.map