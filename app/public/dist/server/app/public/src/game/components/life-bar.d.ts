import { Team } from "../../../../types/enum/Game";
import Bar from "./bar";
export default class LifeBar extends Bar {
    shieldProgress: HTMLDivElement;
    constructor(scene: Phaser.Scene, x: number, y: number, width: number, max: number, maxShield: number, team: Team, flip: boolean);
    setShieldAmount(value: number): void;
    setTeam(team: number, flip: boolean): void;
}
