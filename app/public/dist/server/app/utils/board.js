"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOnBench = isOnBench;
exports.isPositionEmpty = isPositionEmpty;
exports.getFirstAvailablePositionInBench = getFirstAvailablePositionInBench;
exports.getFirstAvailablePositionOnBoard = getFirstAvailablePositionOnBoard;
exports.getFreeSpaceOnBench = getFreeSpaceOnBench;
exports.getMaxTeamSize = getMaxTeamSize;
const SpecialGameRule_1 = require("../types/enum/SpecialGameRule");
const schemas_1 = require("./schemas");
function isOnBench(pokemon) {
    return pokemon.positionY === 0;
}
function isPositionEmpty(x, y, board) {
    return ((0, schemas_1.values)(board).some((p) => p.positionX === x && p.positionY === y) === false);
}
function getFirstAvailablePositionInBench(board) {
    for (let i = 0; i < 8; i++) {
        if (isPositionEmpty(i, 0, board)) {
            return i;
        }
    }
}
function getFirstAvailablePositionOnBoard(board) {
    for (let x = 0; x < 8; x++) {
        for (let y = 1; y < 4; y++) {
            if (isPositionEmpty(x, y, board)) {
                return [x, y];
            }
        }
    }
}
function getFreeSpaceOnBench(board) {
    let numberOfFreeSpace = 0;
    for (let i = 0; i < 8; i++) {
        if (isPositionEmpty(i, 0, board)) {
            numberOfFreeSpace++;
        }
    }
    return numberOfFreeSpace;
}
function getMaxTeamSize(playerLevel, specialGameRule) {
    if (specialGameRule === SpecialGameRule_1.SpecialGameRule.SIX_PACK)
        return 6;
    if (specialGameRule === SpecialGameRule_1.SpecialGameRule.CROWDED)
        return playerLevel + 3;
    return playerLevel;
}
//# sourceMappingURL=board.js.map