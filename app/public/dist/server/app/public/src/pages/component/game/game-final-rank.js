"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameFinalRank;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Strings_1 = require("../../../../../types/strings/Strings");
require("./game-final-rank.css");
function GameFinalRank(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return props.visible ? ((0, jsx_runtime_1.jsx)("div", { className: "game-final-rank", children: (0, jsx_runtime_1.jsxs)("div", { className: "my-container", children: [props.rank === 0 && ((0, jsx_runtime_1.jsx)("p", { className: "waiting", children: t("waiting_final_rank") })), props.rank > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: "rank", children: (0, Strings_1.getRankLabel)(props.rank) }), (0, jsx_runtime_1.jsxs)("div", { className: "actions", children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: props.hide, children: t("stay_till_the_end") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: props.leave, children: t("leave_game") })] })] }))] }) })) : null;
}
//# sourceMappingURL=game-final-rank.js.map