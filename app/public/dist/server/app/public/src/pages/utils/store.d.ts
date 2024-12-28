export declare abstract class Store<Key extends string> {
    abstract getter(key: Key): any;
    abstract setter(key: Key, value: any): boolean;
    abstract deleter(key: Key): boolean;
    abstract cleaner(): void;
    constructor(params?: object);
    has(key: Key): boolean;
    get(key: Key): any;
    put(key: Key, value: any): void;
    set(key: Key, value: any, expirationTimeInSeconds?: number): void;
    delete(key: Key): boolean;
    clear(): void;
}
export declare class LocalStore<Key extends string> extends Store<Key> {
    getter(key: Key): any;
    setter(key: Key, value: any): boolean;
    deleter(key: string): boolean;
    cleaner(): void;
}
export declare enum LocalStoreKeys {
    PREFERENCES = "pac_preferences",
    RECONNECTION_LOBBY = "reconnection_lobby",
    RECONNECTION_PREPARATION = "reconnection_preparation",
    RECONNECTION_GAME = "reconnection_game",
    RECONNECTION_AFTER_GAME = "reconnection_after-game",
    TEAM_PLANNER = "team_planner",
    LAST_PATCH_READ = "last_patch_read",
    COLLECTION_FILTER = "collection_filter"
}
export declare const localStore: LocalStore<LocalStoreKeys>;
