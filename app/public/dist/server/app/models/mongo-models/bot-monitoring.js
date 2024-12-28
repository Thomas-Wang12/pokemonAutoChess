"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const botMonitoring = new mongoose_1.Schema({
    avatar: { type: String },
    name: { type: String },
    author: { type: String },
    data: [
        {
            time: { type: Number },
            elo: { type: Number }
        }
    ]
});
exports.default = (0, mongoose_1.model)("BotMonitoring", botMonitoring);
//# sourceMappingURL=bot-monitoring.js.map