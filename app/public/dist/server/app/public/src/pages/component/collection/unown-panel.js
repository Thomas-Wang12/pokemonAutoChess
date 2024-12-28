"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UnownPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Emotion_1 = require("../../../../../types/enum/Emotion");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const hooks_1 = require("../../../hooks");
const pokemon_collection_item_1 = __importDefault(require("./pokemon-collection-item"));
require("./unown-panel.css");
function UnownPanel(props) {
    const pokemonCollection = (0, hooks_1.useAppSelector)((state) => { var _a, _b; return (_b = (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.pokemonCollection) !== null && _b !== void 0 ? _b : new Map(); });
    const secretMessage = `    
    To unleash ancient powers?
    Max Groudon with a red orb
    Give Kyogre a blue orb and
    use Jade orb for Rayquaza!
    `
        .replace(/^\s+/gm, "")
        .replace(/\s+$/gm, "")
        .split("");
    const unowns = (0, react_1.useMemo)(() => Pokemon_1.Unowns.flatMap((pkm) => {
        var _a;
        const config = (_a = pokemonCollection.get(Pokemon_1.PkmIndex[pkm])) !== null && _a !== void 0 ? _a : {
            dust: 0,
            emotions: [],
            shinyEmotions: [],
            selectedEmotion: Emotion_1.Emotion.NORMAL,
            selectedShiny: false,
            id: Pokemon_1.PkmIndex[pkm]
        };
        const { emotions, shinyEmotions } = config;
        const isUnlocked = (emotions === null || emotions === void 0 ? void 0 : emotions.length) > 0 || (shinyEmotions === null || shinyEmotions === void 0 ? void 0 : shinyEmotions.length) > 0;
        return [{ pkm, config, isUnlocked }];
    }).sort((a, b) => {
        var _a, _b, _c, _d;
        if (props.sort === "index") {
            return Pokemon_1.PkmIndex[a.pkm].localeCompare(Pokemon_1.PkmIndex[b.pkm]);
        }
        else {
            return ((_b = (_a = b.config) === null || _a === void 0 ? void 0 : _a.dust) !== null && _b !== void 0 ? _b : 0) - ((_d = (_c = a.config) === null || _c === void 0 ? void 0 : _c.dust) !== null && _d !== void 0 ? _d : 0);
        }
    }), [props.sort, pokemonCollection]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { id: "unown-panel", children: secretMessage.map((char, i) => renderChar(char, i, unowns)) }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-collection-list", children: unowns.map((unown) => {
                    if (!unown)
                        return null;
                    return ((0, jsx_runtime_1.jsx)(pokemon_collection_item_1.default, { name: unown.pkm, index: Pokemon_1.PkmIndex[unown.pkm], config: unown.config, setPokemon: props.setPokemon, filter: props.filter, shinyOnly: props.shinyOnly }, Pokemon_1.PkmIndex[unown.pkm]));
                }) })] }));
}
function renderChar(c, index, unowns) {
    let unown;
    switch (c) {
        case "\n":
            return (0, jsx_runtime_1.jsx)("br", {}, "char" + index);
        case " ":
            return (0, jsx_runtime_1.jsx)("span", { className: "char space" }, "char" + index);
        case "!":
            unown = unowns.find((u) => u.pkm === Pokemon_1.Pkm.UNOWN_EXCLAMATION);
            return ((0, jsx_runtime_1.jsx)("span", { className: "char", style: {
                    backgroundImage: (unown === null || unown === void 0 ? void 0 : unown.isUnlocked)
                        ? `url(assets/unown/unown-em.png)`
                        : ""
                } }, "char" + index));
        case "?":
            unown = unowns.find((u) => u.pkm === Pokemon_1.Pkm.UNOWN_QUESTION);
            return ((0, jsx_runtime_1.jsx)("span", { className: "char", style: {
                    backgroundImage: (unown === null || unown === void 0 ? void 0 : unown.isUnlocked)
                        ? `url(assets/unown/unown-qm.png)`
                        : ""
                } }, "char" + index));
        default:
            unown = unowns.find((u) => u.pkm === "UNOWN_" + c.toUpperCase());
            return ((0, jsx_runtime_1.jsx)("span", { className: "char", style: {
                    backgroundImage: (unown === null || unown === void 0 ? void 0 : unown.isUnlocked)
                        ? `url(assets/unown/unown-${c.toLowerCase()}.png)`
                        : ""
                } }, "char" + index));
    }
}
//# sourceMappingURL=unown-panel.js.map