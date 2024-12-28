"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bar_1 = __importDefault(require("./bar"));
class PowerBar extends bar_1.default {
    constructor(scene, x, y, width, max) {
        super(scene, x, y, width, 5, max, 0, "#209cee");
        this.wrap.style.borderTop = "none";
    }
}
exports.default = PowerBar;
//# sourceMappingURL=power-bar.js.map