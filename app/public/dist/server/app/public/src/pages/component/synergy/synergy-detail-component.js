"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SynergyDetailComponent;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_and_categories_1 = require("../../../../../models/precomputed/precomputed-types-and-categories");
const pve_stages_1 = require("../../../../../models/pve-stages");
const Config_1 = require("../../../../../types/Config");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const number_1 = require("../../../../../utils/number");
const schemas_1 = require("../../../../../utils/schemas");
const hooks_1 = require("../../../hooks");
const avatar_1 = require("../../../../../utils/avatar");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const effect_description_1 = require("./effect-description");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
function SynergyDetailComponent(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const additionalPokemons = (0, hooks_1.useAppSelector)((state) => state.game.additionalPokemons);
    const stageLevel = (0, hooks_1.useAppSelector)((state) => state.game.stageLevel);
    const currentPlayer = (0, hooks_1.useAppSelector)((state) => state.game.players.find((p) => p.id === state.game.currentPlayerId));
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const levelReached = Config_1.SynergyTriggers[props.type]
        .filter((n) => n <= props.value)
        .at(-1);
    const regulars = precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].pokemons
        .filter((p, i, arr) => arr.findIndex((x) => Pokemon_1.PkmFamily[x] === Pokemon_1.PkmFamily[p]) === i)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
        .sort((a, b) => Config_1.RarityCost[a.rarity] - Config_1.RarityCost[b.rarity]);
    const additionals = precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].additionalPokemons
        .filter((p) => additionalPokemons.includes(Pokemon_1.PkmFamily[p]) || specialGameRule === SpecialGameRule_1.SpecialGameRule.EVERYONE_IS_HERE)
        .filter((p, i, arr) => arr.findIndex((x) => Pokemon_1.PkmFamily[x] === Pokemon_1.PkmFamily[p]) === i)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    const uniques = precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].uniquePokemons
        .filter((p, i, arr) => arr.findIndex((x) => Pokemon_1.PkmFamily[x] === Pokemon_1.PkmFamily[p]) === i)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    const legendaries = precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].legendaryPokemons
        .filter((p, i, arr) => arr.findIndex((x) => Pokemon_1.PkmFamily[x] === Pokemon_1.PkmFamily[p]) === i)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    const specials = precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].specialPokemons
        .filter((p, i, arr) => arr.findIndex((x) => Pokemon_1.PkmFamily[x] === Pokemon_1.PkmFamily[p]) === i)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    let additionalInfo = '';
    if (props.type === Synergy_1.Synergy.WILD && currentPlayer) {
        const isPVE = stageLevel in pve_stages_1.PVEStages;
        additionalInfo = t('synergy_description.WILD_ADDITIONAL', { wildChance: (0, number_1.roundToNDigits)(currentPlayer.wildChance * 100 + (isPVE ? 5 : 0), 1) });
    }
    if (props.type === Synergy_1.Synergy.BABY && currentPlayer) {
        additionalInfo = t('synergy_description.BABY_CHANCE_STACKED', { eggChance: (0, number_1.roundToNDigits)(currentPlayer.eggChance * 100, 1) });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { style: { maxWidth: "560px" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type, size: "40px" }), (0, jsx_runtime_1.jsx)("h3", { style: { margin: 0 }, children: t(`synergy.${props.type}`) })] }), (0, jsx_runtime_1.jsx)("p", { style: { whiteSpace: "pre-wrap" }, children: (0, descriptions_1.addIconsToDescription)(t(`synergy_description.${props.type}`, { additionalInfo })) }), Synergy_1.SynergyEffects[props.type].map((d, i) => {
                return ((0, jsx_runtime_1.jsxs)("div", { style: {
                        color: levelReached === Config_1.SynergyTriggers[props.type][i]
                            ? "#fff"
                            : "#e8e8e8",
                        backgroundColor: levelReached === Config_1.SynergyTriggers[props.type][i]
                            ? "var(--color-bg-secondary)"
                            : "rgba(84, 89, 107,0)",
                        border: levelReached === Config_1.SynergyTriggers[props.type][i]
                            ? "var(--border-thick)"
                            : "none",
                        borderRadius: "12px",
                        padding: "5px"
                    }, children: [(0, jsx_runtime_1.jsxs)("h4", { style: { fontSize: "1.2em", marginBottom: 0 }, children: ["(", Config_1.SynergyTriggers[props.type][i], ") ", t(`effect.${d}`)] }), (0, jsx_runtime_1.jsx)(effect_description_1.EffectDescriptionComponent, { effect: d })] }, d));
            }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", flexWrap: "wrap" }, children: regulars.map((p) => ((0, jsx_runtime_1.jsx)(PokemonPortrait, { p: p, player: currentPlayer }, p.name))) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", flexWrap: "wrap", marginTop: "0.5em" }, children: additionals.map((p) => ((0, jsx_runtime_1.jsx)(PokemonPortrait, { p: p, player: currentPlayer }, p.name))) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", flexWrap: "wrap", marginTop: "0.5em" }, children: uniques.map((p) => ((0, jsx_runtime_1.jsx)(PokemonPortrait, { p: p, player: currentPlayer }, p.name))) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", flexWrap: "wrap", marginTop: "0.5em" }, children: legendaries.map((p) => ((0, jsx_runtime_1.jsx)(PokemonPortrait, { p: p, player: currentPlayer }, p.name))) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", flexWrap: "wrap", marginTop: "0.5em" }, children: specials.map((p) => ((0, jsx_runtime_1.jsx)(PokemonPortrait, { p: p, player: currentPlayer }, p.name))) })] }));
}
function PokemonPortrait(props) {
    const isOnTeam = (p) => props.player != null && (0, schemas_1.values)(props.player.board).some((x) => Pokemon_1.PkmFamily[x.name] === p);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
            additional: props.p.additional,
            regional: props.p.regional,
            acquired: isOnTeam(props.p.name)
        }), style: { color: Config_1.RarityColor[props.p.rarity], border: "3px solid " + Config_1.RarityColor[props.p.rarity] }, children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(props.p.index) }) }, props.p.name));
}
//# sourceMappingURL=synergy-detail-component.js.map