export declare enum CloseCodes {
    NORMAL_CLOSURE = 1000,
    NO_STATUS_RECEIVED = 1005,
    ABNORMAL_CLOSURE = 1006,
    TIMEOUT = 3008,
    USER_INACTIVE = 4001,
    USER_KICKED = 4002,
    USER_BANNED = 4003,
    USER_NOT_AUTHENTICATED = 4004,
    USER_RANK_TOO_LOW = 4005,
    USER_RANK_TOO_HIGH = 4006,
    USER_TIMEOUT = 4007,
    ROOM_FULL = 4010,
    ROOM_EMPTY = 4011,
    ROOM_DELETED = 4012
}
export declare const CloseCodesMessages: {
    [code in CloseCodes]?: string;
};
