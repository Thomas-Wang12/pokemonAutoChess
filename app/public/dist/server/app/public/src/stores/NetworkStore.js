"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setErrorAlertMessage = exports.createTournament = exports.deleteRoom = exports.kick = exports.setTitle = exports.searchById = exports.lockShop = exports.levelClick = exports.shopClick = exports.itemClick = exports.setNoElo = exports.toggleReady = exports.removeBot = exports.addBot = exports.changeAvatar = exports.changeName = exports.joinAfter = exports.joinGame = exports.joinPreparation = exports.searchName = exports.sendMessage = exports.joinLobby = exports.setProfile = exports.logOut = exports.logIn = exports.gameStartRequest = exports.setSpecialRule = exports.changeRoomMinMaxRanks = exports.changeRoomPassword = exports.changeRoomName = exports.buyBooster = exports.buyEmotion = exports.changeSelectedEmotion = exports.openBooster = exports.showEmote = exports.giveBooster = exports.participateInTournament = exports.createTournamentLobbies = exports.removeTournament = exports.removeMessage = exports.giveRole = exports.giveTitle = exports.pokemonPropositionClick = exports.ban = exports.addBotDatabase = exports.deleteBotDatabase = exports.unban = exports.selectLanguage = exports.heapSnapshot = exports.networkSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const colyseus_js_1 = require("colyseus.js");
const types_1 = require("../../../types");
const logger_1 = require("../../../utils/logger");
const avatar_1 = require("../../../utils/avatar");
const endpoint = `${window.location.protocol.replace("http", "ws")}//${window.location.host}`;
logger_1.logger.info(endpoint);
const initalState = {
    client: new colyseus_js_1.Client(endpoint),
    lobby: undefined,
    preparation: undefined,
    game: undefined,
    after: undefined,
    uid: "",
    displayName: "",
    profile: undefined,
    error: null
};
exports.networkSlice = (0, toolkit_1.createSlice)({
    name: "network",
    initialState: initalState,
    reducers: {
        logIn: (state, action) => {
            var _a;
            if (action.payload) {
                state.uid = action.payload.uid;
                state.displayName = (_a = action.payload.displayName) !== null && _a !== void 0 ? _a : "Anonymous";
            }
        },
        logOut: (state) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            state.client = new colyseus_js_1.Client(endpoint);
            state.uid = "";
            ((_a = state.preparation) === null || _a === void 0 ? void 0 : _a.connection.isOpen) && ((_b = state.preparation) === null || _b === void 0 ? void 0 : _b.leave(true));
            state.preparation = undefined;
            ((_c = state.lobby) === null || _c === void 0 ? void 0 : _c.connection.isOpen) && ((_d = state.lobby) === null || _d === void 0 ? void 0 : _d.leave(true));
            state.lobby = undefined;
            ((_e = state.game) === null || _e === void 0 ? void 0 : _e.connection.isOpen) && ((_f = state.game) === null || _f === void 0 ? void 0 : _f.leave(true));
            state.game = undefined;
            ((_g = state.after) === null || _g === void 0 ? void 0 : _g.connection.isOpen) && ((_h = state.after) === null || _h === void 0 ? void 0 : _h.leave(true));
            state.after = undefined;
        },
        setProfile: (state, action) => {
            state.profile = action.payload;
            state.profile.pokemonCollection = new Map(Object.entries(action.payload.pokemonCollection));
        },
        joinLobby: (state, action) => {
            var _a, _b, _c, _d, _e;
            state.lobby = action.payload;
            ((_a = state.preparation) === null || _a === void 0 ? void 0 : _a.connection.isOpen) && ((_b = state.preparation) === null || _b === void 0 ? void 0 : _b.leave(true));
            state.preparation = undefined;
            (_c = state.game) === null || _c === void 0 ? void 0 : _c.connection.close();
            state.game = undefined;
            ((_d = state.after) === null || _d === void 0 ? void 0 : _d.connection.isOpen) && ((_e = state.after) === null || _e === void 0 ? void 0 : _e.leave(true));
            state.after = undefined;
        },
        joinPreparation: (state, action) => {
            var _a, _b, _c, _d, _e;
            state.preparation = action.payload;
            ((_a = state.lobby) === null || _a === void 0 ? void 0 : _a.connection.isOpen) && ((_b = state.lobby) === null || _b === void 0 ? void 0 : _b.leave(true));
            state.lobby = undefined;
            (_c = state.game) === null || _c === void 0 ? void 0 : _c.connection.close();
            state.game = undefined;
            ((_d = state.after) === null || _d === void 0 ? void 0 : _d.connection.isOpen) && ((_e = state.after) === null || _e === void 0 ? void 0 : _e.leave(true));
            state.after = undefined;
        },
        joinGame: (state, action) => {
            var _a, _b, _c, _d, _e, _f;
            Object.assign(state, { game: action.payload });
            ((_a = state.preparation) === null || _a === void 0 ? void 0 : _a.connection.isOpen) && ((_b = state.preparation) === null || _b === void 0 ? void 0 : _b.leave(true));
            state.preparation = undefined;
            ((_c = state.lobby) === null || _c === void 0 ? void 0 : _c.connection.isOpen) && ((_d = state.lobby) === null || _d === void 0 ? void 0 : _d.leave(true));
            state.lobby = undefined;
            ((_e = state.after) === null || _e === void 0 ? void 0 : _e.connection.isOpen) && ((_f = state.after) === null || _f === void 0 ? void 0 : _f.leave(true));
            state.after = undefined;
        },
        joinAfter: (state, action) => {
            var _a, _b, _c, _d, _e;
            state.after = action.payload;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.connection.close();
            state.game = undefined;
            ((_b = state.lobby) === null || _b === void 0 ? void 0 : _b.connection.isOpen) && ((_c = state.lobby) === null || _c === void 0 ? void 0 : _c.leave(true));
            state.lobby = undefined;
            ((_d = state.preparation) === null || _d === void 0 ? void 0 : _d.connection.isOpen) && ((_e = state.preparation) === null || _e === void 0 ? void 0 : _e.leave(true));
            state.preparation = undefined;
        },
        sendMessage: (state, action) => {
            if (state.lobby) {
                state.lobby.send(types_1.Transfer.NEW_MESSAGE, action.payload);
            }
            if (state.preparation) {
                state.preparation.send(types_1.Transfer.NEW_MESSAGE, action.payload);
            }
        },
        removeMessage: (state, action) => {
            if (state.lobby) {
                state.lobby.send(types_1.Transfer.REMOVE_MESSAGE, action.payload);
            }
            if (state.preparation) {
                state.preparation.send(types_1.Transfer.REMOVE_MESSAGE, action.payload);
            }
        },
        searchName: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SEARCH, { name: action.payload });
        },
        changeName: (state, action) => {
            var _a;
            if (state.profile)
                state.profile.displayName = action.payload;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_NAME, { name: action.payload });
        },
        changeAvatar: (state, action) => {
            var _a;
            if (state.profile)
                state.profile.avatar = (0, avatar_1.getAvatarString)(action.payload.index, action.payload.shiny, action.payload.emotion);
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_AVATAR, action.payload);
        },
        addBot: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.ADD_BOT, action.payload);
        },
        removeBot: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REMOVE_BOT, action.payload);
        },
        toggleReady: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.TOGGLE_READY, action.payload);
        },
        setNoElo: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_NO_ELO, action.payload);
        },
        lockShop: (state) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LOCK);
        },
        levelClick: (state) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LEVEL_UP);
        },
        shopClick: (state, action) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SHOP, { id: action.payload });
        },
        pokemonPropositionClick: (state, action) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.POKEMON_PROPOSITION, action.payload);
        },
        itemClick: (state, action) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.ITEM, action.payload);
        },
        gameStartRequest: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.GAME_START_REQUEST, {
                token: action.payload
            });
        },
        changeRoomName: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_ROOM_NAME, action.payload);
        },
        changeRoomPassword: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_ROOM_PASSWORD, action.payload);
        },
        changeRoomMinMaxRanks: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_ROOM_RANKS, action.payload);
        },
        setSpecialRule: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_SPECIAL_RULE, action.payload);
        },
        changeSelectedEmotion: (state, action) => {
            var _a;
            if (state.profile) {
                const pokemonConfig = state.profile.pokemonCollection.get(action.payload.index);
                if (pokemonConfig) {
                    pokemonConfig.selectedEmotion = action.payload.emotion;
                    pokemonConfig.selectedShiny = action.payload.shiny;
                }
            }
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_SELECTED_EMOTION, action.payload);
        },
        buyEmotion: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BUY_EMOTION, action.payload);
        },
        buyBooster: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BUY_BOOSTER, action.payload);
        },
        openBooster: (state) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.OPEN_BOOSTER);
        },
        showEmote: (state, action) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SHOW_EMOTE, action.payload);
        },
        searchById: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SEARCH_BY_ID, action.payload);
        },
        setTitle: (state, action) => {
            var _a;
            if (state.profile)
                state.profile.title = action.payload;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SET_TITLE, action.payload);
        },
        removeTournament: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REMOVE_TOURNAMENT, action.payload);
        },
        createTournamentLobbies: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REMAKE_TOURNAMENT_LOBBIES, action.payload);
        },
        participateInTournament: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.PARTICIPATE_TOURNAMENT, action.payload);
        },
        giveBooster: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.GIVE_BOOSTER, action.payload);
        },
        heapSnapshot: (state) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.HEAP_SNAPSHOT);
        },
        giveRole: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SET_ROLE, action.payload);
        },
        giveTitle: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.GIVE_TITLE, action.payload);
        },
        kick: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.KICK, action.payload);
        },
        deleteRoom: (state) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.DELETE_ROOM);
        },
        ban: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BAN, action.payload);
        },
        unban: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.UNBAN, action.payload);
        },
        deleteBotDatabase: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.DELETE_BOT_DATABASE, action.payload);
        },
        addBotDatabase: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.ADD_BOT_DATABASE, action.payload);
        },
        selectLanguage: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SELECT_LANGUAGE, action.payload);
        },
        createTournament: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.NEW_TOURNAMENT, action.payload);
        },
        setErrorAlertMessage: (state, action) => {
            state.error = action.payload;
        }
    }
});
_a = exports.networkSlice.actions, exports.heapSnapshot = _a.heapSnapshot, exports.selectLanguage = _a.selectLanguage, exports.unban = _a.unban, exports.deleteBotDatabase = _a.deleteBotDatabase, exports.addBotDatabase = _a.addBotDatabase, exports.ban = _a.ban, exports.pokemonPropositionClick = _a.pokemonPropositionClick, exports.giveTitle = _a.giveTitle, exports.giveRole = _a.giveRole, exports.removeMessage = _a.removeMessage, exports.removeTournament = _a.removeTournament, exports.createTournamentLobbies = _a.createTournamentLobbies, exports.participateInTournament = _a.participateInTournament, exports.giveBooster = _a.giveBooster, exports.showEmote = _a.showEmote, exports.openBooster = _a.openBooster, exports.changeSelectedEmotion = _a.changeSelectedEmotion, exports.buyEmotion = _a.buyEmotion, exports.buyBooster = _a.buyBooster, exports.changeRoomName = _a.changeRoomName, exports.changeRoomPassword = _a.changeRoomPassword, exports.changeRoomMinMaxRanks = _a.changeRoomMinMaxRanks, exports.setSpecialRule = _a.setSpecialRule, exports.gameStartRequest = _a.gameStartRequest, exports.logIn = _a.logIn, exports.logOut = _a.logOut, exports.setProfile = _a.setProfile, exports.joinLobby = _a.joinLobby, exports.sendMessage = _a.sendMessage, exports.searchName = _a.searchName, exports.joinPreparation = _a.joinPreparation, exports.joinGame = _a.joinGame, exports.joinAfter = _a.joinAfter, exports.changeName = _a.changeName, exports.changeAvatar = _a.changeAvatar, exports.addBot = _a.addBot, exports.removeBot = _a.removeBot, exports.toggleReady = _a.toggleReady, exports.setNoElo = _a.setNoElo, exports.itemClick = _a.itemClick, exports.shopClick = _a.shopClick, exports.levelClick = _a.levelClick, exports.lockShop = _a.lockShop, exports.searchById = _a.searchById, exports.setTitle = _a.setTitle, exports.kick = _a.kick, exports.deleteRoom = _a.deleteRoom, exports.createTournament = _a.createTournament, exports.setErrorAlertMessage = _a.setErrorAlertMessage;
exports.default = exports.networkSlice.reducer;
//# sourceMappingURL=NetworkStore.js.map