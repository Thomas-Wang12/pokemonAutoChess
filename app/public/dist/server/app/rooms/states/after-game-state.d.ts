import { MapSchema, Schema } from "@colyseus/schema";
import AfterGamePlayer from "../../models/colyseus-models/after-game-player";
export default class AfterGameState extends Schema {
    players: MapSchema<AfterGamePlayer, string>;
    elligibleToELO: boolean;
    elligibleToXP: boolean;
    constructor({ elligibleToELO, elligibleToXP }: {
        elligibleToELO: boolean;
        elligibleToXP: boolean;
    });
}
