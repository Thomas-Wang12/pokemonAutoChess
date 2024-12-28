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
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const bot_monitoring_1 = __importDefault(require("../app/models/mongo-models/bot-monitoring"));
const bot_v2_1 = require("../app/models/mongo-models/bot-v2");
const logger_1 = require("../app/utils/logger");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        logger_1.logger.info("connection to db...");
        if (process.env.MONGO_URI) {
            const connection = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            if (connection) {
                logger_1.logger.info("loading bots ...");
                const bots = yield bot_v2_1.BotV2.find({}, ["avatar", "elo", "name", "author"], null);
                yield Promise.all(bots.map((bot) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        logger_1.logger.info(`finding bot ${bot.name}...`);
                        const botMonitor = yield bot_monitoring_1.default.findOne({ avatar: bot.avatar });
                        logger_1.logger.info(`updating bot ${bot.name}...`);
                        if (botMonitor) {
                            botMonitor.data.push({ time: Date.now(), elo: bot.elo });
                            yield botMonitor.save();
                        }
                    }
                    catch (err) {
                        logger_1.logger.info(`creating bot ${bot.name}...`);
                        yield bot_monitoring_1.default.create({
                            avatar: bot.avatar,
                            author: bot.author,
                            name: bot.name,
                            data: [{ time: Date.now(), elo: bot.elo }]
                        });
                    }
                })));
                logger_1.logger.info("closing connection ...");
                connection.disconnect();
            }
        }
    });
}
main();
//# sourceMappingURL=monitor-bot.js.map