"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentSchema = exports.TournamentBracketSchema = exports.TournamentPlayerSchema = void 0;
const schema_1 = require("@colyseus/schema");
const schemas_1 = require("../../utils/schemas");
class TournamentPlayerSchema extends schema_1.Schema {
    constructor(name, avatar, elo, ranks = [], eliminated = false) {
        super();
        this.ranks = new schema_1.ArraySchema();
        this.name = name;
        this.avatar = avatar;
        this.elo = elo;
        (0, schemas_1.resetArraySchema)(this.ranks, ranks);
        this.eliminated = eliminated;
    }
}
exports.TournamentPlayerSchema = TournamentPlayerSchema;
__decorate([
    (0, schema_1.type)("string")
], TournamentPlayerSchema.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], TournamentPlayerSchema.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)("number")
], TournamentPlayerSchema.prototype, "elo", void 0);
__decorate([
    (0, schema_1.type)(["number"])
], TournamentPlayerSchema.prototype, "ranks", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], TournamentPlayerSchema.prototype, "eliminated", void 0);
class TournamentBracketSchema extends schema_1.Schema {
    constructor(name, playersId, finished = false) {
        super();
        this.playersId = new schema_1.ArraySchema();
        this.name = name;
        this.finished = finished;
        (0, schemas_1.resetArraySchema)(this.playersId, playersId);
    }
}
exports.TournamentBracketSchema = TournamentBracketSchema;
__decorate([
    (0, schema_1.type)("string")
], TournamentBracketSchema.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], TournamentBracketSchema.prototype, "playersId", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], TournamentBracketSchema.prototype, "finished", void 0);
class TournamentSchema extends schema_1.Schema {
    constructor(id, name, startDate, players, brackets, finished = false) {
        super();
        this.players = new schema_1.MapSchema();
        this.brackets = new schema_1.MapSchema();
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.finished = finished;
        if (players && players.size) {
            players.forEach((p, key) => {
                this.players.set(key, new TournamentPlayerSchema(p.name, p.avatar, p.elo, p.ranks, p.eliminated));
            });
        }
        if (brackets && brackets.size) {
            brackets.forEach((b, bracketId) => {
                this.brackets.set(bracketId, new TournamentBracketSchema(b.name, b.playersId, b.finished));
            });
        }
    }
}
exports.TournamentSchema = TournamentSchema;
__decorate([
    (0, schema_1.type)("string")
], TournamentSchema.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], TournamentSchema.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], TournamentSchema.prototype, "startDate", void 0);
__decorate([
    (0, schema_1.type)({ map: TournamentPlayerSchema })
], TournamentSchema.prototype, "players", void 0);
__decorate([
    (0, schema_1.type)({ map: TournamentBracketSchema })
], TournamentSchema.prototype, "brackets", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], TournamentSchema.prototype, "finished", void 0);
//# sourceMappingURL=tournament.js.map