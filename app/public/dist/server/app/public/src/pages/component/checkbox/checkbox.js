"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = Checkbox;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const jsx_1 = require("../../utils/jsx");
require("./checkbox.css");
function Checkbox({ checked, onToggle, label, isDark = false, readOnly, title }) {
    const handleChange = (0, react_1.useCallback)((e) => {
        e.stopPropagation();
        onToggle === null || onToggle === void 0 ? void 0 : onToggle(!checked);
    }, [checked, onToggle]);
    return ((0, jsx_runtime_1.jsxs)("label", { className: "checkbox-container", title: title, children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: (0, jsx_1.cc)("my-checkbox", { "is-dark": isDark }), checked: checked, onChange: handleChange, readOnly: readOnly }), (0, jsx_runtime_1.jsx)("span", { style: { color: isDark ? "white" : "black" }, children: label })] }));
}
//# sourceMappingURL=checkbox.js.map