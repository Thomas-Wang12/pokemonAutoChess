"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameContainer = getGameContainer;
exports.getGameScene = getGameScene;
exports.default = Game;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
const types_1 = require("../../../types");
const Config_1 = require("../../../types/Config");
const Dungeon_1 = require("../../../types/enum/Dungeon");
const Game_1 = require("../../../types/enum/Game");
const board_1 = require("../../../utils/board");
const logger_1 = require("../../../utils/logger");
const pokemon_1 = require("../game/components/pokemon");
const game_container_1 = __importDefault(require("../game/game-container"));
const hooks_1 = require("../hooks");
const stores_1 = __importDefault(require("../stores"));
const GameStore_1 = require("../stores/GameStore");
const NetworkStore_1 = require("../stores/NetworkStore");
const avatar_1 = require("../../../utils/avatar");
const game_dps_meter_1 = __importDefault(require("./component/game/game-dps-meter"));
const game_final_rank_1 = __importDefault(require("./component/game/game-final-rank"));
const game_items_proposition_1 = __importDefault(require("./component/game/game-items-proposition"));
const game_loading_screen_1 = __importDefault(require("./component/game/game-loading-screen"));
const game_players_1 = __importDefault(require("./component/game/game-players"));
const game_pokemons_proposition_1 = __importDefault(require("./component/game/game-pokemons-proposition"));
const game_shop_1 = __importDefault(require("./component/game/game-shop"));
const game_stage_info_1 = __importDefault(require("./component/game/game-stage-info"));
const game_synergies_1 = __importDefault(require("./component/game/game-synergies"));
const game_toasts_1 = __importDefault(require("./component/game/game-toasts"));
const main_sidebar_1 = require("./component/main-sidebar/main-sidebar");
const audio_1 = require("./utils/audio");
const store_1 = require("./utils/store");
const utils_1 = require("./utils/utils");
let gameContainer;
function getGameContainer() {
    return gameContainer;
}
function getGameScene() {
    var _a, _b;
    return (_b = (_a = gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.game) === null || _a === void 0 ? void 0 : _a.scene) === null || _b === void 0 ? void 0 : _b.getScene("gameScene");
}
function Game() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const client = (0, hooks_1.useAppSelector)((state) => state.network.client);
    const room = (0, hooks_1.useAppSelector)((state) => state.network.game);
    const uid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const currentPlayerId = (0, hooks_1.useAppSelector)((state) => state.game.currentPlayerId);
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectCurrentPlayer);
    const spectate = currentPlayerId !== uid || !(currentPlayer === null || currentPlayer === void 0 ? void 0 : currentPlayer.alive);
    const initialized = (0, react_1.useRef)(false);
    const connecting = (0, react_1.useRef)(false);
    const connected = (0, react_1.useRef)(false);
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    const [connectError, setConnectError] = (0, react_1.useState)("");
    const [finalRank, setFinalRank] = (0, react_1.useState)(0);
    let FinalRankVisibility;
    (function (FinalRankVisibility) {
        FinalRankVisibility[FinalRankVisibility["HIDDEN"] = 0] = "HIDDEN";
        FinalRankVisibility[FinalRankVisibility["VISIBLE"] = 1] = "VISIBLE";
        FinalRankVisibility[FinalRankVisibility["CLOSED"] = 2] = "CLOSED";
    })(FinalRankVisibility || (FinalRankVisibility = {}));
    const [finalRankVisibility, setFinalRankVisibility] = (0, react_1.useState)(FinalRankVisibility.HIDDEN);
    const container = (0, react_1.useRef)(null);
    const MAX_ATTEMPS_RECONNECT = 3;
    const connectToGame = (0, react_1.useCallback)((...args_1) => __awaiter(this, [...args_1], void 0, function* (attempts = 1) {
        var _a;
        logger_1.logger.debug(`connectToGame attempt ${attempts} / ${MAX_ATTEMPS_RECONNECT}`);
        const cachedReconnectionToken = (_a = store_1.localStore.get(store_1.LocalStoreKeys.RECONNECTION_GAME)) === null || _a === void 0 ? void 0 : _a.reconnectionToken;
        if (cachedReconnectionToken) {
            connecting.current = true;
            const statusMessage = document.querySelector("#status-message");
            if (statusMessage) {
                statusMessage.textContent = `Connecting to game...`;
            }
            client
                .reconnect(cachedReconnectionToken)
                .then((room) => {
                store_1.localStore.set(store_1.LocalStoreKeys.RECONNECTION_GAME, {
                    reconnectionToken: room.reconnectionToken,
                    roomId: room.roomId
                }, 60 * 60);
                dispatch((0, NetworkStore_1.joinGame)(room));
                connected.current = true;
                connecting.current = false;
            })
                .catch((error) => {
                if (attempts < MAX_ATTEMPS_RECONNECT) {
                    setTimeout(() => __awaiter(this, void 0, void 0, function* () { return yield connectToGame(attempts + 1); }), 1000);
                }
                else {
                    let connectError = error.message;
                    if (error.code === 4212) {
                        connectError = "This game does no longer exist";
                    }
                    setConnectError(connectError);
                    logger_1.logger.error("reconnect error", error);
                }
            });
        }
        else {
            navigate("/");
        }
    }), [client, dispatch]);
    function playerClick(id) {
        var _a, _b, _c, _d;
        const scene = getGameScene();
        if (scene === null || scene === void 0 ? void 0 : scene.spectate) {
            if ((_a = room === null || room === void 0 ? void 0 : room.state) === null || _a === void 0 ? void 0 : _a.players) {
                const spectatedPlayer = (_b = room === null || room === void 0 ? void 0 : room.state) === null || _b === void 0 ? void 0 : _b.players.get(id);
                const gameContainer = getGameContainer();
                if (spectatedPlayer) {
                    gameContainer.setPlayer(spectatedPlayer);
                    const simulation = room.state.simulations.get(spectatedPlayer.simulationId);
                    if (simulation) {
                        gameContainer.setSimulation(simulation);
                    }
                }
                (_d = (_c = gameContainer.gameScene) === null || _c === void 0 ? void 0 : _c.board) === null || _d === void 0 ? void 0 : _d.updateScoutingAvatars();
            }
        }
        else {
            room === null || room === void 0 ? void 0 : room.send(types_1.Transfer.SPECTATE, id);
        }
    }
    const leave = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const afterPlayers = new Array();
        const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
        if (gameContainer && gameContainer.game) {
            gameContainer.game.destroy(true);
        }
        const nbPlayers = (_b = room === null || room === void 0 ? void 0 : room.state.players.size) !== null && _b !== void 0 ? _b : 0;
        if (nbPlayers > 0) {
            room === null || room === void 0 ? void 0 : room.state.players.forEach((p) => {
                const afterPlayer = {
                    elo: p.elo,
                    name: p.name,
                    id: p.id,
                    rank: p.rank,
                    avatar: p.avatar,
                    title: p.title,
                    role: p.role,
                    pokemons: new Array(),
                    synergies: new Array(),
                    moneyEarned: p.totalMoneyEarned,
                    playerDamageDealt: p.totalPlayerDamageDealt,
                    rerollCount: p.rerollCount
                };
                const allSynergies = new Array();
                p.synergies.forEach((v, k) => {
                    allSynergies.push({ name: k, value: v });
                });
                allSynergies.sort((a, b) => b.value - a.value);
                afterPlayer.synergies = allSynergies.slice(0, 5);
                if (p.board && p.board.size > 0) {
                    p.board.forEach((pokemon) => {
                        if (pokemon.positionY != 0) {
                            afterPlayer.pokemons.push({
                                avatar: (0, avatar_1.getAvatarString)(pokemon.index, pokemon.shiny, pokemon.emotion),
                                items: pokemon.items.toArray(),
                                name: pokemon.name
                            });
                        }
                    });
                }
                afterPlayers.push(afterPlayer);
            });
        }
        const elligibleToXP = nbPlayers >= 2 &&
            ((_c = room === null || room === void 0 ? void 0 : room.state.stageLevel) !== null && _c !== void 0 ? _c : 0) >= Config_1.MinStageLevelForGameToCount;
        const elligibleToELO = elligibleToXP &&
            !(room === null || room === void 0 ? void 0 : room.state.noElo) &&
            afterPlayers.filter((p) => p.role !== types_1.Role.BOT).length >= 2;
        const r = yield client.create("after-game", {
            players: afterPlayers,
            idToken: token,
            elligibleToXP,
            elligibleToELO
        });
        store_1.localStore.set(store_1.LocalStoreKeys.RECONNECTION_AFTER_GAME, { reconnectionToken: r.reconnectionToken, roomId: r.roomId }, 30);
        if (r.connection.isOpen) {
            yield r.leave(false);
        }
        dispatch((0, GameStore_1.leaveGame)());
        navigate("/after");
        if (room === null || room === void 0 ? void 0 : room.connection.isOpen) {
            room.leave();
        }
    }), [client, dispatch, room]);
    (0, react_1.useEffect)(() => {
        window.history.pushState(null, "", window.location.href);
        const confirmLeave = () => {
            if (confirm("Do you want to leave game ?")) {
                leave();
            }
            else {
                window.history.pushState(null, "", window.location.href);
            }
        };
        window.addEventListener("popstate", confirmLeave);
        return () => {
            window.removeEventListener("popstate", confirmLeave);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        const connect = () => {
            logger_1.logger.debug("connecting to game");
            if (!app_1.default.apps.length) {
                app_1.default.initializeApp(utils_1.FIREBASE_CONFIG);
            }
            app_1.default.auth().onAuthStateChanged((user) => __awaiter(this, void 0, void 0, function* () {
                if (user && !connecting.current) {
                    connecting.current = true;
                    dispatch((0, NetworkStore_1.logIn)(user));
                    yield connectToGame();
                }
            }));
        };
        if (!connected.current) {
            connect();
        }
        else if (!initialized.current &&
            room != undefined &&
            (container === null || container === void 0 ? void 0 : container.current)) {
            logger_1.logger.debug("initializing game");
            initialized.current = true;
            gameContainer = new game_container_1.default(container.current, uid, room);
            const gameElm = document.getElementById("game");
            gameElm === null || gameElm === void 0 ? void 0 : gameElm.addEventListener(types_1.Transfer.DRAG_DROP, ((event) => {
                gameContainer.onDragDrop(event);
            }));
            gameElm === null || gameElm === void 0 ? void 0 : gameElm.addEventListener(types_1.Transfer.DRAG_DROP_ITEM, ((event) => {
                gameContainer.onDragDropItem(event);
            }));
            gameElm === null || gameElm === void 0 ? void 0 : gameElm.addEventListener(types_1.Transfer.DRAG_DROP_COMBINE, ((event) => {
                gameContainer.onDragDropCombine(event);
            }));
            room.onMessage(types_1.Transfer.LOADING_COMPLETE, () => {
                setLoaded(true);
            });
            room.onMessage(types_1.Transfer.FINAL_RANK, (finalRank) => {
                setFinalRank(finalRank);
                setFinalRankVisibility(FinalRankVisibility.VISIBLE);
            });
            room.onMessage(types_1.Transfer.PRELOAD_MAPS, (maps) => __awaiter(this, void 0, void 0, function* () {
                logger_1.logger.info("preloading maps", maps);
                const gameScene = getGameScene();
                if (gameScene) {
                    gameScene.load.reset();
                    yield gameScene.preloadMaps(maps);
                    gameScene.load.once("complete", () => {
                        const gc = getGameContainer();
                        gc && gc.player && gameScene.setMap(gc.player.map);
                    });
                    gameScene.load.start();
                }
            }));
            room.onMessage(types_1.Transfer.SHOW_EMOTE, (message) => {
                var _a, _b, _c;
                const g = getGameScene();
                if (((_b = (_a = g === null || g === void 0 ? void 0 : g.minigameManager) === null || _a === void 0 ? void 0 : _a.pokemons) === null || _b === void 0 ? void 0 : _b.size) &&
                    g.minigameManager.pokemons.size > 0) {
                    return (_c = g.minigameManager) === null || _c === void 0 ? void 0 : _c.showEmote(message.id, message === null || message === void 0 ? void 0 : message.emote);
                }
                if (g && g.board) {
                    g.board.showEmote(message.id, message === null || message === void 0 ? void 0 : message.emote);
                }
            });
            room.onMessage(types_1.Transfer.POKEMON_DAMAGE, (message) => {
                gameContainer.handleDisplayDamage(message);
            });
            room.onMessage(types_1.Transfer.ABILITY, (message) => {
                gameContainer.handleDisplayAbility(message);
            });
            room.onMessage(types_1.Transfer.POKEMON_HEAL, (message) => {
                gameContainer.handleDisplayHeal(message);
            });
            room.onMessage(types_1.Transfer.PLAYER_DAMAGE, (value) => {
                (0, react_toastify_1.toast)((0, jsx_runtime_1.jsxs)("div", { className: "toast-player-damage", children: [(0, jsx_runtime_1.jsxs)("span", { style: { verticalAlign: "middle" }, children: ["-", value] }), (0, jsx_runtime_1.jsx)("img", { className: "icon-life", src: "/assets/ui/heart.png", alt: "\u2764" })] }), { containerId: "toast-life" });
            });
            room.onMessage(types_1.Transfer.PLAYER_INCOME, (value) => {
                (0, react_toastify_1.toast)((0, jsx_runtime_1.jsxs)("div", { className: "toast-player-income", children: [(0, jsx_runtime_1.jsxs)("span", { style: { verticalAlign: "middle" }, children: ["+", value] }), (0, jsx_runtime_1.jsx)("img", { className: "icon-money", src: "/assets/icons/money.svg", alt: "$" })] }), { containerId: "toast-money" });
            });
            room.onMessage(types_1.Transfer.UNOWN_WANDERING, () => {
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (g && g.unownManager) {
                        g.unownManager.addWanderingUnown();
                    }
                }
            });
            room.onMessage(types_1.Transfer.POKEMON_WANDERING, (pokemon) => {
                const scene = getGameScene();
                if (scene) {
                    (0, pokemon_1.addWanderingPokemon)(scene, pokemon, (sprite, pointer, tween) => {
                        if (scene.board &&
                            (0, board_1.getFreeSpaceOnBench)(scene.board.player.board) > 0) {
                            room.send(types_1.Transfer.POKEMON_WANDERING, pokemon);
                            sprite.destroy();
                            tween.destroy();
                        }
                        else if (scene.board) {
                            scene.board.displayText(pointer.x, pointer.y, t("full"));
                        }
                    });
                }
            });
            room.onMessage(types_1.Transfer.BOARD_EVENT, (event) => {
                var _a, _b;
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (((_b = (_a = g === null || g === void 0 ? void 0 : g.battle) === null || _a === void 0 ? void 0 : _a.simulation) === null || _b === void 0 ? void 0 : _b.id) === event.simulationId) {
                        g.battle.displayBoardEvent(event);
                    }
                }
            });
            room.onMessage(types_1.Transfer.CLEAR_BOARD, (event) => {
                var _a, _b;
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (((_b = (_a = g === null || g === void 0 ? void 0 : g.battle) === null || _a === void 0 ? void 0 : _a.simulation) === null || _b === void 0 ? void 0 : _b.id) === event.simulationId) {
                        g.battle.clearBoardEvents();
                    }
                }
            });
            room.onMessage(types_1.Transfer.SIMULATION_STOP, () => {
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (g && g.battle) {
                        g.battle.clear();
                    }
                }
            });
            room.onMessage(types_1.Transfer.GAME_END, leave);
            room.onMessage(types_1.Transfer.USER_PROFILE, (user) => {
                dispatch((0, NetworkStore_1.setProfile)(user));
            });
            room.state.listen("roundTime", (value) => {
                dispatch((0, GameStore_1.setRoundTime)(value));
            });
            room.state.listen("phase", (newPhase, previousPhase) => {
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (g) {
                        g.updatePhase(newPhase, previousPhase);
                    }
                }
                dispatch((0, GameStore_1.setPhase)(newPhase));
            });
            room.state.listen("stageLevel", (value) => {
                dispatch((0, GameStore_1.setStageLevel)(value));
            });
            room.state.listen("noElo", (value) => {
                dispatch((0, GameStore_1.setNoELO)(value));
            });
            room.state.listen("specialGameRule", (value) => {
                dispatch((0, GameStore_1.setSpecialGameRule)(value));
            });
            room.state.additionalPokemons.onAdd(() => {
                dispatch((0, GameStore_1.setAdditionalPokemons)([...room.state.additionalPokemons]));
            });
            room.state.simulations.onRemove(() => {
                gameContainer.resetSimulation();
            });
            room.state.simulations.onAdd((simulation) => {
                gameContainer.initializeSimulation(simulation);
                simulation.listen("weather", (value) => {
                    dispatch((0, GameStore_1.setWeather)({ id: simulation.id, value: value }));
                });
                const teams = [Game_1.Team.BLUE_TEAM, Game_1.Team.RED_TEAM];
                teams.forEach((team) => {
                    const dpsMeter = team === Game_1.Team.BLUE_TEAM
                        ? simulation.blueDpsMeter
                        : simulation.redDpsMeter;
                    dpsMeter.onAdd((dps) => {
                        dispatch((0, GameStore_1.addDpsMeter)({ value: dps, id: simulation.id, team }));
                        const fields = [
                            "id",
                            "name",
                            "physicalDamage",
                            "specialDamage",
                            "trueDamage",
                            "heal",
                            "shield",
                            "physicalDamageReduced",
                            "specialDamageReduced",
                            "shieldDamageTaken"
                        ];
                        fields.forEach((field) => {
                            dps.listen(field, (value) => {
                                dispatch((0, GameStore_1.changeDpsMeter)({
                                    id: dps.id,
                                    team,
                                    field: field,
                                    value: value,
                                    simulationId: simulation.id
                                }));
                            });
                        });
                    });
                    dpsMeter.onRemove(() => {
                        dispatch((0, GameStore_1.removeDpsMeter)({ simulationId: simulation.id, team }));
                    });
                });
            });
            room.state.players.onAdd((player) => {
                gameContainer.initializePlayer(player);
                dispatch((0, GameStore_1.addPlayer)(player));
                if (player.id == uid) {
                    dispatch((0, GameStore_1.setInterest)(player.interest));
                    dispatch((0, GameStore_1.setStreak)(player.streak));
                    dispatch((0, GameStore_1.setShopLocked)(player.shopLocked));
                    dispatch((0, GameStore_1.setShopFreeRolls)(player.shopFreeRolls));
                    dispatch((0, GameStore_1.setPokemonCollection)(player.pokemonCollection));
                    player.listen("interest", (value) => {
                        dispatch((0, GameStore_1.setInterest)(value));
                    });
                    player.listen("shop", (value) => {
                        dispatch((0, GameStore_1.setShop)(value));
                    });
                    player.listen("shopLocked", (value) => {
                        dispatch((0, GameStore_1.setShopLocked)(value));
                    });
                    player.listen("shopFreeRolls", (value) => {
                        dispatch((0, GameStore_1.setShopFreeRolls)(value));
                    });
                    player.listen("money", (value) => {
                        dispatch((0, GameStore_1.setMoney)(value));
                    });
                    player.listen("streak", (value) => {
                        dispatch((0, GameStore_1.setStreak)(value));
                    });
                }
                player.listen("life", (value, previousValue) => {
                    dispatch((0, GameStore_1.setLife)({ id: player.id, value: value }));
                    if (value <= 0 &&
                        value !== previousValue &&
                        player.id === uid &&
                        !spectate
                        && finalRankVisibility === FinalRankVisibility.HIDDEN) {
                        setFinalRankVisibility(FinalRankVisibility.VISIBLE);
                    }
                });
                player.listen("experienceManager", (experienceManager) => {
                    if (player.id === uid) {
                        dispatch((0, GameStore_1.updateExperienceManager)(experienceManager));
                        const fields = [
                            "experience",
                            "expNeeded",
                            "level"
                        ];
                        fields.forEach((field) => {
                            experienceManager.listen(field, (value) => {
                                dispatch((0, GameStore_1.updateExperienceManager)(Object.assign(Object.assign({}, experienceManager), { [field]: value })));
                            });
                        });
                    }
                });
                player.listen("loadingProgress", (value) => {
                    dispatch((0, GameStore_1.setLoadingProgress)({ id: player.id, value: value }));
                });
                player.listen("map", (newMap) => {
                    if (player.id === stores_1.default.getState().game.currentPlayerId) {
                        const gameScene = getGameScene();
                        if (gameScene) {
                            gameScene.setMap(newMap);
                            const alreadyLoading = gameScene.load.isLoading();
                            if (!alreadyLoading) {
                                gameScene.load.reset();
                            }
                            (0, audio_1.preloadMusic)(gameScene, Dungeon_1.DungeonDetails[newMap].music);
                            gameScene.load.once("complete", () => (0, audio_1.playMusic)(gameScene, Dungeon_1.DungeonDetails[newMap].music));
                            if (!alreadyLoading) {
                                gameScene.load.start();
                            }
                        }
                    }
                    dispatch((0, GameStore_1.changePlayer)({ id: player.id, field: "map", value: newMap }));
                });
                player.listen("spectatedPlayerId", (spectatedPlayerId) => {
                    var _a, _b, _c, _d;
                    if ((_a = room === null || room === void 0 ? void 0 : room.state) === null || _a === void 0 ? void 0 : _a.players) {
                        const spectatedPlayer = (_b = room === null || room === void 0 ? void 0 : room.state) === null || _b === void 0 ? void 0 : _b.players.get(spectatedPlayerId);
                        const gameContainer = getGameContainer();
                        if (spectatedPlayer && player.id === uid) {
                            gameContainer.setPlayer(spectatedPlayer);
                            const simulation = room.state.simulations.get(spectatedPlayer.simulationId);
                            if (simulation) {
                                gameContainer.setSimulation(simulation);
                            }
                        }
                        (_d = (_c = gameContainer.gameScene) === null || _c === void 0 ? void 0 : _c.board) === null || _d === void 0 ? void 0 : _d.updateScoutingAvatars();
                    }
                });
                const fields = [
                    "name",
                    "avatar",
                    "boardSize",
                    "experienceManager",
                    "money",
                    "history",
                    "life",
                    "opponentId",
                    "opponentName",
                    "opponentAvatar",
                    "opponentTitle",
                    "rank",
                    "regionalPokemons",
                    "streak",
                    "title",
                    "rerollCount",
                    "totalMoneyEarned",
                    "totalPlayerDamageDealt",
                    "eggChance",
                    "wildChance"
                ];
                fields.forEach((field) => {
                    player.listen(field, (value) => {
                        dispatch((0, GameStore_1.changePlayer)({ id: player.id, field: field, value: value }));
                    });
                });
                player.synergies.onChange(() => {
                    dispatch((0, GameStore_1.setSynergies)({ id: player.id, value: player.synergies }));
                });
                player.itemsProposition.onAdd(() => {
                    if (player.id == uid) {
                        dispatch((0, GameStore_1.setItemsProposition)(player.itemsProposition));
                    }
                });
                player.itemsProposition.onRemove(() => {
                    if (player.id == uid) {
                        dispatch((0, GameStore_1.setItemsProposition)(player.itemsProposition));
                    }
                });
                player.pokemonsProposition.onAdd(() => {
                    if (player.id == uid) {
                        dispatch((0, GameStore_1.setPokemonProposition)(player.pokemonsProposition.map((p) => p)));
                    }
                });
                player.pokemonsProposition.onRemove(() => {
                    if (player.id == uid) {
                        dispatch((0, GameStore_1.setPokemonProposition)(player.pokemonsProposition.map((p) => p)));
                    }
                });
            });
            room.state.players.onRemove((player) => {
                dispatch((0, GameStore_1.removePlayer)(player));
            });
            room.state.spectators.onAdd((uid) => {
                gameContainer.initializeSpectactor(uid);
            });
        }
    }, [
        connected,
        connecting,
        initialized,
        room,
        dispatch,
        client,
        uid,
        currentPlayerId,
        connectToGame,
        leave
    ]);
    return ((0, jsx_runtime_1.jsxs)("main", { id: "game-wrapper", children: [loaded ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(main_sidebar_1.MainSidebar, { page: "game", leave: leave, leaveLabel: t("leave_game") }), (0, jsx_runtime_1.jsx)(game_final_rank_1.default, { rank: finalRank, hide: () => setFinalRankVisibility(FinalRankVisibility.CLOSED), leave: leave, visible: finalRankVisibility === FinalRankVisibility.VISIBLE }), !spectate && (0, jsx_runtime_1.jsx)(game_shop_1.default, {}), (0, jsx_runtime_1.jsx)(game_stage_info_1.default, {}), (0, jsx_runtime_1.jsx)(game_players_1.default, { click: (id) => playerClick(id) }), (0, jsx_runtime_1.jsx)(game_synergies_1.default, {}), (0, jsx_runtime_1.jsx)(game_items_proposition_1.default, {}), (0, jsx_runtime_1.jsx)(game_pokemons_proposition_1.default, {}), (0, jsx_runtime_1.jsx)(game_dps_meter_1.default, {}), (0, jsx_runtime_1.jsx)(game_toasts_1.default, {})] })) : ((0, jsx_runtime_1.jsx)(game_loading_screen_1.default, { connectError: connectError })), (0, jsx_runtime_1.jsx)("div", { id: "game", ref: container })] }));
}
//# sourceMappingURL=game.js.map