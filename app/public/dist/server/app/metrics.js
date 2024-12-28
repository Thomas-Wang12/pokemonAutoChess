"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeMetrics = initializeMetrics;
const pm2_prom_module_client_1 = require("pm2-prom-module-client");
const prom_client_1 = __importDefault(require("prom-client"));
function initializeMetrics() {
    const collectDefaultMetrics = prom_client_1.default.collectDefaultMetrics;
    const Registry = prom_client_1.default.Registry;
    const register = new Registry();
    collectDefaultMetrics({ register });
    (0, pm2_prom_module_client_1.initMetrics)(register);
}
//# sourceMappingURL=metrics.js.map