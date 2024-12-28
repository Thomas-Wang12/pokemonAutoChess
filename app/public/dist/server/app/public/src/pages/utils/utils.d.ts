export declare const FIREBASE_CONFIG: {
    apiKey: string | undefined;
    authDomain: string | undefined;
    projectId: string | undefined;
    storageBucket: string | undefined;
    messagingSenderId: string | undefined;
    appId: string | undefined;
};
export declare function transformCoordinate(x: number, y: number): number[];
export declare function transformAttackCoordinate(x: number, y: number, flip: boolean): number[];
export declare function transformMiniGameXCoordinate(x: number): number;
export declare function transformMiniGameYCoordinate(y: number): number;
