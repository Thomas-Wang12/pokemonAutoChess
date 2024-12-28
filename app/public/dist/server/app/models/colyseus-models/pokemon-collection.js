"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const pokemon_config_1 = __importDefault(require("./pokemon-config"));
class PokemonCollection extends schema_1.MapSchema {
    constructor(pokemonCollection) {
        super();
        if (pokemonCollection) {
            pokemonCollection.forEach((value, key) => this.set(key, new pokemon_config_1.default(key, value)));
        }
    }
}
exports.default = PokemonCollection;
//# sourceMappingURL=pokemon-collection.js.map