"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePokemonDetail = GamePokemonDetail;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Config_1 = require("../../../../../types/Config");
const Ability_1 = require("../../../../../types/enum/Ability");
const Game_1 = require("../../../../../types/enum/Game");
const Passive_1 = require("../../../../../types/enum/Passive");
const avatar_1 = require("../../../../../utils/avatar");
const descriptions_1 = require("../../utils/descriptions");
const ability_tooltip_1 = require("../ability/ability-tooltip");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
require("./game-pokemon-detail.css");
function GamePokemonDetail(props) {
    var _a, _b;
    const { t } = (0, react_i18next_1.useTranslation)();
    const pokemon = (0, react_1.useMemo)(() => typeof props.pokemon === "string"
        ? pokemon_factory_1.default.createPokemonFromName(props.pokemon)
        : props.pokemon, [props.pokemon]);
    const pokemonStats = (0, react_1.useMemo)(() => [
        { stat: Game_1.Stat.HP, value: pokemon.hp },
        { stat: Game_1.Stat.DEF, value: pokemon.def },
        { stat: Game_1.Stat.ATK, value: pokemon.atk },
        { stat: Game_1.Stat.PP, value: pokemon.maxPP },
        { stat: Game_1.Stat.SPE_DEF, value: pokemon.speDef },
        { stat: Game_1.Stat.RANGE, value: pokemon.range }
    ], [
        pokemon.atk,
        pokemon.def,
        pokemon.hp,
        pokemon.maxPP,
        pokemon.range,
        pokemon.speDef
    ]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail in-shop", children: [(0, jsx_runtime_1.jsx)("img", { className: "game-pokemon-detail-portrait", style: { borderColor: Config_1.RarityColor[pokemon.rarity] }, src: (0, avatar_1.getPortraitSrc)(pokemon.index, (_a = props.shiny) !== null && _a !== void 0 ? _a : pokemon.shiny, (_b = props.emotion) !== null && _b !== void 0 ? _b : pokemon.emotion) }), (0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail-entry", children: [(0, jsx_runtime_1.jsx)("p", { className: "game-pokemon-detail-entry-name", children: t(`pkm.${pokemon.name}`) }), (0, jsx_runtime_1.jsx)("p", { className: "game-pokemon-detail-entry-rarity", style: { color: Config_1.RarityColor[pokemon.rarity] }, children: t(`rarity.${pokemon.rarity}`) }), (0, jsx_runtime_1.jsxs)("p", { className: "game-pokemon-detail-entry-tier", children: [Array.from({ length: pokemon.stars }, (_, index) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star.svg", height: "16" }, index))), Array.from({ length: (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).stages - pokemon.stars }, (_, index) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star_empty.svg", height: "16" }, index)))] })] }), (0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-detail-types", children: Array.from(pokemon.types.values()).map((type) => ((0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }, type))) }), (0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-detail-stats", children: pokemonStats.map(({ stat, value }) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${stat}.png`, alt: stat, title: t(`stat.${stat}`) }), (0, jsx_runtime_1.jsx)("p", { children: value })] }, stat))) }), pokemon.passive !== Passive_1.Passive.NONE && ((0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-detail-passive", children: (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`passive_description.${pokemon.passive}`)) }) })), pokemon.skill !== Ability_1.Ability.DEFAULT && ((0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail-ult", children: [(0, jsx_runtime_1.jsx)("div", { className: "ability-name", children: t(`ability.${pokemon.skill}`) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ability_tooltip_1.AbilityTooltip, { ability: pokemon.skill, stats: pokemon }, pokemon.id) })] }))] }));
}
//# sourceMappingURL=game-pokemon-detail.js.map