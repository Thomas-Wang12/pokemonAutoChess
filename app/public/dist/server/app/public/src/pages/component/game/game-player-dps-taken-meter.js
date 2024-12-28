"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePlayerDpsTakenMeter;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const game_dps_taken_1 = __importDefault(require("./game-dps-taken"));
function GamePlayerDpsTakenMeter({ dpsMeter = [] }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const sortedDamageTaken = (0, react_1.useMemo)(() => [...dpsMeter].sort((a, b) => {
        return (b.physicalDamageReduced +
            b.specialDamageReduced +
            b.shieldDamageTaken -
            (a.physicalDamageReduced +
                a.specialDamageReduced +
                a.shieldDamageTaken));
    }), [dpsMeter]);
    const maxDamageTaken = (0, react_1.useMemo)(() => {
        const firstDps = sortedDamageTaken.at(0);
        if (!firstDps) {
            return 0;
        }
        return (firstDps.physicalDamageReduced +
            firstDps.specialDamageReduced +
            firstDps.shieldDamageTaken);
    }, [sortedDamageTaken]);
    const totalDamageTaken = (0, react_1.useMemo)(() => sortedDamageTaken.reduce((acc, dps) => {
        acc +=
            dps.physicalDamageReduced +
                dps.specialDamageReduced +
                dps.shieldDamageTaken;
        return acc;
    }, 0), [sortedDamageTaken]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [sortedDamageTaken.map((p) => {
                return ((0, jsx_runtime_1.jsx)(game_dps_taken_1.default, { dps: p, maxDamageTaken: maxDamageTaken }, p.id));
            }), sortedDamageTaken.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { children: [t("total"), ": ", totalDamageTaken] }))] }));
}
//# sourceMappingURL=game-player-dps-taken-meter.js.map