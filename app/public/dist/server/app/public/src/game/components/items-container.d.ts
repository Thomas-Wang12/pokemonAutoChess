import { ArraySchema, SetSchema } from "@colyseus/schema";
import { GameObjects } from "phaser";
import Player from "../../../../models/colyseus-models/player";
import { Item } from "../../../../types/enum/Item";
export default class ItemsContainer extends GameObjects.Container {
    pokemonId: string | null;
    playerId: string;
    constructor(scene: Phaser.Scene, inventory: SetSchema<Item> | ArraySchema<Item>, x: number, y: number, pokemonId: string | null, playerId: string);
    render(inventory: SetSchema<Item> | ArraySchema<Item>): void;
    closeDetails(): void;
    setPlayer(player: Player): void;
    updateCount(item: Item, count: number): void;
}
