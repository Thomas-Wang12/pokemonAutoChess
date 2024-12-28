"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const immer_1 = require("immer");
const AfterGameStore_1 = __importDefault(require("./AfterGameStore"));
const GameStore_1 = __importDefault(require("./GameStore"));
const LobbyStore_1 = __importDefault(require("./LobbyStore"));
const NetworkStore_1 = __importDefault(require("./NetworkStore"));
const PreparationStore_1 = __importDefault(require("./PreparationStore"));
(0, immer_1.enableMapSet)();
const store = (0, toolkit_1.configureStore)({
    reducer: {
        lobby: LobbyStore_1.default,
        network: NetworkStore_1.default,
        preparation: PreparationStore_1.default,
        game: GameStore_1.default,
        after: AfterGameStore_1.default
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
});
exports.default = store;
//# sourceMappingURL=index.js.map