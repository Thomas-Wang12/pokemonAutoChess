"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameStageInfo;
exports.StagePath = StagePath;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const pve_stages_1 = require("../../../../../models/pve-stages");
const types_1 = require("../../../../../types");
const Config_1 = require("../../../../../types/Config");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Weather_1 = require("../../../../../types/enum/Weather");
const number_1 = require("../../../../../utils/number");
const hooks_1 = require("../../../hooks");
const avatar_1 = require("../../../../../utils/avatar");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const game_timer_bar_1 = __importDefault(require("./game-timer-bar"));
const Dungeon_1 = require("../../../../../types/enum/Dungeon");
require("./game-stage-info.css");
function GameStageInfo() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const phase = (0, hooks_1.useAppSelector)((state) => state.game.phase);
    const weather = (0, hooks_1.useAppSelector)((state) => state.game.weather);
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectCurrentPlayer);
    const stageLevel = (0, hooks_1.useAppSelector)((state) => state.game.stageLevel);
    if (!currentPlayer)
        return null;
    const isPVE = stageLevel in pve_stages_1.PVEStages;
    const name = currentPlayer.name;
    const title = currentPlayer.title;
    const avatar = currentPlayer.avatar;
    const opponentName = phase === Game_1.GamePhaseState.FIGHT ? currentPlayer.opponentName : "";
    const opponentAvatar = phase === Game_1.GamePhaseState.FIGHT ? currentPlayer.opponentAvatar : "";
    const opponentTitle = phase === Game_1.GamePhaseState.FIGHT ? currentPlayer.opponentTitle : "";
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { id: "game-stage-info", className: "my-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stage-information", "data-tooltip-id": "detail-stage", children: [react_dom_1.default.createPortal((0, jsx_runtime_1.jsxs)(react_tooltip_1.Tooltip, { id: "detail-stage", className: "custom-theme-tooltip", place: "bottom", children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsxs)("span", { className: "help", children: [t("pve_stages"), ":"] }), " ", Object.keys(pve_stages_1.PVEStages).join(", ")] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsxs)("span", { className: "help", children: [t("carousel_stages"), ":"] }), " ", Config_1.ItemCarouselStages.join(", ")] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsxs)("span", { className: "help", children: [t("additional_picks"), ":"] }), " ", t("stages"), " ", Config_1.AdditionalPicksStages.join(t("and"))] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsxs)("span", { className: "help", children: [t("unique_picks"), ":"] }), " ", t("stages"), " ", Config_1.PortalCarouselStages.join(t("and"))] })] }), document.body), (0, jsx_runtime_1.jsxs)("p", { children: [t("stage"), " ", stageLevel] })] }), opponentName === "" && (0, jsx_runtime_1.jsx)(StagePath, {}), (0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("players-information", {
                        "has-opponent": opponentName != ""
                    }), children: [(0, jsx_runtime_1.jsxs)("div", { className: "player-information", children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getAvatarSrc)(avatar), className: "pokemon-portrait" }), title && (0, jsx_runtime_1.jsx)("p", { className: "player-title", children: t(`title.${title}`) }), (0, jsx_runtime_1.jsx)("p", { className: "player-name", children: name })] }), opponentName && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "vs" }), (0, jsx_runtime_1.jsxs)("div", { className: "player-information", children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getAvatarSrc)(opponentAvatar), className: "pokemon-portrait" }), opponentTitle && ((0, jsx_runtime_1.jsx)("p", { className: "player-title", children: t(`title.${opponentTitle}`) })), (0, jsx_runtime_1.jsx)("p", { className: "player-name", children: isPVE ? t(opponentName) : opponentName })] })] }))] }), currentPlayer.map && ((0, jsx_runtime_1.jsxs)("div", { className: "map-information", "data-tooltip-id": "detail-map", children: [react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-map", className: "custom-theme-tooltip", place: "bottom", children: (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignContent: "center" }, children: [Dungeon_1.DungeonDetails[currentPlayer.map].synergies.map((synergy) => ((0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: synergy }, "map_type_" + synergy))), (0, jsx_runtime_1.jsx)("p", { children: t(`map.${currentPlayer.map}`) })] }) }), document.body), (0, jsx_runtime_1.jsx)("img", { src: `/assets/ui/map.svg` })] })), opponentName != "" && ((0, jsx_runtime_1.jsxs)("div", { className: "weather-information", "data-tooltip-id": "detail-weather", children: [react_dom_1.default.createPortal((0, jsx_runtime_1.jsxs)(react_tooltip_1.Tooltip, { id: "detail-weather", className: "custom-theme-tooltip", place: "bottom", children: [(0, jsx_runtime_1.jsxs)("span", { style: { verticalAlign: "middle" }, children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Weather_1.SynergyAssociatedToWeather.get(weather) }), t(`weather.${weather}`)] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`weather_description.${weather}`)) })] }), document.body), (0, jsx_runtime_1.jsx)("img", { src: `/assets/icons/weather/${weather.toLowerCase()}.svg` })] })), (0, jsx_runtime_1.jsx)(game_timer_bar_1.default, {})] }) }));
}
function StagePath() {
    var _a, _b, _c;
    const { t } = (0, react_i18next_1.useTranslation)();
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectCurrentPlayer);
    const history = [...((_a = currentPlayer === null || currentPlayer === void 0 ? void 0 : currentPlayer.history) !== null && _a !== void 0 ? _a : [])];
    const phase = (0, hooks_1.useAppSelector)((state) => state.game.phase);
    const stageLevel = (0, hooks_1.useAppSelector)((state) => state.game.stageLevel);
    const startStage = (0, number_1.min)(1)(stageLevel - 3);
    let level = startStage;
    let path = [];
    let currentLevelPathIndex;
    while (level < stageLevel + 5) {
        let record;
        if (level < stageLevel && history) {
            const historyIndex = level < 5 ? level - 1 : 5 + level - stageLevel;
            if (historyIndex in history) {
                record = history.at(level < 5 ? level - 1 : level - stageLevel);
            }
        }
        if (Config_1.ItemCarouselStages.includes(level)) {
            path.push({
                level,
                icon: "/assets/ui/carousel.svg",
                title: t("carousel")
            });
            if (level === stageLevel && phase === Game_1.GamePhaseState.MINIGAME) {
                currentLevelPathIndex = path.length - 1;
            }
        }
        if (Config_1.PortalCarouselStages.includes(level)) {
            path.push({
                level,
                icon: "/assets/ui/mythical.svg",
                title: t("unique_pick")
            });
            if (level === stageLevel && phase === Game_1.GamePhaseState.PICK) {
                currentLevelPathIndex = path.length - 1;
            }
        }
        else if (Config_1.AdditionalPicksStages.includes(level)) {
            path.push({
                level,
                icon: "/assets/ui/additional-pick.svg",
                title: t("additional_pick")
            });
            if (level === stageLevel && phase === Game_1.GamePhaseState.PICK) {
                currentLevelPathIndex = path.length - 1;
            }
        }
        const pveStage = pve_stages_1.PVEStages[level];
        if (pveStage) {
            path.push({
                level,
                icon: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pveStage.avatar], false, types_1.Emotion.NORMAL),
                title: t((_b = record === null || record === void 0 ? void 0 : record.name) !== null && _b !== void 0 ? _b : pveStage.name),
                result: record === null || record === void 0 ? void 0 : record.result
            });
            if (level === stageLevel && currentLevelPathIndex === undefined) {
                currentLevelPathIndex = path.length - 1;
            }
        }
        else {
            path.push({
                level,
                icon: (record === null || record === void 0 ? void 0 : record.avatar)
                    ? (0, avatar_1.getAvatarSrc)(record.avatar)
                    : "/assets/ui/battle.svg",
                title: (_c = record === null || record === void 0 ? void 0 : record.name) !== null && _c !== void 0 ? _c : t("fight"),
                result: record === null || record === void 0 ? void 0 : record.result
            });
            if (level === stageLevel && currentLevelPathIndex === undefined) {
                currentLevelPathIndex = path.length - 1;
            }
        }
        level++;
    }
    const startIndex = (0, number_1.min)(0)(currentLevelPathIndex - 3);
    path = path.slice(startIndex, startIndex + 7);
    currentLevelPathIndex -= startIndex;
    return ((0, jsx_runtime_1.jsx)("div", { className: "game-stage-path", children: path.map((step, i) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("stage-path", {
                        current: currentLevelPathIndex === i,
                        defeat: step.result === Game_1.BattleResult.DEFEAT,
                        victory: step.result === Game_1.BattleResult.WIN,
                        draw: step.result === Game_1.BattleResult.DRAW
                    }), "data-tooltip-id": "stage-path-" + i, children: [react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "stage-path-" + i, className: "custom-theme-tooltip", place: "bottom", children: step.title }), document.body), (0, jsx_runtime_1.jsx)("img", { src: step.icon })] }), i < path.length - 1 && (0, jsx_runtime_1.jsx)("span", { children: "\u2015" })] }, "stage-path-" + i))) }));
}
//# sourceMappingURL=game-stage-info.js.map