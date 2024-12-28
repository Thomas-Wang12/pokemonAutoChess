"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleTab = TitleTab;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const title_statistic_1 = require("../../../../../models/mongo-models/title-statistic");
const types_1 = require("../../../../../types");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const jsx_1 = require("../../utils/jsx");
const checkbox_1 = require("../checkbox/checkbox");
function TitleTab() {
    const [showUnlocked, setShowUnlocked] = (0, react_1.useState)(true);
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const [titles, setTitles] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, title_statistic_1.fetchTitles)().then((res) => {
            Object.keys(types_1.Title).forEach((title) => {
                if (!res.some((t) => t.name === title)) {
                    res.push({ name: title, rarity: 0 });
                }
            });
            setTitles(res);
        });
    }, []);
    return user && titles ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between" }, children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: showUnlocked, onToggle: setShowUnlocked, label: t("toggle_locked"), isDark: true }), (0, jsx_runtime_1.jsxs)("p", { children: [user.titles.length, " / ", Object.keys(types_1.Title).length, " ", t("titles_unlocked")] })] }), (0, jsx_runtime_1.jsx)("ul", { className: "titles", children: titles
                    .filter((title) => showUnlocked || user.titles.includes(title.name))
                    .sort((a, b) => b.rarity - a.rarity)
                    .map((k) => ((0, jsx_runtime_1.jsxs)("li", { style: {
                        background: `linear-gradient(to right, var(--color-bg-primary) 0% ${k.rarity * 100}%, var(--color-bg-secondary) ${k.rarity * 100}% 100%)`
                    }, className: (0, jsx_1.cc)("clickable", "my-box", {
                        unlocked: user.titles.includes(k.name),
                        selected: user.title === k.name
                    }), onClick: () => {
                        if (user.titles.includes(k.name)) {
                            dispatch((0, NetworkStore_1.setTitle)(k.name));
                        }
                    }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { children: t(`title.${k.name}`) }), (0, jsx_runtime_1.jsx)("p", { children: t(`title_description.${k.name}`) })] }), (0, jsx_runtime_1.jsxs)("span", { children: [(k.rarity * 100).toFixed(3), "%"] })] }, k.name))) })] })) : null;
}
//# sourceMappingURL=title-tab.js.map