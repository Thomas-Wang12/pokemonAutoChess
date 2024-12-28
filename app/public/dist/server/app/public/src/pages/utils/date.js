"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
exports.formatTimeout = formatTimeout;
const i18n_1 = __importDefault(require("../../i18n"));
function formatDate(date, params = {}) {
    if (typeof date === "number")
        date = new Date(date);
    try {
        return new Intl.DateTimeFormat(i18n_1.default.language, Object.assign({ dateStyle: "short", timeStyle: "short" }, params)).format(date);
    }
    catch (err) {
        return "Invalid Date";
    }
}
function formatTimeout(s) {
    const h = Math.floor(s / 3600);
    s -= h * 3600;
    const m = Math.floor(s / 60);
    s -= m * 60;
    return `${h > 0 ? h + "h" : ""}${("00" + m).slice(-2)}:${("00" + s).slice(-2)}`;
}
//# sourceMappingURL=date.js.map