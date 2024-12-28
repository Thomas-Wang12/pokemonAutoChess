import { Schema } from "@colyseus/schema";
import { IPortal, ISynergySymbol } from "../../types";
import { DungeonPMDO } from "../../types/enum/Dungeon";
import { Synergy } from "../../types/enum/Synergy";
export declare class Portal extends Schema implements IPortal {
    id: string;
    x: number;
    y: number;
    avatarId: string;
    map: DungeonPMDO;
    index: number;
    constructor(x: number, y: number, index: number);
}
export declare class SynergySymbol extends Schema implements ISynergySymbol {
    id: string;
    x: number;
    y: number;
    synergy: Synergy;
    portalId: string;
    index: number;
    constructor(x: number, y: number, synergy: Synergy, index: number);
}
