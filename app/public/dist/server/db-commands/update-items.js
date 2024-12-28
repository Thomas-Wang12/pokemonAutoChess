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
const items_statistic_1 = require("../app/models/mongo-models/items-statistic");
const Item_1 = require("../app/types/enum/Item");
const logger_1 = require("../app/utils/logger");
const itemsToReplace = new Map([
    ["ORAN_BERRY", Item_1.Item.KINGS_ROCK]
]);
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
                bot.steps.forEach((step) => {
                    step.board.forEach((p) => {
                        for (let j = 0; j < p.items.length; j++) {
                            const item = p.items[j];
                            if (itemsToReplace.has(item)) {
                                logger_1.logger.debug(`Bot ${bot.name}: Replacing item ${item} by ${itemsToReplace.get(item)} for ${p.name}`);
                                p.items[j] = itemsToReplace.get(item);
                                modified = true;
                            }
                        }
                    });
                });
                if (modified) {
                    bot.markModified("steps");
                    yield bot.save();
                }
            }
            const itemsStatistics = yield items_statistic_1.ItemsStatistics.find();
            for (let i = 0; i < itemsStatistics.length; i++) {
                let modified = false;
                const itemStat = itemsStatistics[i];
                if (itemsToReplace.has(itemStat.name)) {
                    logger_1.logger.debug(`ItemStat: Replacing item ${itemStat.name} by ${itemsToReplace.get(itemStat.name)}`);
                    itemStat.name = itemsToReplace.get(itemStat.name);
                    modified = true;
                }
                if (modified) {
                    itemStat.markModified("name");
                    yield itemStat.save();
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
//# sourceMappingURL=update-items.js.map