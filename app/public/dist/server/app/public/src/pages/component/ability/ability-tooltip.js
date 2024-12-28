"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityTooltip = AbilityTooltip;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const descriptions_1 = require("../../utils/descriptions");
require("./ability-tooltip.css");
function AbilityTooltip(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const description = t(`ability_description.${props.ability}`);
    return ((0, jsx_runtime_1.jsx)("p", { className: "ability-description", children: (0, descriptions_1.addIconsToDescription)(description, props.stats) }));
}
//# sourceMappingURL=ability-tooltip.js.map