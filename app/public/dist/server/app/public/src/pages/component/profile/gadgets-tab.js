"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetsTab = GadgetsTab;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const gadgets_1 = require("../../../../../core/gadgets");
const hooks_1 = require("../../../hooks");
const jsx_1 = require("../../utils/jsx");
function GadgetsTab() {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const level = (_a = user === null || user === void 0 ? void 0 : user.level) !== null && _a !== void 0 ? _a : 0;
    const gadgets = Object.values(gadgets_1.GADGETS).filter((g) => !g.disabled);
    const nbGadgetsUnlocked = gadgets.filter((g) => g.levelRequired <= level).length;
    return user ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { style: { textAlign: "right" }, children: [nbGadgetsUnlocked, " / ", gadgets.length, " ", t("gadgets_unlocked")] }), (0, jsx_runtime_1.jsx)("ul", { className: "gadgets", children: gadgets.map((g) => ((0, jsx_runtime_1.jsxs)("li", { className: (0, jsx_1.cc)("gadget", "my-container", {
                        locked: g.levelRequired > level
                    }), children: [(0, jsx_runtime_1.jsx)("img", { src: `/assets/ui/${g.icon}.svg`, alt: t(g.name) }), (0, jsx_runtime_1.jsx)("span", { children: t(g.name) }), g.levelRequired > level && ((0, jsx_runtime_1.jsxs)("small", { children: [t("level_required"), ": ", g.levelRequired] })), (0, jsx_runtime_1.jsx)("p", { className: "description", children: t(g.description) })] }, g.name))) })] })) : null;
}
//# sourceMappingURL=gadgets-tab.js.map