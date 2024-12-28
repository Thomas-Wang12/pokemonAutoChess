import { MapSchema, SetSchema } from "@colyseus/schema";
import { Pokemon } from "../models/colyseus-models/pokemon";
import { Effect } from "../types/enum/Effect";
import Synergies from "./colyseus-models/synergies";
export declare class Effects extends SetSchema<Effect> {
    update(synergies: Synergies, board: MapSchema<Pokemon>): void;
}
