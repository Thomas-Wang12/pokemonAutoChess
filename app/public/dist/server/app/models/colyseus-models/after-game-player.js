"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleSynergy = void 0;
const schema_1 = require("@colyseus/schema");
const game_record_1 = require("./game-record");
class SampleSynergy extends schema_1.Schema {
    constructor(name, value) {
        super();
        this.name = name;
        this.value = value;
    }
}
exports.SampleSynergy = SampleSynergy;
__decorate([
    (0, schema_1.type)("string")
], SampleSynergy.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("number")
], SampleSynergy.prototype, "value", void 0);
class AfterGamePlayer extends schema_1.Schema {
    constructor(id, name, avatar, rank, pokemons, title, role, synergies, elo, moneyEarned, playerDamageDealt, rerollCount) {
        super();
        this.pokemons = new schema_1.ArraySchema();
        this.synergies = new schema_1.ArraySchema();
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.rank = rank;
        this.title = title;
        this.role = role;
        this.elo = elo;
        this.moneyEarned = moneyEarned;
        this.playerDamageDealt = playerDamageDealt;
        this.rerollCount = rerollCount;
        pokemons.forEach((pkm) => {
            this.pokemons.push(new game_record_1.PokemonRecord(pkm));
        });
        synergies.forEach((s) => {
            this.synergies.push(new SampleSynergy(s.name, s.value));
        });
    }
}
exports.default = AfterGamePlayer;
__decorate([
    (0, schema_1.type)("string")
], AfterGamePlayer.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], AfterGamePlayer.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], AfterGamePlayer.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], AfterGamePlayer.prototype, "rank", void 0);
__decorate([
    (0, schema_1.type)([game_record_1.PokemonRecord])
], AfterGamePlayer.prototype, "pokemons", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], AfterGamePlayer.prototype, "elo", void 0);
__decorate([
    (0, schema_1.type)("string")
], AfterGamePlayer.prototype, "title", void 0);
__decorate([
    (0, schema_1.type)("string")
], AfterGamePlayer.prototype, "role", void 0);
__decorate([
    (0, schema_1.type)([SampleSynergy])
], AfterGamePlayer.prototype, "synergies", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], AfterGamePlayer.prototype, "moneyEarned", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], AfterGamePlayer.prototype, "playerDamageDealt", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], AfterGamePlayer.prototype, "rerollCount", void 0);
//# sourceMappingURL=after-game-player.js.map