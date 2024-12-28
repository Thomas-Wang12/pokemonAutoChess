"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bannedUserSchema = new mongoose_1.Schema({
    uid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: ""
    },
    time: {
        type: Number,
        default: Date.now()
    },
    author: {
        type: String,
        default: ""
    }
});
exports.default = (0, mongoose_1.model)("BannedUser", bannedUserSchema);
//# sourceMappingURL=banned-user.js.map