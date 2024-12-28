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
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const after_game_player_1 = __importDefault(require("../models/colyseus-models/after-game-player"));
const banned_user_1 = __importDefault(require("../models/mongo-models/banned-user"));
const user_metadata_1 = __importDefault(require("../models/mongo-models/user-metadata"));
const types_1 = require("../types");
const logger_1 = require("../utils/logger");
const after_game_state_1 = __importDefault(require("./states/after-game-state"));
class AfterGameRoom extends colyseus_1.Room {
    constructor() {
        super();
        this.dispatcher = new command_1.Dispatcher(this);
    }
    onCreate(options) {
        logger_1.logger.info("Create AfterGame ", this.roomId);
        this.setState(new after_game_state_1.default(options));
        if (options.players) {
            options.players.forEach((plyr) => {
                const player = new after_game_player_1.default(plyr.id, plyr.name, plyr.avatar, plyr.rank, plyr.pokemons, plyr.title, plyr.role, plyr.synergies, plyr.elo, plyr.moneyEarned, plyr.playerDamageDealt, plyr.rerollCount);
                this.state.players.set(player.id, player);
            });
        }
        this.clock.setTimeout(() => {
            this.disconnect();
        }, 120 * 1000);
    }
    onAuth(client, options, request) {
        const _super = Object.create(null, {
            onAuth: { get: () => super.onAuth }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                _super.onAuth.call(this, client, options, request);
                const token = yield firebase_admin_1.default.auth().verifyIdToken(options.idToken);
                const user = yield firebase_admin_1.default.auth().getUser(token.uid);
                const isBanned = yield banned_user_1.default.findOne({ uid: user.uid });
                const userProfile = yield user_metadata_1.default.findOne({ uid: user.uid });
                client.send(types_1.Transfer.USER_PROFILE, userProfile);
                if (!user.displayName) {
                    throw "No display name";
                }
                else if (isBanned) {
                    throw "User banned";
                }
                else {
                    return user;
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
    onJoin(client) {
    }
    onLeave(client, consented) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (consented) {
                    throw new Error("consented leave");
                }
                yield this.allowReconnection(client, 20);
            }
            catch (e) {
            }
        });
    }
    onDispose() {
        logger_1.logger.info("dispose AfterGame ", this.roomId);
        this.dispatcher.stop();
    }
}
exports.default = AfterGameRoom;
//# sourceMappingURL=after-game-room.js.map