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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBots = fetchBots;
exports.getBotsList = getBotsList;
exports.getBotData = getBotData;
exports.addBotToDatabase = addBotToDatabase;
exports.deleteBotFromDatabase = deleteBotFromDatabase;
const bot_v2_1 = require("../models/mongo-models/bot-v2");
const nanoid_1 = require("nanoid");
const bots = new Map();
function fetchBots() {
    return __awaiter(this, void 0, void 0, function* () {
        const botsData = yield bot_v2_1.BotV2.find({}, {}, { sort: { elo: -1 } });
        if (botsData) {
            const ids = new Array();
            botsData.forEach((bot, i) => {
                if (ids.includes(bot.id)) {
                    const id = (0, nanoid_1.nanoid)();
                    bot.id = id;
                    bot.save();
                }
                ids.push(bot.id);
                bots.set(bot.id, bot);
            });
        }
        return bots;
    });
}
function getBotsList(options = { withSteps: true }) {
    return [...bots.values()].map((bot) => (Object.assign({ name: bot.name, avatar: bot.avatar, id: bot.id, author: bot.author, elo: bot.elo }, (options.withSteps ? { steps: bot.steps } : {}))));
}
function getBotData(id) {
    return bots.get(id);
}
function addBotToDatabase(json) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const resultCreate = yield bot_v2_1.BotV2.create({
            name: json.name,
            avatar: json.avatar,
            elo: (_a = json.elo) !== null && _a !== void 0 ? _a : 1200,
            author: json.author,
            steps: json.steps,
            id: (0, nanoid_1.nanoid)()
        });
        bots.set(resultCreate.id, resultCreate);
        return resultCreate;
    });
}
function deleteBotFromDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultDelete = yield bot_v2_1.BotV2.deleteOne({ id });
        bots.delete(id);
        return resultDelete;
    });
}
//# sourceMappingURL=bots.js.map