"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const after_game_player_1 = __importDefault(require("../../models/colyseus-models/after-game-player"));
class AfterGameState extends schema_1.Schema {
    constructor({ elligibleToELO, elligibleToXP }) {
        super();
        this.players = new schema_1.MapSchema();
        this.elligibleToELO = false;
        this.elligibleToXP = false;
        this.elligibleToXP = elligibleToXP;
        this.elligibleToELO = elligibleToELO;
    }
}
exports.default = AfterGameState;
__decorate([
    (0, schema_1.type)({ map: after_game_player_1.default })
], AfterGameState.prototype, "players", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], AfterGameState.prototype, "elligibleToELO", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], AfterGameState.prototype, "elligibleToXP", void 0);
//# sourceMappingURL=after-game-state.js.map