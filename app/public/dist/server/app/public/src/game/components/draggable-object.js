"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phaser_1 = require("phaser");
class DraggableObject extends phaser_1.GameObjects.Container {
    constructor(scene, x, y, width, height, dragDisabled = false) {
        super(scene, x, y);
        this.dragDisabled = dragDisabled;
        this.setSize(width, height);
        this.setInteractive()
            .on("pointerover", (pointer) => {
            this.onPointerOver(pointer);
        })
            .on("pointerout", () => this.onPointerOut())
            .on("pointerdown", (pointer, _x, _y, event) => {
            this.onPointerDown(pointer);
        })
            .on("pointerup", () => this.onPointerUp());
        this.scene.add.existing(this);
    }
    get draggable() {
        return !this.dragDisabled;
    }
    set draggable(isDraggable) {
        this.dragDisabled = !isDraggable;
        this.scene.input.setDraggable(this, isDraggable);
    }
    onPointerOver(pointer) {
        if (!this.dragDisabled) {
            document.body.classList.add("grab");
        }
    }
    onPointerOut() {
        if (!this.dragDisabled) {
            document.body.classList.remove("grab");
        }
    }
    onPointerDown(pointer) {
        if (!this.dragDisabled) {
            document.body.classList.add("grabbing");
        }
    }
    onPointerUp() {
        if (!this.dragDisabled) {
            document.body.classList.remove("grabbing");
            document.body.classList.add("grab");
        }
    }
}
exports.default = DraggableObject;
//# sourceMappingURL=draggable-object.js.map