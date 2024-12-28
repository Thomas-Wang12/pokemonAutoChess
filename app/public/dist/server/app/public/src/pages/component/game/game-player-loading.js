"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePlayerLoadingBar;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_circular_progressbar_1 = require("react-circular-progressbar");
require("react-circular-progressbar/dist/styles.css");
const react_i18next_1 = require("react-i18next");
const avatar_1 = require("../../../../../utils/avatar");
const game_1 = require("../../game");
const jsx_1 = require("../../utils/jsx");
require("./game-player-loading.css");
function GamePlayerLoadingBar(props) {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const selfPlayerId = (_a = (0, game_1.getGameScene)()) === null || _a === void 0 ? void 0 : _a.uid;
    const loadingPercent = props.player.loadingProgress;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("game-player-loading", {
            self: selfPlayerId === props.player.id
        }), children: [(0, jsx_runtime_1.jsx)("div", { className: "game-player-loading-icon", style: {
                    backgroundImage: `url('${(0, avatar_1.getAvatarSrc)(props.player.avatar)}')`
                }, children: (0, jsx_runtime_1.jsx)(react_circular_progressbar_1.CircularProgressbar, { value: loadingPercent, styles: (0, react_circular_progressbar_1.buildStyles)({
                        pathTransitionDuration: 0
                    }) }) }), (0, jsx_runtime_1.jsx)("p", { style: { fontWeight: "500" }, children: props.player.name }), (0, jsx_runtime_1.jsxs)("p", { children: [t("elo"), ": ", (0, jsx_runtime_1.jsx)("b", { children: props.player.elo })] })] }));
}
//# sourceMappingURL=game-player-loading.js.map