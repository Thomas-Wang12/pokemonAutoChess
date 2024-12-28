"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Synergies;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Config_1 = require("../../../../../types/Config");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const synergy_component_1 = __importDefault(require("./synergy-component"));
require("./synergies.css");
function Synergies(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const synergies = Object.keys(Synergy_1.Synergy)
        .sort((a, b) => {
        const fa = props.synergies.find((e) => e[0] == a);
        const fb = props.synergies.find((e) => e[0] == b);
        const sa = fa ? fa : 0;
        const sb = fb ? fb : 0;
        if (sa[1] == sb[1]) {
            if (sa[1] >= Config_1.SynergyTriggers[a][0]) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            return sb[1] - sa[1];
        }
    })
        .filter((type) => {
        const s = props.synergies.find((e) => e[0] == type);
        return s && s[1] > 0;
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "synergies-container my-container", children: [(0, jsx_runtime_1.jsx)("h2", { className: "synergies-header", children: t("synergies") }), synergies.map((type, index) => {
                const s = props.synergies.find((e) => e[0] == type);
                return ((0, jsx_runtime_1.jsx)(synergy_component_1.default, { type: type, value: s[1], index: index, tooltipPortal: props.tooltipPortal }, type));
            })] }));
}
//# sourceMappingURL=synergies.js.map