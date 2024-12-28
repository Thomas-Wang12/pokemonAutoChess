"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameFiles;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const preloading_scene_1 = require("../../../game/scenes/preloading-scene");
require("./game-files.css");
function GameFiles() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [version, setVersion] = (0, react_1.useState)("");
    const [cached, setCached] = (0, react_1.useState)(false);
    const askingSW = (0, react_1.useRef)(false);
    const preloadingScene = (0, react_1.useRef)();
    const [preloadingMessage, setPreloadingMessage] = (0, react_1.useState)(t("preloading_start"));
    const [preloading, setPreloading] = (0, react_1.useState)(false);
    const [preloadingPc, setPreloadingPc] = (0, react_1.useState)(0);
    const gameRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (navigator.serviceWorker.controller != null &&
            !askingSW.current &&
            version === "") {
            askingSW.current = true;
            navigator.serviceWorker.controller.postMessage({
                type: "CACHE_STATUS"
            });
            navigator.serviceWorker.onmessage = (event) => {
                if (event.data && event.data.type === "CACHE_STATUS") {
                    setVersion(event.data.version);
                    setCached(event.data.cached);
                    askingSW.current = false;
                }
            };
        }
    }, []);
    function deleteCache() {
        return __awaiter(this, void 0, void 0, function* () {
            caches.delete(`CACHE v${version}`);
            setCached(false);
        });
    }
    function preloadFiles() {
        if (!preloading) {
            setPreloading(true);
            preloadingScene.current = new preloading_scene_1.PreloadingScene((pc) => {
                var _a, _b, _c;
                setPreloadingPc(pc * 100);
                setPreloadingMessage((_c = (_b = (_a = preloadingScene.current) === null || _a === void 0 ? void 0 : _a.loadingManager) === null || _b === void 0 ? void 0 : _b.statusMessage) !== null && _c !== void 0 ? _c : "");
            }, () => {
                var _a;
                setPreloadingMessage(t("finished_preloading"));
                (_a = gameRef.current) === null || _a === void 0 ? void 0 : _a.destroy(true);
                gameRef.current = null;
                setCached(true);
                setPreloading(false);
            });
            gameRef.current = new Phaser.Game({
                type: Phaser.AUTO,
                scene: [preloadingScene.current],
                backgroundColor: "#000000"
            });
        }
    }
    return ((0, jsx_runtime_1.jsxs)("div", { id: "game-files-tab", children: [(0, jsx_runtime_1.jsxs)("p", { children: [t("game_version"), ": ", version] }), (0, jsx_runtime_1.jsxs)("p", { children: [t("game_cached"), ":", " ", (0, jsx_runtime_1.jsx)("span", { style: { color: cached ? "lime" : "red" }, children: cached ? t("yes") : t("no") })] }), !cached && !preloading && ((0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: preloadFiles, children: t("download_game_files") })), cached && !preloading && ((0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: deleteCache, children: t("delete_cache") })), preloading && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("progress", { className: "my-progress", value: preloadingPc, max: 100 }), (0, jsx_runtime_1.jsx)("p", { children: preloadingMessage })] }))] }));
}
//# sourceMappingURL=game-files.js.map