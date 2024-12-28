import { MapSchema } from "@colyseus/schema";
import { Emotion, IPlayer } from "../types";
import { Pkm } from "../types/enum/Pokemon";
import { Pokemon } from "./colyseus-models/pokemon";
import { PVEStage } from "./pve-stages";
export default class PokemonFactory {
    static makePveBoard(pveStage: PVEStage, shinyEncounter: boolean): MapSchema<Pokemon>;
    static getPokemonBaseEvolution(name: Pkm): Pkm;
    static createPokemonFromName(name: Pkm, config?: IPlayer | {
        selectedShiny?: boolean;
        selectedEmotion?: Emotion;
    }): Pokemon;
}
