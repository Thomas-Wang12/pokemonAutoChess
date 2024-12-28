declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    lobby: import("./LobbyStore").IUserLobbyState;
    network: import("./NetworkStore").INetwork;
    preparation: import("./PreparationStore").IUserPreparationState;
    game: import("./GameStore").GameStateStore;
    after: import("./AfterGameStore").IUserAfterState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        lobby: import("./LobbyStore").IUserLobbyState;
        network: import("./NetworkStore").INetwork;
        preparation: import("./PreparationStore").IUserPreparationState;
        game: import("./GameStore").GameStateStore;
        after: import("./AfterGameStore").IUserAfterState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
