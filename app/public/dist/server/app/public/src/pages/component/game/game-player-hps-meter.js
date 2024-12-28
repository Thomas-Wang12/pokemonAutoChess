"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePlayerHpsMeter;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const game_dps_heal_1 = __importDefault(require("./game-dps-heal"));
function GamePlayerHpsMeter({ dpsMeter = [] }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const sortedHps = (0, react_1.useMemo)(() => [...dpsMeter].sort((a, b) => {
        return b.shield + b.heal - (a.shield + a.heal);
    }), [dpsMeter]);
    const maxHealAmount = (0, react_1.useMemo)(() => {
        const topHeal = sortedHps.at(0);
        if (!topHeal) {
            return 0;
        }
        return topHeal.shield + topHeal.heal;
    }, [sortedHps]);
    const totalHealAmount = (0, react_1.useMemo)(() => sortedHps.reduce((acc, dps) => {
        acc += dps.shield + dps.heal;
        return acc;
    }, 0), [sortedHps]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [sortedHps.map((p) => ((0, jsx_runtime_1.jsx)(game_dps_heal_1.default, { dpsMeter: p, maxHeal: maxHealAmount }, p.id))), sortedHps.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { children: [t("total"), ": ", totalHealAmount] }))] }));
}
//# sourceMappingURL=game-player-hps-meter.js.map