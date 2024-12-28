"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectMatchups = selectMatchups;
exports.getCount = getCount;
exports.getDistance = getDistance;
const array_1 = require("../utils/array");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
function getAllPossibleMatchups(remainingPlayers) {
    const matchups = [];
    for (let i = 0; i < remainingPlayers.length; i++) {
        for (let j = i + 1; j < remainingPlayers.length; j++) {
            const bluePlayer = remainingPlayers[i], redPlayer = remainingPlayers[j];
            matchups.push({
                bluePlayer,
                redPlayer,
                count: getCount(bluePlayer, redPlayer, false),
                distance: getDistance(bluePlayer, redPlayer, false)
            });
        }
    }
    return matchups;
}
function completeMatchupCombination(combination, matchups, players) {
    const remainingPlayers = players.filter((p) => !combination.some((m) => m.bluePlayer === p || m.redPlayer === p));
    if (remainingPlayers.length === 0)
        return [combination];
    else if (remainingPlayers.length === 1) {
        const remainingPlayer = remainingPlayers[0];
        const ghostMatchups = matchups
            .filter((m) => m.bluePlayer === remainingPlayer || m.redPlayer === remainingPlayer)
            .map((matchup) => {
            const playerToGhost = matchup.bluePlayer === remainingPlayer
                ? matchup.redPlayer
                : matchup.bluePlayer;
            const ghostMatchup = {
                ghost: true,
                bluePlayer: remainingPlayer,
                redPlayer: playerToGhost,
                count: getCount(remainingPlayer, playerToGhost, true),
                distance: getDistance(remainingPlayer, playerToGhost, true)
            };
            return ghostMatchup;
        });
        return ghostMatchups.map((m) => [...combination, m]);
    }
    else {
        const remainingMatchups = matchups.filter((m) => remainingPlayers.includes(m.bluePlayer) &&
            remainingPlayers.includes(m.redPlayer));
        if (remainingMatchups.length === 0) {
            return completeMatchupCombination([...combination], matchups, players);
        }
        return remainingMatchups.flatMap((m) => completeMatchupCombination([...combination, m], matchups, players));
    }
}
function selectMatchups(state) {
    const players = (0, schemas_1.values)(state.players).filter((p) => p.alive);
    if (players.length <= 1)
        return [];
    const matchups = getAllPossibleMatchups(players);
    const matchupCombinations = completeMatchupCombination([], matchups, players);
    matchupCombinations.sort((a, b) => {
        return (0, array_1.sum)(a.map((m) => m.count)) - (0, array_1.sum)(b.map((m) => m.count));
    });
    const lowestTotalCount = (0, array_1.sum)(matchupCombinations[0].map((m) => m.count));
    const lowestTotalCountMatchupCombinations = matchupCombinations.filter((matchups) => {
        return (0, array_1.sum)(matchups.map((m) => m.count)) === lowestTotalCount;
    });
    lowestTotalCountMatchupCombinations.sort((a, b) => {
        return (0, array_1.sum)(b.map((m) => m.distance)) - (0, array_1.sum)(a.map((m) => m.distance));
    });
    const maxDistance = (0, array_1.sum)(lowestTotalCountMatchupCombinations[0].map((m) => m.distance));
    const mostDistantMatchups = lowestTotalCountMatchupCombinations.filter((matchups) => {
        return (0, array_1.sum)(matchups.map((m) => m.distance)) === maxDistance;
    });
    const selectedMatchups = (0, random_1.pickRandomIn)(mostDistantMatchups);
    return selectedMatchups;
}
function getCount(a, b, bIsGhost) {
    var _a, _b, _c, _d;
    const countA = ((_a = a.opponents.get(b.id)) !== null && _a !== void 0 ? _a : 0) + ((_b = a.opponents.get("ghost-" + b.id)) !== null && _b !== void 0 ? _b : 0);
    const countB = ((_c = b.opponents.get(a.id)) !== null && _c !== void 0 ? _c : 0) + ((_d = b.opponents.get("ghost-" + a.id)) !== null && _d !== void 0 ? _d : 0);
    if (bIsGhost)
        return countA;
    else
        return countA + countB;
}
function getDistance(a, b, bIsGhost) {
    const distanceA = a.history.length -
        a.history.findLastIndex((h) => h.id === b.id || h.id === "ghost-" + b.id);
    const distanceB = b.history.length -
        b.history.findLastIndex((h) => h.id === a.id || h.id === "ghost-" + a.id);
    if (bIsGhost)
        return distanceA;
    else
        return distanceA + distanceB;
}
//# sourceMappingURL=matchmaking.js.map