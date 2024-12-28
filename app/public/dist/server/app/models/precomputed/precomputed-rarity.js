"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRECOMPUTED_POKEMONS_PER_RARITY = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const Passive_1 = require("../../types/enum/Passive");
const precomputed_pokemons_1 = require("../../../gen/precomputed-pokemons");
console.time("precompute-rarity");
const rarities = Object.keys(Game_1.Rarity);
const data = Object.fromEntries(rarities.map((r) => [r, []]));
precomputed_pokemons_1.precomputedPokemons
    .filter((pokemon) => pokemon.skill !== Ability_1.Ability.DEFAULT || pokemon.passive !== Passive_1.Passive.NONE)
    .forEach((pokemon) => {
    data[pokemon.rarity].push(pokemon);
});
exports.PRECOMPUTED_POKEMONS_PER_RARITY = {};
for (const r in data) {
    exports.PRECOMPUTED_POKEMONS_PER_RARITY[r] = data[r]
        .sort(indexSort)
        .map((p) => p.name);
}
console.timeEnd("precompute-rarity");
function indexSort(a, b) {
    const aIndex = parseFloat(a.index.replace("-", "."));
    const bIndex = parseFloat(b.index.replace("-", "."));
    return aIndex - bIndex;
}
//# sourceMappingURL=precomputed-rarity.js.map