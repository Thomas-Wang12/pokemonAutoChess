import { Pkm } from "../../../../types/enum/Pokemon";
import AnimationManager from "../animation-manager";
import GameScene from "../scenes/game-scene";
import PokemonSprite from "./pokemon";
import { PokemonSpecialDetail } from "./pokemon-special-detail";
export default class PokemonSpecial extends PokemonSprite {
    detail: PokemonSpecialDetail | null;
    animationManager: AnimationManager;
    dialog?: string;
    dialogTitle?: string;
    constructor(scene: GameScene, x: number, y: number, name: Pkm, animationManager: AnimationManager, dialog?: string, dialogTitle?: string);
    onPointerDown(pointer: any): void;
    openDetail(): void;
    updateTooltipPosition(): void;
}
