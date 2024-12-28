"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonCollection;
exports.PokemonCollectionList = PokemonCollectionList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const store_1 = require("../../utils/store");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const checkbox_1 = require("../checkbox/checkbox");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
const pokemon_emotions_modal_1 = __importDefault(require("./pokemon-emotions-modal"));
const unown_panel_1 = __importDefault(require("./unown-panel"));
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Ability_1 = require("../../../../../types/enum/Ability");
const Passive_1 = require("../../../../../types/enum/Passive");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const hooks_1 = require("../../../hooks");
const pokemon_collection_item_1 = __importDefault(require("./pokemon-collection-item"));
require("./pokemon-collection.css");
function PokemonCollection() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [selectedPokemon, setSelectedPokemon] = (0, react_1.useState)("");
    const prevFilterState = (0, react_1.useMemo)(() => {
        var _a, _b, _c;
        const prevState = store_1.localStore.get(store_1.LocalStoreKeys.COLLECTION_FILTER);
        return {
            filter: (_a = prevState === null || prevState === void 0 ? void 0 : prevState.filter) !== null && _a !== void 0 ? _a : "unlockable",
            sort: (_b = prevState === null || prevState === void 0 ? void 0 : prevState.sort) !== null && _b !== void 0 ? _b : "index",
            shinyOnly: (_c = prevState === null || prevState === void 0 ? void 0 : prevState.shinyOnly) !== null && _c !== void 0 ? _c : false
        };
    }, []);
    const [filter, setFilter] = (0, react_1.useState)(prevFilterState.filter);
    const [sort, setSort] = (0, react_1.useState)(prevFilterState.sort);
    const [shinyOnly, setShinyOnly] = (0, react_1.useState)(prevFilterState.shinyOnly);
    (0, react_1.useEffect)(() => {
        store_1.localStore.set(store_1.LocalStoreKeys.COLLECTION_FILTER, {
            filter,
            sort,
            shinyOnly
        });
    }, [filter, sort, shinyOnly]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "pokemon-collection", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: selectedPokemon, onChange: setSelectedPokemon }), (0, jsx_runtime_1.jsxs)("select", { value: filter, onChange: (e) => setFilter(e.target.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "all", children: t("show_all") }), (0, jsx_runtime_1.jsx)("option", { value: "locked", children: t("show_locked") }), (0, jsx_runtime_1.jsx)("option", { value: "unlockable", children: t("show_unlockable") }), (0, jsx_runtime_1.jsx)("option", { value: "unlocked", children: t("show_unlocked") })] }), (0, jsx_runtime_1.jsxs)("select", { value: sort, onChange: (e) => setSort(e.target.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "index", children: t("sort_by_index") }), (0, jsx_runtime_1.jsx)("option", { value: "shards", children: t("sort_by_shards") })] }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: shinyOnly, onToggle: setShinyOnly, label: t("shiny_hunter"), isDark: true })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { className: "pokemon-collection-tabs", children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("all") }, "title-all"), Object.keys(Synergy_1.Synergy).map((type) => {
                                    return ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }) }, "title-" + type));
                                }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/unown/unown-qm.png", alt: "?", className: "unown-icon" }) }, "?")] }), ["all"].concat(Object.keys(Synergy_1.Synergy)).map((type) => {
                            return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(PokemonCollectionList, { type: type, setPokemon: setSelectedPokemon, filter: filter, sort: sort, shinyOnly: shinyOnly }) }, type));
                        }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(unown_panel_1.default, { setPokemon: setSelectedPokemon, filter: filter, sort: sort, shinyOnly: shinyOnly }) })] }) }), selectedPokemon && ((0, jsx_runtime_1.jsx)(pokemon_emotions_modal_1.default, { pokemon: selectedPokemon, onClose: () => setSelectedPokemon("") }))] }));
}
function PokemonCollectionList(props) {
    const pokemonCollection = (0, hooks_1.useAppSelector)((state) => { var _a; return (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.pokemonCollection; });
    const getConfig = (0, react_1.useCallback)((index) => pokemonCollection === null || pokemonCollection === void 0 ? void 0 : pokemonCollection.get(index), [pokemonCollection]);
    const pokemonsSorted = (0, react_1.useMemo)(() => {
        if (props.sort === "index") {
            return Object.values(Pokemon_1.Pkm).sort((a, b) => {
                return Pokemon_1.PkmFamily[a] === Pokemon_1.PkmFamily[b]
                    ? (0, precomputed_pokemon_data_1.getPokemonData)(a).stars - (0, precomputed_pokemon_data_1.getPokemonData)(b).stars
                    : Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[a]].localeCompare(Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[b]]);
            });
        }
        else {
            return Object.values(Pokemon_1.Pkm).sort((a, b) => {
                var _a, _b, _c, _d;
                return (((_b = (_a = getConfig(Pokemon_1.PkmIndex[b])) === null || _a === void 0 ? void 0 : _a.dust) !== null && _b !== void 0 ? _b : 0) -
                    ((_d = (_c = getConfig(Pokemon_1.PkmIndex[a])) === null || _c === void 0 ? void 0 : _c.dust) !== null && _d !== void 0 ? _d : 0));
            });
        }
    }, [props.sort, getConfig]);
    const elligiblePokemons = (0, react_1.useMemo)(() => pokemonsSorted.map((pkm) => {
        const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        if (pkm !== Pokemon_1.Pkm.DEFAULT &&
            (pokemonData.skill !== Ability_1.Ability.DEFAULT ||
                pokemonData.passive !== Passive_1.Passive.NONE) &&
            pokemonData.passive !== Passive_1.Passive.UNOWN &&
            (props.type === "all" ||
                pokemonData.types.includes(Synergy_1.Synergy[props.type]))) {
            return ((0, jsx_runtime_1.jsx)(pokemon_collection_item_1.default, { name: pkm, index: pokemonData.index, config: getConfig(pokemonData.index), filter: props.filter, shinyOnly: props.shinyOnly, setPokemon: props.setPokemon }, `${pokemonData.index}-${props.type}`));
        }
        return null;
    }), [
        getConfig,
        pokemonsSorted,
        props.filter,
        props.setPokemon,
        props.shinyOnly,
        props.type
    ]);
    return (0, jsx_runtime_1.jsx)("div", { className: "pokemon-collection-list", children: elligiblePokemons });
}
//# sourceMappingURL=pokemon-collection.js.map