"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rankType = rankType;
exports.default = TeamComp;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
function rankType(a, b, types) {
    const sa = types[a];
    const sb = types[b];
    const va = sa ? sa : 0;
    const vb = sb ? sb : 0;
    return vb - va;
}
function rankPokemon(a, b, pokemons) {
    const pa = pokemons[a];
    const pb = pokemons[b];
    const va = pa ? pa : 0;
    const vb = pb ? pb : 0;
    return vb - va;
}
function TeamComp(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const sortedTypes = props.team.types
        ? Object.keys(props.team.types).sort((a, b) => {
            return rankType(a, b, props.team.types);
        })
        : new Array();
    const sortedPokemons = props.team.pokemons
        ? Object.keys(props.team.pokemons).sort((a, b) => {
            return rankPokemon(a, b, props.team.pokemons);
        })
        : new Array();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "team-comp my-box", id: props.team.cluster_id, children: [(0, jsx_runtime_1.jsx)("span", { className: "rank", children: props.rank }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", width: "fit-content" }, children: sortedTypes.slice(0, 3).map((type) => ((0, jsx_runtime_1.jsxs)("div", { style: {
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center"
                    }, children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type.toUpperCase(), size: "48px" }), (0, jsx_runtime_1.jsx)("span", { children: props.team.types[type] })] }, type))) }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("average_place"), ":"] }), props.team.mean_rank.toFixed(2)] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("winrate"), ":"] }), props.team.winrate.toFixed(2), " %"] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("popularity"), ":"] }), props.team.ratio.toFixed(2), " %"] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("count"), ":"] }), props.team.count] }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", gap: "1em" }, children: sortedPokemons.map((pokemon) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("div", { style: {
                            display: "flex",
                            flexFlow: "column",
                            alignItems: "center"
                        }, children: [(0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemon]) }), (0, jsx_runtime_1.jsx)("span", { children: (((_a = props.team.pokemons[pokemon]) !== null && _a !== void 0 ? _a : 0) * 100).toFixed(0) + "%" })] }, pokemon));
                }) })] }));
}
//# sourceMappingURL=team-comp.js.map