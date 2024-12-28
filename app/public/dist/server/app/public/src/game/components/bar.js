"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phaser_1 = require("phaser");
class Bar extends phaser_1.GameObjects.DOMElement {
    constructor(scene, x, y, width, height, max, value, color) {
        super(scene, x, y);
        this.max = max;
        this.color = color;
        this.wrap = document.createElement("div");
        this.dom = document.createElement("div");
        this.dom.className = "progress";
        this.dom.style.width = `${width}px`;
        this.dom.style.height = `${height - 2}px`;
        this.wrap.style.margin = "0px";
        this.wrap.style.border = "var(--border-thin)";
        this.wrap.style.borderRadius = "5px";
        this.progress = document.createElement("div");
        this.progress.className = "progress-bar";
        this.progress.ariaRoleDescription = "progressbar";
        this.progress.ariaValueNow = value.toString();
        this.progress.ariaValueMin = "0";
        this.progress.ariaValueMax = max.toString();
        this.progress.style.width = "100%";
        this.progress.style.backgroundColor = color;
        this.progress.style.height = `${height - 2}px!important`;
        this.dom.appendChild(this.progress);
        this.wrap.appendChild(this.dom);
        this.setElement(this.wrap);
    }
    setAmount(value) {
        this.progress.ariaValueNow = value.toString();
        this.progress.style.width = `${(value * 100) / this.max}%`;
    }
}
exports.default = Bar;
//# sourceMappingURL=bar.js.map