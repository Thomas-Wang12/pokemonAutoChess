import { GameObjects } from "phaser";
import ReactDOM from "react-dom/client";
import { Emotion } from "../../../../types";
import { Ability } from "../../../../types/enum/Ability";
import { Rarity } from "../../../../types/enum/Game";
import { Passive } from "../../../../types/enum/Passive";
import { Pkm } from "../../../../types/enum/Pokemon";
import { Synergy } from "../../../../types/enum/Synergy";
export default class PokemonDetail extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    hp: HTMLDivElement;
    atk: HTMLDivElement;
    def: HTMLDivElement;
    speDef: HTMLDivElement;
    range: HTMLDivElement;
    atkSpeed: HTMLDivElement;
    critChance: HTMLDivElement;
    critPower: HTMLDivElement;
    ap: HTMLDivElement;
    abilityDescription: HTMLDivElement | null;
    passiveDescription: HTMLDivElement | null;
    pp: HTMLDivElement;
    abilityRoot: ReactDOM.Root | null;
    passiveDescriptionRoot: ReactDOM.Root | null;
    constructor(scene: Phaser.Scene, x: number, y: number, name: Pkm, rarity: Rarity, hp: number, atk: number, def: number, speDef: number, range: number, atkSpeed: number, critChance: number, critPower: number, ap: number, pp: number, luck: number, types: Set<Synergy>, skill: Ability, passive: Passive, emotion: Emotion, shiny: boolean, index: string, stars: number, evolution: Pkm);
    updateValue(el: HTMLElement, previousValue: number, value: number): void;
    updateAbilityDescription({ skill, stars, ap, luck }: {
        skill: Ability;
        stars: number;
        ap: number;
        luck: number;
    }): void;
    updatePassiveDescription({ passive, stars, ap, luck }: {
        passive: Passive;
        stars: number;
        ap: number;
        luck: number;
    }): void;
}
