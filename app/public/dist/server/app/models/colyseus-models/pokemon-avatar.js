"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonAvatarModel = void 0;
const schema_1 = require("@colyseus/schema");
const avatar_1 = require("../../utils/avatar");
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
class PokemonAvatarModel extends schema_1.Schema {
    constructor(id, avatar, x, y, timer) {
        super();
        this.action = Game_1.PokemonActionState.IDLE;
        this.orientation = Game_1.Orientation.DOWNLEFT;
        this.itemId = "";
        this.portalId = "";
        this.id = id;
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.timer = timer;
        const { index, shiny } = (0, avatar_1.getPokemonConfigFromAvatar)(avatar);
        this.name = Pokemon_1.PkmByIndex[index];
        this.shiny = shiny;
    }
}
exports.PokemonAvatarModel = PokemonAvatarModel;
__decorate([
    (0, schema_1.type)("string")
], PokemonAvatarModel.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonAvatarModel.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], PokemonAvatarModel.prototype, "shiny", void 0);
__decorate([
    (0, schema_1.type)("number")
], PokemonAvatarModel.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number")
], PokemonAvatarModel.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("number")
], PokemonAvatarModel.prototype, "targetX", void 0);
__decorate([
    (0, schema_1.type)("number")
], PokemonAvatarModel.prototype, "targetY", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonAvatarModel.prototype, "action", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonAvatarModel.prototype, "orientation", void 0);
__decorate([
    (0, schema_1.type)("number")
], PokemonAvatarModel.prototype, "timer", void 0);
//# sourceMappingURL=pokemon-avatar.js.map