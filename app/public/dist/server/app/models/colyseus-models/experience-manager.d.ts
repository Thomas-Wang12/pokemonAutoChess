import { Schema } from "@colyseus/schema";
import { IExperienceManager } from "../../types";
import { SpecialGameRule } from "../../types/enum/SpecialGameRule";
export default class ExperienceManager extends Schema implements IExperienceManager {
    level: number;
    experience: number;
    expNeeded: number;
    maxLevel: number;
    constructor();
    canLevel(): boolean;
    addExperience(quantity: number): void;
    checkForLevelUp(quantity: number): boolean;
}
export declare function getLevelUpCost(specialGameRule?: SpecialGameRule | null): number;
