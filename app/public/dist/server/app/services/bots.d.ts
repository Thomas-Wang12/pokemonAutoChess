import { IBot } from "../models/mongo-models/bot-v2";
import { mongo } from "mongoose";
export declare function fetchBots(): Promise<Map<string, IBot>>;
export declare function getBotsList(options?: {
    withSteps: boolean;
}): Partial<IBot>[];
export declare function getBotData(id: string): IBot | undefined;
export declare function addBotToDatabase(json: {
    name: string;
    avatar: string;
    elo: number;
    author: string;
    steps: number;
}): Promise<IBot>;
export declare function deleteBotFromDatabase(id: string): Promise<mongo.DeleteResult>;
