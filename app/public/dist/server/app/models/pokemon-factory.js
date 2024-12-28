"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const types_1 = require("../types");
const Pokemon_1 = require("../types/enum/Pokemon");
const logger_1 = require("../utils/logger");
const pokemon_1 = require("./colyseus-models/pokemon");
class PokemonFactory {
    static makePveBoard(pveStage, shinyEncounter) {
        const pokemons = new schema_1.MapSchema();
        pveStage.board.forEach(([pkm, x, y]) => {
            var _a;
            const pokemon = PokemonFactory.createPokemonFromName(pkm, {
                selectedEmotion: (_a = pveStage.emotion) !== null && _a !== void 0 ? _a : types_1.Emotion.NORMAL,
                selectedShiny: shinyEncounter
            });
            pokemon.positionX = x;
            pokemon.positionY = y;
            pokemons.set(pokemon.id, pokemon);
        });
        return pokemons;
    }
    static getPokemonBaseEvolution(name) {
        switch (name) {
            case Pokemon_1.Pkm.VAPOREON:
            case Pokemon_1.Pkm.JOLTEON:
            case Pokemon_1.Pkm.FLAREON:
            case Pokemon_1.Pkm.ESPEON:
            case Pokemon_1.Pkm.UMBREON:
            case Pokemon_1.Pkm.LEAFEON:
            case Pokemon_1.Pkm.SYLVEON:
            case Pokemon_1.Pkm.GLACEON:
                return Pokemon_1.Pkm.EEVEE;
            case Pokemon_1.Pkm.SHEDINJA:
                return Pokemon_1.Pkm.NINCADA;
            case Pokemon_1.Pkm.WORMADAM_PLANT:
                return Pokemon_1.Pkm.BURMY_PLANT;
            case Pokemon_1.Pkm.WORMADAM_SANDY:
                return Pokemon_1.Pkm.BURMY_SANDY;
            case Pokemon_1.Pkm.WORMADAM_TRASH:
                return Pokemon_1.Pkm.BURMY_TRASH;
            default:
                if (Pokemon_1.PkmFamily[name] == Pokemon_1.Pkm.UNOWN_A) {
                    return name;
                }
                return Pokemon_1.PkmFamily[name];
        }
    }
    static createPokemonFromName(name, config) {
        if (config && "pokemonCollection" in config) {
            config = config.pokemonCollection.get(Pokemon_1.PkmIndex[name]);
        }
        const shiny = config && config.selectedShiny ? true : false;
        const emotion = config && config.selectedEmotion ? config.selectedEmotion : types_1.Emotion.NORMAL;
        if (name in pokemon_1.PokemonClasses) {
            const PokemonClass = pokemon_1.PokemonClasses[name];
            return new PokemonClass(shiny, emotion);
        }
        else {
            logger_1.logger.warn(`No pokemon with name "${name}" found, return MissingNo`);
            return new pokemon_1.Pokemon(shiny, emotion);
        }
    }
}
exports.default = PokemonFactory;
//# sourceMappingURL=pokemon-factory.js.map