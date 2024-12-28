"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanProfanity = cleanProfanity;
const profanity_blacklist_json_1 = __importDefault(require("./profanity-blacklist.json"));
const WORD_BOUNDARY_BEFORE = `(?<=[\\s,.:;!?"']|^)`;
const WORD_BOUNDARY_AFTER = `(?=[\\s,.:;!?"']|$)`;
const blacklistRegex = new RegExp(`${WORD_BOUNDARY_BEFORE}(${profanity_blacklist_json_1.default.join("|")})${WORD_BOUNDARY_AFTER}`, "gim");
function cleanProfanity(string) {
    try {
        return string.replace(blacklistRegex, "koffing");
    }
    catch (error) {
        console.error(error);
        return "error";
    }
}
//# sourceMappingURL=profanity-filter.js.map