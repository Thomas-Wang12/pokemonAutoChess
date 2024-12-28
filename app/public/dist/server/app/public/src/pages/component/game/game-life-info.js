"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLifeInfo = GameLifeInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const hooks_1 = require("../../../hooks");
const life_1 = require("../icons/life");
function GameLifeInfo() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectCurrentPlayer);
    if (!currentPlayer)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { id: "game-life-info", className: "my-container life information", children: (0, jsx_runtime_1.jsxs)("div", { "data-tooltip-id": "detail-life", children: [(0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-life", className: "custom-theme-tooltip", place: "top", children: (0, jsx_runtime_1.jsx)("p", { className: "help", children: t("lose_game_hint") }) }), (0, jsx_runtime_1.jsx)(life_1.Life, { value: currentPlayer.life })] }) }));
}
//# sourceMappingURL=game-life-info.js.map