import { Effect } from "./Effect";
export declare enum Synergy {
    NORMAL = "NORMAL",
    GRASS = "GRASS",
    FIRE = "FIRE",
    WATER = "WATER",
    ELECTRIC = "ELECTRIC",
    FIGHTING = "FIGHTING",
    PSYCHIC = "PSYCHIC",
    DARK = "DARK",
    STEEL = "STEEL",
    GROUND = "GROUND",
    POISON = "POISON",
    DRAGON = "DRAGON",
    FIELD = "FIELD",
    MONSTER = "MONSTER",
    HUMAN = "HUMAN",
    AQUATIC = "AQUATIC",
    BUG = "BUG",
    FLYING = "FLYING",
    FLORA = "FLORA",
    ROCK = "ROCK",
    GHOST = "GHOST",
    FAIRY = "FAIRY",
    ICE = "ICE",
    FOSSIL = "FOSSIL",
    SOUND = "SOUND",
    ARTIFICIAL = "ARTIFICIAL",
    LIGHT = "LIGHT",
    WILD = "WILD",
    BABY = "BABY",
    AMORPHOUS = "AMORPHOUS"
}
export declare const SynergyEffects: {
    [key in Synergy]: Effect[];
};