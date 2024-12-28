"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchResults;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const avatar_1 = require("../../../../../utils/avatar");
function SearchResults() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const suggestions = (0, hooks_1.useAppSelector)((state) => state.lobby.suggestions);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { className: "search-suggestions", children: suggestions.map((suggestion) => ((0, jsx_runtime_1.jsxs)("li", { className: "player my-box clickable", onClick: (e) => {
                    dispatch((0, NetworkStore_1.searchById)(suggestion.id));
                }, children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getAvatarSrc)(suggestion.avatar), className: "pokemon-portrait" }), (0, jsx_runtime_1.jsx)("span", { children: suggestion.name })] }, suggestion.id))) }) }));
}
//# sourceMappingURL=search-results.js.map