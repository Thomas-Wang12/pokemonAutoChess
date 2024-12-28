"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distanceC = distanceC;
exports.distanceM = distanceM;
exports.distanceE = distanceE;
function distanceC(x0, y0, x1, y1) {
    return Math.max(Math.abs(y0 - y1), Math.abs(x0 - x1));
}
function distanceM(x0, y0, x1, y1) {
    return Math.abs(x1 - x0) + Math.abs(y1 - y0);
}
function distanceE(x0, y0, x1, y1) {
    return Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2);
}
//# sourceMappingURL=distance.js.map