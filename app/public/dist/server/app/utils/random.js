"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chance = chance;
exports.randomBetween = randomBetween;
exports.pickRandomIn = pickRandomIn;
exports.pickNRandomIn = pickNRandomIn;
exports.shuffleArray = shuffleArray;
function chance(probability, pokemon) {
    var _a;
    return Math.random() < probability * (1 + ((_a = pokemon === null || pokemon === void 0 ? void 0 : pokemon.luck) !== null && _a !== void 0 ? _a : 0) / 100);
}
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function pickRandomIn(list) {
    if (!Array.isArray(list))
        return pickRandomIn(Object.values(list));
    return list[Math.floor(Math.random() * list.length)];
}
function pickNRandomIn(array, number) {
    const selection = [], options = [...array];
    shuffleArray(options);
    while (selection.length < number && options.length > 0) {
        selection.push(options.pop());
    }
    return selection;
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//# sourceMappingURL=random.js.map