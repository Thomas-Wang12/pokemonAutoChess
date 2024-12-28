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
const bot_v2_1 = require("../app/models/mongo-models/bot-v2");
const Pokemon_1 = require("../app/types/enum/Pokemon");
const logger_1 = require("../app/utils/logger");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        try {
            logger_1.logger.info("connect to db ...");
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            const bots = yield bot_v2_1.BotV2.find();
            for (let i = 0; i < bots.length; i++) {
                let modified = false;
                const bot = bots[i];
                if (bot.name === "MEGA_SCIZOR") {
                    bot.name = Pokemon_1.Pkm.SCIZOR;
                    modified = true;
                    console.log(bot.name);
                }
                bot.steps.forEach((step) => {
                    step.board.forEach((p) => {
                        if (p.name === "MEGA_SCIZOR") {
                            p.name = Pokemon_1.Pkm.SCIZOR;
                            modified = true;
                            console.log(p.name, "in BOT", bot.name, "by ", bot.author);
                        }
                    });
                });
                if (modified) {
                    bot.markModified("steps");
                    yield bot.save();
                }
            }
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Parsing error:", e);
        }
    });
}
main();
//# sourceMappingURL=update-pkm.js.map