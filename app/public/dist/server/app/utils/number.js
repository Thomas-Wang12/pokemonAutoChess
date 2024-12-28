"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fpsToDuration = exports.average = exports.roundToNDigits = exports.clamp = exports.max = exports.min = void 0;
exports.calcAngleDegrees = calcAngleDegrees;
const min = (minimum) => (value) => Math.max(minimum, value);
exports.min = min;
const max = (maximum) => (value) => Math.min(maximum, value);
exports.max = max;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
exports.clamp = clamp;
const roundToNDigits = (value, nbDigits = 2) => parseFloat(value.toFixed(nbDigits));
exports.roundToNDigits = roundToNDigits;
const average = (...values) => {
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
};
exports.average = average;
const fpsToDuration = (targetFramesPerSecond) => (nbFrames) => Math.round(nbFrames * (1000 / targetFramesPerSecond));
exports.fpsToDuration = fpsToDuration;
function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
}
//# sourceMappingURL=number.js.map