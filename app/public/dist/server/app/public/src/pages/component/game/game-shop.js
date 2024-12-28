"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameShop;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_toastify_1 = require("react-toastify");
const game_additional_pokemons_1 = require("./game-additional-pokemons");
const game_experience_1 = __importDefault(require("./game-experience"));
const game_life_info_1 = require("./game-life-info");
const game_lock_1 = __importDefault(require("./game-lock"));
const game_money_info_1 = require("./game-money-info");
const game_rarity_percentage_1 = __importDefault(require("./game-rarity-percentage"));
const game_refresh_1 = __importDefault(require("./game-refresh"));
const game_store_1 = __importDefault(require("./game-store"));
const game_team_info_1 = require("./game-team-info");
const game_regional_pokemons_1 = require("./game-regional-pokemons");
require("./game-shop.css");
function GameShop() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "game-shop my-container", children: [(0, jsx_runtime_1.jsxs)("div", { id: "game-shop-info", children: [(0, jsx_runtime_1.jsx)(game_life_info_1.GameLifeInfo, {}), (0, jsx_runtime_1.jsx)(game_money_info_1.GameMoneyInfo, {}), (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), (0, jsx_runtime_1.jsx)(game_team_info_1.GameTeamInfo, {})] }), (0, jsx_runtime_1.jsxs)("div", { className: "game-shop-actions", children: [(0, jsx_runtime_1.jsx)(game_rarity_percentage_1.default, {}), (0, jsx_runtime_1.jsx)(game_lock_1.default, {}), (0, jsx_runtime_1.jsx)(game_refresh_1.default, {})] }), (0, jsx_runtime_1.jsxs)("div", { className: "game-additional-pools", children: [(0, jsx_runtime_1.jsx)(game_additional_pokemons_1.GameAdditionalPokemonsIcon, {}), (0, jsx_runtime_1.jsx)(game_regional_pokemons_1.GameRegionalPokemonsIcon, {})] }), (0, jsx_runtime_1.jsx)(game_store_1.default, {}), (0, jsx_runtime_1.jsx)(game_experience_1.default, {})] }), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { className: "toast", containerId: "toast-money", position: "bottom-center", autoClose: 2000, hideProgressBar: true, newestOnTop: true, closeOnClick: true, limit: 1, closeButton: false, style: { left: `calc(var(--sidebar-width) + 17.5vw)`, bottom: `9vw` } }), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { className: "toast", containerId: "toast-life", position: "bottom-center", autoClose: 2000, hideProgressBar: true, newestOnTop: true, closeOnClick: true, limit: 1, closeButton: false, style: { left: `calc(var(--sidebar-width) + 11.5vw)`, bottom: `9vw` } })] }));
}
//# sourceMappingURL=game-shop.js.map