"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = SearchBar;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
function SearchBar({ onChange }) {
    const [searchQuery, setSearchQuery] = (0, react_1.useState)("");
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("input", { type: "search", className: "search-bar", placeholder: t("search_player"), value: searchQuery, onChange: (e) => {
            setSearchQuery(e.target.value);
            onChange(e.target.value);
        } }));
}
//# sourceMappingURL=search-bar.js.map