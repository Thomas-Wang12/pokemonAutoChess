"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const descriptions_1 = require("../../utils/descriptions");
const style = {
    width: "320px",
    maxWidth: "20vw",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center"
};
function GameItem(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "my-container", style: style, children: [(0, jsx_runtime_1.jsx)("img", { style: { width: "4rem", height: "4rem", imageRendering: "pixelated" }, src: "assets/item/" + props.item + ".png" }), (0, jsx_runtime_1.jsx)("h3", { style: { margin: "0.25em 0" }, children: t(`item.${props.item}`) }), (0, jsx_runtime_1.jsx)("p", { style: { marginBottom: "0.5em" }, children: (0, descriptions_1.addIconsToDescription)(t(`item_description.${props.item}`)) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    dispatch((0, NetworkStore_1.itemClick)(props.item));
                }, type: "button", className: "bubbly blue active", children: "Pick" })] }));
}
//# sourceMappingURL=game-item.js.map