"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = exports.Damage = exports.Stat = exports.SpriteType = exports.PokemonTint = exports.BotDifficulty = exports.BattleResult = exports.HealType = exports.AttackType = exports.OrientationFlip = exports.Orientation = exports.PokemonActionState = exports.GamePhaseState = exports.GameMode = exports.Rarity = void 0;
var Rarity;
(function (Rarity) {
    Rarity["COMMON"] = "COMMON";
    Rarity["UNCOMMON"] = "UNCOMMON";
    Rarity["RARE"] = "RARE";
    Rarity["EPIC"] = "EPIC";
    Rarity["ULTRA"] = "ULTRA";
    Rarity["UNIQUE"] = "UNIQUE";
    Rarity["LEGENDARY"] = "LEGENDARY";
    Rarity["HATCH"] = "HATCH";
    Rarity["SPECIAL"] = "SPECIAL";
})(Rarity || (exports.Rarity = Rarity = {}));
var GameMode;
(function (GameMode) {
    GameMode["CUSTOM_LOBBY"] = "CUSTOM_LOBBY";
    GameMode["QUICKPLAY"] = "QUICKPLAY";
    GameMode["RANKED"] = "RANKED";
    GameMode["SCRIBBLE"] = "SCRIBBLE";
    GameMode["TOURNAMENT"] = "TOURNAMENT";
})(GameMode || (exports.GameMode = GameMode = {}));
var GamePhaseState;
(function (GamePhaseState) {
    GamePhaseState[GamePhaseState["PICK"] = 0] = "PICK";
    GamePhaseState[GamePhaseState["FIGHT"] = 1] = "FIGHT";
    GamePhaseState[GamePhaseState["MINIGAME"] = 2] = "MINIGAME";
})(GamePhaseState || (exports.GamePhaseState = GamePhaseState = {}));
var PokemonActionState;
(function (PokemonActionState) {
    PokemonActionState["IDLE"] = "Idle";
    PokemonActionState["ATTACK"] = "Attack";
    PokemonActionState["WALK"] = "Walk";
    PokemonActionState["SLEEP"] = "Sleep";
    PokemonActionState["HOP"] = "Hop";
    PokemonActionState["HURT"] = "Hurt";
    PokemonActionState["FISH"] = "Fish";
    PokemonActionState["EMOTE"] = "Emote";
})(PokemonActionState || (exports.PokemonActionState = PokemonActionState = {}));
var Orientation;
(function (Orientation) {
    Orientation["DOWN"] = "0";
    Orientation["DOWNLEFT"] = "7";
    Orientation["LEFT"] = "6";
    Orientation["UPLEFT"] = "5";
    Orientation["UP"] = "4";
    Orientation["UPRIGHT"] = "3";
    Orientation["RIGHT"] = "2";
    Orientation["DOWNRIGHT"] = "1";
})(Orientation || (exports.Orientation = Orientation = {}));
exports.OrientationFlip = {
    [Orientation.DOWN]: Orientation.UP,
    [Orientation.DOWNLEFT]: Orientation.UPLEFT,
    [Orientation.LEFT]: Orientation.LEFT,
    [Orientation.UPLEFT]: Orientation.DOWNLEFT,
    [Orientation.UP]: Orientation.DOWN,
    [Orientation.UPRIGHT]: Orientation.DOWNRIGHT,
    [Orientation.RIGHT]: Orientation.RIGHT,
    [Orientation.DOWNRIGHT]: Orientation.UPRIGHT
};
var AttackType;
(function (AttackType) {
    AttackType[AttackType["PHYSICAL"] = 0] = "PHYSICAL";
    AttackType[AttackType["SPECIAL"] = 1] = "SPECIAL";
    AttackType[AttackType["TRUE"] = 2] = "TRUE";
})(AttackType || (exports.AttackType = AttackType = {}));
var HealType;
(function (HealType) {
    HealType[HealType["SHIELD"] = 0] = "SHIELD";
    HealType[HealType["HEAL"] = 1] = "HEAL";
})(HealType || (exports.HealType = HealType = {}));
var BattleResult;
(function (BattleResult) {
    BattleResult["WIN"] = "WIN";
    BattleResult["DEFEAT"] = "DEFEAT";
    BattleResult["DRAW"] = "DRAW";
})(BattleResult || (exports.BattleResult = BattleResult = {}));
var BotDifficulty;
(function (BotDifficulty) {
    BotDifficulty[BotDifficulty["EASY"] = 0] = "EASY";
    BotDifficulty[BotDifficulty["MEDIUM"] = 1] = "MEDIUM";
    BotDifficulty[BotDifficulty["HARD"] = 2] = "HARD";
    BotDifficulty[BotDifficulty["EXTREME"] = 3] = "EXTREME";
    BotDifficulty[BotDifficulty["CUSTOM"] = 4] = "CUSTOM";
})(BotDifficulty || (exports.BotDifficulty = BotDifficulty = {}));
var PokemonTint;
(function (PokemonTint) {
    PokemonTint["NORMAL"] = "Normal";
    PokemonTint["SHINY"] = "Shiny";
})(PokemonTint || (exports.PokemonTint = PokemonTint = {}));
var SpriteType;
(function (SpriteType) {
    SpriteType["ANIM"] = "Anim";
    SpriteType["SHADOW"] = "Shadow";
})(SpriteType || (exports.SpriteType = SpriteType = {}));
var Stat;
(function (Stat) {
    Stat["ATK"] = "ATK";
    Stat["ATK_SPEED"] = "ATK_SPEED";
    Stat["DEF"] = "DEF";
    Stat["SPE_DEF"] = "SPE_DEF";
    Stat["HP"] = "HP";
    Stat["RANGE"] = "RANGE";
    Stat["PP"] = "PP";
    Stat["MAX_PP"] = "MAX_PP";
    Stat["CRIT_CHANCE"] = "CRIT_CHANCE";
    Stat["CRIT_POWER"] = "CRIT_POWER";
    Stat["AP"] = "AP";
    Stat["SHIELD"] = "SHIELD";
    Stat["LUCK"] = "LUCK";
})(Stat || (exports.Stat = Stat = {}));
var Damage;
(function (Damage) {
    Damage["PHYSICAL"] = "PHYSICAL";
    Damage["SPECIAL"] = "SPECIAL";
    Damage["TRUE"] = "TRUE";
})(Damage || (exports.Damage = Damage = {}));
var Team;
(function (Team) {
    Team[Team["BLUE_TEAM"] = 0] = "BLUE_TEAM";
    Team[Team["RED_TEAM"] = 1] = "RED_TEAM";
})(Team || (exports.Team = Team = {}));
//# sourceMappingURL=Game.js.map