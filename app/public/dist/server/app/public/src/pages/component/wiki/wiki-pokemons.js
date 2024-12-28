"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiPokemons;
exports.WikiPokemon = WikiPokemon;
exports.WikiAllPokemons = WikiAllPokemons;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../../../../../models/precomputed/precomputed-rarity");
const Config_1 = require("../../../../../types/Config");
const Ability_1 = require("../../../../../types/enum/Ability");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const array_1 = require("../../../../../utils/array");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
const wiki_pokemon_detail_1 = __importDefault(require("./wiki-pokemon-detail"));
function WikiPokemons() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const tabs = Object.values(Game_1.Rarity);
    const [selectedPkm, setSelectedPkm] = (0, react_1.useState)("");
    const [tabIndex, setTabIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (selectedPkm) {
            setTabIndex(tabs.indexOf((0, precomputed_pokemon_data_1.getPokemonData)(selectedPkm).rarity));
        }
    }, [selectedPkm, tabs]);
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "wiki-pokemons", selectedIndex: tabIndex, onSelect: (index) => {
            setSelectedPkm("");
            setTabIndex(index);
        }, children: [(0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: selectedPkm, onChange: (pkm) => setSelectedPkm(pkm) }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [tabs.map((r) => {
                        return ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { style: { color: Config_1.RarityColor[Game_1.Rarity[r]] }, children: t("rarity." + r).toUpperCase() }, "title-" + r));
                    }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("all") }, "title-all")] }), Object.values(Game_1.Rarity).map((r) => {
                return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(WikiPokemon, { rarity: r, selected: selectedPkm, onSelect: setSelectedPkm }) }, r));
            }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(WikiAllPokemons, {}) }, "all")] }));
}
function WikiPokemon(props) {
    const pokemons = (0, react_1.useMemo)(() => (precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[props.rarity])
        .filter((p) => p !== Pokemon_1.Pkm.DEFAULT)
        .sort((a, b) => {
        return Pokemon_1.PkmFamily[a] === Pokemon_1.PkmFamily[b]
            ? (0, precomputed_pokemon_data_1.getPokemonData)(a).stars - (0, precomputed_pokemon_data_1.getPokemonData)(b).stars
            : Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[a]].localeCompare(Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[b]]);
    }), [props.rarity]);
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { selectedIndex: props.selected ? pokemons.indexOf(props.selected) : -1, onSelect: (index) => props.onSelect(pokemons[index]), children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabList, { children: pokemons.map((pkm) => {
                    return ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pkm]) }) }, "title-" + pkm));
                }) }), pokemons.map((pkm) => {
                return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_pokemon_detail_1.default, { pokemon: pkm }) }, pkm));
            })] }));
}
function WikiAllPokemons() {
    const pokemons = Object.values(Pokemon_1.Pkm)
        .filter((p) => p !== Pokemon_1.Pkm.DEFAULT)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
        .sort((a, b) => a.stars - b.stars)
        .filter((a, index, list) => {
        if (a.skill === Ability_1.Ability.DEFAULT)
            return false;
        return true;
    });
    const pokemonsPerRarity = (0, array_1.groupBy)(pokemons, (p) => p.rarity);
    for (const rarity in pokemonsPerRarity) {
        pokemonsPerRarity[rarity].sort((a, b) => {
            if (a.regional !== b.regional)
                return +a.regional - +b.regional;
            if (a.additional !== b.additional)
                return +a.additional - +b.additional;
            return Pokemon_1.PkmFamily[a.name] === Pokemon_1.PkmFamily[b.name]
                ? a.stars - b.stars
                : Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[a.name]].localeCompare(Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[b.name]]);
        });
    }
    const [hoveredPokemon, setHoveredPokemon] = (0, react_1.useState)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { id: "wiki-pokemons-all", children: Object.values(Game_1.Rarity).map((rarity) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("section", { style: { color: Config_1.RarityColor[rarity] }, children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)(`rarity.${rarity}`) }), (0, jsx_runtime_1.jsx)("ul", { children: ((_a = pokemonsPerRarity[rarity]) !== null && _a !== void 0 ? _a : []).map((p) => {
                                    return ((0, jsx_runtime_1.jsx)("li", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                            additional: p.additional,
                                            regional: p.regional
                                        }), onMouseOver: () => {
                                            setHoveredPokemon(p.name);
                                        }, "data-tooltip-id": "pokemon-detail", children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index) }) }, p.name));
                                }) })] }, rarity));
                }) }), hoveredPokemon && (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "pokemon-detail", className: "custom-theme-tooltip game-pokemon-detail-tooltip", float: true, children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: hoveredPokemon }) })] }));
}
//# sourceMappingURL=wiki-pokemons.js.map