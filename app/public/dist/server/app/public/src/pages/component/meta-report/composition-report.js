"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionReport = CompositionReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const meta_1 = require("../../../../../models/mongo-models/meta");
const meta_chart_1 = require("./meta-chart");
const team_comp_1 = __importDefault(require("./team-comp"));
require("./composition-report.css");
function CompositionReport() {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [meta, setMeta] = (0, react_1.useState)([]);
    const [selectedComposition, setSelectedComposition] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        (0, meta_1.fetchMeta)().then((res) => {
            setLoading(false);
            setMeta(res);
        });
    }, []);
    const [rankingBy, setRanking] = (0, react_1.useState)("count");
    const sortedMeta = (0, react_1.useMemo)(() => {
        return [...meta].sort((a, b) => {
            const order = rankingBy == "count" || rankingBy == "winrate" ? -1 : 1;
            return (a[rankingBy] - b[rankingBy]) * order;
        });
    }, [meta, rankingBy]);
    (0, react_1.useEffect)(() => {
        if (selectedComposition) {
            const element = document.getElementById(selectedComposition);
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [selectedComposition]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "meta-report-compo", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("best_team_compositions") }), (0, jsx_runtime_1.jsxs)("select", { value: rankingBy, onChange: (e) => setRanking(e.target.value), children: [(0, jsx_runtime_1.jsxs)("option", { value: "count", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_poularity")] }), (0, jsx_runtime_1.jsxs)("option", { value: "mean_rank", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_average_place")] }), (0, jsx_runtime_1.jsxs)("option", { value: "winrate", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_winrate")] })] })] }), (0, jsx_runtime_1.jsxs)("article", { children: [sortedMeta.length === 0 && ((0, jsx_runtime_1.jsx)("p", { children: loading ? (0, i18next_1.t)("loading") : (0, i18next_1.t)("no_data_available") })), meta.length > 0 && ((0, jsx_runtime_1.jsx)(meta_chart_1.MetaChart, { meta: meta, setSelectedComposition: setSelectedComposition })), (0, jsx_runtime_1.jsx)("div", { id: "meta-report-compo-list", children: sortedMeta.map((team, i) => {
                            return (0, jsx_runtime_1.jsx)(team_comp_1.default, { team: team, rank: i + 1 }, team.cluster_id);
                        }) })] })] }));
}
//# sourceMappingURL=composition-report.js.map