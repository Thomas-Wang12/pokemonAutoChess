"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameSynergies;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../../../hooks");
const synergies_1 = __importDefault(require("../synergy/synergies"));
function GameSynergies() {
    const synergies = (0, hooks_1.useAppSelector)((state) => state.game.currentPlayerSynergies);
    return (0, jsx_runtime_1.jsx)(synergies_1.default, { synergies: synergies, tooltipPortal: true });
}
//# sourceMappingURL=game-synergies.js.map