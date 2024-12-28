"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRECOMPUTED_REGIONAL_MONS = exports.PRECOMPUTED_POKEMONS_DATA = void 0;
exports.getPokemonData = getPokemonData;
const Pokemon_1 = require("../../types/enum/Pokemon");
const map_1 = require("../../utils/map");
const schemas_1 = require("../../utils/schemas");
const precomputed_pokemons_1 = require("../../../gen/precomputed-pokemons");
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const Passive_1 = require("../../types/enum/Passive");
console.time("precompute-pokemon-data");
const data = new Map();
precomputed_pokemons_1.precomputedPokemons.forEach((pokemon) => {
    var _a;
    data.set(pokemon.name, {
        skill: pokemon.skill,
        passive: pokemon.passive,
        stars: pokemon.stars,
        rarity: pokemon.rarity,
        additional: pokemon.additional,
        regional: pokemon.regional,
        hp: pokemon.hp,
        range: pokemon.range,
        types: (0, schemas_1.values)(pokemon.types),
        evolution: pokemon.evolution === Pokemon_1.Pkm.DEFAULT ? null : pokemon.evolution,
        stages: (_a = pokemon.stages) !== null && _a !== void 0 ? _a : Math.max(...precomputed_pokemons_1.precomputedPokemons
            .filter((p) => Pokemon_1.PkmFamily[p.name] === Pokemon_1.PkmFamily[pokemon.name])
            .filter((p) => p.skill !== Ability_1.Ability.DEFAULT)
            .map((p) => p.stars))
    });
});
exports.PRECOMPUTED_POKEMONS_DATA = (0, map_1.mapToObj)(data);
exports.PRECOMPUTED_REGIONAL_MONS = Object.values(Pokemon_1.Pkm).filter((p) => {
    const { regional, skill, passive } = getPokemonData(p);
    return regional && (skill !== Ability_1.Ability.DEFAULT || passive !== Passive_1.Passive.NONE);
});
console.timeEnd("precompute-pokemon-data");
function getPokemonData(name) {
    if (name in exports.PRECOMPUTED_POKEMONS_DATA)
        return Object.assign({ name, index: Pokemon_1.PkmIndex[name] }, exports.PRECOMPUTED_POKEMONS_DATA[name]);
    return {
        name: Pokemon_1.Pkm.DEFAULT,
        index: Pokemon_1.PkmIndex[Pokemon_1.Pkm.DEFAULT],
        additional: false,
        regional: false,
        hp: 10,
        range: 1,
        rarity: Game_1.Rarity.SPECIAL,
        stars: 1,
        stages: 1,
        skill: Ability_1.Ability.DEFAULT,
        passive: Passive_1.Passive.NONE,
        types: [],
        evolution: null
    };
}
//# sourceMappingURL=precomputed-pokemon-data.js.map