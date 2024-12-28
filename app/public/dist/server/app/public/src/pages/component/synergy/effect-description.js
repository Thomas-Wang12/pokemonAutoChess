"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectDescriptionComponent = EffectDescriptionComponent;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const descriptions_1 = require("../../utils/descriptions");
function EffectDescriptionComponent(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const description = t(`effect_description.${props.effect}`);
    return ((0, jsx_runtime_1.jsx)("p", { className: "synergy-description", children: (0, descriptions_1.addIconsToDescription)(description) }));
}
//# sourceMappingURL=effect-description.js.map