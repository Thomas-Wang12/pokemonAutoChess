export interface IBotMonitoring {
    avatar: string;
    name: string;
    author: string;
    data: IMonitoringData[];
}
export interface IMonitoringData {
    time: number;
    elo: number;
}
declare const _default: import("mongoose").Model<IBotMonitoring, {}, {}, {}, import("mongoose").Document<unknown, {}, IBotMonitoring> & IBotMonitoring & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default _default;
