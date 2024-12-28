import Player from "../models/colyseus-models/player";
import { Weather } from "../types/enum/Weather";
import Board from "./board";
import { PokemonEntity } from "./pokemon-entity";
import PokemonState from "./pokemon-state";
export default class MovingState extends PokemonState {
    name: string;
    update(pokemon: PokemonEntity, dt: number, board: Board, weather: Weather, player: Player): void;
    move(pokemon: PokemonEntity, board: Board, coordinates: {
        x: number;
        y: number;
    }): void;
    onEnter(pokemon: PokemonEntity): void;
    onExit(pokemon: PokemonEntity): void;
}
