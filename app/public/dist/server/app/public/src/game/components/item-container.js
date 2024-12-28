"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phaser_1 = require("phaser");
const Item_1 = require("../../../../types/enum/Item");
const game_1 = require("../../pages/game");
const preferences_1 = require("../../preferences");
const draggable_object_1 = __importDefault(require("./draggable-object"));
const item_detail_1 = __importDefault(require("./item-detail"));
class ItemContainer extends draggable_object_1.default {
    constructor(scene, x, y, item, pokemonId, playerId) {
        var _a;
        const currentPlayerUid = (_a = (0, game_1.getGameScene)()) === null || _a === void 0 ? void 0 : _a.uid;
        const itemSize = pokemonId === null ? 60 : 25;
        super(scene, x, y, itemSize, itemSize, playerId !== currentPlayerUid);
        this.mouseoutTimeout = null;
        this.name = item;
        this.scene = scene;
        this.pokemonId = pokemonId;
        this.playerId = playerId;
        this.circle = scene.add.image(0, 0, "cell", this.cellIndex * 3);
        if (pokemonId) {
            this.circle.setFrame(this.cellIndex * 3 + 2).setScale(0.45);
        }
        else {
            this.circle.setFrame(this.cellIndex * 3 + (playerId === currentPlayerUid ? 0 : 2));
        }
        this.add(this.circle);
        const spriteName = Item_1.TMs.includes(item)
            ? "TM"
            : Item_1.HMs.includes(item)
                ? "HM"
                : item;
        this.sprite = new phaser_1.GameObjects.Image(scene, 0, 0, "item", spriteName + ".png").setScale(pokemonId === null ? 0.5 : 0.25);
        this.add(this.sprite);
        this.setInteractive();
        this.updateDropZone(true);
        this.draggable = this.pokemonId === null && playerId === currentPlayerUid;
    }
    get cellIndex() {
        if (Item_1.ShinyItems.includes(this.name))
            return 1;
        if (Item_1.Berries.includes(this.name))
            return 2;
        if (Item_1.ArtificialItems.includes(this.name))
            return 3;
        if (Item_1.WeatherRocks.includes(this.name))
            return 4;
        if (Item_1.SpecialItems.includes(this.name))
            return 5;
        if (Item_1.TMs.includes(this.name) || Item_1.HMs.includes(this.name))
            return 6;
        return 0;
    }
    updateDropZone(value) {
        if (this.input) {
            this.input.dropZone = value;
        }
    }
    onPointerOver(pointer) {
        var _a, _b;
        super.onPointerOver(pointer);
        if (preferences_1.preferences.showDetailsOnHover && !((_a = this.detail) === null || _a === void 0 ? void 0 : _a.visible)) {
            this.mouseoutTimeout && clearTimeout(this.mouseoutTimeout);
            this.openDetail();
        }
        this.updateDropZone(false);
        if (this.draggable) {
            (_b = this.circle) === null || _b === void 0 ? void 0 : _b.setFrame(this.cellIndex * 3 + 1);
        }
    }
    onPointerOut() {
        var _a;
        super.onPointerOut();
        if (!this.dragDisabled) {
            this.updateDropZone(true);
        }
        if (this.draggable) {
            (_a = this.circle) === null || _a === void 0 ? void 0 : _a.setFrame(this.cellIndex * 3);
        }
        if (preferences_1.preferences.showDetailsOnHover) {
            this.mouseoutTimeout = setTimeout(() => {
                var _a;
                if ((_a = this.detail) === null || _a === void 0 ? void 0 : _a.visible) {
                    this.closeDetail();
                }
            }, this.pokemonId === null ? 100 : 0);
        }
    }
    onPointerDown(pointer) {
        var _a;
        super.onPointerDown(pointer);
        this.parentContainer.bringToTop(this);
        if (pointer.rightButtonDown() && !preferences_1.preferences.showDetailsOnHover) {
            if (!((_a = this.detail) === null || _a === void 0 ? void 0 : _a.visible)) {
                this.openDetail();
                this.updateDropZone(false);
            }
            else {
                this.closeDetail();
                this.updateDropZone(true);
            }
        }
    }
    onPointerUp() {
        super.onPointerUp();
        this.updateDropZone(false);
    }
    openDetail() {
        if (this.parentContainer.visible) {
            ;
            this.parentContainer.closeDetails();
            if (this.detail === undefined) {
                this.detail = new item_detail_1.default(this.scene, 0, 0, this.name);
                this.detail.setDepth(100);
                this.detail.setPosition(this.detail.width * 0.5 + 40, this.detail.height * 0.5);
                this.detail.setVisible(false);
                this.detail.dom.addEventListener("mouseenter", () => {
                    this.mouseoutTimeout && clearTimeout(this.mouseoutTimeout);
                });
                this.detail.dom.addEventListener("mouseleave", () => {
                    if (preferences_1.preferences.showDetailsOnHover) {
                        this.mouseoutTimeout = setTimeout(() => {
                            var _a;
                            if ((_a = this.detail) === null || _a === void 0 ? void 0 : _a.visible) {
                                this.closeDetail();
                            }
                        }, this.pokemonId === null ? 100 : 0);
                    }
                });
                this.add(this.detail);
            }
            this.detail.setVisible(true);
        }
    }
    closeDetail() {
        var _a;
        if (this.tempDetail || this.tempSprite) {
            this.sprite.setVisible(true);
            if (this.tempDetail) {
                this.tempDetail.destroy();
            }
            if (this.tempSprite) {
                this.tempSprite.destroy();
            }
        }
        (_a = this.detail) === null || _a === void 0 ? void 0 : _a.setVisible(false);
    }
    showTempDetail(item) {
        var _a;
        (_a = this.detail) === null || _a === void 0 ? void 0 : _a.setVisible(false);
        this.sprite.setVisible(false);
        this.tempSprite = new phaser_1.GameObjects.Image(this.scene, 0, 0, "item", item + ".png").setScale(this.pokemonId === null ? 0.5 : 0.25);
        this.tempDetail = new item_detail_1.default(this.scene, 0, 0, item);
        this.tempDetail.setDepth(100);
        this.tempDetail.setPosition(this.tempDetail.width * 0.5 + 40, this.tempDetail.height * 0.5 + 40);
        this.add(this.tempSprite);
        this.add(this.tempDetail);
        this.tempDetail.setVisible(true);
    }
    updateCount(value) {
        if (this.countText === undefined) {
            const textStyle = {
                fontSize: "16px",
                fontFamily: "Jost",
                color: "#FFFFFF",
                align: "center",
                strokeThickness: 2,
                stroke: "#000000"
            };
            this.countText = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, 15, -12, value.toString(), textStyle));
            this.add(this.countText);
            this.countText.setAlign("left");
        }
        else {
            this.countText.setText(value.toString());
        }
    }
    destroy(fromScene) {
        super.destroy(fromScene);
        this.closeDetail();
    }
}
exports.default = ItemContainer;
//# sourceMappingURL=item-container.js.map