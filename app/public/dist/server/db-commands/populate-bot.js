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
const nanoid_1 = require("nanoid");
const bot_v2_1 = require("../app/models/mongo-models/bot-v2");
const pastebin_1 = require("../app/services/pastebin");
const logger_1 = require("../app/utils/logger");
const args = process.argv.slice(2);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        const url = args[0];
        const id = url.slice(21);
        logger_1.logger.debug(`retrieving id : ${id} ...`);
        logger_1.logger.debug("retrieving data ...");
        const data = yield pastebin_1.pastebinService.getPaste(id, false);
        if (data == null) {
            logger_1.logger.error("No data found for this pastebin url");
            return;
        }
        logger_1.logger.debug("parsing JSON data ...");
        try {
            const json = JSON.parse(data);
            logger_1.logger.debug("connect to db ...");
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            const resultDelete = yield bot_v2_1.BotV2.deleteMany({
                avatar: json.avatar,
                author: json.author
            });
            logger_1.logger.debug(resultDelete);
            logger_1.logger.debug(`creating BotV2 ${json.avatar} by ${json.author}...`);
            const resultCreate = yield bot_v2_1.BotV2.create({
                name: json.name,
                avatar: json.avatar,
                elo: json.elo ? json.elo : 1200,
                author: json.author,
                steps: json.steps,
                id: (0, nanoid_1.nanoid)()
            });
            logger_1.logger.debug(resultCreate.id, resultCreate.name, resultCreate.avatar, resultCreate.author, resultCreate.elo);
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Parsing error:", e);
        }
    });
}
main();
//# sourceMappingURL=populate-bot.js.map