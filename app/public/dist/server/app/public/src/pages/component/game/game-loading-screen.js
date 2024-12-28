"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameLoadingScreen;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const hooks_1 = require("../../../hooks");
const game_1 = require("../../game");
const game_player_loading_1 = __importDefault(require("./game-player-loading"));
const random_1 = require("../../../../../utils/random");
require("./game-loading-screen.css");
function GameLoadingScreen(props) {
    var _a, _b, _c;
    const { t } = (0, react_i18next_1.useTranslation)();
    const players = (0, hooks_1.useAppSelector)((state) => state.game.players);
    const currentPlayerId = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const progress = (_a = players.find((p) => p.id === currentPlayerId)) === null || _a === void 0 ? void 0 : _a.loadingProgress;
    const statusMessage = (_c = (_b = (0, game_1.getGameScene)()) === null || _b === void 0 ? void 0 : _b.loadingManager) === null || _c === void 0 ? void 0 : _c.statusMessage;
    const [toAuth, setToAuth] = (0, react_1.useState)(false);
    const [hint, setHint] = (0, react_1.useState)("tab_out");
    (0, react_1.useEffect)(() => {
        const loadingHints = [
            "tab_out",
            ...(0, random_1.shuffleArray)([
                "max_loading_time",
                "disconnection_time",
                "translation_project",
                "discord",
                "bug_report",
                "moderation",
                "berry_tree",
                "spriters",
                "wiki",
                "avatar"
            ])
        ];
        const interval = setInterval(() => {
            setHint(hint => loadingHints[(loadingHints.indexOf(hint) + 1) % loadingHints.length]);
        }, 20000);
        return () => clearInterval(interval);
    }, []);
    if (toAuth) {
        return (0, jsx_runtime_1.jsx)(react_router_1.Navigate, { to: "/" });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-loading-screen", children: [(0, jsx_runtime_1.jsx)("ul", { className: "game-players-loading", children: players.map((p, i) => {
                    const x = (0.2 + (i % 4) * 0.2) * 100;
                    const y = (i < 4 ? 0.2 : 0.8) * 100;
                    return ((0, jsx_runtime_1.jsx)("li", { style: { position: "absolute", top: `${y}%`, left: `${x}%` }, children: (0, jsx_runtime_1.jsx)(game_player_loading_1.default, { player: p }) }, "game-player-loading-" + p.id));
                }) }), (0, jsx_runtime_1.jsxs)("div", { className: "loading-bar", children: [(0, jsx_runtime_1.jsx)("progress", { className: "my-progress", value: progress, max: "100" }), (0, jsx_runtime_1.jsx)("p", { id: "status-message", children: statusMessage }), props.connectError && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: "error", children: props.connectError }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setToAuth(true), className: "bubbly blue", children: t("back_to_lobby") })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "loading-hint", children: [(0, jsx_runtime_1.jsx)("div", { className: "speech-bubble", children: t("loading_hints." + hint) }), (0, jsx_runtime_1.jsx)("img", { src: "/assets/loading_hints/" + hint + ".webp" })] })] }));
}
//# sourceMappingURL=game-loading-screen.js.map