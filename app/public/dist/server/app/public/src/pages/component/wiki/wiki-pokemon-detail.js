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
exports.default = WikiPokemonDetail;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Config_1 = require("../../../../../types/Config");
const Ability_1 = require("../../../../../types/enum/Ability");
const Game_1 = require("../../../../../types/enum/Game");
const Passive_1 = require("../../../../../types/enum/Passive");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const descriptions_1 = require("../../utils/descriptions");
const ability_tooltip_1 = require("../ability/ability-tooltip");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const Credits_1 = __importDefault(require("./Credits"));
require("./wiki-pokemon-detail.css");
function WikiPokemonDetail(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const pokemon = (0, react_1.useMemo)(() => pokemon_factory_1.default.createPokemonFromName(props.pokemon), [props.pokemon]);
    const pokemonData = (0, react_1.useMemo)(() => (0, precomputed_pokemon_data_1.getPokemonData)(props.pokemon), [props.pokemon]);
    const statProp = {
        [Game_1.Stat.ATK]: "atk",
        [Game_1.Stat.DEF]: "def",
        [Game_1.Stat.HP]: "hp",
        [Game_1.Stat.MAX_PP]: "maxPP",
        [Game_1.Stat.RANGE]: "range",
        [Game_1.Stat.SPE_DEF]: "speDef",
        [Game_1.Stat.CRIT_CHANCE]: "critChance",
        [Game_1.Stat.CRIT_POWER]: "critPower",
        [Game_1.Stat.ATK_SPEED]: "atkSpeed",
        [Game_1.Stat.PP]: "maxPP",
        [Game_1.Stat.AP]: "ap",
        [Game_1.Stat.SHIELD]: "shield",
        [Game_1.Stat.LUCK]: "luck",
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "wiki-pokemon-detail", children: [(0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-detail-tooltip my-box", children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: pokemon }) }), (0, jsx_runtime_1.jsxs)("dl", { children: [(0, jsx_runtime_1.jsx)("dt", { children: t("name") }), (0, jsx_runtime_1.jsx)("dd", { className: "pokemon-name", children: t(`pkm.${props.pokemon}`) }), (0, jsx_runtime_1.jsx)("dt", { children: t("index") }), (0, jsx_runtime_1.jsx)("dd", { className: "pokemon-index", children: pokemonData.index }), (0, jsx_runtime_1.jsx)("dt", { children: t("rarity_label") }), (0, jsx_runtime_1.jsx)("dd", { style: { color: Config_1.RarityColor[pokemonData.rarity] }, children: t(`rarity.${pokemonData.rarity}`) }), (0, jsx_runtime_1.jsx)("dt", { children: t("pool_label") }), (0, jsx_runtime_1.jsx)("dd", { children: t(`pool.${pokemonData.regional ? 'regional' : pokemonData.additional ? 'additional' : 'regular'}`) }), (0, jsx_runtime_1.jsx)("dt", { style: { verticalAlign: "middle" }, children: t("tier") }), (0, jsx_runtime_1.jsx)("dd", { children: Array.from({ length: pokemonData.stars }, (_, i) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star.svg", height: "24" }, "star" + i))) }), (0, jsx_runtime_1.jsx)("dt", { children: t("synergies") }), (0, jsx_runtime_1.jsx)("dd", { children: pokemonData.types.map((type) => ((0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }, "img" + type))) }), (0, jsx_runtime_1.jsx)("dt", { children: t("evolution") }), (0, jsx_runtime_1.jsx)("dd", { children: !pokemonData.evolution ? ("No evolution") : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemonData.evolution]), style: { marginRight: "0.5em" } }), (0, jsx_runtime_1.jsx)("span", { className: "pokemon-name", children: t(`pkm.${pokemonData.evolution}`) })] })) }), (0, jsx_runtime_1.jsx)("dt", { children: t("portrait_credit") }), (0, jsx_runtime_1.jsx)(Credits_1.default, { for: "portrait", index: pokemonData.index }), (0, jsx_runtime_1.jsx)("dt", { children: t("sprite_credit") }), (0, jsx_runtime_1.jsx)(Credits_1.default, { for: "sprite", index: pokemonData.index })] }), (0, jsx_runtime_1.jsx)("dl", { children: [Game_1.Stat.HP, Game_1.Stat.PP, Game_1.Stat.RANGE, Game_1.Stat.ATK, Game_1.Stat.DEF, Game_1.Stat.SPE_DEF].map((stat) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)("dt", { children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${stat}.png`, alt: "" }), " ", t(`stat.${stat}`)] }), (0, jsx_runtime_1.jsx)("dd", { children: pokemon[statProp[stat]] })] }, stat))) }), (0, jsx_runtime_1.jsxs)("dl", { children: [pokemonData.skill !== Ability_1.Ability.DEFAULT && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("dt", { children: t("ability_label") }), (0, jsx_runtime_1.jsxs)("dd", { children: [t(`ability.${pokemon.skill}`), (0, jsx_runtime_1.jsx)(ability_tooltip_1.AbilityTooltip, { ability: pokemonData.skill, stats: { ap: 0, luck: 0, stars: pokemonData.stars } })] })] })), pokemonData.passive !== Passive_1.Passive.NONE && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("dt", { children: t("passive") }), (0, jsx_runtime_1.jsx)("dd", { children: (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`passive_description.${pokemonData.passive}`)) }) })] }))] })] }));
}
//# sourceMappingURL=wiki-pokemon-detail.js.map