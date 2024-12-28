"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
class Dps extends schema_1.Schema {
    constructor(id, name) {
        super();
        this.physicalDamage = 0;
        this.specialDamage = 0;
        this.trueDamage = 0;
        this.physicalDamageReduced = 0;
        this.specialDamageReduced = 0;
        this.shieldDamageTaken = 0;
        this.heal = 0;
        this.shield = 0;
        this.id = id;
        this.name = name;
    }
    update(physicalDamage, specialDamage, trueDamage, physicalDamageReduced, specialDamageReduced, shieldDamageTaken, heal, shield) {
        if (this.physicalDamage != physicalDamage) {
            this.physicalDamage = physicalDamage;
        }
        if (this.specialDamage != specialDamage) {
            this.specialDamage = specialDamage;
        }
        if (this.trueDamage != trueDamage) {
            this.trueDamage = trueDamage;
        }
        if (this.physicalDamageReduced != physicalDamageReduced) {
            this.physicalDamageReduced = physicalDamageReduced;
        }
        if (this.specialDamageReduced != specialDamageReduced) {
            this.specialDamageReduced = specialDamageReduced;
        }
        if (this.shieldDamageTaken != shieldDamageTaken) {
            this.shieldDamageTaken = shieldDamageTaken;
        }
        if (this.heal != heal) {
            this.heal = heal;
        }
        if (this.shield != shield) {
            this.shield = shield;
        }
    }
}
exports.default = Dps;
__decorate([
    (0, schema_1.type)("string")
], Dps.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], Dps.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Dps.prototype, "physicalDamage", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Dps.prototype, "specialDamage", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Dps.prototype, "trueDamage", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Dps.prototype, "physicalDamageReduced", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Dps.prototype, "specialDamageReduced", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Dps.prototype, "shieldDamageTaken", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Dps.prototype, "heal", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Dps.prototype, "shield", void 0);
//# sourceMappingURL=dps.js.map