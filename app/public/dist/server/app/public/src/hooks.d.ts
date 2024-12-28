import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "./stores";
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    lobby: import("./stores/LobbyStore").IUserLobbyState;
    network: import("./stores/NetworkStore").INetwork;
    preparation: import("./stores/PreparationStore").IUserPreparationState;
    game: import("./stores/GameStore").GameStateStore;
    after: import("./stores/AfterGameStore").IUserAfterState;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export declare const selectCurrentPlayer: (state: RootState) => import("../../types").IPlayer | undefined;
