"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSpecialDetail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const phaser_1 = require("phaser");
const client_1 = __importDefault(require("react-dom/client"));
const descriptions_1 = require("../../pages/utils/descriptions");
class PokemonSpecialDetail extends phaser_1.GameObjects.DOMElement {
    constructor(scene, dialog, dialogTitle) {
        super(scene, 0, 0);
        this.dom = document.createElement("div");
        this.dom.className = "my-container game-pokemon-dialog";
        this.setElement(this.dom);
        const root = client_1.default.createRoot(this.dom);
        root.render((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [dialogTitle && ((0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-dialog-title", children: (0, jsx_runtime_1.jsx)("p", { children: dialogTitle }) })), (0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-dialog-text", children: (0, descriptions_1.addIconsToDescription)(dialog) })] }));
    }
}
exports.PokemonSpecialDetail = PokemonSpecialDetail;
//# sourceMappingURL=pokemon-special-detail.js.map