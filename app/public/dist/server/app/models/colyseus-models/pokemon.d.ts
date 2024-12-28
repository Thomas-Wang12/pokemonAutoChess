import { MapSchema, Schema, SetSchema } from "@colyseus/schema";
import { ConditionBasedEvolutionRule, CountEvolutionRule, EvolutionRule, HatchEvolutionRule, ItemEvolutionRule } from "../../core/evolution-rules";
import Simulation from "../../core/simulation";
import GameState from "../../rooms/states/game-state";
import { AttackSprite, Emotion, IPlayer, IPokemon, IPokemonEntity } from "../../types";
import { Ability } from "../../types/enum/Ability";
import { DungeonPMDO } from "../../types/enum/Dungeon";
import { Effect } from "../../types/enum/Effect";
import { AttackType, PokemonActionState, Rarity } from "../../types/enum/Game";
import { Item } from "../../types/enum/Item";
import { Passive } from "../../types/enum/Passive";
import { Pkm } from "../../types/enum/Pokemon";
import { Synergy } from "../../types/enum/Synergy";
import { Weather } from "../../types/enum/Weather";
import Player from "./player";
export declare class Pokemon extends Schema implements IPokemon {
    id: string;
    name: Pkm;
    types: SetSchema<Synergy>;
    rarity: Rarity;
    index: string;
    evolution: Pkm;
    positionX: number;
    positionY: number;
    attackSprite: AttackSprite;
    atkSpeed: number;
    def: number;
    speDef: number;
    attackType: AttackType;
    atk: number;
    hp: number;
    range: number;
    stars: number;
    maxPP: number;
    ap: number;
    skill: Ability;
    passive: Passive;
    items: SetSchema<Item>;
    shiny: boolean;
    emotion: Emotion;
    action: PokemonActionState;
    deathCount: number;
    evolutionRule: EvolutionRule;
    additional: boolean;
    regional: boolean;
    canHoldItems: boolean;
    canBeBenched: boolean;
    canBeSold: boolean;
    stages?: number;
    tm: Ability | null;
    constructor(shiny?: boolean, emotion?: Emotion);
    get final(): boolean;
    get canBePlaced(): boolean;
    get canBeCloned(): boolean;
    get doesCountForTeamSize(): boolean;
    get luck(): number;
    onChangePosition(x: number, y: number, player: Player): void;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
    afterEvolve(params: {
        pokemonEvolved: Pokemon;
        pokemonsBeforeEvolution: Pokemon[];
        player: Player;
    }): void;
    beforeSimulationStart(params: {
        weather: Weather;
        player: Player;
        teamEffects: Set<Effect>;
        opponentEffects: Set<Effect>;
    }): void;
    afterSimulationStart(params: {
        player: IPlayer;
        simulation: Simulation;
        team: MapSchema<IPokemonEntity>;
        entity: IPokemonEntity;
    }): void;
    onSpawn(params: {
        entity: IPokemonEntity;
        simulation: Simulation;
    }): void;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
    removeItem(item: Item): void;
}
export declare class Ditto extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Substitute extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Egg extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    evolutionRule: HatchEvolutionRule;
    canHoldItems: boolean;
}
export declare class Electrike extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Manectric extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class MegaManectric extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Shuppet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Banette extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class MegaBanette extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Riolu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Lucario extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Crabrawler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
    passive: Passive;
}
export declare class Crabominable extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
    passive: Passive;
}
export declare class Cutiefly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Ribombee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Nickit extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Thievul extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Swablu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Altaria extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class MegaAltaria extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Scyther extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    evolutionRule: ItemEvolutionRule;
}
export declare class Scizor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Kleavor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Bounsweet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Steenee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Tsareena extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Buneary extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Lopunny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class MegaLopunny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Onix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Steelix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class MegaSteelix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Numel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Camerupt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class MegaCamerupt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Meditite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Medicham extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Elekid extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Electabuzz extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Electivire extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Gible extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Gabite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Garchomp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Beldum extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Metang extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Metagross extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Tympole extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Palpitoad extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Seismitoad extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Bagon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Shelgon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Salamence extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Ralts extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Kirlia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Gardevoir extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Fuecoco extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Crocalor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Skeledirge extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Budew extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Roselia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Roserade extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Slakoth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Vigoroth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Slaking extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Honedge extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Doublade extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Aegislash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class AegislashBlade extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Oshawott extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Dewott extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Samurott extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Larvitar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Pupitar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Tyranitar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class JangmoO extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class HakamoO extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class KommoO extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Gastly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Haunter extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Gengar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Abra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Kadabra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Alakazam extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Litwick extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Lampent extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Chandelure extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Porygon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Porygon2 extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    evolutionRule: ItemEvolutionRule;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class PorygonZ extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Sewaddle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Swadloon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Leavanny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Turtwig extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Grotle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Torterra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Deino extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Zweilous extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Hydreigon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Poliwag extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Poliwhirl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    evolutionRule: CountEvolutionRule;
}
export declare class Politoed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Poliwrath extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Magby extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Magmar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Magmortar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Solosis extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Duosion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Reuniclus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Shinx extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Luxio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Luxray extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Cubone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Marowak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class AlolanMarowak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Axew extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolutionRule: HatchEvolutionRule;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Fraxure extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolutionRule: HatchEvolutionRule;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Haxorus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Dratini extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Dragonair extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Dragonite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Goomy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sligoo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Goodra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class HisuiSliggoo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class HisuiGoodra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Lotad extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Lombre extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Ludicolo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Togepi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Togetic extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Togekiss extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Rhyhorn extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Rhydon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Rhyperior extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Aron extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Lairon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Aggron extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Whismur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Loudred extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Exploud extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Swinub extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Piloswine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Mamoswine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Snover extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Abomasnow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class MegaAbomasnow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Snorunt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Glalie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Froslass extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Vanillite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Vanillish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Vanilluxe extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Trapinch extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Vibrava extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Flygon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Pichu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Pikachu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Raichu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class AlolanRaichu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Bulbasaur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Ivysaur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Venusaur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Igglybuff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Jigglypuff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Wigglytuff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Duskull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Dusclops extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Dusknoir extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Magnemite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Magneton extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Magnezone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Horsea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Seadra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Kingdra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Flabebe extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Floette extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Florges extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Chikorita extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Bayleef extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Meganium extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Venipede extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Whirlipede extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Scolipede extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Spheal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sealeo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Walrein extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class NidoranF extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Nidorina extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Nidoqueen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class NidoranM extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Nidorino extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Nidoking extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Machop extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Machoke extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Machamp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Piplup extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Prinplup extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Empoleon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Chimchar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Monferno extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Infernape extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Mudkip extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Marshtomp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Swampert extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Torchic extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Combusken extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Blaziken extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Treecko extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Grovyle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sceptile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Cyndaquil extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Quilava extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Typhlosion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class HisuianTyphlosion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Slowpoke extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Slowbro extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Slowking extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Psyduck extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Golduck extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Squirtle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Wartortle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Blastoise extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Bellsprout extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Weepinbell extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Victreebel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Geodude extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Graveler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Golem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Totodile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Croconaw extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Feraligatr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Azurill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Marill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Azumarill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Zubat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Golbat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Crobat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Mareep extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Flaffy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Ampharos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Cleffa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Clefairy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Clefable extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Caterpie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Metapod extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Butterfree extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Weedle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Kakuna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Beedrill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Pidgey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Pidgeotto extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Pidgeot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Hoppip extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Skiploom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Jumpluff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Seedot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Nuzleaf extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Shiftry extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Charmander extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Charmeleon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Charizard extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Magikarp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    evolutionRule: CountEvolutionRule;
}
export declare class Gyarados extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onAcquired(player: Player): void;
}
export declare class Rattata extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Raticate extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class AlolanRattata extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanRaticate extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Spearow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Fearow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Meloetta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class PirouetteMeloetta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class Lugia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class ShadowLugia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Giratina extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class OriginGiratina extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class Zapdos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class GalarianZapdos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Zeraora extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Stantler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Miltank extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Yveltal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Moltres extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class GalarianMoltres extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Pinsir extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Articuno extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class GalarianArticuno extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Dialga extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Palkia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Melmetal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Suicune extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Raikou extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Entei extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Regice extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Seviper extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Lunatone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Solrock extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Regirock extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Tauros extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Heracross extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Zangoose extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Registeel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Regigigas extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class Kyogre extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Groudon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Rayquaza extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Eevee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
}
export declare class Vaporeon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Jolteon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Flareon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Espeon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Umbreon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Leafeon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sylveon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Glaceon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Volcanion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Darkrai extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Larvesta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Volcarona extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Chatot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Farfetchd extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Kecleon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Castform extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ weather, player }: {
        weather: Weather;
        player: Player;
    }): void;
}
export declare class CastformSun extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ weather, player }: {
        weather: Weather;
        player: Player;
    }): void;
}
export declare class CastformRain extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ weather, player }: {
        weather: Weather;
        player: Player;
    }): void;
}
export declare class CastformHail extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ weather, player }: {
        weather: Weather;
        player: Player;
    }): void;
}
export declare class Landorus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Thundurus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Tornadus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Enamorus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Keldeo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Terrakion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Virizion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Cobalion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Mawile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Phione extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Manaphy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Rotom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class RotomDrone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Spiritomb extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Absol extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Delibird extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class IronBundle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Lapras extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Latias extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Latios extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Uxie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Mesprit extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Azelf extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Mew extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Mewtwo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Marshadow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Kyurem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Reshiram extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Zekrom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Celebi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Victini extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ opponentEffects }: {
        opponentEffects: Set<Effect>;
    }): void;
}
export declare class Jirachi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ teamEffects }: {
        teamEffects: Set<Effect>;
    }): void;
}
export declare class Arceus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Deoxys extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class DeoxysDefense extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class DeoxysAttack extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class DeoxysSpeed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class Shaymin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class ShayminSky extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Cresselia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Heatran extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class HooH extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Torkoal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Heatmor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class PrimalGroudon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onAcquired(player: Player): void;
}
export declare class PrimalKyogre extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onAcquired(player: Player): void;
}
export declare class MegaRayquaza extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onAcquired(player: Player): void;
}
export declare class Oddish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Gloom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Vileplume extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Bellossom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Amaura extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Aurorus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Carbink extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Diancie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Sunkern extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Sunflora extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Mankey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Primeape extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Annihilape extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Anorith extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Armaldo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Wynaut extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class Wobbuffet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class Munna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Musharna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Archen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Archeops extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Gligar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Gliscor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Shieldon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Bastiodon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Mienfoo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Mienshao extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Lileep extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Cradily extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Cranidos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Rampardos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Kabuto extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Kabutops extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Omanyte extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Omastar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Clamperl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    evolutionRule: CountEvolutionRule;
}
export declare class Gorebyss extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Huntail extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Relicanth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Tyrunt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Tyrantrum extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Aerodactyl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Genesect extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Hatenna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Hattrem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Hatterene extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Fennekin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Braixen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Delphox extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Regieleki extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Regidrago extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Guzzlord extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Eternatus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Nincada extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Ninjask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
    onAcquired(player: Player): void;
}
export declare class Shedinja extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Happiny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Chansey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Blissey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class TapuKoko extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class TapuLele extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Xerneas extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class TapuFini extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class TapuBulu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Stakataka extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Blacephalon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Houndour extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Houndoom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class MegaHoundoom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Cacnea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Cacturne extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Pumpkaboo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Gourgeist extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Natu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Xatu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Noibat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Noivern extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Shellder extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Cloyster extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Buizel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Floatzel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Ponyta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Rapidash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class GalarianPonyta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class GalarianRapidash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Makuhita extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Hariyama extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Sentret extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Furret extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Joltik extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Galvantula extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Paras extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Parasect extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Corphish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Crawdaunt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Meowth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Persian extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class AlolanMeowth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class AlolanPersian extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Hoothoot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Noctowl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Munchlax extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Snorlax extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Poipole extends Pokemon {
    baseHp: number;
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    evolutionRule: ConditionBasedEvolutionRule;
    afterEvolve({ pokemonEvolved: naganadel, pokemonsBeforeEvolution: poipoles }: {
        pokemonEvolved: Pokemon;
        pokemonsBeforeEvolution: Pokemon[];
    }): void;
}
export declare class Naganadel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Growlithe extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Arcanine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class HisuiGrowlithe extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class HisuiArcanine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Smoochum extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Jynx extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class MimeJr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class MrMime extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Salandit extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Salazzle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Venonat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Venomoth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Voltorb extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Electrode extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class HisuiVoltorb extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class HisuiElectrode extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Slugma extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Magcargo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Sneasel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Weavile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class HisuiSneasel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Sneasler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Seel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Dewgong extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Croagunk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Toxicroak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Chinchou extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Lanturn extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Poochyena extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Mightyena extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Bronzor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Bronzong extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Drifloon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Drifblim extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Shroomish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Breloom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Tentacool extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Tentacruel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Snubull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Granbull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class TypeNull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Silvally extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onChangePosition: (this: Pokemon, x: number, y: number, player: Player) => void;
}
export declare class Applin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Appletun extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Staryu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Starmie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Vulpix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Ninetales extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class AlolanVulpix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanNinetales extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Snom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Frosmoth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Wailmer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Wailord extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Dreepy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Drakloak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Dragapult extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Snivy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Servine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Serperior extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Starly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Staravia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Staraptor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Scorbunny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Raboot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Cinderace extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class AlolanGeodude extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanGraveler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanGolem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Popplio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Brionne extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Primarina extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Gothita extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Gothorita extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Gothitelle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sandshrew extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Sandslash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Nosepass extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Probopass extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Woobat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Swoobat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Pineco extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Forretress extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class UnownA extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownB extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownC extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownD extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownE extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownF extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownG extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownH extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownI extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownJ extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownK extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownL extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownM extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownN extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownO extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownP extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownQ extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownR extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownS extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownT extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownU extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownV extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownW extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownX extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownY extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownZ extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownQuestion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class UnownExclamation extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
}
export declare class Diglett extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Dugtrio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class AlolanDiglett extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanDugtrio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Rowlet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Dartix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Decidueye extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Zorua extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Zoroark extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class HisuiZorua extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class HisuiZoroark extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Grimer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Muk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class AlolanGrimer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanMuk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Ekans extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Arbok extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Carvanha extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Sharpedo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Froakie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Frogadier extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Greninja extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Chingling extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Chimecho extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Tyrogue extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    evolutionRule: ItemEvolutionRule;
}
export declare class Hitmontop extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Hitmonlee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Hitmonchan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Mimikyu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class MimikyuBusted extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Bonsley extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class Sudowoodo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class Combee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Vespiqueen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Shuckle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Tepig extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Pignite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Emboar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Wurmple extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    evolutionRule: CountEvolutionRule;
}
export declare class Silcoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Beautifly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Cascoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Dustox extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Tinkatink extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Tinkatuff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Tinkaton extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Maractus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Plusle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Minun extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Spectrier extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Kartana extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Dhelmise extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Tropius extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    afterSimulationStart({ player, entity }: {
        player: IPlayer;
        entity: IPokemonEntity;
    }): void;
}
export declare class Carnivine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sableye extends Pokemon {
    types: SetSchema<Synergy>;
    evolutionRule: ItemEvolutionRule;
    evolution: Pkm;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class MegaSableye extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class Koffing extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Weezing extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Clauncher extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Clawitzer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Yanma extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class Yanmega extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class Helioptile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity, simulation }: {
        entity: IPokemonEntity;
        simulation: Simulation;
    }): void;
}
export declare class Heliolisk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity, simulation }: {
        entity: IPokemonEntity;
        simulation: Simulation;
    }): void;
}
export declare class Exeggcute extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Exeggutor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class AlolanExeggutor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Bidoof extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Bibarel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Spinda extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class Baltoy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Claydol extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Purrloin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Liepard extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Barboach extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity, simulation }: {
        entity: IPokemonEntity;
        simulation: Simulation;
    }): void;
}
export declare class Whiscash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    onSpawn({ entity, simulation }: {
        entity: IPokemonEntity;
        simulation: Simulation;
    }): void;
}
export declare class Scraggy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Scrafty extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Finneon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Lumineon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Stunky extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Skuntank extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Illumise extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Volbeat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Necrozma extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class UltraNecrozma extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class Cherrubi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Cherrim extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    attackSprite: AttackSprite;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class CherrimSunlight extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    attackSprite: AttackSprite;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class Misdreavus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Mismagius extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Doduo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Dodrio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Kricketot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Kricketune extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Hippopotas extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Hippodown extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Wingull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Pelipper extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Murkrow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    beforeSimulationStart({ opponentEffects }: {
        opponentEffects: Set<Effect>;
    }): void;
}
export declare class Honchkrow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    attackSprite: AttackSprite;
    beforeSimulationStart({ opponentEffects }: {
        opponentEffects: Set<Effect>;
    }): void;
}
export declare class Zigzagoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Linoone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Phantump extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Trevenant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class HisuianQwilfish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Overqwil extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Xurkitree extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    attackType: AttackType;
}
export declare class Nihilego extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Tandemaus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    passive: Passive;
}
export declare class MausholdThree extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    passive: Passive;
}
export declare class MausholdFour extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Morpeko extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class MorpekoHangry extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Minior extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class MiniorKernelBlue extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class MiniorKernelRed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class MiniorKernelOrange extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class MiniorKernelGreen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Hoopa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class HoopaUnbound extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Gimmighoul extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    passive: Passive;
}
export declare class Gholdengo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
    onAcquired(player: Player): void;
}
export declare class Sobble extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Drizzile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Inteleon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Comfey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    canHoldItems: boolean;
    afterSimulationStart({ simulation, team, entity }: {
        simulation: Simulation;
        team: MapSchema<IPokemonEntity>;
        entity: IPokemonEntity;
    }): void;
}
export declare class Lillipup extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Herdier extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Stoutland extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Pheromosa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Dracovish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Bruxish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Corsola extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    regional: boolean;
}
export declare class GalarCorsola extends Pokemon {
    types: SetSchema<Synergy>;
    evolution: Pkm;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Cursola extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Smeargle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    afterSimulationStart({ entity }: {
        entity: any;
    }): void;
}
export declare class Toxel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Toxtricity extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Cyclizar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Pawniard extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Bisharp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Kingambit extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Feebas extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    evolutionRule: CountEvolutionRule;
}
export declare class Milotic extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onAcquired(player: Player): void;
}
export declare class Dewpider extends Pokemon {
    types: SetSchema<Synergy>;
    additional: boolean;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Araquanid extends Pokemon {
    types: SetSchema<Synergy>;
    additional: boolean;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Lickitung extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Lickilicky extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Kangaskhan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Teddiursa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Ursaring extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Ursaluna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ weather, player }: {
        weather: Weather;
        player: Player;
    }): void;
}
export declare class UrsalunaBloodmoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    beforeSimulationStart({ weather, player }: {
        weather: Weather;
        player: Player;
    }): void;
    onAcquired(player: Player): void;
}
export declare class Aipom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Ambipom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Deerling extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sawsbuck extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Patrat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Watchog extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Spinarak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Ariados extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Rockruff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class LycanrocDusk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ weather, player }: {
        weather: any;
        player: any;
    }): void;
}
export declare class LycanrocNight extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ weather, player }: {
        weather: any;
        player: any;
    }): void;
}
export declare class LycanrocDay extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    beforeSimulationStart({ weather, player }: {
        weather: any;
        player: any;
    }): void;
}
export declare class Druddigon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Cosmog extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Cosmoem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    evolutionRule: ConditionBasedEvolutionRule;
    onAcquired(player: Player): void;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Solgaleo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onAcquired(player: Player): void;
}
export declare class Lunala extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onAcquired(player: Player): void;
}
export declare class Magearna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Impidimp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Morgrem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Grimmsnarl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Drowzee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Hypno extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Wattrel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
    passive: Passive;
}
export declare class Kilowattrel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
    passive: Passive;
}
export declare class BurmyPlant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    stages: number;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class BurmySandy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    stages: number;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class BurmyTrash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    stages: number;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class WormadamPlant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    stages: number;
    regional: boolean;
    afterEvolve: (params: {
        this: Pokemon;
        pokemonEvolved: Pokemon;
        pokemonsBeforeEvolution: Pokemon[];
        player: Player;
    }) => void;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class WormadamSandy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    stages: number;
    regional: boolean;
    afterEvolve: (params: {
        this: Pokemon;
        pokemonEvolved: Pokemon;
        pokemonsBeforeEvolution: Pokemon[];
        player: Player;
    }) => void;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class WormadamTrash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    stages: number;
    regional: boolean;
    afterEvolve: (params: {
        this: Pokemon;
        pokemonEvolved: Pokemon;
        pokemonsBeforeEvolution: Pokemon[];
        player: Player;
    }) => void;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Mothim extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    stages: number;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class PaldeaWooper extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Clodsire extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Tangela extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Tangrowth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Phanpy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Donphan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Spoink extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Grumpig extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Sinistea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Polteageist extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Ferroseed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Ferrothorn extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Golett extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Golurk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Trubbish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    additional: boolean;
    statIncreases: {
        ATK_SPEED: number;
        AP: number;
        CRIT_CHANCE: number;
        PP: number;
        SHIELD: number;
        ATK: number;
        SPE_DEF: number;
        DEF: number;
    };
    beforeSimulationStart({ player }: {
        player: Player;
    }): void;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
    afterEvolve({ pokemonEvolved: garbodorObj, pokemonsBeforeEvolution: trubbishes }: {
        pokemonEvolved: Pokemon;
        pokemonsBeforeEvolution: Pokemon[];
    }): void;
}
export declare class Garbodor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    additional: boolean;
    statIncreases: {
        ATK_SPEED: number;
        AP: number;
        CRIT_CHANCE: number;
        PP: number;
        SHIELD: number;
        ATK: number;
        SPE_DEF: number;
        DEF: number;
    };
    defaultValues: {
        HP: number;
        ATK: number;
        DEF: number;
        SPE_DEF: number;
    };
    beforeSimulationStart: ({ player }: {
        player: Player;
    }) => void;
    onSpawn: ({ entity }: {
        entity: IPokemonEntity;
    }) => void;
}
export declare class Grubbin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Charjabug extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Vikavolt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class ShellosWestSea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class GastrodonWestSea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class ShellosEastSea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class GastrodonEastSea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Rufflet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Braviary extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Klefki extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Hawlucha extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Stonjourner extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
    afterSimulationStart({ entity, simulation }: {
        entity: IPokemonEntity;
        simulation: Simulation;
    }): void;
}
export declare class Cramorant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Arrokuda extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Durant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Wishiwashi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    evolutionRule: CountEvolutionRule;
}
export declare class WishiwashiSchool extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onAcquired(player: Player): void;
}
export declare class Pawmi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Pawmo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Pawmot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Pyukumuku extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Goldeen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Seaking extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Luvdisc extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Audino extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Petilil extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Lilligant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    additional: boolean;
}
export declare class Mantyke extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class Mantine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Remoraid extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onChangePosition(x: number, y: number, player: Player): void;
}
export declare class Octillery extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sigilyph extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Frigibax extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Arctibax extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Baxcalibur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Sandile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Krokorok extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Krookodile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Binacle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Barbaracle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Skarmory extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    afterSimulationStart(params: {
        player: IPlayer;
        simulation: Simulation;
        entity: IPokemonEntity;
    }): void;
}
export declare class OgerponTeal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onAcquired: (player: Player) => void;
    passive: Passive;
}
export declare class OgerponTealMask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    shiny: boolean;
    onAcquired: (player: Player) => void;
    passive: Passive;
}
export declare class OgerponWellspring extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onAcquired: (player: Player) => void;
    passive: Passive;
}
export declare class OgerponWellspringMask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    shiny: boolean;
    onAcquired: (player: Player) => void;
    passive: Passive;
}
export declare class OgerponHearthflame extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onAcquired: (player: Player) => void;
    passive: Passive;
}
export declare class OgerponHearthflameMask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    shiny: boolean;
    onAcquired: (player: Player) => void;
    passive: Passive;
}
export declare class OgerponCornerstone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    onAcquired: (player: Player) => void;
    passive: Passive;
}
export declare class OgerponCornerstoneMask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    shiny: boolean;
    onAcquired: (player: Player) => void;
    passive: Passive;
}
export declare class IronHands extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Rookidee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Corvisquire extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Corviknight extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    regional: boolean;
}
export declare class Turtonator extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sandygast extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Palossand extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Skorupi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Drapion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Darumaka extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Darmanitan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class DarmanitanZen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
}
export declare class Krabby extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Kingler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Zygarde10 extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class Zygarde50 extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class Zygarde100 extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Sizzlipede extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Centiskorch extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    attackSprite: AttackSprite;
}
export declare class Stufful extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Bewear extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Glimmet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Glimmora extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
    passive: Passive;
}
export declare class Fletchling extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Fletchinder extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Talonflame extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    attackSprite: AttackSprite;
}
export declare class Vullaby extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Mandibuzz extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Inkay extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Malamar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    attackSprite: AttackSprite;
}
export declare class Timburr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onChangePosition(x: any, y: any, player: any): void;
    afterSell(player: any): void;
    afterEvolve: (params: {
        pokemonEvolved: Pokemon;
        pokemonsBeforeEvolution: Pokemon[];
        player: Player;
    }) => void;
}
export declare class Gurdurr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onChangePosition(x: any, y: any, player: any): void;
    afterSell(player: any): void;
    afterEvolve: (params: {
        pokemonEvolved: Pokemon;
        pokemonsBeforeEvolution: Pokemon[];
        player: Player;
    }) => void;
}
export declare class Conkeldurr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    attackSprite: AttackSprite;
    onChangePosition(x: any, y: any, player: any): void;
    afterSell(player: any): void;
}
export declare class PillarWood extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
    canBeBenched: boolean;
    canBeSold: boolean;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class PillarIron extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
    canBeBenched: boolean;
    canBeSold: boolean;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare class PillarConcrete extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
    canBeBenched: boolean;
    canBeSold: boolean;
    onSpawn({ entity }: {
        entity: IPokemonEntity;
    }): void;
}
export declare const PokemonClasses: Record<Pkm, new (shiny?: boolean, emotion?: Emotion) => Pokemon>;
