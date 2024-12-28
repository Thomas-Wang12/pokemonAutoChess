"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotV2 = void 0;
const mongoose_1 = require("mongoose");
const nanoid_1 = require("nanoid");
const types_1 = require("../../types");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const pkm = new mongoose_1.Schema({
    name: {
        type: String,
        enum: Pokemon_1.Pkm,
        required: true
    },
    x: {
        type: Number,
        min: 0,
        max: 7,
        required: true
    },
    y: {
        type: Number,
        min: 0,
        max: 3,
        required: true
    },
    items: [
        {
            type: String,
            enum: Item_1.Item
        }
    ],
    emotion: {
        type: String,
        required: false,
        enum: types_1.Emotion
    },
    shiny: {
        type: Boolean,
        required: false
    }
});
const step = new mongoose_1.Schema({
    board: [pkm],
    roundsRequired: {
        type: Number,
        required: true
    }
});
const bot = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        default: (0, nanoid_1.nanoid)()
    },
    name: {
        type: String
    },
    avatar: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    elo: {
        type: Number,
        required: true
    },
    steps: [step]
}, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.__v;
            if (ret.steps)
                ret.steps.forEach((step) => {
                    step.board.forEach((board) => {
                        delete board._id;
                    });
                    delete step._id;
                });
        }
    }
});
const BotV2 = (0, mongoose_1.model)("botV2", bot);
exports.BotV2 = BotV2;
//# sourceMappingURL=bot-v2.js.map