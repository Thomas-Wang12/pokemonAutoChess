"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("./bot"));
class BotManager {
    constructor() {
        this.bots = [];
    }
    addBot(player) {
        this.bots.push(new bot_1.default(player));
    }
    updateBots() {
        this.bots.forEach((bot) => {
            bot.updateProgress();
        });
    }
}
exports.default = BotManager;
//# sourceMappingURL=bot-manager.js.map