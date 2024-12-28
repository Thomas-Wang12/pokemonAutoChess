"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePlayer;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_circular_progressbar_1 = require("react-circular-progressbar");
const react_tooltip_1 = require("react-tooltip");
const hooks_1 = require("../../../hooks");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
const game_player_detail_1 = __importDefault(require("./game-player-detail"));
require("react-circular-progressbar/dist/styles.css");
require("./game-player.css");
function GamePlayer(props) {
    const spectatedPlayerId = (0, hooks_1.useAppSelector)((state) => state.game.currentPlayerId);
    const selfPlayerId = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    function playerClick() {
        props.click(props.player.id);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            top: `${1 + props.index * 12.5}%`,
            backgroundImage: `url('${(0, avatar_1.getAvatarSrc)(props.player.avatar)}')`
        }, className: (0, jsx_1.cc)("game-player", {
            spectated: spectatedPlayerId === props.player.id,
            self: selfPlayerId === props.player.id,
            dead: props.player.life <= 0
        }), onClick: playerClick, "data-tooltip-id": "detail-" + props.player.id, children: [(0, jsx_runtime_1.jsx)(react_circular_progressbar_1.CircularProgressbarWithChildren, { value: props.player.life }), (0, jsx_runtime_1.jsx)("div", { className: "my-container life-text", children: props.player.life }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-" + props.player.id, className: "custom-theme-tooltip", place: "left", "data-tooltip-offset": { left: 30, bottom: props.index === 0 ? 50 : 0 }, children: (0, jsx_runtime_1.jsx)(game_player_detail_1.default, { player: props.player }) })] }));
}
//# sourceMappingURL=game-player.js.map