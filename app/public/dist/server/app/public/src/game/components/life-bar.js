"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bar_1 = __importDefault(require("./bar"));
const ALLY_COLOR = "#76c442";
const ENEMY_COLOR = "#e76e55";
class LifeBar extends bar_1.default {
    constructor(scene, x, y, width, max, maxShield, team, flip) {
        super(scene, x, y, width, 7, max, max, team === (flip ? 1 : 0) ? ALLY_COLOR : ENEMY_COLOR);
        this.shieldProgress = document.createElement("div");
        this.shieldProgress.className = "progress-bar";
        this.shieldProgress.ariaRoleDescription = "progressbar";
        this.shieldProgress.ariaValueNow = maxShield.toString();
        this.shieldProgress.ariaValueMin = "0";
        this.shieldProgress.ariaValueMax = maxShield.toString();
        this.shieldProgress.style.backgroundColor = "#696969";
        this.wrap.style.borderBottom = "none";
        this.dom.appendChild(this.shieldProgress);
    }
    setShieldAmount(value) {
        this.shieldProgress.ariaValueNow = value.toString();
        this.shieldProgress.style.width = `${(value * 100) / this.max}%`;
    }
    setTeam(team, flip) {
        this.color = team === (flip ? 1 : 0) ? ALLY_COLOR : ENEMY_COLOR;
        if (this.progress) {
            this.progress.style.backgroundColor = this.color;
        }
    }
}
exports.default = LifeBar;
//# sourceMappingURL=life-bar.js.map