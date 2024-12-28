"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tournament = void 0;
const mongoose_1 = require("mongoose");
const tournamentPlayerSchema = new mongoose_1.Schema({
    name: String,
    avatar: String,
    elo: Number,
    ranks: [Number],
    eliminated: Boolean
});
const tournamentBracketSchema = new mongoose_1.Schema({
    name: String,
    playersId: [String],
    finished: Boolean
});
const tournamentSchema = new mongoose_1.Schema({
    name: String,
    startDate: String,
    players: {
        type: Map,
        of: tournamentPlayerSchema
    },
    brackets: {
        type: Map,
        of: tournamentBracketSchema
    },
    finished: Boolean
});
exports.Tournament = (0, mongoose_1.model)("Tournament", tournamentSchema);
exports.default = exports.Tournament;
//# sourceMappingURL=tournament.js.map