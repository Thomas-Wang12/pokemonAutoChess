"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergySymbol = exports.Portal = void 0;
const phaser_1 = require("phaser");
class Portal extends phaser_1.GameObjects.Container {
    constructor(scene, id, x, y) {
        super(scene, x, y);
        this.id = id;
        this.sprite = new phaser_1.GameObjects.Sprite(scene, 0, 0, "portal");
        this.sprite.anims.play("portal");
        this.sprite.setScale(2);
        this.add(this.sprite);
        this.setDepth(2);
        this.scene.add.existing(this);
    }
}
exports.Portal = Portal;
class SynergySymbol extends phaser_1.GameObjects.Sprite {
    constructor(scene, id, x, y, synergy) {
        super(scene, x, y, "types", synergy + ".png");
        this.id = id;
        this.synergy = synergy;
        this.setDepth(2);
        this.scene.add.existing(this);
    }
}
exports.SynergySymbol = SynergySymbol;
//# sourceMappingURL=portal.js.map