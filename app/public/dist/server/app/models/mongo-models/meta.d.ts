import { Pkm } from "../../types/enum/Pokemon";
import { Synergy } from "../../types/enum/Synergy";
export interface ITeam {
    cluster_id: string;
    rank: number;
    x: number;
    y: number;
    pokemons: {
        [key in Pkm]?: number;
    };
}
export interface IMeta {
    cluster_id: string;
    count: number;
    ratio: number;
    winrate: number;
    mean_rank: number;
    types: {
        [key in Synergy]?: number;
    };
    pokemons: {
        [key in Pkm]?: number;
    };
    teams: ITeam[];
    x: number;
    y: number;
}
declare const _default: import("mongoose").Model<IMeta, {}, {}, {}, import("mongoose").Document<unknown, {}, IMeta> & IMeta & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default _default;
export declare function fetchMeta(): Promise<IMeta[]>;
