"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ItemStatistic;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
function ItemStatistic(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "item-stat my-box", children: [(0, jsx_runtime_1.jsx)("span", { className: "rank", children: props.rank }), (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + props.item.name + ".png", style: {
                    width: "48px",
                    height: "48px",
                    imageRendering: "pixelated"
                } }), (0, jsx_runtime_1.jsx)("span", { children: t(`item.${props.item.name}`) }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("average_place"), ":"] }), " ", props.item.rank] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("count"), ":"] }), " ", props.item.count] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: "0.5em", alignItems: "center" }, children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("popular_holders"), ":"] }), props.item.pokemons.map((pokemon) => ((0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemon]) }, pokemon)))] })] }));
}
//# sourceMappingURL=item-statistic.js.map