"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SelectedEntity;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const precomputed_emotions_1 = require("../../../../../models/precomputed/precomputed-emotions");
const types_1 = require("../../../../../types");
const Item_1 = require("../../../../../types/enum/Item");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const item_detail_1 = require("../../../game/components/item-detail");
const checkbox_1 = require("../checkbox/checkbox");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
function SelectedEntity(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    if (Object.keys(Item_1.Item).includes(props.entity)) {
        return ((0, jsx_runtime_1.jsx)("div", { id: "selected-entity", className: "my-box", children: (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, { item: props.entity }) }));
    }
    else if (Object.values(Pokemon_1.Pkm).includes(props.entity.name)) {
        const detailledPkm = props.entity;
        const index = Pokemon_1.PkmIndex[detailledPkm.name];
        const availableEmotions = Object.values(types_1.Emotion).filter((e, i) => { var _a; return ((_a = precomputed_emotions_1.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX[index]) === null || _a === void 0 ? void 0 : _a[i]) === 1; });
        return ((0, jsx_runtime_1.jsxs)("div", { id: "selected-entity", className: "my-box", children: [(0, jsx_runtime_1.jsxs)("fieldset", { children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: Boolean(detailledPkm.shiny), onToggle: () => {
                                props.onChange(Object.assign(Object.assign({}, detailledPkm), { shiny: !detailledPkm.shiny }));
                            }, label: t("shiny"), isDark: true }), (0, jsx_runtime_1.jsxs)("label", { children: [t("emotion_label"), ":\u00A0", (0, jsx_runtime_1.jsx)("select", { value: detailledPkm.emotion, onChange: (e) => {
                                        props.onChange(Object.assign(Object.assign({}, detailledPkm), { emotion: e.target.value }));
                                    }, children: availableEmotions.map((e) => ((0, jsx_runtime_1.jsx)("option", { value: e, children: e }, e))) })] })] }), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: detailledPkm.name, emotion: detailledPkm.emotion, shiny: detailledPkm.shiny })] }));
    }
    else {
        return null;
    }
}
//# sourceMappingURL=selected-entity.js.map