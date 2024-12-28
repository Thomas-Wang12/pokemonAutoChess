"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseCodesMessages = exports.CloseCodes = void 0;
var CloseCodes;
(function (CloseCodes) {
    CloseCodes[CloseCodes["NORMAL_CLOSURE"] = 1000] = "NORMAL_CLOSURE";
    CloseCodes[CloseCodes["NO_STATUS_RECEIVED"] = 1005] = "NO_STATUS_RECEIVED";
    CloseCodes[CloseCodes["ABNORMAL_CLOSURE"] = 1006] = "ABNORMAL_CLOSURE";
    CloseCodes[CloseCodes["TIMEOUT"] = 3008] = "TIMEOUT";
    CloseCodes[CloseCodes["USER_INACTIVE"] = 4001] = "USER_INACTIVE";
    CloseCodes[CloseCodes["USER_KICKED"] = 4002] = "USER_KICKED";
    CloseCodes[CloseCodes["USER_BANNED"] = 4003] = "USER_BANNED";
    CloseCodes[CloseCodes["USER_NOT_AUTHENTICATED"] = 4004] = "USER_NOT_AUTHENTICATED";
    CloseCodes[CloseCodes["USER_RANK_TOO_LOW"] = 4005] = "USER_RANK_TOO_LOW";
    CloseCodes[CloseCodes["USER_RANK_TOO_HIGH"] = 4006] = "USER_RANK_TOO_HIGH";
    CloseCodes[CloseCodes["USER_TIMEOUT"] = 4007] = "USER_TIMEOUT";
    CloseCodes[CloseCodes["ROOM_FULL"] = 4010] = "ROOM_FULL";
    CloseCodes[CloseCodes["ROOM_EMPTY"] = 4011] = "ROOM_EMPTY";
    CloseCodes[CloseCodes["ROOM_DELETED"] = 4012] = "ROOM_DELETED";
})(CloseCodes || (exports.CloseCodes = CloseCodes = {}));
exports.CloseCodesMessages = {
    [CloseCodes.USER_INACTIVE]: "USER_INACTIVE",
    [CloseCodes.USER_KICKED]: "USER_KICKED",
    [CloseCodes.USER_BANNED]: "USER_BANNED",
    [CloseCodes.USER_RANK_TOO_LOW]: "USER_RANK_TOO_LOW",
    [CloseCodes.USER_NOT_AUTHENTICATED]: "USER_NOT_AUTHENTICATED",
    [CloseCodes.USER_TIMEOUT]: "USER_TIMEOUT",
    [CloseCodes.ROOM_FULL]: "ROOM_FULL",
    [CloseCodes.ROOM_EMPTY]: "ROOM_EMPTY",
    [CloseCodes.ROOM_DELETED]: "ROOM_DELETED"
};
//# sourceMappingURL=CloseCodes.js.map