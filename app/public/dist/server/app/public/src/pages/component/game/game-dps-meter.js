"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameDpsMeter;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const hooks_1 = require("../../../hooks");
const preferences_1 = require("../../../preferences");
const avatar_1 = require("../../../../../utils/avatar");
const game_player_dps_meter_1 = __importDefault(require("./game-player-dps-meter"));
const game_player_dps_taken_meter_1 = __importDefault(require("./game-player-dps-taken-meter"));
const game_player_hps_meter_1 = __importDefault(require("./game-player-hps-meter"));
const Game_1 = require("../../../../../types/enum/Game");
const pve_stages_1 = require("../../../../../models/pve-stages");
require("./game-dps-meter.css");
function GameDpsMeter() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectCurrentPlayer);
    const team = (0, hooks_1.useAppSelector)((state) => state.game.currentTeam);
    const stageLevel = (0, hooks_1.useAppSelector)((state) => state.game.stageLevel);
    const phase = (0, hooks_1.useAppSelector)((state) => state.game.phase);
    const blueDpsMeter = (0, hooks_1.useAppSelector)((state) => state.game.blueDpsMeter);
    const redDpsMeter = (0, hooks_1.useAppSelector)((state) => state.game.redDpsMeter);
    const myDpsMeter = team === Game_1.Team.BLUE_TEAM ? blueDpsMeter : redDpsMeter;
    const opponentDpsMeter = team === Game_1.Team.BLUE_TEAM ? redDpsMeter : blueDpsMeter;
    const [isOpen, setOpen] = (0, react_1.useState)(preferences_1.preferences.showDpsMeter);
    if (!currentPlayer)
        return null;
    const isPVE = phase === Game_1.GamePhaseState.FIGHT ? stageLevel in pve_stages_1.PVEStages : (stageLevel - 1) in pve_stages_1.PVEStages;
    const name = currentPlayer.name;
    const avatar = currentPlayer.avatar;
    const opponentName = currentPlayer.opponentName;
    const opponentAvatar = currentPlayer.opponentAvatar;
    function toggleOpen() {
        setOpen(!isOpen);
        (0, preferences_1.savePreferences)({ showDpsMeter: !isOpen });
    }
    if (opponentAvatar == "") {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { id: "game-dps-icon", className: "my-box clickable", title: `${isOpen ? "Hide" : "Show"} battle stats`, onClick: toggleOpen, children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/dpsmeter.svg" }) }), isOpen && (0, jsx_runtime_1.jsxs)("div", { className: "my-container hidden-scrollable game-dps-meter", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getAvatarSrc)(avatar), className: "pokemon-portrait" }), (0, jsx_runtime_1.jsx)("p", { children: name })] }), (0, jsx_runtime_1.jsx)("h2", { children: "vs" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getAvatarSrc)(opponentAvatar), className: "pokemon-portrait" }), (0, jsx_runtime_1.jsx)("p", { children: isPVE ? t(opponentName) : opponentName })] })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/icons/ATK.png", title: t("damage_dealt"), alt: t("damage_dealt") }) }, "damage_dealt"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/icons/SHIELD.png", title: t("damage_blocked"), alt: t("damage_blocked") }) }, "damage_blocked"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/icons/HP.png", title: t("heal_shield"), alt: t("heal_shield") }) }, "heal")] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [(0, jsx_runtime_1.jsx)("p", { children: t("damage_dealt") }), (0, jsx_runtime_1.jsx)(game_player_dps_meter_1.default, { dpsMeter: myDpsMeter }), (0, jsx_runtime_1.jsx)(game_player_dps_meter_1.default, { dpsMeter: opponentDpsMeter })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [(0, jsx_runtime_1.jsx)("p", { children: t("damage_blocked") }), (0, jsx_runtime_1.jsx)(game_player_dps_taken_meter_1.default, { dpsMeter: myDpsMeter }), (0, jsx_runtime_1.jsx)(game_player_dps_taken_meter_1.default, { dpsMeter: opponentDpsMeter })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [(0, jsx_runtime_1.jsx)("p", { children: t("heal_shield") }), (0, jsx_runtime_1.jsx)(game_player_hps_meter_1.default, { dpsMeter: myDpsMeter }), (0, jsx_runtime_1.jsx)(game_player_hps_meter_1.default, { dpsMeter: opponentDpsMeter })] })] })] })] }));
}
//# sourceMappingURL=game-dps-meter.js.map