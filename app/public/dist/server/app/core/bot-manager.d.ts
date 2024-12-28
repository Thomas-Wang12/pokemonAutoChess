import Player from "../models/colyseus-models/player";
import Bot from "./bot";
export default class BotManager {
    bots: Bot[];
    constructor();
    addBot(player: Player): void;
    updateBots(): void;
}
