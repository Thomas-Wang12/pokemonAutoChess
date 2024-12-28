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
const nanoid_1 = require("nanoid");
const game_user_1 = require("../../models/colyseus-models/game-user");
const message_1 = __importDefault(require("../../models/colyseus-models/message"));
const Game_1 = require("../../types/enum/Game");
class PreparationState extends schema_1.Schema {
    constructor(params) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super();
        this.messages = new schema_1.ArraySchema();
        this.users = new schema_1.MapSchema();
        this.gameMode = Game_1.GameMode.CUSTOM_LOBBY;
        this.ownerId =
            params.gameMode === Game_1.GameMode.CUSTOM_LOBBY ? ((_a = params.ownerId) !== null && _a !== void 0 ? _a : "") : "";
        this.name = params.roomName;
        this.gameStartedAt = null;
        this.ownerName = "";
        this.password = (_b = params.password) !== null && _b !== void 0 ? _b : null;
        this.noElo = (_c = params.noElo) !== null && _c !== void 0 ? _c : false;
        this.minRank = (_d = params.minRank) !== null && _d !== void 0 ? _d : null;
        this.maxRank = (_e = params.maxRank) !== null && _e !== void 0 ? _e : null;
        this.gameMode = params.gameMode;
        this.specialGameRule = (_f = params.specialGameRule) !== null && _f !== void 0 ? _f : null;
        this.whitelist = (_g = params.whitelist) !== null && _g !== void 0 ? _g : [];
        this.blacklist = (_h = params.blacklist) !== null && _h !== void 0 ? _h : [];
    }
    addMessage(params) {
        var _a, _b;
        const id = (0, nanoid_1.nanoid)();
        const time = Date.now();
        const message = new message_1.default(id, params.payload, params.authorId, (_a = params.author) !== null && _a !== void 0 ? _a : "", (_b = params.avatar) !== null && _b !== void 0 ? _b : "", time);
        this.messages.push(message);
    }
    removeMessage(id) {
        const messageIndex = this.messages.findIndex((m) => m.id === id);
        if (messageIndex !== -1) {
            this.messages.splice(messageIndex, 1);
        }
    }
}
exports.default = PreparationState;
__decorate([
    (0, schema_1.type)([message_1.default])
], PreparationState.prototype, "messages", void 0);
__decorate([
    (0, schema_1.type)({ map: game_user_1.GameUser })
], PreparationState.prototype, "users", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "gameStartedAt", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "ownerId", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "ownerName", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "password", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "minRank", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "maxRank", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "gameMode", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "specialGameRule", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], PreparationState.prototype, "noElo", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PreparationState.prototype, "whitelist", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PreparationState.prototype, "blacklist", void 0);
//# sourceMappingURL=preparation-state.js.map