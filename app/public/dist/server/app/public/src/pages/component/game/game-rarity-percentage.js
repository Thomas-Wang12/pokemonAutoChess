"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameRarityPercentage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const Config_1 = require("../../../../../types/Config");
const Game_1 = require("../../../../../types/enum/Game");
const hooks_1 = require("../../../hooks");
function GameRarityPercentage() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const level = (0, hooks_1.useAppSelector)((state) => state.game.experienceManager.level);
    const RarityTiers = [
        Game_1.Rarity.COMMON,
        Game_1.Rarity.UNCOMMON,
        Game_1.Rarity.RARE,
        Game_1.Rarity.EPIC,
        Game_1.Rarity.ULTRA
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_tooltip_1.Tooltip, { id: "detail-game-rarity-percentage", className: "custom-theme-tooltip", place: "top", children: [(0, jsx_runtime_1.jsx)("p", { children: t("encounter_rates") }), (0, jsx_runtime_1.jsxs)("table", { style: { width: "10vw" }, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: t("rarity_label") }), (0, jsx_runtime_1.jsx)("th", { children: t("rate") })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: RarityTiers.map((rarity, index) => ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { style: { color: Config_1.RarityColor[rarity] }, children: t(`rarity.${rarity}`) }), (0, jsx_runtime_1.jsxs)("td", { children: [Math.round(Config_1.RarityProbabilityPerLevel[level][index] * 100), "%"] })] }, "detail-" + rarity))) })] }), (0, jsx_runtime_1.jsx)("p", { className: "help", children: t("increase_level_hint") })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-box game-rarity-percentage", "data-tooltip-id": "detail-game-rarity-percentage", children: RarityTiers.map((rarity, index) => {
                    return ((0, jsx_runtime_1.jsxs)("div", { style: { backgroundColor: Config_1.RarityColor[rarity] }, children: [Math.ceil(Config_1.RarityProbabilityPerLevel[level][index] * 100), "%"] }, rarity));
                }) })] }));
}
//# sourceMappingURL=game-rarity-percentage.js.map