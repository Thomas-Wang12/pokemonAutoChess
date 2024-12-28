import { Schema } from "@colyseus/schema";
import { Constraint } from "matter-js";
import { IPokemonAvatar } from "../../types";
import { Orientation, PokemonActionState } from "../../types/enum/Game";
import { Pkm } from "../../types/enum/Pokemon";
export declare class PokemonAvatarModel extends Schema implements IPokemonAvatar {
    id: string;
    name: Pkm;
    shiny: boolean;
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    action: PokemonActionState;
    orientation: Orientation;
    timer: number;
    itemId: string;
    portalId: string;
    constraint: Constraint | undefined;
    constructor(id: string, avatar: string, x: number, y: number, timer: number);
}
