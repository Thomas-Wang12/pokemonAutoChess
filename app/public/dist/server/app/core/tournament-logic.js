"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRemainingPlayers = getRemainingPlayers;
exports.getTournamentStage = getTournamentStage;
exports.makeBrackets = makeBrackets;
function getRemainingPlayers(tournament) {
    const remainingPlayers = [];
    tournament.players.forEach((player, playerId) => {
        if (!player.eliminated)
            remainingPlayers.push(Object.assign({ id: playerId }, player));
    });
    return remainingPlayers;
}
function getTournamentStage(tournament) {
    if (tournament.finished)
        return "Finished";
    const remainingPlayers = getRemainingPlayers(tournament);
    if (remainingPlayers.length <= 8)
        return "FINALS";
    if (remainingPlayers.length <= 16)
        return "Semi-Finals";
    if (remainingPlayers.length <= 32)
        return "Quarter-Finals";
    else {
        const n = Math.floor(Math.log(remainingPlayers.length) / Math.log(2));
        return `Round of ${Math.pow(2, n)}`;
    }
}
function makeBrackets(tournament) {
    const remainingPlayers = getRemainingPlayers(tournament);
    remainingPlayers.sort((a, b) => b.elo - a.elo);
    let minDelta = 8;
    let idealNbPerBracket = 8;
    for (let nbPerBracket = 5; nbPerBracket <= 8; nbPerBracket++) {
        let delta = Math.abs(Math.round(remainingPlayers.length / nbPerBracket) -
            remainingPlayers.length / nbPerBracket);
        delta += 8 - nbPerBracket;
        if (delta <= minDelta) {
            minDelta = delta;
            idealNbPerBracket = nbPerBracket;
        }
    }
    const nbBrackets = Math.ceil(remainingPlayers.length / idealNbPerBracket);
    const brackets = [];
    for (let i = 0; i < nbBrackets; i++) {
        let bracketName = getTournamentStage(tournament);
        if (nbBrackets > 1) {
            bracketName += ` #${i + 1}`;
        }
        const bracket = {
            name: bracketName,
            playersId: [],
            finished: false
        };
        brackets.push(bracket);
    }
    let b = 0;
    while (remainingPlayers.length > 0) {
        const bracket = brackets[b];
        if (remainingPlayers.length > 0)
            bracket.playersId.push(remainingPlayers.shift().id);
        if (remainingPlayers.length > nbBrackets - b - 1)
            bracket.playersId.push(remainingPlayers.pop().id);
        b = (b + 1) % nbBrackets;
    }
    return brackets;
}
//# sourceMappingURL=tournament-logic.js.map