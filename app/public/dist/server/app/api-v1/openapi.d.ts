export interface paths {
    "/history/gameById/{id}": {
        get: operations["getGameById"];
    };
    "/history/gamesByName/{name}": {
        get: operations["getGamesByName"];
    };
    "/history/gamesByTime": {
        get: operations["getGamesByTime"];
    };
    "/game/create/{name}": {
        get: operations["createGame"];
    };
    "/game/status/{id}": {
        get: operations["getGameStatus"];
    };
}
export interface components {
    schemas: {
        Pokemon: {
            name?: string;
            avatar?: string;
            inventory?: string[];
        };
        GameHistory: {
            id?: string;
            name?: string;
            startTime?: number;
            endTime?: number;
            players?: {
                id?: string;
                avatar?: string;
                name?: string;
                elo?: number;
                rank?: number;
                pokemons?: components["schemas"]["Pokemon"][];
            }[];
        };
        Player: {
            id?: string;
            avatar?: string;
            name?: string;
            elo?: number;
        };
    };
}
export interface operations {
    getGameById: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GameHistory"];
                };
            };
            400: unknown;
            404: unknown;
            default: unknown;
        };
    };
    getGamesByName: {
        parameters: {
            path: {
                name: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GameHistory"][];
                };
            };
            400: unknown;
            404: unknown;
            default: unknown;
        };
    };
    getGamesByTime: {
        parameters: {
            query: {
                startTime: number;
                endTime: number;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GameHistory"][];
                };
            };
            400: unknown;
            404: unknown;
            default: unknown;
        };
    };
    createGame: {
        parameters: {
            path: {
                name: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        name?: string;
                        id?: string;
                    };
                };
            };
            400: unknown;
            404: unknown;
        };
    };
    getGameStatus: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        name?: string;
                        id?: string;
                        players?: components["schemas"]["Player"][];
                    };
                };
            };
            400: unknown;
            404: unknown;
        };
    };
}
