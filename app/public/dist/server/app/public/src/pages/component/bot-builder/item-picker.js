"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ItemPicker;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const react_tabs_1 = require("react-tabs");
const react_tooltip_1 = require("react-tooltip");
const Item_1 = require("../../../../../types/enum/Item");
const item_detail_1 = require("../../../game/components/item-detail");
const jsx_1 = require("../../utils/jsx");
function ItemPicker(props) {
    const [itemHovered, setItemHovered] = (0, react_1.useState)();
    function handleOnDragStart(e, item) {
        e.dataTransfer.setData("item", item);
    }
    const tabs = [
        { label: (0, i18next_1.t)("components"), key: "components", items: Item_1.ItemComponents },
        { label: (0, i18next_1.t)("craftable_items"), key: "craftable", items: Item_1.CraftableItems },
        { label: (0, i18next_1.t)("berries"), key: "berries", items: Item_1.Berries },
        { label: (0, i18next_1.t)("artificial_items"), key: "artificial", items: Item_1.ArtificialItems },
        {
            label: (0, i18next_1.t)("shiny_items"),
            key: "shiny_items",
            items: Item_1.ShinyItems
        }
    ];
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "my-box", id: "item-picker", children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabList, { children: tabs.map((t) => ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t.label }, t.key))) }), tabs.map((t) => ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: t.items.map((item) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + Item_1.Item[item] + ".png", className: (0, jsx_1.cc)("item", { selected: item === props.selected }), "data-tooltip-id": "detail-item", onMouseOver: () => setItemHovered(item), onClick: () => props.selectEntity(item), draggable: true, onDragStart: (e) => handleOnDragStart(e, item) }, item))) }, t.key))), itemHovered && (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-item", className: "custom-theme-tooltip item-detail-tooltip", children: (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, { item: itemHovered }) })] }));
}
//# sourceMappingURL=item-picker.js.map