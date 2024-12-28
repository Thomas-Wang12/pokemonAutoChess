"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRank = getRank;
exports.formatMinMaxRanks = formatMinMaxRanks;
const Config_1 = require("../types/Config");
const EloRank_1 = require("../types/enum/EloRank");
function getRank(elo) {
    let rank = EloRank_1.EloRank.LEVEL_BALL;
    Object.keys(Config_1.EloRankThreshold).forEach((e) => {
        if (elo >= Config_1.EloRankThreshold[e]) {
            rank = e;
        }
    });
    return rank;
}
function formatMinMaxRanks(minRank, maxRank) {
    var _a;
    const ranksThresholds = Object.values(Config_1.EloRankThreshold);
    if (minRank === EloRank_1.EloRank.LEVEL_BALL)
        minRank = null;
    if (maxRank === EloRank_1.EloRank.BEAST_BALL)
        maxRank = null;
    const min = minRank ? Config_1.EloRankThreshold[minRank] : 0;
    const max = maxRank
        ? ((_a = ranksThresholds.at(ranksThresholds.indexOf(Config_1.EloRankThreshold[maxRank]) + 1)) !== null && _a !== void 0 ? _a : 10000)
        : 9999;
    if (minRank && maxRank) {
        return `[${min} - ${max - 1}]`;
    }
    else if (minRank) {
        return `[${min}+]`;
    }
    else if (maxRank) {
        return `[<${max}]`;
    }
    else {
        return "";
    }
}
//# sourceMappingURL=elo.js.map