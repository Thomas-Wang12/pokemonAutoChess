"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameAdditionalPokemonsIcon = GameAdditionalPokemonsIcon;
exports.GameAdditionalPokemons = GameAdditionalPokemons;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Config_1 = require("../../../../../types/Config");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
const hooks_1 = require("../../../hooks");
const avatar_1 = require("../../../../../utils/avatar");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
function GameAdditionalPokemonsIcon() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "my-box", style: { padding: "5px" }, children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/ui/addpicks.png`, style: { width: "2em", height: "2em" }, "data-tooltip-id": "game-additional-pokemons" }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "game-additional-pokemons", float: true, place: "top", className: "custom-theme-tooltip", children: (0, jsx_runtime_1.jsx)(GameAdditionalPokemons, {}) })] }));
}
function GameAdditionalPokemons() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const additionalPokemons = (0, hooks_1.useAppSelector)((state) => state.game.additionalPokemons);
    const pokemonCollection = (0, hooks_1.useAppSelector)((state) => state.game.pokemonCollection);
    if (specialGameRule === SpecialGameRule_1.SpecialGameRule.EVERYONE_IS_HERE) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "game-additional-pokemons", children: (0, jsx_runtime_1.jsx)("p", { children: t("scribble.EVERYONE_IS_HERE") }) }));
    }
    else if (!additionalPokemons || additionalPokemons.length === 0) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "game-additional-pokemons", children: (0, jsx_runtime_1.jsx)("p", { className: "help", children: t("additional_pokemon_hint") }) }));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "game-additional-pokemons", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("additional_picks") }), (0, jsx_runtime_1.jsx)("p", { className: "help", children: t("additional_pokemon_hint") }), (0, jsx_runtime_1.jsx)("div", { className: "grid", children: additionalPokemons.map((p, index) => {
                        const pokemon = (0, precomputed_pokemon_data_1.getPokemonData)(p);
                        const rarityColor = Config_1.RarityColor[pokemon.rarity];
                        const pokemonConfig = pokemonCollection.get(pokemon.index);
                        return ((0, jsx_runtime_1.jsx)("div", { className: `my-box clickable game-pokemon-portrait`, style: {
                                backgroundColor: rarityColor,
                                borderColor: rarityColor,
                                backgroundImage: `url("${(0, avatar_1.getPortraitSrc)(pokemon.index, pokemonConfig === null || pokemonConfig === void 0 ? void 0 : pokemonConfig.selectedShiny, pokemonConfig === null || pokemonConfig === void 0 ? void 0 : pokemonConfig.selectedEmotion)}")`
                            }, children: (0, jsx_runtime_1.jsx)("ul", { className: "game-pokemon-portrait-types", children: Array.from(pokemon.types.values()).map((type) => {
                                    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }) }, type));
                                }) }) }, "game-additional-pokemons-" + index));
                    }) })] }));
    }
}
//# sourceMappingURL=game-additional-pokemons.js.map