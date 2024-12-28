"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
class Message extends schema_1.Schema {
    constructor(id, payload, authorId, author, avatar, time) {
        super();
        this.id = id;
        this.payload = payload;
        this.authorId = authorId;
        this.author = author;
        this.avatar = avatar;
        this.time = time;
    }
}
exports.default = Message;
__decorate([
    (0, schema_1.type)("string")
], Message.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], Message.prototype, "payload", void 0);
__decorate([
    (0, schema_1.type)("string")
], Message.prototype, "authorId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Message.prototype, "author", void 0);
__decorate([
    (0, schema_1.type)("string")
], Message.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)("number")
], Message.prototype, "time", void 0);
//# sourceMappingURL=message.js.map