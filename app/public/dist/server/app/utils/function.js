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
exports.repeat = void 0;
exports.debounce = debounce;
exports.throttle = throttle;
exports.block = block;
function debounce(fn, delayInMs = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delayInMs);
    };
}
function throttle(fn, delayInMs) {
    let inThrottle;
    let lastResult;
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const context = this;
            if (!inThrottle) {
                inThrottle = true;
                const mightBePromise = fn.apply(context, args);
                setTimeout(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield mightBePromise;
                        inThrottle = false;
                    });
                }, delayInMs);
                lastResult = yield mightBePromise;
            }
            return lastResult;
        });
    };
}
function block(fn) {
    let existingPromise = null;
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (existingPromise) {
                return existingPromise;
            }
            existingPromise = fn.apply(this, args);
            const result = yield existingPromise;
            existingPromise = null;
            return result;
        });
    };
}
const repeat = (n) => (cb) => {
    for (let i = 0; i < n; i++) {
        cb(i);
    }
};
exports.repeat = repeat;
//# sourceMappingURL=function.js.map