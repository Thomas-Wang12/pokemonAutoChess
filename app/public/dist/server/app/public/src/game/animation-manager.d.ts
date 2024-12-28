import { AnimationType } from "../../../types/Animation";
import { PokemonActionState } from "../../../types/enum/Game";
import PokemonSprite from "./components/pokemon";
export default class AnimationManager {
    game: Phaser.Scene;
    constructor(game: Phaser.Scene);
    createAnimation({ key, atlas, prefix, frames, repeat, fps, yoyo }: {
        key: string;
        atlas?: string;
        prefix?: string;
        frames: number;
        repeat?: number;
        fps?: number;
        yoyo?: boolean;
    }): void;
    createMinigameAnimations(): void;
    createEnvironmentAnimations(): void;
    convertPokemonActionStateToAnimationType(state: PokemonActionState, entity: PokemonSprite): AnimationType;
    animatePokemon(entity: PokemonSprite, action: PokemonActionState, flip: boolean, loop?: boolean): void;
    play(entity: PokemonSprite, animation: AnimationType, config?: {
        flip?: boolean;
        repeat?: number;
        lock?: boolean;
        timeScale?: number;
    }): void;
}
export declare function getAttackAnimTimeScale(pokemonIndex: string, atkSpeed: number): number;
