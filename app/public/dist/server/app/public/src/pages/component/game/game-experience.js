"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameExperience;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const experience_manager_1 = require("../../../../../models/colyseus-models/experience-manager");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const money_1 = require("../icons/money");
function GameExperience() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const experienceManager = (0, hooks_1.useAppSelector)((state) => state.game.experienceManager);
    const isLevelMax = experienceManager.level >= 9;
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const levelUpCost = (0, experience_manager_1.getLevelUpCost)(specialGameRule);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-experience", children: [(0, jsx_runtime_1.jsxs)("span", { children: [t("lvl"), " ", experienceManager.level] }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly orange buy-xp-button", title: t("buy_xp_tooltip", { cost: levelUpCost }), onClick: () => {
                    dispatch((0, NetworkStore_1.levelClick)());
                }, children: (0, jsx_runtime_1.jsx)(money_1.Money, { value: t("buy_xp", { cost: levelUpCost }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "progress-bar", children: [(0, jsx_runtime_1.jsx)("progress", { className: "my-progress", value: isLevelMax ? 0 : experienceManager.experience, max: experienceManager.expNeeded }), (0, jsx_runtime_1.jsx)("span", { children: isLevelMax
                            ? "Max Level"
                            : experienceManager.experience + "/" + experienceManager.expNeeded })] })] }));
}
//# sourceMappingURL=game-experience.js.map