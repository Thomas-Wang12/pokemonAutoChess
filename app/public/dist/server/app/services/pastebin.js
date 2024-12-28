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
exports.pastebinService = void 0;
const api_1 = require("pastebin-ts/dist/api");
let pastebin;
if (process.env.PASTEBIN_API_DEV_KEY &&
    process.env.PASTEBIN_API_USERNAME &&
    process.env.PASTEBIN_API_DEV_KEY) {
    pastebin = new api_1.PastebinAPI({
        api_dev_key: process.env.PASTEBIN_API_DEV_KEY,
        api_user_name: process.env.PASTEBIN_API_USERNAME,
        api_user_password: process.env.PASTEBIN_API_PASSWORD
    });
}
exports.pastebinService = {
    createPaste(title_1, text_1) {
        return __awaiter(this, arguments, void 0, function* (title, text, format = "json") {
            return pastebin === null || pastebin === void 0 ? void 0 : pastebin.createPaste({
                text,
                title,
                format
            });
        });
    },
    getPaste(id, raw) {
        return pastebin === null || pastebin === void 0 ? void 0 : pastebin.getPaste(id, raw);
    }
};
//# sourceMappingURL=pastebin.js.map