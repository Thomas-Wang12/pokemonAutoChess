"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.precomputedPokemons = void 0;
const pokemon_factory_1 = __importDefault(require("../app/models/pokemon-factory"));
const Config_1 = require("../app/types/Config");
const Pokemon_1 = require("../app/types/enum/Pokemon");
const sortByRarityAndTier = (a, b) => Config_1.RarityCost[a.rarity] === Config_1.RarityCost[b.rarity]
    ? a.stars - b.stars
    : Config_1.RarityCost[a.rarity] - Config_1.RarityCost[b.rarity];
exports.precomputedPokemons = Object.values(Pokemon_1.Pkm)
    .filter((p) => p !== Pokemon_1.Pkm.DEFAULT)
    .map((pkm) => pokemon_factory_1.default.createPokemonFromName(pkm))
    .sort(sortByRarityAndTier);
//# sourceMappingURL=precomputed-pokemons.js.map