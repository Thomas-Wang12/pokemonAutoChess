import { components } from "../../api-v1/openapi";
declare const _default: import("mongoose").Model<{
    id?: string;
    name?: string;
    startTime?: number;
    endTime?: number;
    players?: {
        id?: string;
        avatar?: string;
        name?: string;
        elo?: number;
        rank?: number;
        pokemons?: components["schemas"]["Pokemon"][];
    }[];
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    id?: string;
    name?: string;
    startTime?: number;
    endTime?: number;
    players?: {
        id?: string;
        avatar?: string;
        name?: string;
        elo?: number;
        rank?: number;
        pokemons?: components["schemas"]["Pokemon"][];
    }[];
}> & {
    id?: string;
    name?: string;
    startTime?: number;
    endTime?: number;
    players?: {
        id?: string;
        avatar?: string;
        name?: string;
        elo?: number;
        rank?: number;
        pokemons?: components["schemas"]["Pokemon"][];
    }[];
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default _default;
