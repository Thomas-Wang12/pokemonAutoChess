import { IBot } from "../models/mongo-models/bot-v2";
import { IUserMetadata } from "../models/mongo-models/user-metadata";
export declare const discordService: {
    announceBan(user: IUserMetadata, bannedUser: IUserMetadata, reason: string): void;
    announceUnban(user: IUserMetadata, name: string): void;
    announceBotCreation(bot: IBot, url: string, author: string): void;
    announceBotAddition(botData: IBot, url: string, user: IUserMetadata): void;
    announceBotDeletion(botData: IBot, user: IUserMetadata): void;
};
