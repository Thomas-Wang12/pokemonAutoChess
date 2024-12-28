"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const historyPokemon = new mongoose_1.Schema({
    name: {
        type: String,
        enum: Object.values(Pokemon_1.Pkm)
    },
    avatar: {
        type: String
    },
    inventory: [
        {
            type: String,
            enum: Item_1.Item
        }
    ]
});
const history = new mongoose_1.Schema({
    id: { type: String },
    name: { type: String },
    startTime: { type: Number },
    endTime: { type: Number },
    players: [
        {
            id: { type: String },
            avatar: { type: String },
            name: { type: String },
            elo: { type: Number },
            rank: { type: Number },
            pokemons: [historyPokemon]
        }
    ]
}, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.__v;
            ret.players.forEach((p) => {
                p.pokemons.forEach((po) => {
                    po.inventory.forEach((i) => {
                        delete i._id;
                    });
                    delete po._id;
                });
                delete p._id;
            });
        }
    }
});
exports.default = (0, mongoose_1.model)("History", history);
//# sourceMappingURL=history.js.map