"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomEgg = createRandomEgg;
const Game_1 = require("../types/enum/Game");
const Pokemon_1 = require("../types/enum/Pokemon");
const random_1 = require("../utils/random");
const pokemon_factory_1 = __importDefault(require("./pokemon-factory"));
const precomputed_pokemon_data_1 = require("./precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("./precomputed/precomputed-rarity");
function createRandomEgg(shiny, player) {
    const hatchList = precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.HATCH.filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).stars === 1);
    const egg = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.EGG, {
        selectedShiny: shiny
    });
    egg.action = Game_1.PokemonActionState.SLEEP;
    if (player) {
        const remainingEggs = hatchList.filter((p) => !player.randomEggsGiven.includes(p));
        egg.evolution = (0, random_1.pickRandomIn)(remainingEggs.length > 0 ? remainingEggs : hatchList);
        player.randomEggsGiven.push(egg.evolution);
    }
    else {
        egg.evolution = (0, random_1.pickRandomIn)(hatchList);
    }
    return egg;
}
//# sourceMappingURL=egg-factory.js.map