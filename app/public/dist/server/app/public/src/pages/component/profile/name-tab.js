"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameTab = NameTab;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
function NameTab() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const dispatch = (0, hooks_1.useAppDispatch)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const isAnonymous = false;
    if (user && isAnonymous) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "my-container", children: (0, jsx_runtime_1.jsx)("p", { children: t("anonymous_users_name_hint") }) }));
    }
    return user ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: t("change_name") }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: "0.5em" }, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: user.displayName, onChange: (e) => {
                            setInputValue(e.target.value);
                        } }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => dispatch((0, NetworkStore_1.changeName)(inputValue)), children: t("change") })] })] })) : null;
}
//# sourceMappingURL=name-tab.js.map