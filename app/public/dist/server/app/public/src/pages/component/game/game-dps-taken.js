"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameDpsTaken;
const jsx_runtime_1 = require("react/jsx-runtime");
const avatar_1 = require("../../../../../utils/avatar");
const react_i18next_1 = require("react-i18next");
const progress_bar_1 = __importDefault(require("../progress-bar/progress-bar"));
function GameDpsTaken(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-dps-bar", children: [(0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", src: (0, avatar_1.getAvatarSrc)(props.dps.name) }), (0, jsx_runtime_1.jsxs)("div", { className: "game-dps-progress-wrapper", children: [(0, jsx_runtime_1.jsx)("p", { children: props.dps.physicalDamageReduced +
                            props.dps.specialDamageReduced +
                            props.dps.shieldDamageTaken }), (0, jsx_runtime_1.jsxs)(progress_bar_1.default, { className: "my-progress is-primary", children: [(0, jsx_runtime_1.jsx)(progress_bar_1.default, { style: { backgroundColor: "#e76e55" }, max: props.maxDamageTaken, now: props.dps.physicalDamageReduced, title: `${t("physical_damage_reduced")}: ${props.dps.physicalDamageReduced}` }, "hp"), (0, jsx_runtime_1.jsx)(progress_bar_1.default, { style: { backgroundColor: "#209cee" }, max: props.maxDamageTaken, now: props.dps.specialDamageReduced, title: `${t("special_damage_reduced")}: ${props.dps.specialDamageReduced}` }, "hp"), (0, jsx_runtime_1.jsx)(progress_bar_1.default, { style: { backgroundColor: "#8d8d8d" }, max: props.maxDamageTaken, now: props.dps.shieldDamageTaken, title: `${t("shield_damage_taken")}: ${props.dps.shieldDamageTaken}` }, "shield")] })] })] }));
}
//# sourceMappingURL=game-dps-taken.js.map