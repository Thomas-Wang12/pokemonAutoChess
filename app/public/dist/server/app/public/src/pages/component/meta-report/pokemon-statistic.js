"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonStatistic;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../../../../../models/precomputed/precomputed-rarity");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
function PokemonStatistic(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const families = new Map();
    const duos = Object.values(Pokemon_1.PkmDuos);
    const filteredPokemons = props.pokemons.filter((v) => (props.synergy === "all"
        ? v
        : precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[props.synergy].includes(v.name)) &&
        (props.rarity === "all"
            ? v
            : precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[props.rarity].includes(v.name)) &&
        (props.selectedPkm === "" || v.name === props.selectedPkm));
    filteredPokemons.forEach((pokemon) => {
        let familyName = Pokemon_1.PkmFamily[pokemon.name];
        const duo = duos.find((duo) => duo.includes(pokemon.name));
        if (duo) {
            familyName = duo[0];
        }
        const family = families.get(familyName);
        if (family) {
            family.pokemons.push(pokemon);
        }
        else {
            families.set(Pokemon_1.PkmFamily[pokemon.name], { pokemons: [pokemon] });
        }
    });
    families.forEach((family) => {
        family.pokemons.sort((a, b) => (0, precomputed_pokemon_data_1.getPokemonData)(a.name).stars - (0, precomputed_pokemon_data_1.getPokemonData)(b.name).stars);
        family.totalCount = family.pokemons.reduce((prev, curr) => prev + curr.count, 0);
        family.averageRank = computeAverageRank(family.pokemons);
        family.averageItemHeld = computeAverageItemHeld(family.pokemons);
    });
    const familiesArray = Array.from(families).sort((a, b) => {
        var _a, _b;
        return props.rankingBy === "count"
            ? b[1].totalCount - a[1].totalCount
            : props.rankingBy === "item_count"
                ? b[1].averageItemHeld - a[1].averageItemHeld
                : ((_a = a[1].averageRank) !== null && _a !== void 0 ? _a : 9) - ((_b = b[1].averageRank) !== null && _b !== void 0 ? _b : 9);
    });
    if (filteredPokemons.length === 0) {
        return (0, jsx_runtime_1.jsx)("p", { children: t("no_data_available") });
    }
    return ((0, jsx_runtime_1.jsx)("article", { children: familiesArray.map(([pkm, family], i) => {
            var _a;
            return ((0, jsx_runtime_1.jsxs)("div", { className: "my-box pokemon-family-stat", children: [(0, jsx_runtime_1.jsx)("span", { className: "rank", children: i + 1 }), (0, jsx_runtime_1.jsx)("ul", { style: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }, children: family.pokemons.map((pokemon, i) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemon.name]) }), (0, jsx_runtime_1.jsx)("span", { children: t(`pkm.${pokemon.name}`) })] }, pokemon.name))) }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("average_place"), ":"] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: "140%" }, children: family.averageRank ? family.averageRank.toFixed(1) : "???" })] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("count"), ":"] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: "140%" }, children: family.totalCount })] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("held_items"), ":"] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: "140%" }, children: (_a = family.averageItemHeld) === null || _a === void 0 ? void 0 : _a.toFixed(2) })] }), (0, jsx_runtime_1.jsx)("ul", { style: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }, children: family.pokemons.map((pokemon) => ((0, jsx_runtime_1.jsxs)("li", { style: {
                                display: "grid",
                                gridTemplateColumns: "40px 6ch 1fr 1.5fr 2fr"
                            }, children: [(0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemon.name]) }), (0, jsx_runtime_1.jsx)("span", { children: pokemon.count === 0 ? "???" : pokemon.rank.toFixed(1) }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("count"), ":"] }), " ", pokemon.count] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("held_items"), ":"] }), " ", pokemon.item_count] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("popular_items"), ":"] }), pokemon.items.map((item) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + item + ".png", style: {
                                                height: "32px",
                                                width: "32px",
                                                marginLeft: "4px"
                                            } }, item)))] })] }, pokemon.name))) })] }, pkm));
        }) }));
}
function computeAverageRank(pokemons) {
    const pokemonsPlayedAtLeastOnce = pokemons.filter((p) => p.count > 0);
    if (pokemonsPlayedAtLeastOnce.length === 0)
        return null;
    return (pokemonsPlayedAtLeastOnce.reduce((prev, curr) => prev + curr.rank * curr.count, 0) / pokemonsPlayedAtLeastOnce.reduce((prev, curr) => prev + curr.count, 0));
}
function computeAverageItemHeld(pokemons) {
    const pokemonsPlayedAtLeastOnce = pokemons.filter((p) => p.count > 0);
    if (pokemonsPlayedAtLeastOnce.length === 0)
        return null;
    return (pokemonsPlayedAtLeastOnce.reduce((prev, curr) => prev + curr.item_count * curr.count, 0) / pokemonsPlayedAtLeastOnce.reduce((prev, curr) => prev + curr.count, 0));
}
//# sourceMappingURL=pokemon-statistic.js.map