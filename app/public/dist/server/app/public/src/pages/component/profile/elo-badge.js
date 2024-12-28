"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EloBadge = EloBadge;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const elo_1 = require("../../../../../utils/elo");
require("./elo-badge.css");
function EloBadge(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const rank = (0, elo_1.getRank)(props.elo);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "elo badge", children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ranks/" + rank + ".svg", alt: t("elorank." + rank), title: t("elorank." + rank) }), (0, jsx_runtime_1.jsx)("p", { style: { margin: 0 }, children: props.elo })] }));
}
//# sourceMappingURL=elo-badge.js.map