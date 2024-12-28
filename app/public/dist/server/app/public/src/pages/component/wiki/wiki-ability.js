"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiAbility;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_ability_1 = require("../../../../../models/precomputed/precomputed-ability");
const Ability_1 = require("../../../../../types/enum/Ability");
const avatar_1 = require("../../../../../utils/avatar");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
function WikiAbility() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [hoveredPokemon, setHoveredPokemon] = (0, react_1.useState)();
    const [pokemonsPerAbility, setPokemonsPerAbility] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => {
            setPokemonsPerAbility(Object.keys(Ability_1.Ability).reduce((o, ability) => {
                o[ability] = precomputed_ability_1.PRECOMPUTED_POKEMONS_PER_ABILITY[ability].map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
                return o;
            }, {}));
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-ability", children: [(0, jsx_runtime_1.jsx)("ul", { children: Object.keys(Ability_1.Ability)
                    .filter((a) => a !== Ability_1.Ability.DEFAULT)
                    .sort((a, b) => t(`ability.${a}`).localeCompare(t(`ability.${b}`)))
                    .map((ability) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("li", { className: "my-box", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: t(`ability.${ability}`) }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`ability_description.${ability}`)) })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { children: ((_a = pokemonsPerAbility[ability]) !== null && _a !== void 0 ? _a : []).map((p) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                                additional: p.additional,
                                                regional: p.regional
                                            }), "data-tooltip-id": "pokemon-detail", onMouseOver: () => {
                                                setHoveredPokemon(p.name);
                                            }, children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index) }) }) }, p.name))) }) })] }, ability));
                }) }), hoveredPokemon && (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "pokemon-detail", className: "custom-theme-tooltip game-pokemon-detail-tooltip", float: true, children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: hoveredPokemon }) })] }));
}
//# sourceMappingURL=wiki-ability.js.map