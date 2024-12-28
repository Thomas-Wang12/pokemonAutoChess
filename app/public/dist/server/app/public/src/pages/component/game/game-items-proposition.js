"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameItemsProposition;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../../../hooks");
const game_item_1 = __importDefault(require("./game-item"));
require("./game-items-proposition.css");
function GameItemsProposition() {
    const itemsProposition = (0, hooks_1.useAppSelector)((state) => state.game.itemsProposition);
    const pokemonsProposition = (0, hooks_1.useAppSelector)((state) => state.game.pokemonsProposition);
    const [visible, setVisible] = (0, react_1.useState)(true);
    if (itemsProposition.length > 0 && pokemonsProposition.length === 0) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "game-items-proposition", children: [(0, jsx_runtime_1.jsx)("div", { className: "game-items-proposition-list", style: { visibility: visible ? "visible" : "hidden" }, children: itemsProposition.map((item, i) => {
                        return (0, jsx_runtime_1.jsx)(game_item_1.default, { item: item }, i);
                    }) }), (0, jsx_runtime_1.jsx)("div", { className: "show-hide-action", children: (0, jsx_runtime_1.jsx)("button", { className: "bubbly orange active", onClick: () => {
                            setVisible(!visible);
                        }, children: visible ? "Hide" : "Show" }) })] }));
    }
    else {
        return null;
    }
}
//# sourceMappingURL=game-items-proposition.js.map