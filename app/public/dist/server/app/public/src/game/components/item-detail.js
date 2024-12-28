"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemDetailTooltip = ItemDetailTooltip;
const jsx_runtime_1 = require("react/jsx-runtime");
const phaser_1 = require("phaser");
const react_1 = require("react");
const client_1 = __importDefault(require("react-dom/client"));
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const Config_1 = require("../../../../types/Config");
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const descriptions_1 = require("../../pages/utils/descriptions");
require("./item-detail.css");
function ItemDetailTooltip({ item, depth = 1 }) {
    var _a, _b;
    const { t } = (0, react_i18next_1.useTranslation)();
    const recipes = (0, react_1.useMemo)(() => Object.entries(Item_1.ItemRecipe).filter(([, recipe]) => recipe.includes(item)), [item]);
    const formatStat = (stat, value) => {
        if ([Game_1.Stat.CRIT_POWER].includes(stat)) {
            value = Math.round(value * 100);
        }
        let output = value.toString();
        if ([Game_1.Stat.ATK_SPEED, Game_1.Stat.CRIT_CHANCE, Game_1.Stat.CRIT_POWER].includes(stat)) {
            output += "%";
        }
        if (value >= 0) {
            output = "+" + output;
        }
        return output;
    };
    const getImageFilename = () => {
        if (Item_1.TMs.includes(item)) {
            return "TM";
        }
        if (Item_1.HMs.includes(item)) {
            return "HM";
        }
        return item;
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-item-detail", children: [(0, jsx_runtime_1.jsx)("img", { className: "game-item-detail-icon", src: `assets/item/${getImageFilename()}.png` }), (0, jsx_runtime_1.jsxs)("div", { className: "game-item-detail-name", children: [Item_1.ItemRecipe[item] && ((0, jsx_runtime_1.jsx)("div", { className: "game-item-recipe", children: (_a = Item_1.ItemRecipe[item]) === null || _a === void 0 ? void 0 : _a.map((item, i) => (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("img", { className: "game-item-detail-icon", src: `assets/item/${item}.png` }, item), i === 0 && ' + '] })) })), t(`item.${item}`)] }), (0, jsx_runtime_1.jsx)("div", { className: "game-item-detail-stats", children: Object.entries((_b = Config_1.ItemStats[item]) !== null && _b !== void 0 ? _b : {}).map(([stat, value]) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${stat}.png`, alt: stat, title: t(`stat.${stat}`) }), (0, jsx_runtime_1.jsx)("span", { children: formatStat(stat, value) })] }, stat))) }), (0, jsx_runtime_1.jsx)("p", { className: "game-item-detail-description", children: (0, descriptions_1.addIconsToDescription)(t(`item_description.${item}`)) }), recipes.length > 0 && depth <= 1 && ((0, jsx_runtime_1.jsx)("div", { className: "game-item-detail-combinations", children: recipes.map(([result, recipe]) => {
                    const otherComponent = recipe[0] == item ? recipe[1] : recipe[0];
                    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-item-detail-combination", children: [(0, jsx_runtime_1.jsx)("p", { children: "+" }), (0, jsx_runtime_1.jsx)("img", { src: `assets/item/${otherComponent}.png`, "data-tooltip-id": "item-tooltip-" + otherComponent }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "item-tooltip-" + otherComponent, float: true, place: "right", className: "custom-theme-tooltip item-detail-tooltip", children: (0, jsx_runtime_1.jsx)(ItemDetailTooltip, { item: otherComponent, depth: depth + 1 }) }), (0, jsx_runtime_1.jsx)("p", { children: "=" }), (0, jsx_runtime_1.jsx)("img", { src: `assets/item/${result}.png`, "data-tooltip-id": "item-tooltip-" + result }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "item-tooltip-" + result, float: true, place: "right", className: "custom-theme-tooltip item-detail-tooltip", children: (0, jsx_runtime_1.jsx)(ItemDetailTooltip, { item: result, depth: depth + 1 }) })] }, result));
                }) }))] }));
}
class ItemDetail extends phaser_1.GameObjects.DOMElement {
    constructor(scene, x, y, name) {
        super(scene, x, y);
        this.dom = document.createElement("div");
        this.dom.className = "my-container item-detail-tooltip";
        this.setElement(this.dom);
        const root = client_1.default.createRoot(this.dom);
        root.render((0, jsx_runtime_1.jsx)(ItemDetailTooltip, { item: name }));
    }
}
exports.default = ItemDetail;
//# sourceMappingURL=item-detail.js.map