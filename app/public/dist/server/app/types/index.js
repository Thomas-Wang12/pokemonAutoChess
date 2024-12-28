"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.ReadWriteMode = exports.AttackSpriteScale = exports.AttackSprite = exports.Transfer = exports.Role = exports.USERNAME_REGEXP = exports.CDN_URL = exports.CDN_PORTRAIT_URL = void 0;
exports.instanceofPokemonEntity = instanceofPokemonEntity;
__exportStar(require("./enum/Emotion"), exports);
exports.CDN_PORTRAIT_URL = "https://raw.githubusercontent.com/keldaanCommunity/SpriteCollab/master/portrait/";
exports.CDN_URL = "https://raw.githubusercontent.com/keldaanCommunity/SpriteCollab/master";
exports.USERNAME_REGEXP = /^(\p{Letter}|[0-9]|\.|-|_){3,24}$/u;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["MODERATOR"] = "MODERATOR";
    Role["BASIC"] = "BASIC";
    Role["BOT"] = "BOT";
    Role["BOT_MANAGER"] = "BOT_MANAGER";
})(Role || (exports.Role = Role = {}));
var Transfer;
(function (Transfer) {
    Transfer["DRAG_DROP"] = "DRAG_DROP";
    Transfer["DRAG_DROP_COMBINE"] = "DRAG_DROP_COMBINE";
    Transfer["DRAG_DROP_ITEM"] = "DRAG_DROP_ITEM";
    Transfer["SWITCH_BENCH_AND_BOARD"] = "SWITCH_BENCH_AND_BOARD";
    Transfer["SELL_POKEMON"] = "SELL_POKEMON";
    Transfer["REMOVE_FROM_SHOP"] = "REMOVE_FROM_SHOP";
    Transfer["CHANGE_SELECTED_EMOTION"] = "CHANGE_SELECTED_EMOTION";
    Transfer["NEW_MESSAGE"] = "NEW_MESSAGE";
    Transfer["SEARCH"] = "SEARCH";
    Transfer["CHANGE_NAME"] = "CHANGE_NAME";
    Transfer["CHANGE_AVATAR"] = "CHANGE_AVATAR";
    Transfer["REQUEST_BOT_MONITOR"] = "REQUEST_BOT_MONITOR";
    Transfer["OPEN_BOOSTER"] = "OPEN_BOOSTER";
    Transfer["BUY_BOOSTER"] = "BUY_BOOSTER";
    Transfer["ADD_BOT"] = "ADD_BOT";
    Transfer["REMOVE_BOT"] = "REMOVE_BOT";
    Transfer["TOGGLE_READY"] = "TOGGLE_READY";
    Transfer["CHANGE_NO_ELO"] = "CHANGE_NO_ELO";
    Transfer["REFRESH"] = "REFRESH";
    Transfer["SPECTATE"] = "SPECTATE";
    Transfer["LOCK"] = "LOCK";
    Transfer["LEVEL_UP"] = "LEVEL_UP";
    Transfer["SHOP"] = "SHOP";
    Transfer["ITEM"] = "ITEM";
    Transfer["GAME_START"] = "GAME_START";
    Transfer["GAME_START_REQUEST"] = "GAME_START_REQUEST";
    Transfer["GAME_END"] = "GAME_END";
    Transfer["CHANGE_ROOM_NAME"] = "CHANGE_ROOM_NAME";
    Transfer["CHANGE_ROOM_PASSWORD"] = "CHANGE_ROOM_PASSWORD";
    Transfer["CHANGE_ROOM_RANKS"] = "CHANGE_ROOM_RANKS";
    Transfer["CHANGE_SPECIAL_RULE"] = "CHANGE_SPECIAL_RULE";
    Transfer["BUY_EMOTION"] = "BUY_EMOTION";
    Transfer["BOOSTER_CONTENT"] = "BOOSTER_CONTENT";
    Transfer["USER"] = "USER";
    Transfer["DRAG_DROP_FAILED"] = "DRAG_DROP_FAILED";
    Transfer["SHOW_EMOTE"] = "SHOW_EMOTE";
    Transfer["FINAL_RANK"] = "FINAL_RANK";
    Transfer["SEARCH_BY_ID"] = "SEARCH_BY_ID";
    Transfer["SUGGESTIONS"] = "SUGGESTIONS";
    Transfer["SET_TITLE"] = "SET_TITLE";
    Transfer["REMOVE_MESSAGE"] = "REMOVE_MESSAGE";
    Transfer["NEW_TOURNAMENT"] = "NEW_TOURNAMENT";
    Transfer["REMOVE_TOURNAMENT"] = "REMOVE_TOURNAMENT";
    Transfer["REMAKE_TOURNAMENT_LOBBIES"] = "REMAKE_TOURNAMENT_LOBBIES";
    Transfer["PARTICIPATE_TOURNAMENT"] = "PARTICIPATE_TOURNAMENT";
    Transfer["GIVE_BOOSTER"] = "GIVE_BOOSTER";
    Transfer["SET_ROLE"] = "SET_ROLE";
    Transfer["GIVE_TITLE"] = "GIVE_TITLE";
    Transfer["POKEMON_PROPOSITION"] = "POKEMON_PROPOSITION";
    Transfer["KICK"] = "KICK";
    Transfer["DELETE_ROOM"] = "DELETE_ROOM";
    Transfer["BAN"] = "BAN";
    Transfer["BANNED"] = "BANNED";
    Transfer["POKEMON_DAMAGE"] = "POKEMON_DAMAGE";
    Transfer["POKEMON_HEAL"] = "POKEMON_HEAL";
    Transfer["POKEMON_WANDERING"] = "POKEMON_WANDERING";
    Transfer["UNOWN_WANDERING"] = "UNOWN_WANDERING";
    Transfer["VECTOR"] = "VECTOR";
    Transfer["LOADING_PROGRESS"] = "LOADING_PROGRESS";
    Transfer["LOADING_COMPLETE"] = "LOADING_COMPLETE";
    Transfer["PLAYER_INCOME"] = "PLAYER_INCOME";
    Transfer["PLAYER_DAMAGE"] = "PLAYER_DAMAGE";
    Transfer["ROOMS"] = "ROOMS";
    Transfer["REQUEST_ROOM"] = "REQUEST_ROOM";
    Transfer["ADD_ROOM"] = "ADD_ROOM";
    Transfer["REMOVE_ROOM"] = "REMOVE_ROOM";
    Transfer["ADD_BOT_DATABASE"] = "ADD_BOT_DATABASE";
    Transfer["DELETE_BOT_DATABASE"] = "DELETE_BOT_DATABASE";
    Transfer["BOT_DATABASE_LOG"] = "BOT_DATABASE_LOG";
    Transfer["UNBAN"] = "UNBAN";
    Transfer["BOARD_EVENT"] = "BOARD_EVENT";
    Transfer["CLEAR_BOARD"] = "CLEAR_BOARD";
    Transfer["SIMULATION_STOP"] = "SIMULATION_STOP";
    Transfer["ABILITY"] = "ABILITY";
    Transfer["SELECT_LANGUAGE"] = "SELECT_LANGUAGE";
    Transfer["USER_PROFILE"] = "USER_PROFILE";
    Transfer["PICK_BERRY"] = "PICK_BERRY";
    Transfer["PRELOAD_MAPS"] = "PRELOAD_MAPS";
    Transfer["NPC_DIALOG"] = "NPC_DIALOG";
    Transfer["HEAP_SNAPSHOT"] = "HEAP_SNAPSHOT";
})(Transfer || (exports.Transfer = Transfer = {}));
var AttackSprite;
(function (AttackSprite) {
    AttackSprite["BUG_MELEE"] = "BUG/melee";
    AttackSprite["BUG_RANGE"] = "BUG/range";
    AttackSprite["DARK_MELEE"] = "DARK/melee";
    AttackSprite["DARK_RANGE"] = "DARK/range";
    AttackSprite["DRAGON_MELEE"] = "DRAGON/melee";
    AttackSprite["DRAGON_RANGE"] = "DRAGON/range";
    AttackSprite["DRAGON_GREEN_RANGE"] = "DRAGON_GREEN/range";
    AttackSprite["ELECTRIC_MELEE"] = "ELECTRIC/melee";
    AttackSprite["ELECTRIC_RANGE"] = "ELECTRIC/range";
    AttackSprite["FAIRY_MELEE"] = "FAIRY/melee";
    AttackSprite["FAIRY_RANGE"] = "FAIRY/range";
    AttackSprite["FIGHTING_MELEE"] = "FIGHTING/melee";
    AttackSprite["FIGHTING_RANGE"] = "FIGHTING/range";
    AttackSprite["FIRE_MELEE"] = "FIRE/melee";
    AttackSprite["FIRE_RANGE"] = "FIRE/range";
    AttackSprite["FLYING_MELEE"] = "FLYING/melee";
    AttackSprite["FLYING_RANGE"] = "FLYING/range";
    AttackSprite["GHOST_RANGE"] = "GHOST/range";
    AttackSprite["GRASS_MELEE"] = "GRASS/melee";
    AttackSprite["GRASS_RANGE"] = "GRASS/range";
    AttackSprite["ICE_MELEE"] = "ICE/melee";
    AttackSprite["ICE_RANGE"] = "ICE/range";
    AttackSprite["NORMAL_MELEE"] = "NORMAL/melee";
    AttackSprite["POISON_MELEE"] = "POISON/melee";
    AttackSprite["POISON_RANGE"] = "POISON/range";
    AttackSprite["PSYCHIC_MELEE"] = "PSYCHIC/melee";
    AttackSprite["PSYCHIC_RANGE"] = "PSYCHIC/range";
    AttackSprite["WATER_MELEE"] = "WATER/melee";
    AttackSprite["WATER_RANGE"] = "WATER/range";
    AttackSprite["ROCK_MELEE"] = "ROCK/melee";
    AttackSprite["ROCK_RANGE"] = "ROCK/range";
    AttackSprite["SOUND_RANGE"] = "SOUND/range";
    AttackSprite["STEEL_MELEE"] = "STEEL/melee";
})(AttackSprite || (exports.AttackSprite = AttackSprite = {}));
exports.AttackSpriteScale = {
    "BUG/melee": [1.5, 1.5],
    "BUG/range": [2, 2],
    "DARK/melee": [1.5, 1.5],
    "DARK/range": [1.5, 1.5],
    "DRAGON/melee": [2, 2],
    "DRAGON/range": [2, 2],
    "DRAGON_GREEN/range": [2, 2],
    "ELECTRIC/melee": [1.5, 1.5],
    "ELECTRIC/range": [2, 2],
    "FAIRY/melee": [2, 2],
    "FAIRY/range": [2, 2],
    "FIGHTING/melee": [2, 2],
    "FIGHTING/range": [2, 2],
    "FIRE/melee": [1, 1],
    "FIRE/range": [2, 2],
    "FLYING/melee": [1, 1],
    "FLYING/range": [1.5, 1.5],
    "GHOST/range": [2, 2],
    "GRASS/melee": [1, 1],
    "GRASS/range": [3, 3],
    "ICE/melee": [2, 2],
    "ICE/range": [2, 2],
    "NORMAL/melee": [2, 2],
    "POISON/melee": [2, 2],
    "POISON/range": [1.5, 1.5],
    "PSYCHIC/melee": [1.5, 1.5],
    "PSYCHIC/range": [2, 2],
    "ROCK/melee": [1.5, 1.5],
    "ROCK/range": [2, 2],
    "STEEL/melee": [1.5, 1.5],
    "SOUND/range": [2, 2],
    "WATER/melee": [2, 2],
    "WATER/range": [3, 3]
};
var ReadWriteMode;
(function (ReadWriteMode) {
    ReadWriteMode["WRITE"] = "WRITE";
    ReadWriteMode["ERASE"] = "ERASE";
})(ReadWriteMode || (exports.ReadWriteMode = ReadWriteMode = {}));
function instanceofPokemonEntity(obj) {
    return "pp" in obj;
}
var Title;
(function (Title) {
    Title["NOVICE"] = "NOVICE";
    Title["ROOKIE"] = "ROOKIE";
    Title["AMATEUR"] = "AMATEUR";
    Title["VETERAN"] = "VETERAN";
    Title["PRO"] = "PRO";
    Title["EXPERT"] = "EXPERT";
    Title["ELITE"] = "ELITE";
    Title["MASTER"] = "MASTER";
    Title["GRAND_MASTER"] = "GRAND_MASTER";
    Title["BIRD_KEEPER"] = "BIRD_KEEPER";
    Title["BLACK_BELT"] = "BLACK_BELT";
    Title["BUG_MANIAC"] = "BUG_MANIAC";
    Title["CUTE_MANIAC"] = "CUTE_MANIAC";
    Title["DELINQUENT"] = "DELINQUENT";
    Title["DRAGON_TAMER"] = "DRAGON_TAMER";
    Title["FIREFIGHTER"] = "FIREFIGHTER";
    Title["TEAM_ROCKET_GRUNT"] = "TEAM_ROCKET_GRUNT";
    Title["HIKER"] = "HIKER";
    Title["LONE_WOLF"] = "LONE_WOLF";
    Title["KINDLER"] = "KINDLER";
    Title["GARDENER"] = "GARDENER";
    Title["MUSEUM_DIRECTOR"] = "MUSEUM_DIRECTOR";
    Title["ENGINEER"] = "ENGINEER";
    Title["TELEKINESIST"] = "TELEKINESIST";
    Title["ELECTRICIAN"] = "ELECTRICIAN";
    Title["GEOLOGIST"] = "GEOLOGIST";
    Title["MYTH_TRAINER"] = "MYTH_TRAINER";
    Title["DIVER"] = "DIVER";
    Title["POKEMON_RANGER"] = "POKEMON_RANGER";
    Title["CAMPER"] = "CAMPER";
    Title["RIVAL"] = "RIVAL";
    Title["SKIER"] = "SKIER";
    Title["POKEFAN"] = "POKEFAN";
    Title["HEX_MANIAC"] = "HEX_MANIAC";
    Title["MUSICIAN"] = "MUSICIAN";
    Title["BABYSITTER"] = "BABYSITTER";
    Title["ALCHEMIST"] = "ALCHEMIST";
    Title["BERSERKER"] = "BERSERKER";
    Title["BLOB"] = "BLOB";
    Title["HARLEQUIN"] = "HARLEQUIN";
    Title["TACTICIAN"] = "TACTICIAN";
    Title["STRATEGIST"] = "STRATEGIST";
    Title["NURSE"] = "NURSE";
    Title["GARDIAN"] = "GARDIAN";
    Title["DUKE"] = "DUKE";
    Title["DUCHESS"] = "DUCHESS";
    Title["CHAMPION"] = "CHAMPION";
    Title["ELITE_FOUR_MEMBER"] = "ELITE_FOUR_MEMBER";
    Title["GYM_LEADER"] = "GYM_LEADER";
    Title["GYM_CHALLENGER"] = "GYM_CHALLENGER";
    Title["GYM_TRAINER"] = "GYM_TRAINER";
    Title["ACE_TRAINER"] = "ACE_TRAINER";
    Title["TYRANT"] = "TYRANT";
    Title["SURVIVOR"] = "SURVIVOR";
    Title["GAMBLER"] = "GAMBLER";
    Title["NATURAL"] = "NATURAL";
    Title["BOT_BUILDER"] = "BOT_BUILDER";
    Title["SHINY_SEEKER"] = "SHINY_SEEKER";
    Title["ARCHEOLOGIST"] = "ARCHEOLOGIST";
    Title["PRIMAL"] = "PRIMAL";
    Title["DENTIST"] = "DENTIST";
    Title["FISHERMAN"] = "FISHERMAN";
    Title["SIREN"] = "SIREN";
    Title["FEARSOME"] = "FEARSOME";
    Title["GOLDEN"] = "GOLDEN";
    Title["CHOSEN_ONE"] = "CHOSEN_ONE";
    Title["VANQUISHER"] = "VANQUISHER";
    Title["OUTSIDER"] = "OUTSIDER";
    Title["GLUTTON"] = "GLUTTON";
    Title["STARGAZER"] = "STARGAZER";
    Title["BLOODY"] = "BLOODY";
    Title["ETERNAL"] = "ETERNAL";
})(Title || (exports.Title = Title = {}));
//# sourceMappingURL=index.js.map