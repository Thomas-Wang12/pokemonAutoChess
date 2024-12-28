"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCurrentPlayer = exports.useAppSelector = exports.useAppDispatch = void 0;
const react_redux_1 = require("react-redux");
const useAppDispatch = () => (0, react_redux_1.useDispatch)();
exports.useAppDispatch = useAppDispatch;
exports.useAppSelector = react_redux_1.useSelector;
const selectCurrentPlayer = (state) => state.game.players.find((p) => p.id === state.game.currentPlayerId);
exports.selectCurrentPlayer = selectCurrentPlayer;
//# sourceMappingURL=hooks.js.map