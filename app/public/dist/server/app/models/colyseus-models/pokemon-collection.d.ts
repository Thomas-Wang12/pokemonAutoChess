import { MapSchema } from "@colyseus/schema";
import { IPokemonConfig } from "../mongo-models/user-metadata";
export default class PokemonCollection extends MapSchema<IPokemonConfig> {
    constructor(pokemonCollection?: Map<string, IPokemonConfig>);
}
