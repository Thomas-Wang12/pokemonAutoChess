"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameTeamInfo = GameTeamInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
const board_1 = require("../../../../../utils/board");
const hooks_1 = require("../../../hooks");
function GameTeamInfo() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectCurrentPlayer);
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    if (!currentPlayer)
        return null;
    const maxTeamSize = (0, board_1.getMaxTeamSize)(currentPlayer.experienceManager.level, specialGameRule);
    return ((0, jsx_runtime_1.jsx)("div", { id: "game-team-info", className: "my-container team-size information", children: (0, jsx_runtime_1.jsxs)("div", { "data-tooltip-id": "detail-team-size", children: [(0, jsx_runtime_1.jsxs)(react_tooltip_1.Tooltip, { id: "detail-team-size", className: "custom-theme-tooltip", place: "top", children: [(0, jsx_runtime_1.jsxs)("p", { className: "help", children: [t("place_up_to"), " ", (0, jsx_runtime_1.jsx)("output", { children: maxTeamSize }), " ", t("pokemons_on_your_board")] }), specialGameRule !== SpecialGameRule_1.SpecialGameRule.SIX_PACK && ((0, jsx_runtime_1.jsx)("p", { className: "help", children: t("team_size_hint") }))] }), (0, jsx_runtime_1.jsxs)("span", { children: [currentPlayer.boardSize, "/", maxTeamSize] }), (0, jsx_runtime_1.jsx)("img", { className: "icon", src: "assets/ui/pokeball.svg" })] }) }));
}
//# sourceMappingURL=game-team-info.js.map