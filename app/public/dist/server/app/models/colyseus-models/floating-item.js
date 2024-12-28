"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingItem = void 0;
const schema_1 = require("@colyseus/schema");
const nanoid_1 = require("nanoid");
class FloatingItem extends schema_1.Schema {
    constructor(name, x, y, index) {
        super();
        this.avatarId = "";
        this.id = (0, nanoid_1.nanoid)();
        this.name = name;
        this.x = x;
        this.y = y;
        this.index = index;
    }
}
exports.FloatingItem = FloatingItem;
__decorate([
    (0, schema_1.type)("string")
], FloatingItem.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], FloatingItem.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("number")
], FloatingItem.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number")
], FloatingItem.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("string")
], FloatingItem.prototype, "avatarId", void 0);
//# sourceMappingURL=floating-item.js.map