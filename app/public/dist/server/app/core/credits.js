"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCredits = useCredits;
const react_1 = require("react");
const types_1 = require("../types");
function useCredits() {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [creditsNames, setCreditsNames] = (0, react_1.useState)();
    const [spriteCredits, setSpriteCredits] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        setLoading(true);
        Promise.all([fetchCreditsNames(), fetchSpriteCredits()])
            .then(([creditsNames, spriteCredits]) => {
            setCreditsNames(creditsNames);
            setSpriteCredits(spriteCredits);
        })
            .finally(() => setLoading(false));
    }, []);
    return {
        loading,
        creditsNames,
        spriteCredits
    };
}
let creditsNamesRequest;
function fetchCreditsNames() {
    if (!creditsNamesRequest) {
        creditsNamesRequest = fetch(`${types_1.CDN_URL}/credit_names.txt`)
            .then((res) => res.text())
            .then((text) => text.split("\n"))
            .then((lines) => lines.slice(1).map((line) => {
            const [Name, Discord, Contact] = line.split("\t");
            const credit = { Name, Discord, Contact };
            return credit;
        }));
    }
    return creditsNamesRequest;
}
let spriteCreditsRequest;
function fetchSpriteCredits() {
    if (!spriteCreditsRequest) {
        spriteCreditsRequest = Promise.resolve().then(() => __importStar(require("../models/precomputed/credits.json"))).then((m) => m.default);
    }
    return spriteCreditsRequest;
}
//# sourceMappingURL=credits.js.map