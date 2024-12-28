"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRankLabel = getRankLabel;
const i18next_1 = require("i18next");
function getRankLabel(rank) {
    switch (rank) {
        case 1:
            return (0, i18next_1.t)("first_place");
        case 2:
            return (0, i18next_1.t)("second_place");
        case 3:
            return (0, i18next_1.t)("third_place");
    }
    return `${rank}${(0, i18next_1.t)("th_place")}`;
}
//# sourceMappingURL=Strings.js.map