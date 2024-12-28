"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconRegExp = void 0;
exports.addIconsToDescription = addIconsToDescription;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = __importDefault(require("react"));
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const Status_1 = require("../../../../types/enum/Status");
const Synergy_1 = require("../../../../types/enum/Synergy");
const Weather_1 = require("../../../../types/enum/Weather");
const number_1 = require("../../../../utils/number");
const synergy_icon_1 = __importDefault(require("../component/icons/synergy-icon"));
const jsx_1 = require("./jsx");
const DamageTypes = Object.keys(Game_1.Damage);
const Stats = Object.keys(Game_1.Stat);
const Statuses = Object.keys(Status_1.Status);
const Weathers = Object.keys(Weather_1.Weather);
const Synergies = Object.keys(Synergy_1.Synergy);
const Items = Object.keys(Item_1.Item);
exports.iconRegExp = new RegExp(`(?<=\\W|^)(?:${[
    ...DamageTypes,
    ...Stats,
    ...Statuses,
    ...Weathers,
    ...Synergies,
    ...Items,
    "GOLD",
    "STAR"
].join("|")}|\\[[^\\]]+\\])(?=\\W|$)`, "g");
function addIconsToDescription(description, stats) {
    const matchIcon = description.match(exports.iconRegExp);
    if (matchIcon === null)
        return description;
    const descriptionParts = description.split(exports.iconRegExp);
    return descriptionParts.map((f, i) => {
        var _a, _b, _c, _d, _e, _f;
        const token = matchIcon[i - 1];
        let d = null;
        if (token) {
            if (token === "GOLD") {
                d = ((0, jsx_runtime_1.jsx)("img", { className: "description-icon icon-money", src: "/assets/icons/money.svg", alt: "$" }));
            }
            else if (token === "STAR") {
                d = ((0, jsx_runtime_1.jsx)("img", { className: "description-icon icon-star", src: "/assets/ui/star.svg", alt: "\u2B50" }));
            }
            else if (DamageTypes.includes(token)) {
                d = ((0, jsx_runtime_1.jsx)("span", { className: token === Game_1.Damage.PHYSICAL
                        ? "damage-physical"
                        : token === Game_1.Damage.SPECIAL
                            ? "damage-special"
                            : "damage-true", children: (0, i18next_1.t)(`damage.${token}`) }));
            }
            else if (Stats.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon stat", children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${token}.png` }), (0, jsx_runtime_1.jsx)("span", { className: "stat-label", children: (0, i18next_1.t)(`stat.${token}`) })] }));
            }
            else if (Statuses.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon status", title: (0, i18next_1.t)(`status_description.${token}`), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${token}.svg` }), (0, jsx_runtime_1.jsx)("span", { className: "status-label", children: (0, i18next_1.t)(`status.${token}`) })] }));
            }
            else if (Weathers.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon weather", title: (0, i18next_1.t)(`weather_description.${token}`), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/weather/${token.toLowerCase()}.svg` }), (0, jsx_runtime_1.jsx)("span", { className: "weather-label", children: (0, i18next_1.t)(`weather.${token}`) })] }));
            }
            else if (Items.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon item", title: (0, i18next_1.t)(`item_description.${token}`), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/item/${token}.png` }), (0, jsx_runtime_1.jsx)("span", { className: "item-label", children: (0, i18next_1.t)(`item.${token}`) })] }));
            }
            else if (Synergies.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon synergy", children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: token, size: "1.5em" }), (0, jsx_runtime_1.jsx)("span", { className: "synergy-label", children: (0, i18next_1.t)(`synergy.${token}`) })] }));
            }
            else if (/\[[^\]]+\]/.test(token)) {
                const array = token.slice(1, -1).split(",");
                let scaleType = null;
                let scaleFactor = 1;
                let nbDigits = 0;
                if ((_a = array.at(-1)) === null || _a === void 0 ? void 0 : _a.includes("ND")) {
                    nbDigits = Number((_b = array.pop()) === null || _b === void 0 ? void 0 : _b.replace("ND=", "")) || 0;
                }
                if ((_c = array.at(-1)) === null || _c === void 0 ? void 0 : _c.includes("SP")) {
                    scaleType = "AP";
                    scaleFactor = Number((_d = array.pop()) === null || _d === void 0 ? void 0 : _d.replace("SP=", "")) || 1;
                }
                if ((_e = array.at(-1)) === null || _e === void 0 ? void 0 : _e.includes("LK")) {
                    scaleType = "LUCK";
                    scaleFactor = Number((_f = array.pop()) === null || _f === void 0 ? void 0 : _f.replace("LK=", "")) || 1;
                }
                d = ((0, jsx_runtime_1.jsxs)("span", { className: (0, jsx_1.cc)("description-icon", { "scales-ap": scaleType === "AP", "scales-luck": scaleType === "LUCK" }), children: [scaleType === "AP" && ((0, jsx_runtime_1.jsx)("img", { src: "assets/icons/AP.png", alt: "Ability Power", title: "Scales with Ability Power" })), scaleType === "LUCK" && ((0, jsx_runtime_1.jsx)("img", { src: "assets/icons/LUCK.png", alt: "Luck", title: "Scales with Luck" })), array.map((v, j) => {
                            var _a, _b;
                            const separator = j < array.length - 1 ? "/" : "";
                            let scaleValue = 0;
                            if (scaleType === "AP")
                                scaleValue = (_a = stats === null || stats === void 0 ? void 0 : stats.ap) !== null && _a !== void 0 ? _a : 0;
                            if (scaleType === "LUCK")
                                scaleValue = (_b = stats === null || stats === void 0 ? void 0 : stats.luck) !== null && _b !== void 0 ? _b : 0;
                            const value = (0, number_1.roundToNDigits)(Number(v) * (1 + scaleValue * scaleFactor / 100), nbDigits);
                            const tier = stats === null || stats === void 0 ? void 0 : stats.stars;
                            const active = tier === undefined ||
                                array.length === 1 ||
                                j === tier - 1 ||
                                (tier > array.length && j === array.length - 1);
                            return ((0, jsx_runtime_1.jsxs)("span", { className: "ability-value", children: [(0, jsx_runtime_1.jsx)("span", { className: (0, jsx_1.cc)({ active }), children: value }), separator] }, j));
                        })] }));
            }
        }
        return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [d, f] }, i));
    });
}
//# sourceMappingURL=descriptions.js.map