"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EloEngine = void 0;
class EloEngine {
    constructor() {
        this.k = 32;
    }
    getExpected(a, b) {
        return 1 / (1 + Math.pow(10, (b - a) / 400));
    }
    updateRating(expected, actual, current) {
        return Math.round(current + this.k * (actual - expected));
    }
}
exports.EloEngine = EloEngine;
//# sourceMappingURL=elo-engine.js.map