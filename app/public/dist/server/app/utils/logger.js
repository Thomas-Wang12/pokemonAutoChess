"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const loglevel_1 = __importDefault(require("loglevel"));
loglevel_1.default.setDefaultLevel("debug");
exports.logger = loglevel_1.default;
//# sourceMappingURL=logger.js.map