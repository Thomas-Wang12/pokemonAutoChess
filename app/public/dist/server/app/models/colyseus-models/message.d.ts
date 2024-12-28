import { Schema } from "@colyseus/schema";
import { IChatV2 } from "../../types/index";
export default class Message extends Schema implements IChatV2 {
    id: string;
    payload: string;
    authorId: string;
    author: string;
    avatar: string;
    time: number;
    constructor(id: string, payload: string, authorId: string, author: string, avatar: string, time: number);
}
