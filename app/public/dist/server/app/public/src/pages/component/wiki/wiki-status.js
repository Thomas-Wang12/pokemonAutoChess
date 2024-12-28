"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiStatus;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Status_1 = require("../../../../../types/enum/Status");
const descriptions_1 = require("../../utils/descriptions");
function WikiStatus() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const statusList = [
        Status_1.Status.ARMOR_REDUCTION,
        Status_1.Status.BURN,
        Status_1.Status.CHARM,
        Status_1.Status.CONFUSION,
        Status_1.Status.CURSE,
        Status_1.Status.FLINCH,
        Status_1.Status.FREEZE,
        Status_1.Status.PARALYSIS,
        Status_1.Status.POISONNED,
        Status_1.Status.POKERUS,
        Status_1.Status.PROTECT,
        Status_1.Status.RESURECTION,
        Status_1.Status.RUNE_PROTECT,
        Status_1.Status.SILENCE,
        Status_1.Status.FATIGUE,
        Status_1.Status.SLEEP,
        Status_1.Status.WOUND,
        Status_1.Status.RAGE,
        Status_1.Status.LOCKED,
        Status_1.Status.BLINDED,
        Status_1.Status.ELECTRIC_FIELD,
        Status_1.Status.FAIRY_FIELD,
        Status_1.Status.GRASS_FIELD,
        Status_1.Status.PSYCHIC_FIELD
    ];
    return ((0, jsx_runtime_1.jsx)("ul", { className: "wiki-status", children: statusList.map((status) => ((0, jsx_runtime_1.jsxs)("li", { className: "my-box", children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/status/demo/${status}.gif`, alt: status }), (0, jsx_runtime_1.jsx)("h2", { children: (0, descriptions_1.addIconsToDescription)(status) }), (0, jsx_runtime_1.jsx)("p", { className: "description", children: (0, descriptions_1.addIconsToDescription)(t(`status_description.${status}`)) })] }, status))) }));
}
//# sourceMappingURL=wiki-status.js.map