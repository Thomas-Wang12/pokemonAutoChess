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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonPicker;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const types_1 = require("../../../../../types");
const Config_1 = require("../../../../../types/Config");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const array_1 = require("../../../../../utils/array");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
function PokemonPicker(props) {
    const tabs = [...Object.keys(precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE), "none"];
    const pokemonsPerTab = tabs.map((t) => (t === "none"
        ? [Pokemon_1.Pkm.KECLEON, Pokemon_1.Pkm.ARCEUS]
        : precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[t]).map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p)));
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "my-box", id: "pokemon-picker", children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabList, { children: tabs.map((t) => {
                    return ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t === "none" ? "?" : (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: t }) }, t));
                }) }), pokemonsPerTab.map((pokemons, i) => {
                return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(PokemonPickerTab, { selected: props.selected, selectEntity: props.selectEntity, pokemons: pokemons }) }, "pokemons-tab-" + i));
            })] }));
}
function PokemonPickerTab(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [hoveredPokemon, setHoveredPokemon] = (0, react_1.useState)();
    function handleOnDragStart(e, name) {
        setHoveredPokemon(undefined);
        e.dataTransfer.setData("pokemon", name);
    }
    const pokemonsPerRarity = (0, array_1.groupBy)(props.pokemons, (p) => p.rarity);
    for (const rarity in pokemonsPerRarity) {
        pokemonsPerRarity[rarity].sort((a, b) => {
            if (a.regional !== b.regional)
                return +a.regional - +b.regional;
            if (a.additional !== b.additional)
                return +a.additional - +b.additional;
            if (Pokemon_1.PkmFamily[a.name] === Pokemon_1.PkmFamily[b.name])
                return a.stars - b.stars;
            return Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[a.name]].localeCompare(Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[b.name]]);
        });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("dl", { id: "rarity-grid", children: [
                    Game_1.Rarity.COMMON,
                    Game_1.Rarity.UNIQUE,
                    Game_1.Rarity.UNCOMMON,
                    Game_1.Rarity.LEGENDARY,
                    Game_1.Rarity.RARE,
                    Game_1.Rarity.EPIC,
                    Game_1.Rarity.HATCH,
                    Game_1.Rarity.ULTRA,
                    Game_1.Rarity.SPECIAL
                ].map((rarity) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("dt", { style: { color: Config_1.RarityColor[rarity], textTransform: "uppercase", fontWeight: "500", fontSize: "80%", alignContent: "center" }, children: t(`rarity.${rarity}`) }), (0, jsx_runtime_1.jsx)("dd", { style: { display: "flex", flexWrap: "wrap", gap: "1px" }, children: ((_a = pokemonsPerRarity[rarity]) !== null && _a !== void 0 ? _a : []).map((p) => ((0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                        additional: p.additional,
                                        regional: p.regional,
                                        selected: p.name === props.selected["name"]
                                    }), onClick: () => {
                                        props.selectEntity({
                                            name: p.name,
                                            emotion: types_1.Emotion.NORMAL,
                                            shiny: false
                                        });
                                    }, onMouseOver: () => {
                                        setHoveredPokemon(p.name);
                                    }, "data-tooltip-id": "pokemon-detail", draggable: true, onDragStart: (e) => handleOnDragStart(e, p.name), children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index) }) }, p.name))) })] }, rarity));
                }) }), hoveredPokemon && (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "pokemon-detail", className: "custom-theme-tooltip game-pokemon-detail-tooltip", float: true, children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: hoveredPokemon }) })] }));
}
//# sourceMappingURL=pokemon-picker.js.map