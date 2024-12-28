import { ArraySchema, Schema } from "@colyseus/schema";
import { Emotion } from "../../types";
import { IPokemonConfig } from "../mongo-models/user-metadata";
export default class PokemonConfig extends Schema implements IPokemonConfig {
    dust: number;
    emotions: ArraySchema<Emotion>;
    shinyEmotions: ArraySchema<Emotion>;
    selectedEmotion: Emotion;
    selectedShiny: boolean;
    id: string;
    constructor(id: string, p?: IPokemonConfig);
}
