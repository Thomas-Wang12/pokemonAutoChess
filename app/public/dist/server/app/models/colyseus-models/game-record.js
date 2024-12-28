"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRecord = exports.PokemonRecord = void 0;
const schema_1 = require("@colyseus/schema");
const types_1 = require("../../types");
const Pokemon_1 = require("../../types/enum/Pokemon");
class PokemonRecord extends schema_1.Schema {
    constructor(mongoPokemon) {
        super();
        this.items = new schema_1.ArraySchema();
        this.name = mongoPokemon.name;
        this.avatar = mongoPokemon.avatar
            ? mongoPokemon.avatar
            : `${Pokemon_1.PkmIndex[this.name]}/${types_1.Emotion.NORMAL}`;
        mongoPokemon.items.forEach((it) => {
            this.items.push(it);
        });
    }
}
exports.PokemonRecord = PokemonRecord;
__decorate([
    (0, schema_1.type)("string")
], PokemonRecord.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonRecord.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PokemonRecord.prototype, "items", void 0);
class GameRecord extends schema_1.Schema {
    constructor(time, rank, elo, pokemons) {
        super();
        this.pokemons = new schema_1.ArraySchema();
        this.time = time;
        this.rank = rank;
        this.elo = elo;
        pokemons.forEach((pokemon) => {
            this.pokemons.push(new PokemonRecord(pokemon));
        });
    }
}
exports.GameRecord = GameRecord;
__decorate([
    (0, schema_1.type)("uint64")
], GameRecord.prototype, "time", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], GameRecord.prototype, "rank", void 0);
__decorate([
    (0, schema_1.type)([PokemonRecord])
], GameRecord.prototype, "pokemons", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameRecord.prototype, "elo", void 0);
//# sourceMappingURL=game-record.js.map