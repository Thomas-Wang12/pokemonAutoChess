import { ArraySchema } from "@colyseus/schema";
import { Emotion, Role, Title } from "../../types";
import { Language } from "../../types/enum/Language";
export interface IUserMetadata {
    uid: string;
    displayName: string;
    language: Language | "";
    avatar: string;
    wins: number;
    exp: number;
    level: number;
    elo: number;
    pokemonCollection: Map<string, IPokemonConfig>;
    booster: number;
    titles: Title[];
    title: "" | Title;
    role: Role;
}
export interface IPokemonConfig {
    dust: number;
    emotions: Emotion[] | ArraySchema<Emotion>;
    shinyEmotions: Emotion[] | ArraySchema<Emotion>;
    selectedEmotion: Emotion;
    selectedShiny: boolean;
    id: string;
}
declare const _default: import("mongoose").Model<IUserMetadata, {}, {}, {}, import("mongoose").Document<unknown, {}, IUserMetadata> & IUserMetadata & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default _default;
