import { ITournament } from "../../types/interfaces/Tournament";
export declare const Tournament: import("mongoose").Model<ITournament, {}, {}, {}, import("mongoose").Document<unknown, {}, ITournament> & ITournament & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default Tournament;
