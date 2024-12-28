import { Schema } from "@colyseus/schema";
import { BattleResult } from "../../types/enum/Game";
import { Weather } from "../../types/enum/Weather";
export default class HistoryItem extends Schema {
    id: string;
    name: string;
    result: BattleResult;
    avatar: string;
    weather: Weather;
    constructor(id: string, name: string, result: BattleResult, avatar: string, weather: Weather);
}
