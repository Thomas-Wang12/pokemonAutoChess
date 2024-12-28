"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIREBASE_CONFIG = void 0;
exports.transformCoordinate = transformCoordinate;
exports.transformAttackCoordinate = transformAttackCoordinate;
exports.transformMiniGameXCoordinate = transformMiniGameXCoordinate;
exports.transformMiniGameYCoordinate = transformMiniGameYCoordinate;
exports.FIREBASE_CONFIG = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
function transformCoordinate(x, y) {
    if (y === 0) {
        return [28 * 24 + 96 * x, 808];
    }
    else {
        return [28 * 24 + 96 * x, 760 - 96 * y];
    }
}
function transformAttackCoordinate(x, y, flip) {
    return [28 * 24 + 96 * x, flip ? 184 + 96 * y : 664 - 96 * y];
}
function transformMiniGameXCoordinate(x) {
    return 28 * 24 + x;
}
function transformMiniGameYCoordinate(y) {
    return 664 - y;
}
//# sourceMappingURL=utils.js.map