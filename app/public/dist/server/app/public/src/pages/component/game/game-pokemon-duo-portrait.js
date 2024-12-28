"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePokemonDuoPortrait;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Config_1 = require("../../../../../types/Config");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const hooks_1 = require("../../../hooks");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const game_pokemon_detail_1 = require("./game-pokemon-detail");
require("./game-pokemon-portrait.css");
function GamePokemonDuoPortrait(props) {
    const duo = Pokemon_1.PkmDuos[props.duo].map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    const rarityColor = Config_1.RarityColor[duo[0].rarity];
    const pokemonCollection = (0, hooks_1.useAppSelector)((state) => state.game.pokemonCollection);
    const duoConfig = duo.map((p) => pokemonCollection === null || pokemonCollection === void 0 ? void 0 : pokemonCollection.get(p.index));
    return ((0, jsx_runtime_1.jsxs)("div", { className: `my-container game-pokemon-portrait game-pokemon-portrait-duo`, style: {
            backgroundColor: rarityColor,
            borderColor: rarityColor
        }, onClick: props.click, children: [duo.map((p, i) => {
                var _a, _b, _c, _d;
                return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("game-pokemon-portrait-duo-part", "game-pokemon-portrait-duo-part-" + (i === 0 ? "down" : "up")), "data-tooltip-id": `tooltip-${props.origin}-${props.index}-${p.index}`, style: {
                                backgroundImage: `url("${(0, avatar_1.getPortraitSrc)(p.index, (_a = duoConfig[i]) === null || _a === void 0 ? void 0 : _a.selectedShiny, (_b = duoConfig[i]) === null || _b === void 0 ? void 0 : _b.selectedEmotion)}")`
                            } }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: `tooltip-${props.origin}-${props.index}-${p.index}`, className: "custom-theme-tooltip game-pokemon-detail-tooltip", place: "bottom", children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: p.name, emotion: (_c = duoConfig[i]) === null || _c === void 0 ? void 0 : _c.selectedEmotion, shiny: (_d = duoConfig[i]) === null || _d === void 0 ? void 0 : _d.selectedShiny }) })] }, "duo-" + i));
            }), (0, jsx_runtime_1.jsx)("ul", { className: "game-pokemon-portrait-types", children: Array.from(duo[0].types.values()).map((type) => {
                    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type, size: "1.4vw" }) }, type));
                }) })] }));
}
//# sourceMappingURL=game-pokemon-duo-portrait.js.map