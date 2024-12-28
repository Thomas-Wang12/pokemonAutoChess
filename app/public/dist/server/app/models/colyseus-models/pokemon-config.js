"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const types_1 = require("../../types");
class PokemonConfig extends schema_1.Schema {
    constructor(id, p) {
        super();
        this.emotions = new schema_1.ArraySchema();
        this.shinyEmotions = new schema_1.ArraySchema();
        this.id = id;
        if (p) {
            this.dust = p.dust;
            p.emotions.forEach((e) => this.emotions.push(e));
            p.shinyEmotions.forEach((e) => this.shinyEmotions.push(e));
            this.selectedEmotion = p.selectedEmotion;
            this.selectedShiny = p.selectedShiny;
        }
        else {
            this.dust = 0;
            this.selectedEmotion = types_1.Emotion.NORMAL;
            this.selectedShiny = false;
        }
    }
}
exports.default = PokemonConfig;
__decorate([
    (0, schema_1.type)("uint16")
], PokemonConfig.prototype, "dust", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PokemonConfig.prototype, "emotions", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PokemonConfig.prototype, "shinyEmotions", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonConfig.prototype, "selectedEmotion", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], PokemonConfig.prototype, "selectedShiny", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonConfig.prototype, "id", void 0);
//# sourceMappingURL=pokemon-config.js.map