"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePlayerDpsMeter;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const game_dps_1 = __importDefault(require("./game-dps"));
function GamePlayerDpsMeter({ dpsMeter = [] }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const sortedDps = (0, react_1.useMemo)(() => [...dpsMeter].sort((a, b) => {
        return (b.physicalDamage +
            b.specialDamage +
            b.trueDamage -
            (a.physicalDamage + a.specialDamage + a.trueDamage));
    }), [dpsMeter]);
    const maxDamage = (0, react_1.useMemo)(() => {
        const firstDps = sortedDps.at(0);
        if (!firstDps) {
            return 0;
        }
        return (firstDps.physicalDamage + firstDps.specialDamage + firstDps.trueDamage);
    }, [sortedDps]);
    const totalDamage = (0, react_1.useMemo)(() => sortedDps.reduce((acc, dps) => {
        acc += dps.physicalDamage + dps.specialDamage + dps.trueDamage;
        return acc;
    }, 0), [sortedDps]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [sortedDps.map((p) => {
                return (0, jsx_runtime_1.jsx)(game_dps_1.default, { dps: p, maxDamage: maxDamage }, p.id);
            }), sortedDps.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { children: [t("total"), ": ", totalDamage] }))] }));
}
//# sourceMappingURL=game-player-dps-meter.js.map