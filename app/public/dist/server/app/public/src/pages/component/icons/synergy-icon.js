"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SynergyIcon;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
require("./synergy-icon.css");
function SynergyIcon(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("img", { src: "assets/types/" + props.type + ".svg", alt: props.type, title: t("synergy." + props.type), className: "synergy-icon", style: {
            width: props.size,
            height: props.size
        } }));
}
//# sourceMappingURL=synergy-icon.js.map