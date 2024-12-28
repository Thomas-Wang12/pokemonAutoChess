import { Emotion } from "../types";
export declare function getPortraitSrc(index?: string, shiny?: boolean, emotion?: Emotion): string;
export declare function getAvatarSrc(avatar: string): string;
export declare function getAvatarString(index?: string, shiny?: boolean, emotion?: Emotion): string;
export interface IPokemonAvatarConfig {
    index: string;
    emotion: Emotion;
    shiny: boolean;
}
export declare function getPokemonConfigFromAvatar(avatar: string): IPokemonAvatarConfig;
