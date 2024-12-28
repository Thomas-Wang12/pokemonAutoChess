import { Item } from "../../types/enum/Item";
import { Pkm } from "../../types/enum/Pokemon";
export interface IPokemonsStatisticV2 {
    tier: string;
    pokemons: Map<string, {
        rank: number;
        count: number;
        name: Pkm;
        items: Item[];
        item_count: number;
    }>;
}
declare const _default: import("mongoose").Model<IPokemonsStatisticV2, {}, {}, {}, import("mongoose").Document<unknown, {}, IPokemonsStatisticV2> & IPokemonsStatisticV2 & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default _default;
export declare function fetchMetaPokemons(): Promise<IPokemonsStatisticV2[]>;
