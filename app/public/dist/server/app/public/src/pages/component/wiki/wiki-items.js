"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiItems;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const Item_1 = require("../../../../../types/enum/Item");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const item_detail_1 = require("../../../game/components/item-detail");
const descriptions_1 = require("../../utils/descriptions");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
function WikiItems() {
    const [itemHovered, setItemHovered] = (0, react_1.useState)();
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-items", children: [(0, jsx_runtime_1.jsxs)("article", { className: "craftable", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("item_recipes") }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("craftable_items_description")) }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { style: {
                                                fontSize: "300%",
                                                verticalAlign: "middle",
                                                textAlign: "center",
                                                lineHeight: 0
                                            }, children: "+" }), Item_1.ItemComponents.map((i) => {
                                            return ((0, jsx_runtime_1.jsx)("th", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(i), children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }) }, i));
                                        })] }), Item_1.ItemComponents.map((i) => {
                                    return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(i), children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }) }), Item_1.ItemComponents.map((j) => {
                                                let tier2Item;
                                                Object.keys(Item_1.ItemRecipe).forEach((recipeName) => {
                                                    if ((Item_1.ItemRecipe[recipeName][0] == i &&
                                                        Item_1.ItemRecipe[recipeName][1] == j) ||
                                                        (Item_1.ItemRecipe[recipeName][0] == j &&
                                                            Item_1.ItemRecipe[recipeName][1] == i)) {
                                                        tier2Item = recipeName;
                                                    }
                                                });
                                                return ((0, jsx_runtime_1.jsx)("td", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(tier2Item), children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + tier2Item + ".png", className: "item" }) }, "td-" + i + "-" + j));
                                            })] }, "tr-" + i));
                                })] }) })] }), (0, jsx_runtime_1.jsxs)("article", { children: [(0, jsx_runtime_1.jsx)("h2", { children: t("shiny_items") }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("shiny_items_description")) }), (0, jsx_runtime_1.jsx)("ul", { className: "shiny", children: Item_1.ShinyItems.map((i) => ((0, jsx_runtime_1.jsx)("li", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(i), children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }) }, i))) }), (0, jsx_runtime_1.jsx)("h2", { children: t("special_items") }), (0, jsx_runtime_1.jsx)("p", { children: t("special_items_description") }), (0, jsx_runtime_1.jsx)("ul", { className: "special", children: Item_1.SpecialItems.map((i) => ((0, jsx_runtime_1.jsx)("li", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(i), children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }) }, i))) })] }), (0, jsx_runtime_1.jsxs)("article", { className: "berries", children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.GRASS }), " ", t("berries")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("berries_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: Item_1.Berries.map((i) => ((0, jsx_runtime_1.jsxs)("li", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(i), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("img", { src: "assets/environment/berry_trees/" + i + "_6.png", className: "tree" })] }, i))) })] }), (0, jsx_runtime_1.jsxs)("article", { className: "artificial", children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.ARTIFICIAL }), " ", t("artificial_items")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("artificial_items_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: Item_1.ArtificialItems.map((i) => ((0, jsx_runtime_1.jsx)("li", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(i), children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }) }, i))) })] }), (0, jsx_runtime_1.jsxs)("article", { className: "weather-rocks", children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.ROCK }), " ", t("weather_rocks")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("weather_rocks_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: Item_1.WeatherRocks.map((i) => ((0, jsx_runtime_1.jsx)("li", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(i), children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }) }, i))) })] }), (0, jsx_runtime_1.jsxs)("article", { className: "tm-hm", children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.HUMAN }), " ", t("tm_hm")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("tm_hm_description")) }), (0, jsx_runtime_1.jsxs)("ul", { children: [Item_1.TMs.map((i) => ((0, jsx_runtime_1.jsx)("li", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(i), children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/TM.png", className: "item" }) }, i))), Item_1.HMs.map((i) => ((0, jsx_runtime_1.jsx)("li", { "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(i), children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/HM.png", className: "item" }) }, i)))] })] }), itemHovered && (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-item", className: "custom-theme-tooltip item-detail-tooltip", children: (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, { item: itemHovered }) })] }));
}
//# sourceMappingURL=wiki-items.js.map