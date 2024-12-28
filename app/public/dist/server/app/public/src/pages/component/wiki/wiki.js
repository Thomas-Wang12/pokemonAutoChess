"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Wiki;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const wiki_ability_1 = __importDefault(require("./wiki-ability"));
const wiki_pokemons_1 = __importDefault(require("./wiki-pokemons"));
const wiki_regions_1 = __importDefault(require("./wiki-regions"));
const wiki_data_1 = __importDefault(require("./wiki-data"));
const wiki_faq_1 = __importDefault(require("./wiki-faq"));
const wiki_items_1 = __importDefault(require("./wiki-items"));
const wiki_statistic_1 = __importDefault(require("./wiki-statistic"));
const wiki_status_1 = __importDefault(require("./wiki-status"));
const wiki_tutorials_1 = __importDefault(require("./wiki-tutorials"));
const wiki_types_1 = __importDefault(require("./wiki-types"));
const wiki_weather_1 = __importDefault(require("./wiki-weather"));
require("./wiki.css");
function Wiki({ inGame = false }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("div", { id: "wiki-page", children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [!inGame && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("faq.faq") }, "title-faq"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("how_to_play") }, "title-tutorials")] })), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("pokemons_label") }, "title-pokemon"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("abilities_label") }, "title-ability"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("items_label") }, "title-items"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("synergies_label") }, "title-types"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("statistics_label") }, "title-statistic"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("status_label") }, "title-status"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("weather_label") }, "title-weather"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("dungeon_label") }, "title-dungeon"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("data_label") }, "title-data")] }), !inGame && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_faq_1.default, {}) }, "faq"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_tutorials_1.default, {}) }, "tutorials")] })), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_pokemons_1.default, {}) }, "pokemon"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_ability_1.default, {}) }, "ability"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_items_1.default, {}) }, "items"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_types_1.default, {}) }, "types"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_statistic_1.default, {}) }, "statistic"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_status_1.default, {}) }, "status"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_weather_1.default, {}) }, "weather"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_regions_1.default, {}) }, "dungeon"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_data_1.default, {}) }, "data")] }) }));
}
//# sourceMappingURL=wiki.js.map