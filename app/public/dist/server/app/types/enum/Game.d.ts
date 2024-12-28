export declare enum Rarity {
    COMMON = "COMMON",
    UNCOMMON = "UNCOMMON",
    RARE = "RARE",
    EPIC = "EPIC",
    ULTRA = "ULTRA",
    UNIQUE = "UNIQUE",
    LEGENDARY = "LEGENDARY",
    HATCH = "HATCH",
    SPECIAL = "SPECIAL"
}
export declare enum GameMode {
    CUSTOM_LOBBY = "CUSTOM_LOBBY",
    QUICKPLAY = "QUICKPLAY",
    RANKED = "RANKED",
    SCRIBBLE = "SCRIBBLE",
    TOURNAMENT = "TOURNAMENT"
}
export declare enum GamePhaseState {
    PICK = 0,
    FIGHT = 1,
    MINIGAME = 2
}
export declare enum PokemonActionState {
    IDLE = "Idle",
    ATTACK = "Attack",
    WALK = "Walk",
    SLEEP = "Sleep",
    HOP = "Hop",
    HURT = "Hurt",
    FISH = "Fish",
    EMOTE = "Emote"
}
export declare enum Orientation {
    DOWN = "0",
    DOWNLEFT = "7",
    LEFT = "6",
    UPLEFT = "5",
    UP = "4",
    UPRIGHT = "3",
    RIGHT = "2",
    DOWNRIGHT = "1"
}
export declare const OrientationFlip: {
    [key in Orientation]: Orientation;
};
export declare enum AttackType {
    PHYSICAL = 0,
    SPECIAL = 1,
    TRUE = 2
}
export declare enum HealType {
    SHIELD = 0,
    HEAL = 1
}
export declare enum BattleResult {
    WIN = "WIN",
    DEFEAT = "DEFEAT",
    DRAW = "DRAW"
}
export declare enum BotDifficulty {
    EASY = 0,
    MEDIUM = 1,
    HARD = 2,
    EXTREME = 3,
    CUSTOM = 4
}
export declare enum PokemonTint {
    NORMAL = "Normal",
    SHINY = "Shiny"
}
export declare enum SpriteType {
    ANIM = "Anim",
    SHADOW = "Shadow"
}
export declare enum Stat {
    ATK = "ATK",
    ATK_SPEED = "ATK_SPEED",
    DEF = "DEF",
    SPE_DEF = "SPE_DEF",
    HP = "HP",
    RANGE = "RANGE",
    PP = "PP",
    MAX_PP = "MAX_PP",
    CRIT_CHANCE = "CRIT_CHANCE",
    CRIT_POWER = "CRIT_POWER",
    AP = "AP",
    SHIELD = "SHIELD",
    LUCK = "LUCK"
}
export declare enum Damage {
    PHYSICAL = "PHYSICAL",
    SPECIAL = "SPECIAL",
    TRUE = "TRUE"
}
export declare enum Team {
    BLUE_TEAM = 0,
    RED_TEAM = 1
}
