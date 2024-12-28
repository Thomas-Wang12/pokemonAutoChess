import { PayloadAction } from "@reduxjs/toolkit";
import { IAfterGamePlayer } from "../../../types";
export interface IUserAfterState {
    players: IAfterGamePlayer[];
    elligibleToXP: boolean;
    elligibleToELO: boolean;
}
export declare const afterSlice: import("@reduxjs/toolkit").Slice<IUserAfterState, {
    addPlayer: (state: import("immer").WritableDraft<IUserAfterState>, action: PayloadAction<IAfterGamePlayer>) => void;
    leaveAfter: () => IUserAfterState;
    setElligibilityToXP: (state: import("immer").WritableDraft<IUserAfterState>, action: PayloadAction<boolean>) => void;
    setElligibilityToELO: (state: import("immer").WritableDraft<IUserAfterState>, action: PayloadAction<boolean>) => void;
}, "after", "after", import("@reduxjs/toolkit").SliceSelectors<IUserAfterState>>;
export declare const addPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IAfterGamePlayer, "after/addPlayer">, leaveAfter: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"after/leaveAfter">, setElligibilityToXP: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "after/setElligibilityToXP">, setElligibilityToELO: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "after/setElligibilityToELO">;
declare const _default: import("redux").Reducer<IUserAfterState>;
export default _default;
