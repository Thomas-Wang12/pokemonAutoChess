import { Ability } from "../../../../types/enum/Ability";
import { Orientation } from "../../../../types/enum/Game";
import { DebugScene } from "../scenes/debug-scene";
import GameScene from "../scenes/game-scene";
import PokemonSprite from "./pokemon";
export declare function displayAbility(scene: GameScene | DebugScene, pokemonsOnBoard: PokemonSprite[], skill: Ability | string, orientation: Orientation, positionX: number, positionY: number, targetX: number, targetY: number, flip: boolean, delay?: number): void;
export declare function hiddenPowerAnimation(scene: GameScene | DebugScene, skill: Ability, originX: number, originY: number, flip: boolean): void;
