export type Keybindings = {
    sell: string;
    buy_xp: string;
    refresh: string;
    lock: string;
    switch: string;
    emote: string;
};
export interface IPreferencesState {
    musicVolume: number;
    sfxVolume: number;
    playInBackground: boolean;
    showDpsMeter: boolean;
    showDetailsOnHover: boolean;
    showDamageNumbers: boolean;
    disableAnimatedTilemap: boolean;
    keybindings: Keybindings;
    renderer: number;
}
export declare const preferences: IPreferencesState;
export declare function loadPreferences(): IPreferencesState;
export declare function savePreferences(modified: Partial<IPreferencesState>): Promise<void>;
