"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLevelUpCost = getLevelUpCost;
const schema_1 = require("@colyseus/schema");
const Config_1 = require("../../types/Config");
class ExperienceManager extends schema_1.Schema {
    constructor() {
        super();
        this.level = 2;
        this.experience = 0;
        this.expNeeded = Config_1.ExpTable[2];
        this.maxLevel = 9;
    }
    canLevel() {
        return this.level < this.maxLevel;
    }
    addExperience(quantity) {
        let expToAdd = quantity;
        while (this.checkForLevelUp(expToAdd)) {
            expToAdd -= Config_1.ExpTable[this.level];
            this.level += 1;
            this.expNeeded = Config_1.ExpTable[this.level];
        }
    }
    checkForLevelUp(quantity) {
        if (this.experience + quantity >= Config_1.ExpTable[this.level] &&
            this.level < this.maxLevel) {
            return true;
        }
        else {
            this.experience += quantity;
            return false;
        }
    }
}
exports.default = ExperienceManager;
__decorate([
    (0, schema_1.type)("uint8")
], ExperienceManager.prototype, "level", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], ExperienceManager.prototype, "experience", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], ExperienceManager.prototype, "expNeeded", void 0);
function getLevelUpCost(specialGameRule) {
    const cost = 4;
    return cost;
}
//# sourceMappingURL=experience-manager.js.map