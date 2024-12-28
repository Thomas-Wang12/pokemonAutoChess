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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preferences = void 0;
exports.loadPreferences = loadPreferences;
exports.savePreferences = savePreferences;
const phaser_1 = __importDefault(require("phaser"));
const store_1 = require("./pages/utils/store");
const defaultPreferences = {
    musicVolume: 30,
    sfxVolume: 30,
    playInBackground: false,
    showDpsMeter: false,
    showDetailsOnHover: false,
    showDamageNumbers: true,
    disableAnimatedTilemap: false,
    renderer: phaser_1.default.AUTO,
    keybindings: {
        sell: "E",
        buy_xp: "F",
        refresh: "D",
        lock: "R",
        switch: "Space",
        emote: "A"
    }
};
exports.preferences = loadPreferences();
function loadPreferences() {
    var _a;
    if (store_1.localStore.has(store_1.LocalStoreKeys.PREFERENCES)) {
        return Object.assign(Object.assign(Object.assign({}, defaultPreferences), store_1.localStore.get(store_1.LocalStoreKeys.PREFERENCES)), { keybindings: Object.assign(Object.assign({}, defaultPreferences.keybindings), (_a = store_1.localStore.get(store_1.LocalStoreKeys.PREFERENCES)) === null || _a === void 0 ? void 0 : _a.keybindings) });
    }
    else {
        return defaultPreferences;
    }
}
function savePreferences(modified) {
    return __awaiter(this, void 0, void 0, function* () {
        store_1.localStore.put(store_1.LocalStoreKeys.PREFERENCES, modified);
        Object.assign(exports.preferences, modified);
    });
}
//# sourceMappingURL=preferences.js.map