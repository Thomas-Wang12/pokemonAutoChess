"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TimerBar;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../../../hooks");
require("./game-timer-bar.css");
function TimerBar() {
    const totalTime = (0, hooks_1.useAppSelector)((state) => state.game.phaseDuration);
    const time = (0, hooks_1.useAppSelector)((state) => state.game.roundTime);
    const pc = Math.min(Math.max((100 * time) / totalTime, 0), 100);
    return ((0, jsx_runtime_1.jsx)("div", { className: "timer-bar", children: (0, jsx_runtime_1.jsx)("div", { className: "timer-bar-inner", style: { width: `${pc}%` } }) }));
}
//# sourceMappingURL=game-timer-bar.js.map