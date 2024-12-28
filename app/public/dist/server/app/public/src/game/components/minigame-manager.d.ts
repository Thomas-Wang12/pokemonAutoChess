import { Emotion, IFloatingItem, IPokemonAvatar, IPortal, ISynergySymbol } from "../../../../types";
import AnimationManager from "../animation-manager";
import GameScene from "../scenes/game-scene";
import { FloatingItem } from "./floating-item";
import PokemonAvatar from "./pokemon-avatar";
import PokemonSpecial from "./pokemon-special";
import { Portal, SynergySymbol } from "./portal";
export default class MinigameManager {
    pokemons: Map<string, PokemonAvatar>;
    items: Map<string, FloatingItem>;
    portals: Map<string, Portal>;
    symbols: Map<string, SynergySymbol>;
    uid: string;
    scene: GameScene;
    display: boolean;
    animationManager: AnimationManager;
    kecleon: PokemonSpecial | null;
    constructor(scene: GameScene, animationManager: AnimationManager, uid: string, avatars: Map<string, IPokemonAvatar>, items: Map<string, IFloatingItem>);
    initialize(): void;
    dispose(): void;
    update(): void;
    buildPokemons(avatars: Map<string, IPokemonAvatar>): void;
    buildItems(items: Map<string, IFloatingItem>): void;
    buildPortals(portals: Map<string, IPortal>): void;
    getVector(x: number, y: number): {
        x: number;
        y: number;
    };
    addItem(item: IFloatingItem): void;
    removeItem(itemToRemove: IFloatingItem): void;
    changeItem(item: IFloatingItem, field: string, value: string | number): void;
    addPortal(portal: IPortal): void;
    removePortal(portalToRemove: IPortal): void;
    changePortal(portal: IPortal, field: string, value: string | number): void;
    addSymbol(symbol: ISynergySymbol): void;
    removeSymbol(symbolToRemove: ISynergySymbol): void;
    changeSymbol(symbol: ISynergySymbol, field: string, value: string | number): void;
    addPokemon(pokemon: IPokemonAvatar): void;
    removePokemon(pokemonToRemove: IPokemonAvatar): void;
    changePokemon(pokemon: IPokemonAvatar, field: string, value: any): void;
    addKecleon(): void;
    showEmote(id: string, emote: Emotion): void;
    onNpcDialog({ npc, dialog }: {
        npc: string;
        dialog: string;
    }): void;
}
