"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingItem = void 0;
const phaser_1 = require("phaser");
class FloatingItem extends phaser_1.GameObjects.Container {
    constructor(scene, id, x, y, item) {
        super(scene, x, y);
        this.name = item;
        this.id = id;
        this.circle = new phaser_1.GameObjects.Ellipse(scene, 0, 0, 40, 40, 0x61738a, 1);
        this.circle.setStrokeStyle(1, 0xffffff, 0.7);
        this.add(this.circle);
        this.sprite = new phaser_1.GameObjects.Image(scene, 0, 0, "item", this.name + ".png");
        this.sprite.setScale(0.32);
        this.add(this.sprite);
        this.setDepth(2);
        this.scene.add.existing(this);
    }
    onGrab(playerId) {
        const currentPlayerId = this.scene.uid;
        if (playerId === currentPlayerId) {
            this.circle.setStrokeStyle(2, 0x4cff00, 1);
            this.circle.setFillStyle(0x61738a, 1);
        }
        else if (playerId == "") {
            this.circle.setStrokeStyle(1, 0xffffff, 0.7);
            this.circle.setFillStyle(0x61738a, 1);
        }
        else {
            this.circle.setStrokeStyle(2, 0xcf0000, 0.7);
            this.circle.setFillStyle(0x61738a, 0.7);
        }
    }
}
exports.FloatingItem = FloatingItem;
//# sourceMappingURL=floating-item.js.map