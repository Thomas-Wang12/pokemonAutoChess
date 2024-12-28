"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchLeaderboards = fetchLeaderboards;
exports.fetchUserLeaderboard = fetchUserLeaderboard;
exports.fetchLevelLeaderboard = fetchLevelLeaderboard;
exports.fetchBotsLeaderboard = fetchBotsLeaderboard;
exports.getLeaderboard = getLeaderboard;
const user_metadata_1 = __importDefault(require("../models/mongo-models/user-metadata"));
const bots_1 = require("./bots");
const logger_1 = require("../utils/logger");
let leaderboard = new Array();
let levelLeaderboard = new Array();
let botLeaderboard = new Array();
function fetchLeaderboards() {
    logger_1.logger.info("Refreshing leaderboards...");
    return Promise.all([
        fetchUserLeaderboard(),
        fetchBotsLeaderboard(),
        fetchLevelLeaderboard()
    ]);
}
function fetchUserLeaderboard() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield user_metadata_1.default.find({}, ["displayName", "avatar", "elo", "uid"], { limit: 100, sort: { elo: -1 } });
        if (users) {
            leaderboard = users.map((user, i) => ({
                name: user.displayName,
                rank: i + 1,
                avatar: user.avatar,
                value: user.elo,
                id: user.uid
            }));
        }
        return leaderboard;
    });
}
function fetchLevelLeaderboard() {
    return __awaiter(this, void 0, void 0, function* () {
        const levelUsers = yield user_metadata_1.default.find({}, ["displayName", "avatar", "level", "uid"], { limit: 100, sort: { level: -1 } });
        if (levelUsers) {
            levelLeaderboard = levelUsers.map((user, i) => ({
                name: user.displayName,
                rank: i + 1,
                avatar: user.avatar,
                value: user.level,
                id: user.uid
            }));
        }
        return levelLeaderboard;
    });
}
function fetchBotsLeaderboard() {
    return __awaiter(this, void 0, void 0, function* () {
        botLeaderboard = [];
        const bots = yield (0, bots_1.fetchBots)();
        [...bots.values()].forEach((bot, i) => {
            botLeaderboard.push({
                name: bot.name,
                avatar: bot.avatar,
                rank: i + 1,
                value: bot.elo,
                author: bot.author
            });
        });
        return botLeaderboard;
    });
}
function getLeaderboard() {
    return {
        leaderboard,
        botLeaderboard,
        levelLeaderboard
    };
}
//# sourceMappingURL=leaderboard.js.map