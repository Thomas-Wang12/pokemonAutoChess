import { MapSchema } from "@colyseus/schema";
import { PokemonEntity } from "../core/pokemon-entity";
import { Pokemon } from "../models/colyseus-models/pokemon";
import PokemonSprite from "../public/src/game/components/pokemon";
import { SpecialGameRule } from "../types/enum/SpecialGameRule";
export declare function isOnBench(pokemon: Pokemon | PokemonEntity | PokemonSprite): boolean;
export declare function isPositionEmpty(x: number, y: number, board: MapSchema<Pokemon, string>): boolean;
export declare function getFirstAvailablePositionInBench(board: MapSchema<Pokemon, string>): number | undefined;
export declare function getFirstAvailablePositionOnBoard(board: MapSchema<Pokemon, string>): number[] | undefined;
export declare function getFreeSpaceOnBench(board: MapSchema<Pokemon, string>): number;
export declare function getMaxTeamSize(playerLevel: number, specialGameRule?: SpecialGameRule | null): number;
