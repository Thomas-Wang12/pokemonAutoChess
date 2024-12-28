"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setElligibilityToELO = exports.setElligibilityToXP = exports.leaveAfter = exports.addPlayer = exports.afterSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    players: new Array(),
    elligibleToXP: false,
    elligibleToELO: false
};
exports.afterSlice = (0, toolkit_1.createSlice)({
    name: "after",
    initialState: initialState,
    reducers: {
        addPlayer: (state, action) => {
            state.players.push(action.payload);
        },
        leaveAfter: () => initialState,
        setElligibilityToXP: (state, action) => {
            state.elligibleToXP = action.payload;
        },
        setElligibilityToELO: (state, action) => {
            state.elligibleToELO = action.payload;
        }
    }
});
_a = exports.afterSlice.actions, exports.addPlayer = _a.addPlayer, exports.leaveAfter = _a.leaveAfter, exports.setElligibilityToXP = _a.setElligibilityToXP, exports.setElligibilityToELO = _a.setElligibilityToELO;
exports.default = exports.afterSlice.reducer;
//# sourceMappingURL=AfterGameStore.js.map