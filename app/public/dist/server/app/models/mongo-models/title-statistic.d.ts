import { Title } from "../../types";
export interface ITitleStatistic {
    name: Title;
    rarity: number;
}
declare const _default: import("mongoose").Model<ITitleStatistic, {}, {}, {}, import("mongoose").Document<unknown, {}, ITitleStatistic> & ITitleStatistic & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default _default;
export declare function fetchTitles(): Promise<ITitleStatistic[]>;
