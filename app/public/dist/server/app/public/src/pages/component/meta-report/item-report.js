"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemReport = ItemReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const react_tabs_1 = require("react-tabs");
const items_statistic_1 = require("../../../../../models/mongo-models/items-statistic");
const Item_1 = require("../../../../../types/enum/Item");
const item_statistic_1 = __importDefault(require("./item-statistic"));
function ItemReport() {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [metaItems, setMetaItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, items_statistic_1.fetchMetaItems)().then((res) => {
            setLoading(false);
            setMetaItems(res);
        });
    }, []);
    const [itemRankingBy, setItemRanking] = (0, react_1.useState)("count");
    const sortedMetaItems = (0, react_1.useMemo)(() => {
        return [...metaItems].sort((a, b) => {
            const order = itemRankingBy == "count" ? -1 : 1;
            return (a[itemRankingBy] - b[itemRankingBy]) * order;
        });
    }, [metaItems, itemRankingBy]);
    const tabs = [
        { label: (0, i18next_1.t)("craftable_items"), key: "craftable", items: Item_1.CraftableItems },
        {
            label: (0, i18next_1.t)("artificial_items"),
            key: "artificial_items",
            items: Item_1.ArtificialItems
        },
        { label: (0, i18next_1.t)("shiny_items"), key: "shiny_items", items: Item_1.ShinyItems }
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { id: "item-report", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("best_items") }), (0, jsx_runtime_1.jsxs)("select", { value: itemRankingBy, onChange: (e) => {
                            setItemRanking(e.target.value);
                        }, children: [(0, jsx_runtime_1.jsxs)("option", { value: "count", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_popularity")] }), (0, jsx_runtime_1.jsxs)("option", { value: "rank", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_average_place")] })] })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabList, { children: tabs.map((tab) => ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: tab.label }, tab.key))) }), tabs.map((tab) => ((0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { style: { height: "calc(90vh - 12em)", overflowY: "scroll" }, children: [sortedMetaItems.length === 0 && ((0, jsx_runtime_1.jsx)("p", { children: loading ? (0, i18next_1.t)("loading") : (0, i18next_1.t)("no_data_available") })), sortedMetaItems
                                .filter((item) => tab.items.includes(item.name))
                                .map((item, i) => {
                                return ((0, jsx_runtime_1.jsx)(item_statistic_1.default, { item: item, rank: i + 1 }, item.name));
                            })] }, tab.key)))] })] }));
}
//# sourceMappingURL=item-report.js.map