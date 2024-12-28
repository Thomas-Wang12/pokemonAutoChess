import { Item } from "../../types/enum/Item";
import { Pkm } from "../../types/enum/Pokemon";
export interface IPokemonsStatistic {
    rank: number;
    count: number;
    name: Pkm;
    items: Item[];
    item_count: number;
}
declare const _default: import("mongoose").Model<IPokemonsStatistic, {}, {}, {}, import("mongoose").Document<unknown, {}, IPokemonsStatistic> & IPokemonsStatistic & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default _default;
export declare function fetchMetaPokemons(): Promise<IPokemonsStatistic[]>;
