"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiTypes;
exports.WikiType = WikiType;
exports.WikiAllTypes = WikiAllTypes;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const Config_1 = require("../../../../../types/Config");
const Ability_1 = require("../../../../../types/enum/Ability");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const array_1 = require("../../../../../utils/array");
const avatar_1 = require("../../../../../utils/avatar");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const effect_description_1 = require("../synergy/effect-description");
function WikiTypes() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "wiki-types", children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [Object.keys(Synergy_1.Synergy).map((type) => {
                        return ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }) }, "title-" + type));
                    }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("all") }, "title-all")] }), Object.keys(Synergy_1.Synergy).map((r) => {
                return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(WikiType, { type: r }) }, r));
            }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(WikiAllTypes, {}) }, "all")] }));
}
function WikiType(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const pokemons = precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[props.type]
        .filter((p) => p !== Pokemon_1.Pkm.DEFAULT)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
        .sort((a, b) => a.stars - b.stars)
        .filter((a, index, list) => {
        if (a.skill === Ability_1.Ability.DEFAULT)
            return false;
        if (a.rarity === Game_1.Rarity.SPECIAL)
            return true;
        return (list.findIndex((b) => Pokemon_1.PkmFamily[a.name] === Pokemon_1.PkmFamily[b.name]) === index);
    });
    const pokemonsPerRarity = (0, array_1.groupBy)(pokemons, (p) => p.rarity);
    for (const rarity in pokemonsPerRarity) {
        pokemonsPerRarity[rarity].sort((a, b) => {
            if (a.regional !== b.regional)
                return +a.regional - +b.regional;
            if (a.additional !== b.additional)
                return +a.additional - +b.additional;
            return a.index < b.index ? -1 : 1;
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { style: { padding: "0 1em" }, children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type }), " ", t(`synergy.${props.type}`)] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`synergy_description.${props.type}`, { additionalInfo: "" })) }), Synergy_1.SynergyEffects[props.type].map((effect, i) => {
                return ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [(0, jsx_runtime_1.jsxs)("span", { children: ["(", Config_1.SynergyTriggers[props.type][i], ") ", t(`effect.${effect}`), ":\u00A0"] }), (0, jsx_runtime_1.jsx)(effect_description_1.EffectDescriptionComponent, { effect: effect })] }, t(`effect.${effect}`)));
            }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: Object.values(Game_1.Rarity).map((rarity) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { style: { color: Config_1.RarityColor[rarity] }, children: t(`rarity.${rarity}`) }), (0, jsx_runtime_1.jsx)("td", { children: ((_a = pokemonsPerRarity[rarity]) !== null && _a !== void 0 ? _a : []).map((p) => {
                                        return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                                additional: p.additional,
                                                regional: p.regional
                                            }), children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index), "data-tooltip-id": `pokemon-detail-${p.index}` }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: `pokemon-detail-${p.index}`, className: "custom-theme-tooltip game-pokemon-detail-tooltip", children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: p.name }) })] }, p.name));
                                    }) })] }, rarity));
                    }) }) })] }));
}
function WikiAllTypes() {
    const pokemons = Object.values(Pokemon_1.Pkm)
        .filter((p) => p !== Pokemon_1.Pkm.DEFAULT)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
        .sort((a, b) => a.stars - b.stars)
        .filter((a, index, list) => {
        if (a.skill === Ability_1.Ability.DEFAULT)
            return false;
        if (a.rarity === Game_1.Rarity.SPECIAL)
            return true;
        return (list.findIndex((b) => Pokemon_1.PkmFamily[a.name] === Pokemon_1.PkmFamily[b.name]) === index);
    });
    const pokemonsPerType = pokemons.reduce((perType, p) => {
        p.types.forEach((type) => {
            if (Object.prototype.hasOwnProperty.call(perType, type) === false)
                perType[type] = [];
            perType[type].push(p);
        });
        return perType;
    }, {});
    const [hoveredPokemon, setHoveredPokemon] = (0, react_1.useState)();
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { id: "wiki-types-all", children: Object.values(Synergy_1.Synergy).map((type) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), " ", t(`synergy.${type}`)] }), (0, jsx_runtime_1.jsx)("ul", { children: ((_a = pokemonsPerType[type]) !== null && _a !== void 0 ? _a : []).map((p) => {
                                    return ((0, jsx_runtime_1.jsx)("li", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                            additional: p.additional,
                                            regional: p.regional
                                        }), onMouseOver: () => {
                                            setHoveredPokemon(p.name);
                                        }, "data-tooltip-id": "pokemon-detail", children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index), "data-tooltip-id": `pokemon-detail-${p.index}` }) }, p.name));
                                }) })] }, type));
                }) }), hoveredPokemon && (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "pokemon-detail", className: "custom-theme-tooltip game-pokemon-detail-tooltip", float: true, children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: hoveredPokemon }) })] }));
}
//# sourceMappingURL=wiki-types.js.map