"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phaser_1 = require("phaser");
const schemas_1 = require("../../../../utils/schemas");
const item_container_1 = __importDefault(require("./item-container"));
class ItemsContainer extends phaser_1.GameObjects.Container {
    constructor(scene, inventory, x, y, pokemonId, playerId) {
        super(scene, x, y);
        this.pokemonId = pokemonId;
        this.playerId = playerId;
        this.setDepth(2);
        scene.add.existing(this);
        this.render(inventory);
    }
    render(inventory) {
        this.removeAll(true);
        const itemSize = this.pokemonId === null ? 70 : 25;
        const ITEMS_PER_COLUMN = 6;
        const items = (0, schemas_1.values)(inventory);
        items.forEach((item, i) => {
            const x = -1 * itemSize * Math.floor(i / ITEMS_PER_COLUMN);
            const y = (i % ITEMS_PER_COLUMN) * itemSize;
            this.add(new item_container_1.default(this.scene, x, y, item, this.pokemonId, this.playerId));
        });
    }
    closeDetails() {
        for (let i = 0; i < this.list.length; i++) {
            const it = this.list[i];
            it.closeDetail();
        }
    }
    setPlayer(player) {
        this.playerId = player.id;
        this.render(player.items);
    }
    updateCount(item, count) {
        for (let i = 0; i < this.list.length; i++) {
            const it = this.list[i];
            if (it.name === item) {
                it.updateCount(count);
            }
        }
    }
}
exports.default = ItemsContainer;
//# sourceMappingURL=items-container.js.map