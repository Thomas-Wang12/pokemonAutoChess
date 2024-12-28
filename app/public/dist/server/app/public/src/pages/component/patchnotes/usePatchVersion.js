"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePatchVersion = usePatchVersion;
const react_1 = require("react");
const package_json_1 = __importDefault(require("../../../../../../package.json"));
const store_1 = require("../../utils/store");
function usePatchVersion() {
    const latestVersion = package_json_1.default.version;
    const [lastVersionChecked, setLastVersionChecked] = (0, react_1.useState)(store_1.localStore.get(store_1.LocalStoreKeys.LAST_PATCH_READ));
    const updateVersionChecked = () => {
        store_1.localStore.set(store_1.LocalStoreKeys.LAST_PATCH_READ, latestVersion);
        setLastVersionChecked(latestVersion);
    };
    return {
        latestVersion,
        lastVersionChecked,
        isNewPatch: !lastVersionChecked || latestVersion > lastVersionChecked,
        updateVersionChecked
    };
}
//# sourceMappingURL=usePatchVersion.js.map