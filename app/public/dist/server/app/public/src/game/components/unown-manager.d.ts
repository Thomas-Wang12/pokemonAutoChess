import { Ability } from "../../../../types/enum/Ability";
import { Pkm } from "../../../../types/enum/Pokemon";
import GameScene from "../scenes/game-scene";
export default class UnownManager {
    scene: GameScene;
    constructor(scene: GameScene);
    addWanderingUnown(): void;
    displayShardGain(coordinates: number[], index: string): void;
}
export declare const UNOWNS_PER_ABILITY: Map<Ability, Pkm[]>;
