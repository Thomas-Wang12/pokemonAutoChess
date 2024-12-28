import { Item } from "../../types/enum/Item";
export interface IItemsStatistic {
    rank: number;
    count: number;
    name: Item;
    pokemons: string[];
}
export declare const ItemsStatistics: import("mongoose").Model<IItemsStatistic, {}, {}, {}, import("mongoose").Document<unknown, {}, IItemsStatistic> & IItemsStatistic & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default ItemsStatistics;
export declare function fetchMetaItems(): Promise<IItemsStatistic[]>;
