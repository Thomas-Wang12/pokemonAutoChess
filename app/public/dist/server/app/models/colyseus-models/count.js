"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
class Count extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.crit = 0;
        this.ult = 0;
        this.petalDanceCount = 0;
        this.fieldCount = 0;
        this.soundCount = 0;
        this.fairyCritCount = 0;
        this.attackCount = 0;
        this.growGroundCount = 0;
        this.fightingBlockCount = 0;
        this.dodgeCount = 0;
        this.powerLensCount = 0;
        this.starDustCount = 0;
        this.tripleAttackCount = 0;
        this.staticHolderCount = 0;
        this.defensiveRibbonCount = 0;
        this.earthquakeCount = 0;
        this.mindBlownCount = 0;
        this.spellBlockedCount = 0;
        this.manaBurnCount = 0;
        this.moneyCount = 0;
        this.amuletCoinCount = 0;
        this.bottleCapCount = 0;
        this.futureSightCount = 0;
        this.upgradeCount = 0;
        this.soulDewCount = 0;
        this.healOrderCount = 0;
        this.attackOrderCount = 0;
        this.magmarizerCount = 0;
        this.echo = 0;
    }
}
exports.default = Count;
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "crit", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "ult", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "petalDanceCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "fieldCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "soundCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "fairyCritCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "attackCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "growGroundCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "fightingBlockCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "dodgeCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "powerLensCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "starDustCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "tripleAttackCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "staticHolderCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "defensiveRibbonCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "earthquakeCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "mindBlownCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "spellBlockedCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "manaBurnCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "moneyCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "amuletCoinCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "bottleCapCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "futureSightCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "upgradeCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "soulDewCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "healOrderCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "attackOrderCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "magmarizerCount", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Count.prototype, "echo", void 0);
//# sourceMappingURL=count.js.map