"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = Money;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./money.css");
function Money(props) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [props.value != null && ((0, jsx_runtime_1.jsx)("span", { style: { verticalAlign: "middle", flex: "1", fontWeight: "600" }, children: props.value })), (0, jsx_runtime_1.jsx)("img", { className: "icon-money", src: "/assets/icons/money.svg", alt: "$" })] }));
}
//# sourceMappingURL=money.js.map