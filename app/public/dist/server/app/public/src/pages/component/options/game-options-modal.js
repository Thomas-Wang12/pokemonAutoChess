"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameOptionsModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const Language_1 = require("../../../../../types/enum/Language");
const locales_1 = require("../../../../dist/client/locales");
const hooks_1 = require("../../../hooks");
const preferences_1 = require("../../../preferences");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const game_1 = require("../../game");
const checkbox_1 = require("../checkbox/checkbox");
const keybind_info_1 = __importDefault(require("./keybind-info"));
const game_files_1 = __importDefault(require("./game-files"));
require("./game-options-modal.css");
const modal_1 = require("../modal/modal");
function GameOptionsModal(props) {
    const [preferences, setPreferences] = (0, react_1.useState)(preferences_1.preferences);
    const { t, i18n } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const language = i18n.language;
    const renderers = {
        [Phaser.AUTO]: "Auto",
        [Phaser.WEBGL]: "WebGL",
        [Phaser.CANVAS]: "Canvas"
    };
    function changePreference(key, value) {
        setPreferences(Object.assign(Object.assign({}, preferences), { [key]: value }));
        (0, preferences_1.savePreferences)({ [key]: value });
        if (key === "musicVolume" && typeof value === "number") {
            const gameScene = (0, game_1.getGameScene)();
            if (gameScene && gameScene.music) {
                gameScene.music.setVolume(value / 100);
            }
        }
    }
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.show, onClose: props.hideModal, header: t("options"), className: "game-options-modal anchor-top", children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("sound") }, "sound"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("interface") }, "interface"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("hotkeys") }, "hotkeys"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("game_files") }, "files")] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [(0, jsx_runtime_1.jsxs)("label", { style: { width: "100%" }, children: [t("music_volume"), ": ", preferences.musicVolume, " %", (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "100", value: preferences.musicVolume, onInput: (e) => changePreference("musicVolume", Number.parseFloat(e.target.value)) })] }), (0, jsx_runtime_1.jsxs)("label", { style: { width: "100%" }, children: [t("sfx_volume"), ": ", preferences.sfxVolume, " %", (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "100", value: preferences.sfxVolume, onInput: (e) => changePreference("sfxVolume", Number.parseFloat(e.target.value)) })] }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.playInBackground, onToggle: (checked) => changePreference("playInBackground", checked), label: t("play_music_in_background") }) })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [props.page === "main_lobby" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("language"), ":\u00A0", (0, jsx_runtime_1.jsx)("select", { className: "is-light", value: language, onChange: (e) => {
                                                dispatch((0, NetworkStore_1.selectLanguage)(e.target.value));
                                                i18n.changeLanguage(e.target.value);
                                            }, children: Object.keys(Language_1.Language).map((lng) => ((0, jsx_runtime_1.jsx)("option", { value: lng, children: locales_1.LanguageNames[lng] }, lng))) })] }), (0, jsx_runtime_1.jsxs)("p", { className: "info", children: [t("community_translations"), " ", (0, jsx_runtime_1.jsx)("a", { href: "https://discord.com/channels/737230355039387749/1134014553529790464", target: "_blank", children: "Discord" })] })] })), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.showDetailsOnHover, onToggle: (checked) => changePreference("showDetailsOnHover", checked), label: t("show_details_on_hover") }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.showDamageNumbers, onToggle: (checked) => changePreference("showDamageNumbers", checked), label: t("show_damage_numbers") }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.disableAnimatedTilemap, onToggle: (checked) => {
                                    changePreference("disableAnimatedTilemap", checked);
                                    const gameScene = (0, game_1.getGameScene)();
                                    if (gameScene) {
                                        const animatedTiles = (gameScene === null || gameScene === void 0 ? void 0 : gameScene.sys).animatedTiles;
                                        if (checked)
                                            animatedTiles.pause();
                                        else
                                            animatedTiles.resume();
                                    }
                                }, label: t("disable_animated_tilemap") }) }), props.page === "main_lobby" && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("label", { children: [t("renderer"), ":\u00A0", (0, jsx_runtime_1.jsx)("select", { className: "is-light", value: preferences.renderer, onChange: (e) => {
                                            changePreference("renderer", e.target.value);
                                        }, children: Object.keys(renderers).map((r) => ((0, jsx_runtime_1.jsx)("option", { value: r, children: renderers[r] }, r))) }), (0, jsx_runtime_1.jsx)("p", { className: "info", children: t("renderer_info") })] }) }))] }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(keybind_info_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(game_files_1.default, {}) })] }) }));
}
//# sourceMappingURL=game-options-modal.js.map