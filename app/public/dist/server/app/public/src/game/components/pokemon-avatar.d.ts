import { GameObjects } from "phaser";
import { Emotion, IPokemonAvatar } from "../../../../types";
import GameScene from "../scenes/game-scene";
import EmoteMenu from "./emote-menu";
import PokemonSprite from "./pokemon";
export default class PokemonAvatar extends PokemonSprite {
    scene: GameScene;
    circleHitbox: GameObjects.Ellipse | null;
    circleTimer: GameObjects.Graphics | null;
    isCurrentPlayerAvatar: boolean;
    emoteBubble: EmoteBubble | null;
    emoteMenu: EmoteMenu | null;
    constructor(scene: GameScene, x: number, y: number, pokemon: IPokemonAvatar, playerId: string, scouting?: boolean);
    registerKeys(): void;
    drawCircles(): void;
    updateCircleTimer(timer: number): void;
    updateLife(life: number): void;
    drawSpeechBubble(emoteAvatar: string, isOpponent: boolean): void;
    drawLifebar(): void;
    showEmoteMenu(): void;
    hideEmoteMenu(): void;
    toggleEmoteMenu(): void;
    sendEmote(emotion: Emotion): void;
    playAnimation(): void;
    onPointerDown(pointer: Phaser.Input.Pointer): void;
}
export declare class EmoteBubble extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    constructor(scene: Phaser.Scene, emoteAvatar: string, isOpponent: boolean);
}
