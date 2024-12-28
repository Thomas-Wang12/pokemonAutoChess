import Player from "../models/colyseus-models/player";
import { IPokemonEntity } from "../types";
import { AttackType } from "../types/enum/Game";
import { Weather } from "../types/enum/Weather";
import Board, { Cell } from "./board";
import { PokemonEntity } from "./pokemon-entity";
export default abstract class PokemonState {
    name: string;
    attack(pokemon: PokemonEntity, board: Board, target: PokemonEntity): void;
    handleHeal(pokemon: PokemonEntity, heal: number, caster: PokemonEntity, apBoost: number, crit: boolean): void;
    addShield(pokemon: IPokemonEntity, shield: number, caster: IPokemonEntity, apBoost: number, crit: boolean): void;
    handleDamage({ target: pokemon, damage, board, attackType, attacker, shouldTargetGainMana }: {
        target: PokemonEntity;
        damage: number;
        board: Board;
        attackType: AttackType;
        attacker: PokemonEntity | null;
        shouldTargetGainMana: boolean;
    }): {
        death: boolean;
        takenDamage: number;
    };
    updateCommands(pokemon: PokemonEntity, dt: number): void;
    update(pokemon: PokemonEntity, dt: number, board: Board, weather: Weather, player: Player | undefined): void;
    updateEachSecond(pokemon: PokemonEntity, board: Board): void;
    onEnter(pokemon: PokemonEntity): void;
    onExit(pokemon: PokemonEntity): void;
    getNearestTargetAtRangeCoordinates(pokemon: PokemonEntity, board: Board): {
        x: number;
        y: number;
    } | undefined;
    getNearestTargetAtSightCoordinates(pokemon: PokemonEntity, board: Board): {
        x: number;
        y: number;
    } | null;
    getFarthestTarget(pokemon: PokemonEntity, board: Board): PokemonEntity | undefined;
    getMostSurroundedCoordinateAvailablePlace(pokemon: PokemonEntity, board: Board): {
        x: number;
        y: number;
    } | undefined;
    getNearestAvailablePlaceCoordinates(pokemon: PokemonEntity, board: Board, maxRange?: number | undefined): Cell | null;
    getTargetCoordinateWhenConfused(pokemon: PokemonEntity, board: Board): {
        x: number;
        y: number;
    } | undefined;
}
