"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergySymbol = exports.Portal = void 0;
const schema_1 = require("@colyseus/schema");
const nanoid_1 = require("nanoid");
const Dungeon_1 = require("../../types/enum/Dungeon");
class Portal extends schema_1.Schema {
    constructor(x, y, index) {
        super();
        this.avatarId = "";
        this.map = Dungeon_1.DungeonPMDO.TinyWoods;
        this.id = (0, nanoid_1.nanoid)();
        this.x = x;
        this.y = y;
        this.index = index;
    }
}
exports.Portal = Portal;
__decorate([
    (0, schema_1.type)("string")
], Portal.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("number")
], Portal.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number")
], Portal.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("string")
], Portal.prototype, "avatarId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Portal.prototype, "map", void 0);
class SynergySymbol extends schema_1.Schema {
    constructor(x, y, synergy, index) {
        super();
        this.portalId = "";
        this.id = (0, nanoid_1.nanoid)();
        this.x = x;
        this.y = y;
        this.synergy = synergy;
        this.index = index;
    }
}
exports.SynergySymbol = SynergySymbol;
__decorate([
    (0, schema_1.type)("string")
], SynergySymbol.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("number")
], SynergySymbol.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number")
], SynergySymbol.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("string")
], SynergySymbol.prototype, "synergy", void 0);
__decorate([
    (0, schema_1.type)("string")
], SynergySymbol.prototype, "portalId", void 0);
//# sourceMappingURL=portal.js.map