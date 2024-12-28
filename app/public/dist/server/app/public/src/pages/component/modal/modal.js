"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = Modal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = __importDefault(require("react-dom"));
const react_i18next_1 = require("react-i18next");
const jsx_1 = require("../../utils/jsx");
require("./modal.css");
function Modal(props) {
    const { show, onClose = () => { }, className = "", children, confirmText, header, body, footer } = props;
    const ref = (0, react_1.useRef)(null);
    const { t } = (0, react_i18next_1.useTranslation)();
    const close = () => {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.close();
        onClose();
    };
    (0, react_1.useEffect)(() => {
        var _a;
        if (show) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.showModal();
        }
        else {
            close();
        }
    }, [show]);
    (0, react_1.useEffect)(() => {
        if (show) {
            const dialog = ref.current;
            dialog.addEventListener("click", function (event) {
                const rect = dialog.getBoundingClientRect();
                const isInDialog = (rect.top <= event.clientY &&
                    event.clientY <= rect.top + rect.height &&
                    rect.left <= event.clientX &&
                    event.clientX <= rect.left + rect.width) ||
                    ["OPTION", "SELECT"].includes(event.target.tagName);
                if (!isInDialog) {
                    close();
                }
            });
        }
    }, [show]);
    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            close();
        }
    };
    return show
        ? react_dom_1.default.createPortal((0, jsx_runtime_1.jsxs)("dialog", { ref: ref, onCancel: close, className: (0, jsx_1.cc)("modal", "my-container", className), onKeyDown: handleKeyDown, children: [header && ((0, jsx_runtime_1.jsxs)("header", { children: [header, (0, jsx_runtime_1.jsx)("button", { className: "close-btn", onClick: close, children: "\uD83D\uDDD9" })] })), (0, jsx_runtime_1.jsx)("div", { className: "modal-body", children: body || children }), (footer || confirmText) && ((0, jsx_runtime_1.jsxs)("footer", { children: [footer, confirmText && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { className: "secondary", onClick: close, children: t("close") }), (0, jsx_runtime_1.jsx)("button", { className: "primary", onClick: close, children: confirmText })] }))] }))] }), document.querySelector("#modal-root"))
        : null;
}
//# sourceMappingURL=modal.js.map