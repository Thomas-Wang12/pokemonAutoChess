"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoosterCard = BoosterCard;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Config_1 = require("../../../../../types/Config");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
require("./booster-card.css");
function BoosterCard(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const pkm = props.pkm.name;
    const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
    const style = {
        "--rarity-color": Config_1.RarityColor[pokemonData.rarity]
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("booster-card", "rarity-" + pokemonData.rarity.toLowerCase(), { shiny: props.pkm.shiny || false }), style: style, onClick: (e) => e.currentTarget.classList.add("flipped"), children: [(0, jsx_runtime_1.jsx)("div", { className: "back", children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/pokecard.png" }) }), (0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("front", { shimmer: !!props.pkm.shiny }), children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pkm], props.pkm.shiny, props.pkm.emotion) }), (0, jsx_runtime_1.jsxs)("div", { className: "front-text", children: [(0, jsx_runtime_1.jsx)("p", { className: "name", children: t(`pkm.${pkm}`) }), (0, jsx_runtime_1.jsxs)("p", { children: [props.shards, " ", t("shards")] })] })] })] }));
}
//# sourceMappingURL=booster-card.js.map