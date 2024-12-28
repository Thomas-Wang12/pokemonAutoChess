"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Life = Life;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./life.css");
function Life(props) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [props.value && ((0, jsx_runtime_1.jsx)("span", { style: { verticalAlign: "middle", flex: "1" }, children: props.value })), (0, jsx_runtime_1.jsx)("img", { className: "icon-life", src: "/assets/ui/heart.png", alt: "\u2764" })] }));
}
//# sourceMappingURL=life.js.map