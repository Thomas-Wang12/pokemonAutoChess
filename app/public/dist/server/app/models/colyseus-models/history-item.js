"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
class HistoryItem extends schema_1.Schema {
    constructor(id, name, result, avatar, weather) {
        super();
        this.id = id;
        this.name = name;
        this.result = result;
        this.avatar = avatar;
        this.weather = weather;
    }
}
exports.default = HistoryItem;
__decorate([
    (0, schema_1.type)("string")
], HistoryItem.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], HistoryItem.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], HistoryItem.prototype, "result", void 0);
__decorate([
    (0, schema_1.type)("string")
], HistoryItem.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)("string")
], HistoryItem.prototype, "weather", void 0);
//# sourceMappingURL=history-item.js.map