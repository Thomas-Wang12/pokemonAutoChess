"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeElo = computeElo;
const number_1 = require("../utils/number");
const elo_engine_1 = require("./elo-engine");
function computeElo(player, rank, previousElo, players) {
    const eloEngine = new elo_engine_1.EloEngine();
    const eloGains = new Array();
    players.forEach((plyr) => {
        if (player.id !== plyr.id) {
            const expectedScore = eloEngine.getExpected(previousElo, plyr.elo);
            if (rank < plyr.rank) {
                eloGains.push(eloEngine.updateRating(expectedScore, 1, previousElo));
            }
            else {
                eloGains.push(eloEngine.updateRating(expectedScore, 0, previousElo));
            }
        }
    });
    let meanGain = (0, number_1.min)(0)(Math.floor((0, number_1.average)(...eloGains)));
    if (rank <= Math.floor(players.length / 2) && meanGain < previousElo) {
        meanGain = previousElo;
    }
    if (rank === 1) {
        meanGain = (0, number_1.min)(previousElo + 1)(meanGain);
    }
    return meanGain;
}
//# sourceMappingURL=elo.js.map