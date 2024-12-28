"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function GameToasts() {
    return ((0, jsx_runtime_1.jsx)("div", { children: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ((0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { className: `toast toast-${i}`, containerId: `${i}`, position: "bottom-right", autoClose: 500, hideProgressBar: true, newestOnTop: true, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, limit: 1, closeButton: false, style: { top: `${0.5 + (i - 1) * 12.5}%` } }, i.toString()))) }));
}
exports.default = (0, react_1.memo)(GameToasts);
//# sourceMappingURL=game-toasts.js.map