"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaChart = MetaChart;
const jsx_runtime_1 = require("react/jsx-runtime");
const d3 = __importStar(require("d3"));
const number_1 = require("../../../../../utils/number");
require("./meta-chart.css");
const team_comp_1 = require("./team-comp");
function MetaChart(props) {
    const width = 900, height = 700, margin = 50;
    const x = d3
        .scaleLinear()
        .domain([
        Math.min(...props.meta.map((m) => m.x)),
        Math.max(...props.meta.map((m) => m.x))
    ])
        .nice()
        .range([margin, width - margin]);
    const y = d3
        .scaleLinear()
        .domain([
        Math.min(...props.meta.map((m) => m.y)),
        Math.max(...props.meta.map((m) => m.y))
    ])
        .nice()
        .range([height - margin, margin]);
    return ((0, jsx_runtime_1.jsx)("svg", { width: width, height: height, style: { maxWidth: "100%", height: "auto" }, children: props.meta
            .sort((a, b) => b.count - a.count)
            .map((d, i) => {
            const synergy = Object.keys(d.types).sort((a, b) => {
                return (0, team_comp_1.rankType)(a, b, d.types);
            })[0];
            const size = (0, number_1.clamp)(d.count, 40, 120);
            return ((0, jsx_runtime_1.jsx)("image", { x: x(d.x) - margin, y: y(d.y) - margin, width: size, height: size, href: `assets/types/${synergy.toUpperCase()}.svg`, className: "meta-svg-icon", onClick: (e) => {
                    props.setSelectedComposition(d.cluster_id);
                } }, d.cluster_id));
        }) }));
}
//# sourceMappingURL=meta-chart.js.map