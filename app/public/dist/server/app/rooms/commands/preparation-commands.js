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
exports.OnRemoveBotCommand = exports.OnAddBotCommand = exports.InitializeBotsCommand = exports.OnToggleReadyCommand = exports.OnLeaveCommand = exports.OnDeleteRoomCommand = exports.OnKickPlayerCommand = exports.OnChangeNoEloCommand = exports.OnRoomChangeSpecialRule = exports.OnRoomChangeRankCommand = exports.OnRoomPasswordCommand = exports.OnRoomNameCommand = exports.RemoveMessageCommand = exports.OnNewMessageCommand = exports.OnGameStartRequestCommand = exports.OnJoinCommand = void 0;
const node_process_1 = require("node:process");
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const game_user_1 = require("../../models/colyseus-models/game-user");
const bot_v2_1 = require("../../models/mongo-models/bot-v2");
const user_metadata_1 = __importDefault(require("../../models/mongo-models/user-metadata"));
const types_1 = require("../../types");
const Config_1 = require("../../types/Config");
const Game_1 = require("../../types/enum/Game");
const logger_1 = require("../../utils/logger");
const number_1 = require("../../utils/number");
const profanity_filter_1 = require("../../utils/profanity-filter");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const CloseCodes_1 = require("../../types/enum/CloseCodes");
const elo_1 = require("../../utils/elo");
class OnJoinCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, options, auth }) {
            try {
                const timeoutDateStr = yield this.room.presence.hget(client.auth.uid, "user_timeout");
                if (timeoutDateStr) {
                    const timeout = new Date(timeoutDateStr).getTime();
                    if (timeout > Date.now()) {
                        client.leave(CloseCodes_1.CloseCodes.USER_TIMEOUT);
                        return;
                    }
                }
                const numberOfHumanPlayers = (0, schemas_1.values)(this.state.users).filter((u) => !u.isBot).length;
                if (numberOfHumanPlayers >= Config_1.MAX_PLAYERS_PER_GAME) {
                    client.leave(CloseCodes_1.CloseCodes.ROOM_FULL);
                    return;
                }
                if (this.state.ownerId == "" &&
                    this.state.gameMode === Game_1.GameMode.CUSTOM_LOBBY) {
                    this.state.ownerId = auth.uid;
                }
                if (this.state.users.has(auth.uid)) {
                    const user = this.state.users.get(auth.uid);
                    this.state.addMessage({
                        authorId: "server",
                        payload: `${user.name} joined.`,
                        avatar: user.avatar
                    });
                }
                else {
                    const u = yield user_metadata_1.default.findOne({ uid: auth.uid });
                    const numberOfHumanPlayers = (0, schemas_1.values)(this.state.users).filter((u) => !u.isBot).length;
                    if (numberOfHumanPlayers >= Config_1.MAX_PLAYERS_PER_GAME) {
                        client.leave(CloseCodes_1.CloseCodes.ROOM_FULL);
                        return;
                    }
                    if (u) {
                        if (this.state.minRank != null &&
                            u.elo < Config_1.EloRankThreshold[this.state.minRank]) {
                            client.leave(CloseCodes_1.CloseCodes.USER_RANK_TOO_LOW);
                            return;
                        }
                        if (this.state.maxRank != null &&
                            u.elo &&
                            Config_1.EloRankThreshold[(0, elo_1.getRank)(u.elo)] >
                                Config_1.EloRankThreshold[this.state.maxRank]) {
                            client.leave(CloseCodes_1.CloseCodes.USER_RANK_TOO_HIGH);
                            return;
                        }
                        this.state.users.set(client.auth.uid, new game_user_1.GameUser(u.uid, u.displayName, u.elo, u.avatar, false, false, u.title, u.role, auth.email === undefined && auth.photoURL === undefined));
                        this.room.updatePlayersInfo();
                        if (u.uid == this.state.ownerId) {
                            this.state.ownerName = u.displayName;
                            this.room.setMetadata({
                                ownerName: this.state.ownerName
                            });
                        }
                        if (this.state.gameMode !== Game_1.GameMode.CUSTOM_LOBBY) {
                            this.clock.setTimeout(() => {
                                if (this.state.users.has(u.uid) &&
                                    !this.state.users.get(u.uid).ready) {
                                    this.state.users.delete(u.uid);
                                    client.leave(CloseCodes_1.CloseCodes.USER_KICKED);
                                }
                            }, 10000);
                        }
                        this.state.addMessage({
                            authorId: "server",
                            payload: `${u.displayName} joined.`,
                            avatar: u.avatar
                        });
                    }
                }
                while (this.state.users.size > Config_1.MAX_PLAYERS_PER_GAME) {
                    const users = (0, schemas_1.entries)(this.state.users);
                    const entryToDelete = users.find(([key, user]) => user.isBot);
                    if (entryToDelete) {
                        const [key, bot] = entryToDelete;
                        this.room.state.addMessage({
                            authorId: "server",
                            avatar: bot.avatar,
                            payload: `Bot ${bot.name} removed to make room for new player.`
                        });
                        this.state.users.delete(key);
                    }
                    else {
                        throw new Error(`There is more than 8 players in the lobby which was not supposed to happen`);
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnJoinCommand = OnJoinCommand;
class OnGameStartRequestCommand extends command_1.Command {
    execute() {
        return __awaiter(this, arguments, void 0, function* ({ client } = {}) {
            var _a, _b;
            try {
                if (this.state.gameStartedAt != null) {
                    return;
                }
                let allUsersReady = true;
                let nbHumanPlayers = 0;
                this.state.users.forEach((user) => {
                    if (!user.ready) {
                        allUsersReady = false;
                    }
                    if (!user.isBot) {
                        nbHumanPlayers++;
                    }
                });
                if (nbHumanPlayers < Config_1.MIN_HUMAN_PLAYERS && process.env.MODE !== "dev") {
                    this.state.addMessage({
                        authorId: "Server",
                        payload: `Due to the current high traffic on the game, to limit the resources used server side, only games with a minimum of ${Config_1.MIN_HUMAN_PLAYERS} players are authorized.`,
                        avatar: "0054/Surprised"
                    });
                    return;
                }
                if (this.state.users.size < 2) {
                    this.state.addMessage({
                        authorId: "Server",
                        payload: `Add bots or wait for more players to join your room.`,
                        avatar: "0079/Sigh"
                    });
                    return;
                }
                if (!allUsersReady && this.state.gameMode === Game_1.GameMode.CUSTOM_LOBBY) {
                    this.state.addMessage({
                        authorId: "Server",
                        payload: `Not all players are ready.`,
                        avatar: "0079/Sigh"
                    });
                    return;
                }
                const freeMemory = (0, node_process_1.memoryUsage)().heapUsed;
                const totalMemory = (0, node_process_1.memoryUsage)().heapTotal;
                if (freeMemory < 0.1 * totalMemory) {
                    this.state.addMessage({
                        author: "Server",
                        authorId: "server",
                        payload: `Too many players are currently playing and the server is running out of memory. Try again in a few minutes, and avoid playing with bots. Sorry for the inconvenience.`,
                        avatar: "0025/Pain"
                    });
                }
                else if (freeMemory < 0.2 * totalMemory &&
                    nbHumanPlayers < Config_1.MAX_PLAYERS_PER_GAME) {
                    this.state.addMessage({
                        author: "Server",
                        authorId: "server",
                        payload: `Too many players are currently playing and the server is running out of memory. To save resources, only lobbys with ${Config_1.MAX_PLAYERS_PER_GAME} human players are enabled. Sorry for the inconvenience.`,
                        avatar: "0025/Pain"
                    });
                }
                else if (freeMemory < 0.4 * totalMemory && nbHumanPlayers === 1) {
                    this.state.addMessage({
                        author: "Server",
                        authorId: "server",
                        payload: `Too many players are currently playing and the server is running out of memory. To save resources, solo games have been disabled. Please wait for more players to join the lobby before starting the game. Sorry for the inconvenience.`,
                        avatar: "0025/Pain"
                    });
                }
                else {
                    this.state.gameStartedAt = new Date().toISOString();
                    this.room.lock();
                    const gameRoom = yield colyseus_1.matchMaker.createRoom("game", {
                        users: this.state.users.toJSON(),
                        name: this.state.name,
                        ownerName: this.state.ownerName,
                        preparationId: this.room.roomId,
                        noElo: this.state.noElo,
                        gameMode: this.state.gameMode,
                        specialGameRule: this.state.specialGameRule,
                        tournamentId: (_a = this.room.metadata) === null || _a === void 0 ? void 0 : _a.tournamentId,
                        bracketId: (_b = this.room.metadata) === null || _b === void 0 ? void 0 : _b.bracketId,
                        minRank: this.state.minRank
                    });
                    this.room.presence.publish("game-started", {
                        gameId: gameRoom.roomId,
                        preparationId: this.room.roomId
                    });
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnGameStartRequestCommand = OnGameStartRequestCommand;
class OnNewMessageCommand extends command_1.Command {
    execute({ client, message }) {
        try {
            const MAX_MESSAGE_LENGTH = 250;
            message = (0, profanity_filter_1.cleanProfanity)(message.substring(0, MAX_MESSAGE_LENGTH));
            const user = this.state.users.get(client.auth.uid);
            if (user && !user.anonymous && message != "") {
                this.state.addMessage({
                    author: user.name,
                    authorId: user.uid,
                    avatar: user.avatar,
                    payload: message
                });
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnNewMessageCommand = OnNewMessageCommand;
class RemoveMessageCommand extends command_1.Command {
    execute({ client, messageId }) {
        try {
            const user = this.state.users.get(client.auth.uid);
            if (user &&
                user.role &&
                (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR)) {
                this.state.removeMessage(messageId);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.RemoveMessageCommand = RemoveMessageCommand;
class OnRoomNameCommand extends command_1.Command {
    execute({ client, message: roomName }) {
        var _a, _b;
        roomName = (0, profanity_filter_1.cleanProfanity)(roomName);
        try {
            const user = this.state.users.get((_a = client.auth) === null || _a === void 0 ? void 0 : _a.uid);
            if (this.state.name != roomName &&
                (((_b = client.auth) === null || _b === void 0 ? void 0 : _b.uid) == this.state.ownerId ||
                    (user && [types_1.Role.ADMIN, types_1.Role.MODERATOR].includes(user.role)))) {
                this.room.setName(roomName);
                this.state.name = roomName;
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnRoomNameCommand = OnRoomNameCommand;
class OnRoomPasswordCommand extends command_1.Command {
    execute({ client, message: password }) {
        var _a;
        try {
            if (((_a = client.auth) === null || _a === void 0 ? void 0 : _a.uid) == this.state.ownerId &&
                this.state.password != password) {
                this.room.setPassword(password);
                this.state.password = password;
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnRoomPasswordCommand = OnRoomPasswordCommand;
class OnRoomChangeRankCommand extends command_1.Command {
    execute({ client, minRank, maxRank }) {
        var _a;
        try {
            if (((_a = client.auth) === null || _a === void 0 ? void 0 : _a.uid) == this.state.ownerId &&
                (minRank !== this.state.minRank || maxRank !== this.state.maxRank)) {
                if (Config_1.EloRankThreshold[minRank] > Config_1.EloRankThreshold[maxRank]) {
                    if (minRank !== this.state.minRank)
                        maxRank = minRank;
                    else
                        minRank = maxRank;
                }
                this.room.setMinMaxRanks(minRank, maxRank);
                this.state.minRank = minRank;
                this.state.maxRank = maxRank;
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnRoomChangeRankCommand = OnRoomChangeRankCommand;
class OnRoomChangeSpecialRule extends command_1.Command {
    execute({ client, specialRule }) {
        var _a;
        try {
            if (((_a = client.auth) === null || _a === void 0 ? void 0 : _a.uid) == this.state.ownerId) {
                this.state.specialGameRule = specialRule;
                if (specialRule != null) {
                    this.state.noElo = true;
                    this.room.setNoElo(true);
                }
                const leader = this.state.users.get(client.auth.uid);
                this.room.state.addMessage({
                    author: "Server",
                    authorId: "server",
                    payload: `Room leader ${specialRule ? "enabled" : "disabled"} Smeargle's Scribble for this game. Players need to ready again.`,
                    avatar: leader === null || leader === void 0 ? void 0 : leader.avatar
                });
                this.state.users.forEach((user) => {
                    user.ready = false;
                });
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnRoomChangeSpecialRule = OnRoomChangeSpecialRule;
class OnChangeNoEloCommand extends command_1.Command {
    execute({ client, message: noElo }) {
        var _a;
        try {
            if (((_a = client.auth) === null || _a === void 0 ? void 0 : _a.uid) === this.state.ownerId &&
                this.state.noElo != noElo) {
                this.state.noElo = noElo;
                if (noElo === false) {
                    this.room.state.specialGameRule = null;
                }
                this.room.setNoElo(noElo);
                const leader = this.state.users.get(client.auth.uid);
                this.room.state.addMessage({
                    author: "Server",
                    authorId: "server",
                    payload: `Room leader ${noElo ? "disabled" : "enabled"} ELO gain for this game. Players need to ready again.`,
                    avatar: leader === null || leader === void 0 ? void 0 : leader.avatar
                });
                this.state.users.forEach((user) => {
                    user.ready = false;
                });
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnChangeNoEloCommand = OnChangeNoEloCommand;
class OnKickPlayerCommand extends command_1.Command {
    execute({ client, message: userId }) {
        var _a, _b;
        try {
            const user = this.state.users.get((_a = client.auth) === null || _a === void 0 ? void 0 : _a.uid);
            if (((_b = client.auth) === null || _b === void 0 ? void 0 : _b.uid) === this.state.ownerId ||
                (user && [types_1.Role.ADMIN, types_1.Role.MODERATOR].includes(user.role))) {
                this.room.clients.forEach((cli) => {
                    var _a, _b;
                    if (((_a = cli.auth) === null || _a === void 0 ? void 0 : _a.uid) === userId && this.state.users.has(userId)) {
                        const user = this.state.users.get(userId);
                        if (user.role === types_1.Role.BASIC) {
                            this.room.state.addMessage({
                                author: "Server",
                                authorId: "server",
                                payload: `${user.name} was kicked out of the room`,
                                avatar: (_b = this.state.users.get(client.auth.uid)) === null || _b === void 0 ? void 0 : _b.avatar
                            });
                            this.state.users.delete(userId);
                            this.room.setMetadata({
                                blacklist: this.room.metadata.blacklist.concat(userId)
                            });
                            cli.leave(CloseCodes_1.CloseCodes.USER_KICKED);
                        }
                        else {
                            this.room.state.addMessage({
                                author: "Server",
                                authorId: "server",
                                payload: `${this.state.ownerName} tried to kick a moderator (${user.name}).`,
                                avatar: "0068/Normal"
                            });
                        }
                    }
                });
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnKickPlayerCommand = OnKickPlayerCommand;
class OnDeleteRoomCommand extends command_1.Command {
    execute({ client }) {
        var _a;
        try {
            const user = this.state.users.get((_a = client.auth) === null || _a === void 0 ? void 0 : _a.uid);
            if (user && [types_1.Role.ADMIN, types_1.Role.MODERATOR].includes(user.role)) {
                this.room.clients.forEach((cli) => {
                    cli.leave(CloseCodes_1.CloseCodes.ROOM_DELETED);
                });
                this.room.disconnect();
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnDeleteRoomCommand = OnDeleteRoomCommand;
class OnLeaveCommand extends command_1.Command {
    execute({ client, consented }) {
        var _a, _b;
        try {
            if ((_a = client.auth) === null || _a === void 0 ? void 0 : _a.uid) {
                const user = this.state.users.get((_b = client.auth) === null || _b === void 0 ? void 0 : _b.uid);
                if (user) {
                    this.room.state.addMessage({
                        authorId: "server",
                        payload: `${user.name} left.`,
                        avatar: user.avatar
                    });
                    this.state.users.delete(client.auth.uid);
                    if (client.auth.uid === this.state.ownerId) {
                        const newOwner = (0, schemas_1.values)(this.state.users).find((user) => user.uid !== this.state.ownerId && !user.isBot);
                        if (newOwner) {
                            this.state.ownerId = newOwner.uid;
                            this.state.ownerName = newOwner.name;
                            this.room.setMetadata({ ownerName: this.state.ownerName });
                            this.room.setName(`${newOwner.name}'${newOwner.name.endsWith("s") ? "" : "s"} room`);
                            this.room.state.addMessage({
                                authorId: "server",
                                payload: `The new room leader is ${newOwner.name}`,
                                avatar: newOwner.avatar
                            });
                        }
                    }
                }
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnLeaveCommand = OnLeaveCommand;
class OnToggleReadyCommand extends command_1.Command {
    execute({ client, ready }) {
        var _a, _b, _c, _d;
        try {
            if (this.room.state.gameMode !== Game_1.GameMode.CUSTOM_LOBBY && ready !== true)
                return;
            if (((_a = client.auth) === null || _a === void 0 ? void 0 : _a.uid) && this.state.users.has(client.auth.uid)) {
                const user = this.state.users.get(client.auth.uid);
                user.ready = ready;
            }
            const nbExpectedPlayers = ((_b = this.room.metadata) === null || _b === void 0 ? void 0 : _b.whitelist) &&
                ((_c = this.room.metadata) === null || _c === void 0 ? void 0 : _c.whitelist.length) > 0
                ? (0, number_1.max)(Config_1.MAX_PLAYERS_PER_GAME)((_d = this.room.metadata) === null || _d === void 0 ? void 0 : _d.whitelist.length)
                : Config_1.MAX_PLAYERS_PER_GAME;
            if (this.state.gameMode !== Game_1.GameMode.CUSTOM_LOBBY &&
                this.state.users.size === nbExpectedPlayers &&
                (0, schemas_1.values)(this.state.users).every((user) => user.ready)) {
                this.room.state.addMessage({
                    authorId: "server",
                    payload: `Lobby is full, starting match...`
                });
                if ([Game_1.GameMode.RANKED, Game_1.GameMode.SCRIBBLE].includes(this.state.gameMode)) {
                    this.room.presence.publish("lobby-full", {
                        gameMode: this.state.gameMode,
                        minRank: this.state.minRank,
                        noElo: this.state.noElo
                    });
                }
                return [new OnGameStartRequestCommand()];
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnToggleReadyCommand = OnToggleReadyCommand;
class InitializeBotsCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ ownerId }) {
            try {
                const user = yield user_metadata_1.default.findOne({ uid: ownerId });
                if (user) {
                    const difficulty = { $gt: user.elo - 100, $lt: user.elo + 100 };
                    const bots = yield bot_v2_1.BotV2.find({ elo: difficulty }, [
                        "avatar",
                        "elo",
                        "name",
                        "id"
                    ]).limit(7);
                    if (bots) {
                        bots.forEach((bot) => {
                            this.state.users.set(bot.id, new game_user_1.GameUser(bot.id, bot.name, bot.elo, bot.avatar, true, true, "", types_1.Role.BOT, false));
                        });
                    }
                    this.room.updatePlayersInfo();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.InitializeBotsCommand = InitializeBotsCommand;
class OnAddBotCommand extends command_1.Command {
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.state.users.size >= Config_1.MAX_PLAYERS_PER_GAME) {
                    this.room.state.addMessage({
                        authorId: "server",
                        payload: "Room is full"
                    });
                    return;
                }
                const { type } = data;
                let bot;
                if (typeof type === "object") {
                    bot = type;
                }
                else {
                    const difficulty = type;
                    let d;
                    switch (difficulty) {
                        case Game_1.BotDifficulty.EASY:
                            d = { $lt: 800 };
                            break;
                        case Game_1.BotDifficulty.MEDIUM:
                            d = { $gte: 800, $lt: 1100 };
                            break;
                        case Game_1.BotDifficulty.HARD:
                            d = { $gte: 1100, $lt: 1400 };
                            break;
                        case Game_1.BotDifficulty.EXTREME:
                            d = { $gte: 1400 };
                            break;
                    }
                    const existingBots = new Array();
                    this.state.users.forEach((value, key) => {
                        if (value.isBot) {
                            existingBots.push(key);
                        }
                    });
                    const bots = yield bot_v2_1.BotV2.find({ id: { $nin: existingBots }, elo: d }, [
                        "avatar",
                        "elo",
                        "name",
                        "id"
                    ]);
                    if (bots.length <= 0) {
                        this.room.state.addMessage({
                            authorId: "server",
                            payload: "Error: No bots found"
                        });
                        return;
                    }
                    bot = (0, random_1.pickRandomIn)(bots);
                }
                if (bot) {
                    if (this.state.users.size >= Config_1.MAX_PLAYERS_PER_GAME) {
                        this.room.state.addMessage({
                            authorId: "server",
                            payload: "Room is full"
                        });
                        return;
                    }
                    this.state.users.set(bot.id, new game_user_1.GameUser(bot.id, bot.name, bot.elo, bot.avatar, true, true, "", types_1.Role.BOT, false));
                    this.room.updatePlayersInfo();
                    this.room.state.addMessage({
                        authorId: "server",
                        payload: `Bot ${bot.name} added.`
                    });
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnAddBotCommand = OnAddBotCommand;
class OnRemoveBotCommand extends command_1.Command {
    execute({ target, user }) {
        var _a;
        try {
            const name = (_a = this.state.users.get(target)) === null || _a === void 0 ? void 0 : _a.name;
            if (name && this.state.users.delete(target)) {
                this.room.state.addMessage({
                    authorId: "server",
                    payload: `Bot ${name} removed.`
                });
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnRemoveBotCommand = OnRemoveBotCommand;
//# sourceMappingURL=preparation-commands.js.map