"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mask = exports.MaskCoordinate = exports.WeatherThreshold = exports.EloRankThreshold = exports.PortalCarouselStages = exports.AdditionalPicksStages = exports.ItemProposalStages = exports.ItemCarouselStages = exports.PORTAL_CAROUSEL_BASE_DURATION = exports.ITEM_CAROUSEL_BASE_DURATION = exports.FIGHTING_PHASE_DURATION = exports.StageDuration = exports.PROJECTILE_SPEED = exports.DEFAULT_CRIT_POWER = exports.DEFAULT_CRIT_CHANCE = exports.DEFAULT_ATK_SPEED = exports.INACTIVITY_TIMEOUT = exports.MIN_HUMAN_PLAYERS = exports.MAX_PLAYERS_PER_GAME = exports.MAX_CONCURRENT_PLAYERS_ON_LOBBY = exports.MAX_CONCURRENT_PLAYERS_ON_SERVER = exports.MAX_POOL_CONNECTIONS_SIZE = exports.FishRarityProbability = exports.SHOP_SIZE = exports.NB_UNIQUE_PROPOSITIONS = exports.LegendaryShop = exports.UniqueShop = exports.PoolSize = exports.KECLEON_SHOP_COST = exports.EvolutionTime = exports.RarityProbabilityPerLevel = exports.AttackTypeColor = exports.ARCEUS_RATE = exports.KECLEON_RATE = exports.DITTO_RATE = exports.BoosterRarityProbability = exports.RarityColor = exports.ExpPlace = exports.MinStageLevelForGameToCount = exports.SynergyTriggers = exports.ExpTable = exports.EmotionCost = exports.RarityCost = exports.RarityHpCost = exports.BOARD_HEIGHT = exports.BOARD_WIDTH = exports.ARMOR_FACTOR = exports.SCOPE_LENS_MANA = exports.MANA_SCARF_MANA = exports.ON_ATTACK_MANA = void 0;
exports.EloRank = exports.BOTS_ENABLED = exports.CRON_HISTORY_CLEANUP_DELAY = exports.CRON_ELO_DECAY_MINIMUM_ELO = exports.CRON_ELO_DECAY_DELAY = exports.MAX_SIMULATION_DELTA_TIME = exports.TOURNAMENT_CLEANUP_DELAY = exports.TOURNAMENT_REGISTRATION_TIME = exports.DUST_PER_SHINY = exports.DUST_PER_BOOSTER = exports.ULTRABALL_RANKED_LOBBY_CRON = exports.GREATBALL_RANKED_LOBBY_CRON = exports.SCRIBBLE_LOBBY_CRON = exports.DTEF_TILESET_TILE_WIDTH = exports.DTEF_TILESET_HEIGHT = exports.DTEF_TILESET_WIDTH = exports.DTEF_HEIGHT = exports.DTEF_WIDTH = exports.ItemStats = exports.IdTable = exports.TerrainType = void 0;
exports.getEmotionCost = getEmotionCost;
const _1 = require(".");
const EloRank_1 = require("./enum/EloRank");
Object.defineProperty(exports, "EloRank", { enumerable: true, get: function () { return EloRank_1.EloRank; } });
const Game_1 = require("./enum/Game");
const Item_1 = require("./enum/Item");
const Pokemon_1 = require("./enum/Pokemon");
const Synergy_1 = require("./enum/Synergy");
const Weather_1 = require("./enum/Weather");
exports.ON_ATTACK_MANA = 5;
exports.MANA_SCARF_MANA = 8;
exports.SCOPE_LENS_MANA = 15;
exports.ARMOR_FACTOR = 0.1;
exports.BOARD_WIDTH = 8;
exports.BOARD_HEIGHT = 6;
exports.RarityHpCost = Object.freeze({
    [Game_1.Rarity.COMMON]: 1,
    [Game_1.Rarity.UNCOMMON]: 1,
    [Game_1.Rarity.RARE]: 2,
    [Game_1.Rarity.EPIC]: 2,
    [Game_1.Rarity.ULTRA]: 3,
    [Game_1.Rarity.UNIQUE]: 3,
    [Game_1.Rarity.LEGENDARY]: 3,
    [Game_1.Rarity.SPECIAL]: 1,
    [Game_1.Rarity.HATCH]: 4
});
exports.RarityCost = Object.freeze({
    [Game_1.Rarity.SPECIAL]: 0,
    [Game_1.Rarity.COMMON]: 1,
    [Game_1.Rarity.UNCOMMON]: 2,
    [Game_1.Rarity.RARE]: 3,
    [Game_1.Rarity.EPIC]: 4,
    [Game_1.Rarity.ULTRA]: 5,
    [Game_1.Rarity.HATCH]: 9,
    [Game_1.Rarity.UNIQUE]: 10,
    [Game_1.Rarity.LEGENDARY]: 20
});
exports.EmotionCost = {
    [_1.Emotion.NORMAL]: 50,
    [_1.Emotion.HAPPY]: 100,
    [_1.Emotion.PAIN]: 100,
    [_1.Emotion.ANGRY]: 100,
    [_1.Emotion.WORRIED]: 100,
    [_1.Emotion.SAD]: 100,
    [_1.Emotion.CRYING]: 100,
    [_1.Emotion.SHOUTING]: 150,
    [_1.Emotion.TEARY_EYED]: 150,
    [_1.Emotion.DETERMINED]: 150,
    [_1.Emotion.JOYOUS]: 150,
    [_1.Emotion.INSPIRED]: 150,
    [_1.Emotion.SURPRISED]: 150,
    [_1.Emotion.DIZZY]: 150,
    [_1.Emotion.SPECIAL0]: 200,
    [_1.Emotion.SPECIAL1]: 200,
    [_1.Emotion.SIGH]: 200,
    [_1.Emotion.STUNNED]: 200,
    [_1.Emotion.SPECIAL2]: 200,
    [_1.Emotion.SPECIAL3]: 200
};
function getEmotionCost(emotion, isShiny) {
    return isShiny ? exports.EmotionCost[emotion] * 3 : exports.EmotionCost[emotion];
}
exports.ExpTable = Object.freeze({
    1: 0,
    2: 2,
    3: 6,
    4: 10,
    5: 22,
    6: 34,
    7: 52,
    8: 72,
    9: 255
});
exports.SynergyTriggers = {
    [Synergy_1.Synergy.NORMAL]: [3, 5, 7, 9],
    [Synergy_1.Synergy.GRASS]: [3, 5, 7],
    [Synergy_1.Synergy.FIRE]: [2, 4, 6, 8],
    [Synergy_1.Synergy.WATER]: [3, 6, 9],
    [Synergy_1.Synergy.ELECTRIC]: [3, 6, 9],
    [Synergy_1.Synergy.FIGHTING]: [2, 4, 6, 8],
    [Synergy_1.Synergy.PSYCHIC]: [2, 4, 6],
    [Synergy_1.Synergy.DARK]: [3, 5, 7],
    [Synergy_1.Synergy.STEEL]: [2, 4, 6, 8],
    [Synergy_1.Synergy.GROUND]: [2, 4, 6, 8],
    [Synergy_1.Synergy.POISON]: [3, 5, 7],
    [Synergy_1.Synergy.DRAGON]: [3, 5, 7],
    [Synergy_1.Synergy.FIELD]: [3, 6, 9],
    [Synergy_1.Synergy.MONSTER]: [2, 4, 6, 9],
    [Synergy_1.Synergy.HUMAN]: [2, 4, 6],
    [Synergy_1.Synergy.AQUATIC]: [2, 4, 6],
    [Synergy_1.Synergy.BUG]: [2, 4, 6, 8],
    [Synergy_1.Synergy.FLYING]: [2, 4, 6, 8],
    [Synergy_1.Synergy.FLORA]: [3, 4, 5, 6],
    [Synergy_1.Synergy.ROCK]: [2, 4, 6],
    [Synergy_1.Synergy.GHOST]: [2, 4, 6, 8],
    [Synergy_1.Synergy.FAIRY]: [2, 4, 6, 8],
    [Synergy_1.Synergy.ICE]: [2, 4, 6, 8],
    [Synergy_1.Synergy.FOSSIL]: [2, 4, 6],
    [Synergy_1.Synergy.SOUND]: [2, 4, 6],
    [Synergy_1.Synergy.ARTIFICIAL]: [2, 4, 6],
    [Synergy_1.Synergy.BABY]: [3, 5, 7],
    [Synergy_1.Synergy.LIGHT]: [2, 3, 4, 5],
    [Synergy_1.Synergy.WILD]: [2, 4, 6, 9],
    [Synergy_1.Synergy.AMORPHOUS]: [3, 5, 7]
};
exports.MinStageLevelForGameToCount = 10;
exports.ExpPlace = [700, 400, 350, 300, 250, 200, 200, 200];
exports.RarityColor = {
    [Game_1.Rarity.COMMON]: "#a0a0a0",
    [Game_1.Rarity.UNCOMMON]: "#3bc95e",
    [Game_1.Rarity.RARE]: "#41bfcc",
    [Game_1.Rarity.EPIC]: "#ca6cee",
    [Game_1.Rarity.ULTRA]: "#E53B3B",
    [Game_1.Rarity.UNIQUE]: "#ffffff",
    [Game_1.Rarity.LEGENDARY]: "#e6cb49",
    [Game_1.Rarity.SPECIAL]: "#967FFF",
    [Game_1.Rarity.HATCH]: "#b9915a"
};
exports.BoosterRarityProbability = {
    [Game_1.Rarity.COMMON]: 0.12,
    [Game_1.Rarity.UNCOMMON]: 0.2,
    [Game_1.Rarity.RARE]: 0.2,
    [Game_1.Rarity.EPIC]: 0.15,
    [Game_1.Rarity.ULTRA]: 0.06,
    [Game_1.Rarity.UNIQUE]: 0.08,
    [Game_1.Rarity.LEGENDARY]: 0.05,
    [Game_1.Rarity.HATCH]: 0.1,
    [Game_1.Rarity.SPECIAL]: 0.03
};
exports.DITTO_RATE = 0.005;
exports.KECLEON_RATE = 1 / 100;
exports.ARCEUS_RATE = 1 / 100;
exports.AttackTypeColor = {
    [Game_1.AttackType.PHYSICAL]: "#FF6E55",
    [Game_1.AttackType.SPECIAL]: "#7FC9FF",
    [Game_1.AttackType.TRUE]: "#FFD800"
};
exports.RarityProbabilityPerLevel = {
    1: [1, 0, 0, 0, 0],
    2: [1, 0, 0, 0, 0],
    3: [0.7, 0.3, 0, 0, 0],
    4: [0.55, 0.35, 0.1, 0, 0],
    5: [0.4, 0.38, 0.2, 0.02, 0],
    6: [0.25, 0.4, 0.3, 0.05, 0],
    7: [0.16, 0.33, 0.35, 0.15, 0.01],
    8: [0.11, 0.27, 0.35, 0.22, 0.05],
    9: [0.05, 0.2, 0.35, 0.3, 0.1]
};
exports.EvolutionTime = {
    EGG_HATCH: 3,
    EVOLVE_HATCH: 5
};
exports.KECLEON_SHOP_COST = 10;
exports.PoolSize = {
    [Game_1.Rarity.COMMON]: [1, 18, 29],
    [Game_1.Rarity.UNCOMMON]: [1, 13, 22],
    [Game_1.Rarity.RARE]: [1, 9, 18],
    [Game_1.Rarity.EPIC]: [1, 7, 14],
    [Game_1.Rarity.ULTRA]: [1, 5, 10],
    [Game_1.Rarity.UNIQUE]: [1, 1, 1],
    [Game_1.Rarity.LEGENDARY]: [1, 1, 1],
    [Game_1.Rarity.SPECIAL]: [0, 0, 0],
    [Game_1.Rarity.HATCH]: [0, 0, 0]
};
exports.UniqueShop = new Array(Pokemon_1.Pkm.AERODACTYL, Pokemon_1.Pkm.BLACEPHALON, Pokemon_1.Pkm.REGIDRAGO, Pokemon_1.Pkm.REGIELEKI, Pokemon_1.Pkm.CASTFORM, Pokemon_1.Pkm.REGICE, Pokemon_1.Pkm.REGISTEEL, Pokemon_1.Pkm.REGIROCK, Pokemon_1.Pkm.UXIE, Pokemon_1.Pkm.MESPRIT, Pokemon_1.Pkm.AZELF, Pokemon_1.PkmDuo.LATIOS_LATIAS, Pokemon_1.Pkm.LAPRAS, Pokemon_1.Pkm.ABSOL, Pokemon_1.Pkm.SPIRITOMB, Pokemon_1.Pkm.ROTOM, Pokemon_1.Pkm.PHIONE, Pokemon_1.Pkm.TAPU_KOKO, Pokemon_1.Pkm.TAPU_LELE, Pokemon_1.Pkm.SEVIPER, Pokemon_1.Pkm.KECLEON, Pokemon_1.Pkm.MAWILE, Pokemon_1.Pkm.TAUROS, Pokemon_1.Pkm.RELICANTH, Pokemon_1.Pkm.CHATOT, Pokemon_1.Pkm.FARFETCH_D, Pokemon_1.Pkm.TAPU_BULU, Pokemon_1.Pkm.TAPU_FINI, Pokemon_1.Pkm.MIMIKYU, Pokemon_1.Pkm.TYROGUE, Pokemon_1.Pkm.ZERAORA, Pokemon_1.Pkm.SHUCKLE, Pokemon_1.Pkm.LUNATONE, Pokemon_1.Pkm.SOLROCK, Pokemon_1.Pkm.MILTANK, Pokemon_1.Pkm.MARACTUS, Pokemon_1.PkmDuo.PLUSLE_MINUN, Pokemon_1.Pkm.PINSIR, Pokemon_1.Pkm.GLIGAR, Pokemon_1.Pkm.DELIBIRD, Pokemon_1.Pkm.TORKOAL, Pokemon_1.Pkm.IRON_BUNDLE, Pokemon_1.Pkm.CHINGLING, Pokemon_1.Pkm.DHELMISE, Pokemon_1.Pkm.SPINDA, Pokemon_1.Pkm.HERACROSS, Pokemon_1.PkmDuo.ILLUMISE_VOLBEAT, Pokemon_1.Pkm.TANDEMAUS, Pokemon_1.Pkm.TROPIUS, Pokemon_1.Pkm.CARNIVINE, Pokemon_1.Pkm.HOOPA, Pokemon_1.Pkm.COMFEY, Pokemon_1.Pkm.SABLEYE, Pokemon_1.Pkm.DRACOVISH, Pokemon_1.Pkm.GIMMIGHOUL, Pokemon_1.Pkm.BRUXISH, Pokemon_1.Pkm.CYCLIZAR, Pokemon_1.Pkm.MINIOR, Pokemon_1.Pkm.MORPEKO, Pokemon_1.Pkm.TYPE_NULL, Pokemon_1.Pkm.KANGASKHAN, Pokemon_1.Pkm.DRUDDIGON, Pokemon_1.Pkm.COSMOG, Pokemon_1.Pkm.SCYTHER, Pokemon_1.Pkm.ZANGOOSE, Pokemon_1.Pkm.SMEARGLE, Pokemon_1.Pkm.STANTLER, Pokemon_1.Pkm.KLEFKI, Pokemon_1.Pkm.HEATMOR, Pokemon_1.Pkm.HAWLUCHA, Pokemon_1.Pkm.STONJOURNER, Pokemon_1.Pkm.CRAMORANT, Pokemon_1.Pkm.PYUKUMUKU, Pokemon_1.Pkm.POIPOLE, Pokemon_1.Pkm.LUVDISC, Pokemon_1.Pkm.AUDINO, Pokemon_1.Pkm.MANTYKE, Pokemon_1.Pkm.DURANT, Pokemon_1.Pkm.SKARMORY, Pokemon_1.Pkm.SIGILYPH, Pokemon_1.Pkm.OGERPON_TEAL, Pokemon_1.Pkm.OGERPON_WELLSPRING, Pokemon_1.Pkm.OGERPON_HEARTHFLAME, Pokemon_1.Pkm.OGERPON_CORNERSTONE, Pokemon_1.Pkm.IRON_HANDS, Pokemon_1.Pkm.TURTONATOR);
exports.LegendaryShop = new Array(Pokemon_1.Pkm.KYUREM, Pokemon_1.Pkm.RESHIRAM, Pokemon_1.Pkm.ZEKROM, Pokemon_1.Pkm.STAKATAKA, Pokemon_1.Pkm.GENESECT, Pokemon_1.Pkm.GUZZLORD, Pokemon_1.Pkm.ETERNATUS, Pokemon_1.Pkm.MELOETTA, Pokemon_1.Pkm.MEW, Pokemon_1.Pkm.MEWTWO, Pokemon_1.Pkm.ENTEI, Pokemon_1.Pkm.SUICUNE, Pokemon_1.Pkm.RAIKOU, Pokemon_1.Pkm.REGIGIGAS, Pokemon_1.Pkm.CELEBI, Pokemon_1.Pkm.VICTINI, Pokemon_1.Pkm.JIRACHI, Pokemon_1.Pkm.ARCEUS, Pokemon_1.Pkm.DEOXYS, Pokemon_1.Pkm.SHAYMIN, Pokemon_1.Pkm.GIRATINA, Pokemon_1.Pkm.DARKRAI, Pokemon_1.Pkm.CRESSELIA, Pokemon_1.Pkm.HEATRAN, Pokemon_1.Pkm.LUGIA, Pokemon_1.Pkm.HO_OH, Pokemon_1.Pkm.PALKIA, Pokemon_1.Pkm.DIALGA, Pokemon_1.Pkm.RAYQUAZA, Pokemon_1.Pkm.KYOGRE, Pokemon_1.Pkm.GROUDON, Pokemon_1.Pkm.VOLCANION, Pokemon_1.Pkm.MARSHADOW, Pokemon_1.Pkm.XERNEAS, Pokemon_1.Pkm.YVELTAL, Pokemon_1.Pkm.ZAPDOS, Pokemon_1.Pkm.MOLTRES, Pokemon_1.Pkm.ARTICUNO, Pokemon_1.Pkm.GALARIAN_ARTICUNO, Pokemon_1.Pkm.GALARIAN_ZAPDOS, Pokemon_1.Pkm.GALARIAN_MOLTRES, Pokemon_1.Pkm.SPECTRIER, Pokemon_1.Pkm.KARTANA, Pokemon_1.Pkm.NECROZMA, Pokemon_1.Pkm.XURKITREE, Pokemon_1.Pkm.NIHILEGO, Pokemon_1.Pkm.PHEROMOSA, Pokemon_1.Pkm.TORNADUS, Pokemon_1.Pkm.THUNDURUS, Pokemon_1.Pkm.LANDORUS, Pokemon_1.Pkm.ENAMORUS, Pokemon_1.Pkm.MAGEARNA, Pokemon_1.Pkm.MELMETAL, Pokemon_1.Pkm.ZYGARDE_50, Pokemon_1.Pkm.TERRAKION, Pokemon_1.Pkm.VIRIZION, Pokemon_1.Pkm.COBALION, Pokemon_1.Pkm.KELDEO);
exports.NB_UNIQUE_PROPOSITIONS = 6;
exports.SHOP_SIZE = 6;
exports.FishRarityProbability = {
    [Item_1.Item.OLD_ROD]: {
        [Game_1.Rarity.SPECIAL]: 0.55,
        [Game_1.Rarity.COMMON]: 0.35,
        [Game_1.Rarity.UNCOMMON]: 0.1,
        [Game_1.Rarity.RARE]: 0,
        [Game_1.Rarity.EPIC]: 0
    },
    [Item_1.Item.GOOD_ROD]: {
        [Game_1.Rarity.SPECIAL]: 0.3,
        [Game_1.Rarity.COMMON]: 0.3,
        [Game_1.Rarity.UNCOMMON]: 0.3,
        [Game_1.Rarity.RARE]: 0.1,
        [Game_1.Rarity.EPIC]: 0
    },
    [Item_1.Item.SUPER_ROD]: {
        [Game_1.Rarity.SPECIAL]: 0.35,
        [Game_1.Rarity.COMMON]: 0.05,
        [Game_1.Rarity.UNCOMMON]: 0.25,
        [Game_1.Rarity.RARE]: 0.25,
        [Game_1.Rarity.EPIC]: 0.1
    }
};
exports.MAX_POOL_CONNECTIONS_SIZE = 16;
exports.MAX_CONCURRENT_PLAYERS_ON_SERVER = 1000;
exports.MAX_CONCURRENT_PLAYERS_ON_LOBBY = 500;
exports.MAX_PLAYERS_PER_GAME = 8;
exports.MIN_HUMAN_PLAYERS = process.env.MIN_HUMAN_PLAYERS
    ? parseInt(process.env.MIN_HUMAN_PLAYERS)
    : 1;
exports.INACTIVITY_TIMEOUT = 60 * 1000 * 10;
exports.DEFAULT_ATK_SPEED = 0.75;
exports.DEFAULT_CRIT_CHANCE = 10;
exports.DEFAULT_CRIT_POWER = 2;
exports.PROJECTILE_SPEED = 4;
exports.StageDuration = {
    1: 30,
    3: 40,
    5: 40,
    8: 40,
    9: 40,
    10: 50,
    11: 40,
    15: 40,
    19: 40,
    20: 50,
    DEFAULT: 30
};
exports.FIGHTING_PHASE_DURATION = 40000;
exports.ITEM_CAROUSEL_BASE_DURATION = 15000;
exports.PORTAL_CAROUSEL_BASE_DURATION = 20000;
exports.ItemCarouselStages = [4, 12, 17, 22, 27, 34];
exports.ItemProposalStages = [3, 15];
exports.AdditionalPicksStages = [5, 8, 11];
exports.PortalCarouselStages = [10, 20];
exports.EloRankThreshold = {
    [EloRank_1.EloRank.LEVEL_BALL]: 0,
    [EloRank_1.EloRank.NET_BALL]: 1050,
    [EloRank_1.EloRank.SAFARI_BALL]: 1100,
    [EloRank_1.EloRank.LOVE_BALL]: 1150,
    [EloRank_1.EloRank.PREMIER_BALL]: 1200,
    [EloRank_1.EloRank.QUICK_BALL]: 1250,
    [EloRank_1.EloRank.POKE_BALL]: 1300,
    [EloRank_1.EloRank.SUPER_BALL]: 1350,
    [EloRank_1.EloRank.ULTRA_BALL]: 1400,
    [EloRank_1.EloRank.MASTER_BALL]: 1500,
    [EloRank_1.EloRank.BEAST_BALL]: 1700
};
exports.WeatherThreshold = {
    [Weather_1.Weather.MISTY]: 8,
    [Weather_1.Weather.NEUTRAL]: 8,
    [Weather_1.Weather.NIGHT]: 8,
    [Weather_1.Weather.BLOODMOON]: 8,
    [Weather_1.Weather.RAIN]: 8,
    [Weather_1.Weather.SANDSTORM]: 8,
    [Weather_1.Weather.SNOW]: 8,
    [Weather_1.Weather.STORM]: 8,
    [Weather_1.Weather.SUN]: 8,
    [Weather_1.Weather.WINDY]: 8,
    [Weather_1.Weather.SMOG]: 8
};
exports.MaskCoordinate = Object.freeze({
    X: { x: 4, y: 1 },
    A: { x: 4, y: 4 },
    B: { x: 3, y: 3 },
    C: { x: 4, y: 2 },
    D: { x: 5, y: 3 },
    AB: { x: 3, y: 2 },
    AC: { x: 3, y: 1 },
    AD: { x: 5, y: 1 },
    BC: { x: 3, y: 0 },
    BD: { x: 4, y: 0 },
    CD: { x: 5, y: 0 },
    ABC: { x: 5, y: 4 },
    ABD: { x: 2, y: 4 },
    ACD: { x: 3, y: 4 },
    BCD: { x: 2, y: 3 },
    ABCD: { x: 4, y: 3 },
    A1B: { x: 0, y: 2 },
    B2C: { x: 0, y: 0 },
    C3D: { x: 2, y: 0 },
    AD4: { x: 2, y: 2 },
    A1BC: { x: 2, y: 5 },
    AB2C: { x: 2, y: 6 },
    B2CD: { x: 5, y: 5 },
    BC3D: { x: 4, y: 5 },
    AC3D: { x: 3, y: 6 },
    ACD4: { x: 3, y: 5 },
    A1BD: { x: 5, y: 6 },
    ABD4: { x: 4, y: 6 },
    A1B2C: { x: 0, y: 1 },
    B2C3D: { x: 1, y: 0 },
    AC3D4: { x: 2, y: 1 },
    A1BD4: { x: 1, y: 2 },
    A1BCD: { x: 2, y: 7 },
    AB2CD: { x: 0, y: 7 },
    ABC3D: { x: 1, y: 7 },
    ABCD4: { x: 3, y: 7 },
    A1B2CD: { x: 1, y: 3 },
    AB2C3D: { x: 0, y: 4 },
    ABC3D4: { x: 0, y: 3 },
    A1BCD4: { x: 1, y: 4 },
    A1B2C3D: { x: 1, y: 6 },
    AB2C3D4: { x: 0, y: 6 },
    A1BC3D4: { x: 0, y: 5 },
    A1B2CD4: { x: 1, y: 5 },
    A1BC3D: { x: 4, y: 7 },
    AB2CD4: { x: 5, y: 7 },
    A1B2C3D4: { x: 1, y: 1 }
});
var Mask;
(function (Mask) {
    Mask["X"] = "X";
    Mask["A"] = "A";
    Mask["B"] = "B";
    Mask["C"] = "C";
    Mask["D"] = "D";
    Mask["AB"] = "AB";
    Mask["AC"] = "AC";
    Mask["AD"] = "AD";
    Mask["BC"] = "BC";
    Mask["BD"] = "BD";
    Mask["CD"] = "CD";
    Mask["ABC"] = "ABC";
    Mask["ABD"] = "ABD";
    Mask["ACD"] = "ACD";
    Mask["BCD"] = "BCD";
    Mask["ABCD"] = "ABCD";
    Mask["A1B"] = "A1B";
    Mask["B2C"] = "B2C";
    Mask["C3D"] = "C3D";
    Mask["AD4"] = "AD4";
    Mask["A1BC"] = "A1BC";
    Mask["AB2C"] = "AB2C";
    Mask["B2CD"] = "B2CD";
    Mask["BC3D"] = "BC3D";
    Mask["AC3D"] = "AC3D";
    Mask["ACD4"] = "ACD4";
    Mask["A1BD"] = "A1BD";
    Mask["ABD4"] = "ABD4";
    Mask["A1B2C"] = "A1B2C";
    Mask["B2C3D"] = "B2C3D";
    Mask["AC3D4"] = "AC3D4";
    Mask["A1BD4"] = "A1BD4";
    Mask["A1BCD"] = "A1BCD";
    Mask["AB2CD"] = "AB2CD";
    Mask["ABC3D"] = "ABC3D";
    Mask["ABCD4"] = "ABCD4";
    Mask["A1B2CD"] = "A1B2CD";
    Mask["AB2C3D"] = "AB2C3D";
    Mask["ABC3D4"] = "ABC3D4";
    Mask["A1BCD4"] = "A1BCD4";
    Mask["A1B2C3D"] = "A1B2C3D";
    Mask["AB2C3D4"] = "AB2C3D4";
    Mask["A1BC3D4"] = "A1BC3D4";
    Mask["A1B2CD4"] = "A1B2CD4";
    Mask["A1BC3D"] = "A1BC3D";
    Mask["AB2CD4"] = "AB2CD4";
    Mask["A1B2C3D4"] = "A1B2C3D4";
})(Mask || (exports.Mask = Mask = {}));
var TerrainType;
(function (TerrainType) {
    TerrainType[TerrainType["WALL"] = 0] = "WALL";
    TerrainType[TerrainType["WATER"] = 1] = "WATER";
    TerrainType[TerrainType["GROUND"] = 2] = "GROUND";
})(TerrainType || (exports.TerrainType = TerrainType = {}));
exports.IdTable = {
    0: Mask.X,
    1: Mask.A,
    2: Mask.B,
    4: Mask.C,
    8: Mask.D,
    3: Mask.AB,
    5: Mask.AC,
    9: Mask.AD,
    6: Mask.BC,
    10: Mask.BD,
    12: Mask.CD,
    7: Mask.ABC,
    11: Mask.ABD,
    13: Mask.ACD,
    14: Mask.BCD,
    15: Mask.ABCD,
    19: Mask.A1B,
    38: Mask.B2C,
    76: Mask.C3D,
    137: Mask.AD4,
    23: Mask.A1BC,
    39: Mask.AB2C,
    46: Mask.B2CD,
    78: Mask.BC3D,
    77: Mask.AC3D,
    141: Mask.ACD4,
    27: Mask.A1BD,
    139: Mask.ABD4,
    55: Mask.A1B2C,
    110: Mask.B2C3D,
    205: Mask.AC3D4,
    155: Mask.A1BD4,
    31: Mask.A1BCD,
    47: Mask.AB2CD,
    79: Mask.ABC3D,
    143: Mask.ABCD4,
    63: Mask.A1B2CD,
    111: Mask.AB2C3D,
    207: Mask.ABC3D4,
    159: Mask.A1BCD4,
    127: Mask.A1B2C3D,
    239: Mask.AB2C3D4,
    223: Mask.A1BC3D4,
    191: Mask.A1B2CD4,
    95: Mask.A1BC3D,
    175: Mask.AB2CD4,
    255: Mask.A1B2C3D4
};
exports.ItemStats = {
    [Item_1.Item.FOSSIL_STONE]: {},
    [Item_1.Item.TWISTED_SPOON]: { [Game_1.Stat.AP]: 10 },
    [Item_1.Item.MAGNET]: { [Game_1.Stat.ATK_SPEED]: 10 },
    [Item_1.Item.BLACK_GLASSES]: { [Game_1.Stat.CRIT_CHANCE]: 10 },
    [Item_1.Item.MIRACLE_SEED]: { [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.CHARCOAL]: { [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.NEVER_MELT_ICE]: { [Game_1.Stat.SPE_DEF]: 2 },
    [Item_1.Item.HEART_SCALE]: { [Game_1.Stat.DEF]: 2 },
    [Item_1.Item.MYSTIC_WATER]: { [Game_1.Stat.PP]: 15 },
    [Item_1.Item.OLD_AMBER]: {},
    [Item_1.Item.DAWN_STONE]: { [Game_1.Stat.AP]: 10 },
    [Item_1.Item.WATER_STONE]: { [Game_1.Stat.PP]: 15 },
    [Item_1.Item.THUNDER_STONE]: { [Game_1.Stat.ATK_SPEED]: 10 },
    [Item_1.Item.FIRE_STONE]: { [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.MOON_STONE]: { [Game_1.Stat.DEF]: 2 },
    [Item_1.Item.DUSK_STONE]: { [Game_1.Stat.CRIT_CHANCE]: 10 },
    [Item_1.Item.LEAF_STONE]: { [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.ICE_STONE]: { [Game_1.Stat.SPE_DEF]: 2 },
    [Item_1.Item.CHOICE_SPECS]: { [Game_1.Stat.AP]: 100 },
    [Item_1.Item.SOUL_DEW]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.PP]: 15 },
    [Item_1.Item.UPGRADE]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.ATK_SPEED]: 10 },
    [Item_1.Item.REAPER_CLOTH]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.CRIT_CHANCE]: 20 },
    [Item_1.Item.POKEMONOMICON]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.POWER_LENS]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.SPE_DEF]: 5 },
    [Item_1.Item.SHELL_BELL]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.LUCKY_EGG]: { [Game_1.Stat.AP]: 60, [Game_1.Stat.DEF]: 6, [Game_1.Stat.LUCK]: 50 },
    [Item_1.Item.AQUA_EGG]: { [Game_1.Stat.PP]: 50 },
    [Item_1.Item.BLUE_ORB]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.ATK_SPEED]: 10 },
    [Item_1.Item.SCOPE_LENS]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.CRIT_CHANCE]: 25 },
    [Item_1.Item.STAR_DUST]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.GREEN_ORB]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.SPE_DEF]: 2 },
    [Item_1.Item.MANA_SCARF]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.SMOKE_BALL]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.DEF]: 2 },
    [Item_1.Item.XRAY_VISION]: { [Game_1.Stat.ATK_SPEED]: 50 },
    [Item_1.Item.RAZOR_FANG]: {
        [Game_1.Stat.ATK_SPEED]: 10,
        [Game_1.Stat.CRIT_CHANCE]: 10,
        [Game_1.Stat.CRIT_POWER]: 1
    },
    [Item_1.Item.GRACIDEA_FLOWER]: { [Game_1.Stat.ATK_SPEED]: 10, [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.CHOICE_SCARF]: { [Game_1.Stat.ATK_SPEED]: 10, [Game_1.Stat.SPE_DEF]: 2 },
    [Item_1.Item.PUNCHING_GLOVE]: { [Game_1.Stat.ATK_SPEED]: 10, [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.DEFENSIVE_RIBBON]: { [Game_1.Stat.ATK_SPEED]: 10, [Game_1.Stat.DEF]: 2 },
    [Item_1.Item.WONDER_BOX]: { [Game_1.Stat.CRIT_CHANCE]: 10 },
    [Item_1.Item.CLEANSE_TAG]: { [Game_1.Stat.CRIT_CHANCE]: 10, [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.WIDE_LENS]: { [Game_1.Stat.CRIT_CHANCE]: 10, [Game_1.Stat.SPE_DEF]: 2 },
    [Item_1.Item.RAZOR_CLAW]: { [Game_1.Stat.CRIT_CHANCE]: 50, [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.FLUFFY_TAIL]: { [Game_1.Stat.CRIT_CHANCE]: 10, [Game_1.Stat.DEF]: 2 },
    [Item_1.Item.KINGS_ROCK]: { [Game_1.Stat.SHIELD]: 100 },
    [Item_1.Item.SHINY_CHARM]: { [Game_1.Stat.SHIELD]: 15, [Game_1.Stat.SPE_DEF]: 2 },
    [Item_1.Item.PROTECTIVE_PADS]: { [Game_1.Stat.SHIELD]: 60, [Game_1.Stat.ATK]: 6 },
    [Item_1.Item.MAX_REVIVE]: { [Game_1.Stat.SHIELD]: 15, [Game_1.Stat.DEF]: 2 },
    [Item_1.Item.ASSAULT_VEST]: { [Game_1.Stat.SPE_DEF]: 20 },
    [Item_1.Item.AMULET_COIN]: {},
    [Item_1.Item.POKE_DOLL]: { [Game_1.Stat.SPE_DEF]: 2, [Game_1.Stat.DEF]: 2 },
    [Item_1.Item.RED_ORB]: { [Game_1.Stat.ATK]: 10 },
    [Item_1.Item.FLAME_ORB]: { [Game_1.Stat.ATK]: 5, [Game_1.Stat.DEF]: 2 },
    [Item_1.Item.ROCKY_HELMET]: { [Game_1.Stat.DEF]: 12 },
    [Item_1.Item.AGUAV_BERRY]: {},
    [Item_1.Item.APICOT_BERRY]: {},
    [Item_1.Item.ASPEAR_BERRY]: {},
    [Item_1.Item.BABIRI_BERRY]: {},
    [Item_1.Item.CHERI_BERRY]: {},
    [Item_1.Item.CHESTO_BERRY]: {},
    [Item_1.Item.GANLON_BERRY]: {},
    [Item_1.Item.JABOCA_BERRY]: {},
    [Item_1.Item.LANSAT_BERRY]: {},
    [Item_1.Item.LEPPA_BERRY]: {},
    [Item_1.Item.LIECHI_BERRY]: {},
    [Item_1.Item.LUM_BERRY]: {},
    [Item_1.Item.ORAN_BERRY]: {},
    [Item_1.Item.PECHA_BERRY]: {},
    [Item_1.Item.PERSIM_BERRY]: {},
    [Item_1.Item.PETAYA_BERRY]: {},
    [Item_1.Item.RAWST_BERRY]: {},
    [Item_1.Item.ROWAP_BERRY]: {},
    [Item_1.Item.SALAC_BERRY]: {},
    [Item_1.Item.SITRUS_BERRY]: {},
    [Item_1.Item.COMFEY]: {},
    [Item_1.Item.ELECTIRIZER]: { [Game_1.Stat.ATK_SPEED]: 30 },
    [Item_1.Item.MAGMARIZER]: { [Game_1.Stat.ATK]: 5 },
    [Item_1.Item.MACHO_BRACE]: { [Game_1.Stat.ATK]: 15, [Game_1.Stat.ATK_SPEED]: -15 },
    [Item_1.Item.LIGHT_BALL]: { [Game_1.Stat.AP]: 75 },
    [Item_1.Item.TOXIC_ORB]: { [Game_1.Stat.SHIELD]: 15, [Game_1.Stat.SPE_DEF]: 2 },
    [Item_1.Item.METRONOME]: { [Game_1.Stat.PP]: 5 },
    [Item_1.Item.METAL_COAT]: { [Game_1.Stat.DEF]: 5 },
    [Item_1.Item.SWIFT_WING]: { [Game_1.Stat.ATK_SPEED]: 25 },
    [Item_1.Item.HARD_STONE]: { [Game_1.Stat.SHIELD]: 100 },
    [Item_1.Item.BIG_NUGGET]: {
        [Game_1.Stat.DEF]: 5,
        [Game_1.Stat.SPE_DEF]: 5
    },
    [Item_1.Item.INCENSE]: { [Game_1.Stat.SPE_DEF]: 5, [Game_1.Stat.AP]: 30 },
    [Item_1.Item.EXP_SHARE]: {},
    [Item_1.Item.METEORITE]: {},
    [Item_1.Item.ZYGARDE_CUBE]: {},
    [Item_1.Item.BERRY_JUICE]: {},
    [Item_1.Item.TRASH]: {},
    [Item_1.Item.DYNAMAX_BAND]: {},
    [Item_1.Item.SHINY_STONE]: {},
    [Item_1.Item.OLD_ROD]: {},
    [Item_1.Item.GOOD_ROD]: {},
    [Item_1.Item.SUPER_ROD]: {},
    [Item_1.Item.RARE_CANDY]: {},
    [Item_1.Item.EVIOLITE]: {
        [Game_1.Stat.HP]: 100,
        [Game_1.Stat.ATK]: 10,
        [Game_1.Stat.AP]: 50,
        [Game_1.Stat.DEF]: 5,
        [Game_1.Stat.SPE_DEF]: 5
    },
    [Item_1.Item.GOLD_BOTTLE_CAP]: {
        [Game_1.Stat.LUCK]: 50
    },
    [Item_1.Item.SACRED_ASH]: {},
    [Item_1.Item.COMET_SHARD]: { [Game_1.Stat.ATK]: 12 },
    [Item_1.Item.ABSORB_BULB]: { [Game_1.Stat.DEF]: 8, [Game_1.Stat.SPE_DEF]: 8 },
    [Item_1.Item.WHITE_FLUTE]: {},
    [Item_1.Item.REPEAT_BALL]: {},
    [Item_1.Item.DAMP_ROCK]: {},
    [Item_1.Item.ICY_ROCK]: {},
    [Item_1.Item.HEAT_ROCK]: {},
    [Item_1.Item.SMOOTH_ROCK]: {},
    [Item_1.Item.BLACK_AUGURITE]: {},
    [Item_1.Item.MIST_STONE]: {},
    [Item_1.Item.ELECTRIC_QUARTZ]: {},
    [Item_1.Item.BLOOD_STONE]: {},
    [Item_1.Item.FLOAT_STONE]: {},
    [Item_1.Item.SMELLY_CLAY]: {},
    [Item_1.Item.POKERUS_VIAL]: {},
    [Item_1.Item.ROTOM_PHONE]: {},
    [Item_1.Item.SILK_SCARF]: {},
    [Item_1.Item.TINY_MUSHROOM]: {},
    [Item_1.Item.FIRE_SHARD]: {},
    [Item_1.Item.TEAL_MASK]: { [Game_1.Stat.SHIELD]: 50 },
    [Item_1.Item.WELLSPRING_MASK]: { [Game_1.Stat.SHIELD]: 50 },
    [Item_1.Item.CORNERSTONE_MASK]: { [Game_1.Stat.SHIELD]: 50 },
    [Item_1.Item.HEARTHFLAME_MASK]: { [Game_1.Stat.SHIELD]: 50 },
    [Item_1.Item.TM_BIDE]: {},
    [Item_1.Item.TM_BRICK_BREAK]: {},
    [Item_1.Item.TM_BULK_UP]: {},
    [Item_1.Item.TM_PAYDAY]: {},
    [Item_1.Item.TM_PSYCH_UP]: {},
    [Item_1.Item.TM_RAGE]: {},
    [Item_1.Item.TM_RETALIATE]: {},
    [Item_1.Item.TM_TAUNT]: {},
    [Item_1.Item.HM_CUT]: {},
    [Item_1.Item.HM_FLY]: {},
    [Item_1.Item.HM_FLASH]: {},
    [Item_1.Item.HM_ROCK_SMASH]: {},
    [Item_1.Item.HM_STRENGTH]: {},
    [Item_1.Item.HM_SURF]: {},
    [Item_1.Item.HM_WATERFALL]: {},
    [Item_1.Item.HM_WHIRLPOOL]: {}
};
exports.DTEF_WIDTH = 144;
exports.DTEF_HEIGHT = 192;
exports.DTEF_TILESET_WIDTH = 6;
exports.DTEF_TILESET_HEIGHT = 8;
exports.DTEF_TILESET_TILE_WIDTH = 24;
exports.SCRIBBLE_LOBBY_CRON = "0 0 0-20/4 * * *";
exports.GREATBALL_RANKED_LOBBY_CRON = "0 0 2,6,14,18 * * *";
exports.ULTRABALL_RANKED_LOBBY_CRON = "0 0 22 * * *";
exports.DUST_PER_BOOSTER = 50;
exports.DUST_PER_SHINY = 250;
exports.TOURNAMENT_REGISTRATION_TIME = 60 * 60 * 1000;
exports.TOURNAMENT_CLEANUP_DELAY = 24 * 60 * 60 * 1000;
exports.MAX_SIMULATION_DELTA_TIME = 50;
exports.CRON_ELO_DECAY_DELAY = 86400 * 1000 * 10;
exports.CRON_ELO_DECAY_MINIMUM_ELO = 1100;
exports.CRON_HISTORY_CLEANUP_DELAY = 86400 * 1000 * 30;
exports.BOTS_ENABLED = true;
//# sourceMappingURL=Config.js.map