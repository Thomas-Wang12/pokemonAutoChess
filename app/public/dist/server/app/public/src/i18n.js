"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
const i18next_http_backend_1 = __importDefault(require("i18next-http-backend"));
const package_json_1 = __importDefault(require("../../../package.json"));
i18next_1.default
    .use(i18next_http_backend_1.default)
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next)
    .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV !== "production",
    backend: {
        loadPath(lngs, namespaces) {
            return `locales/{{lng}}/{{ns}}.json?v=${package_json_1.default.version}`;
        }
    },
    interpolation: {
        escapeValue: false
    }
});
i18next_1.default.on("languageChanged", (lang) => (document.documentElement.lang = lang));
exports.default = i18next_1.default;
//# sourceMappingURL=i18n.js.map