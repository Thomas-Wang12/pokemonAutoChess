"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarTab = AvatarTab;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const avatar_1 = require("../../../../../utils/avatar");
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
function AvatarTab() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const pokemonCollectionMap = (0, hooks_1.useAppSelector)((state) => { var _a; return (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.pokemonCollection; });
    const pokemonCollection = pokemonCollectionMap
        ? [...pokemonCollectionMap.values()]
        : [];
    const [selectedPkm, setSelectedPkm] = (0, react_1.useState)("");
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: t("change_avatar") }), (0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: selectedPkm, onChange: setSelectedPkm }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", flexWrap: "wrap", margin: "0.5em 0" }, children: [pokemonCollection.length === 0 && (0, jsx_runtime_1.jsx)("p", { children: t("play_more_games_hint") }), ["normal", "shiny"].flatMap((type) => pokemonCollection
                        .filter((pokemonConfig) => !selectedPkm || pokemonConfig.id === Pokemon_1.PkmIndex[selectedPkm])
                        .map((pokemonConfig) => {
                        return (type === "shiny"
                            ? pokemonConfig.shinyEmotions
                            : pokemonConfig.emotions).map((emotion) => {
                            return ((0, jsx_runtime_1.jsx)("img", { className: "clickable pokemon-portrait", onClick: () => {
                                    dispatch((0, NetworkStore_1.changeAvatar)({
                                        index: pokemonConfig.id,
                                        emotion: emotion,
                                        shiny: type === "shiny"
                                    }));
                                }, src: (0, avatar_1.getPortraitSrc)(pokemonConfig.id, type === "shiny", emotion) }, `${type}-${pokemonConfig.id}${emotion}`));
                        });
                    }))] })] }));
}
//# sourceMappingURL=avatar-tab.js.map