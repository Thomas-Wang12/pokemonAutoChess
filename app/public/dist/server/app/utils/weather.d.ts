import { Weather } from "../types/enum/Weather";
import { MapSchema } from "@colyseus/schema";
import { Pokemon } from "../models/colyseus-models/pokemon";
import Player from "../models/colyseus-models/player";
export declare function getWeather(bluePlayer: Player, redPlayer: Player | null, redPlayerBoard: MapSchema<Pokemon, string>): Weather;
