"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityPerTM = exports.HMs = exports.TMs = exports.OgerponMasks = exports.NonHoldableItems = exports.NonSpecialItemComponents = exports.SynergyGivenByItem = exports.SynergyItems = exports.SynergyStones = exports.CraftableItems = exports.WeatherByWeatherRocks = exports.WeatherRocksByWeather = exports.WeatherRocks = exports.ShinyItems = exports.ArtificialItems = exports.Berries = exports.ItemRecipe = exports.ItemComponents = exports.FishingRods = exports.SpecialItems = exports.AllItems = exports.Item = void 0;
const map_1 = require("../../utils/map");
const Ability_1 = require("./Ability");
const Synergy_1 = require("./Synergy");
const Weather_1 = require("./Weather");
var Item;
(function (Item) {
    Item["FOSSIL_STONE"] = "FOSSIL_STONE";
    Item["TWISTED_SPOON"] = "TWISTED_SPOON";
    Item["MYSTIC_WATER"] = "MYSTIC_WATER";
    Item["MAGNET"] = "MAGNET";
    Item["BLACK_GLASSES"] = "BLACK_GLASSES";
    Item["MIRACLE_SEED"] = "MIRACLE_SEED";
    Item["NEVER_MELT_ICE"] = "NEVER_MELT_ICE";
    Item["CHARCOAL"] = "CHARCOAL";
    Item["HEART_SCALE"] = "HEART_SCALE";
    Item["OLD_AMBER"] = "OLD_AMBER";
    Item["DAWN_STONE"] = "DAWN_STONE";
    Item["WATER_STONE"] = "WATER_STONE";
    Item["THUNDER_STONE"] = "THUNDER_STONE";
    Item["FIRE_STONE"] = "FIRE_STONE";
    Item["MOON_STONE"] = "MOON_STONE";
    Item["DUSK_STONE"] = "DUSK_STONE";
    Item["LEAF_STONE"] = "LEAF_STONE";
    Item["ICE_STONE"] = "ICE_STONE";
    Item["CHOICE_SPECS"] = "CHOICE_SPECS";
    Item["SOUL_DEW"] = "SOUL_DEW";
    Item["UPGRADE"] = "UPGRADE";
    Item["REAPER_CLOTH"] = "REAPER_CLOTH";
    Item["POKEMONOMICON"] = "POKEMONOMICON";
    Item["POWER_LENS"] = "POWER_LENS";
    Item["SHELL_BELL"] = "SHELL_BELL";
    Item["LUCKY_EGG"] = "LUCKY_EGG";
    Item["AQUA_EGG"] = "AQUA_EGG";
    Item["BLUE_ORB"] = "BLUE_ORB";
    Item["SCOPE_LENS"] = "SCOPE_LENS";
    Item["STAR_DUST"] = "STAR_DUST";
    Item["GREEN_ORB"] = "GREEN_ORB";
    Item["MANA_SCARF"] = "MANA_SCARF";
    Item["SMOKE_BALL"] = "SMOKE_BALL";
    Item["XRAY_VISION"] = "XRAY_VISION";
    Item["RAZOR_FANG"] = "RAZOR_FANG";
    Item["PROTECTIVE_PADS"] = "PROTECTIVE_PADS";
    Item["CHOICE_SCARF"] = "CHOICE_SCARF";
    Item["PUNCHING_GLOVE"] = "PUNCHING_GLOVE";
    Item["DEFENSIVE_RIBBON"] = "DEFENSIVE_RIBBON";
    Item["WONDER_BOX"] = "WONDER_BOX";
    Item["CLEANSE_TAG"] = "CLEANSE_TAG";
    Item["WIDE_LENS"] = "WIDE_LENS";
    Item["RAZOR_CLAW"] = "RAZOR_CLAW";
    Item["FLUFFY_TAIL"] = "FLUFFY_TAIL";
    Item["KINGS_ROCK"] = "KINGS_ROCK";
    Item["SHINY_CHARM"] = "SHINY_CHARM";
    Item["GRACIDEA_FLOWER"] = "GRACIDEA_FLOWER";
    Item["FLAME_ORB"] = "FLAME_ORB";
    Item["ASSAULT_VEST"] = "ASSAULT_VEST";
    Item["AMULET_COIN"] = "AMULET_COIN";
    Item["POKE_DOLL"] = "POKE_DOLL";
    Item["RED_ORB"] = "RED_ORB";
    Item["MAX_REVIVE"] = "MAX_REVIVE";
    Item["ROCKY_HELMET"] = "ROCKY_HELMET";
    Item["AGUAV_BERRY"] = "AGUAV_BERRY";
    Item["APICOT_BERRY"] = "APICOT_BERRY";
    Item["ASPEAR_BERRY"] = "ASPEAR_BERRY";
    Item["BABIRI_BERRY"] = "BABIRI_BERRY";
    Item["CHERI_BERRY"] = "CHERI_BERRY";
    Item["CHESTO_BERRY"] = "CHESTO_BERRY";
    Item["GANLON_BERRY"] = "GANLON_BERRY";
    Item["JABOCA_BERRY"] = "JABOCA_BERRY";
    Item["LANSAT_BERRY"] = "LANSAT_BERRY";
    Item["LEPPA_BERRY"] = "LEPPA_BERRY";
    Item["LIECHI_BERRY"] = "LIECHI_BERRY";
    Item["LUM_BERRY"] = "LUM_BERRY";
    Item["ORAN_BERRY"] = "ORAN_BERRY";
    Item["PECHA_BERRY"] = "PECHA_BERRY";
    Item["PERSIM_BERRY"] = "PERSIM_BERRY";
    Item["PETAYA_BERRY"] = "PETAYA_BERRY";
    Item["RAWST_BERRY"] = "RAWST_BERRY";
    Item["ROWAP_BERRY"] = "ROWAP_BERRY";
    Item["SALAC_BERRY"] = "SALAC_BERRY";
    Item["SITRUS_BERRY"] = "SITRUS_BERRY";
    Item["COMFEY"] = "COMFEY";
    Item["ELECTIRIZER"] = "ELECTIRIZER";
    Item["MAGMARIZER"] = "MAGMARIZER";
    Item["MACHO_BRACE"] = "MACHO_BRACE";
    Item["LIGHT_BALL"] = "LIGHT_BALL";
    Item["TOXIC_ORB"] = "TOXIC_ORB";
    Item["METRONOME"] = "METRONOME";
    Item["METAL_COAT"] = "METAL_COAT";
    Item["SWIFT_WING"] = "SWIFT_WING";
    Item["HARD_STONE"] = "HARD_STONE";
    Item["BIG_NUGGET"] = "BIG_NUGGET";
    Item["INCENSE"] = "INCENSE";
    Item["EXP_SHARE"] = "EXP_SHARE";
    Item["POKERUS_VIAL"] = "POKERUS_VIAL";
    Item["ROTOM_PHONE"] = "ROTOM_PHONE";
    Item["SILK_SCARF"] = "SILK_SCARF";
    Item["TINY_MUSHROOM"] = "TINY_MUSHROOM";
    Item["METEORITE"] = "METEORITE";
    Item["BERRY_JUICE"] = "BERRY_JUICE";
    Item["TRASH"] = "TRASH";
    Item["DYNAMAX_BAND"] = "DYNAMAX_BAND";
    Item["SHINY_STONE"] = "SHINY_STONE";
    Item["OLD_ROD"] = "OLD_ROD";
    Item["GOOD_ROD"] = "GOOD_ROD";
    Item["SUPER_ROD"] = "SUPER_ROD";
    Item["RARE_CANDY"] = "RARE_CANDY";
    Item["EVIOLITE"] = "EVIOLITE";
    Item["WHITE_FLUTE"] = "WHITE_FLUTE";
    Item["GOLD_BOTTLE_CAP"] = "GOLD_BOTTLE_CAP";
    Item["ABSORB_BULB"] = "ABSORB_BULB";
    Item["SACRED_ASH"] = "SACRED_ASH";
    Item["COMET_SHARD"] = "COMET_SHARD";
    Item["REPEAT_BALL"] = "REPEAT_BALL";
    Item["DAMP_ROCK"] = "DAMP_ROCK";
    Item["ICY_ROCK"] = "ICY_ROCK";
    Item["HEAT_ROCK"] = "HEAT_ROCK";
    Item["SMOOTH_ROCK"] = "SMOOTH_ROCK";
    Item["BLACK_AUGURITE"] = "BLACK_AUGURITE";
    Item["FLOAT_STONE"] = "FLOAT_STONE";
    Item["MIST_STONE"] = "MIST_STONE";
    Item["ELECTRIC_QUARTZ"] = "ELECTRIC_QUARTZ";
    Item["BLOOD_STONE"] = "BLOOD_STONE";
    Item["SMELLY_CLAY"] = "SMELLY_CLAY";
    Item["FIRE_SHARD"] = "FIRE_SHARD";
    Item["TEAL_MASK"] = "TEAL_MASK";
    Item["WELLSPRING_MASK"] = "WELLSPRING_MASK";
    Item["CORNERSTONE_MASK"] = "CORNERSTONE_MASK";
    Item["HEARTHFLAME_MASK"] = "HEARTHFLAME_MASK";
    Item["ZYGARDE_CUBE"] = "ZYGARDE_CUBE";
    Item["TM_RAGE"] = "TM_RAGE";
    Item["TM_BRICK_BREAK"] = "TM_BRICK_BREAK";
    Item["TM_TAUNT"] = "TM_TAUNT";
    Item["TM_BULK_UP"] = "TM_BULK_UP";
    Item["TM_BIDE"] = "TM_BIDE";
    Item["TM_PSYCH_UP"] = "TM_PSYCH_UP";
    Item["TM_RETALIATE"] = "TM_RETALIATE";
    Item["TM_PAYDAY"] = "TM_PAYDAY";
    Item["HM_CUT"] = "HM_CUT";
    Item["HM_FLY"] = "HM_FLY";
    Item["HM_SURF"] = "HM_SURF";
    Item["HM_STRENGTH"] = "HM_STRENGTH";
    Item["HM_FLASH"] = "HM_FLASH";
    Item["HM_ROCK_SMASH"] = "HM_ROCK_SMASH";
    Item["HM_WHIRLPOOL"] = "HM_WHIRLPOOL";
    Item["HM_WATERFALL"] = "HM_WATERFALL";
})(Item || (exports.Item = Item = {}));
exports.AllItems = Object.values(Item);
exports.SpecialItems = [
    Item.COMFEY,
    Item.METEORITE,
    Item.TEAL_MASK,
    Item.WELLSPRING_MASK,
    Item.CORNERSTONE_MASK,
    Item.HEARTHFLAME_MASK,
    Item.ZYGARDE_CUBE,
    Item.BERRY_JUICE,
    Item.FIRE_SHARD,
    Item.OLD_ROD,
    Item.GOOD_ROD,
    Item.SUPER_ROD,
    Item.TRASH
];
exports.FishingRods = [
    Item.SUPER_ROD,
    Item.GOOD_ROD,
    Item.OLD_ROD
];
exports.ItemComponents = [
    Item.FOSSIL_STONE,
    Item.TWISTED_SPOON,
    Item.MAGNET,
    Item.BLACK_GLASSES,
    Item.MIRACLE_SEED,
    Item.CHARCOAL,
    Item.NEVER_MELT_ICE,
    Item.HEART_SCALE,
    Item.MYSTIC_WATER
];
exports.ItemRecipe = {
    [Item.OLD_AMBER]: [Item.FOSSIL_STONE, Item.FOSSIL_STONE],
    [Item.DAWN_STONE]: [Item.FOSSIL_STONE, Item.TWISTED_SPOON],
    [Item.WATER_STONE]: [Item.FOSSIL_STONE, Item.MYSTIC_WATER],
    [Item.THUNDER_STONE]: [Item.FOSSIL_STONE, Item.MAGNET],
    [Item.FIRE_STONE]: [Item.FOSSIL_STONE, Item.CHARCOAL],
    [Item.MOON_STONE]: [Item.FOSSIL_STONE, Item.HEART_SCALE],
    [Item.DUSK_STONE]: [Item.FOSSIL_STONE, Item.BLACK_GLASSES],
    [Item.LEAF_STONE]: [Item.FOSSIL_STONE, Item.MIRACLE_SEED],
    [Item.ICE_STONE]: [Item.FOSSIL_STONE, Item.NEVER_MELT_ICE],
    [Item.CHOICE_SPECS]: [Item.TWISTED_SPOON, Item.TWISTED_SPOON],
    [Item.SOUL_DEW]: [Item.TWISTED_SPOON, Item.MYSTIC_WATER],
    [Item.UPGRADE]: [Item.TWISTED_SPOON, Item.MAGNET],
    [Item.REAPER_CLOTH]: [Item.TWISTED_SPOON, Item.BLACK_GLASSES],
    [Item.POKEMONOMICON]: [Item.TWISTED_SPOON, Item.MIRACLE_SEED],
    [Item.POWER_LENS]: [Item.TWISTED_SPOON, Item.NEVER_MELT_ICE],
    [Item.SHELL_BELL]: [Item.TWISTED_SPOON, Item.CHARCOAL],
    [Item.LUCKY_EGG]: [Item.TWISTED_SPOON, Item.HEART_SCALE],
    [Item.AQUA_EGG]: [Item.MYSTIC_WATER, Item.MYSTIC_WATER],
    [Item.BLUE_ORB]: [Item.MYSTIC_WATER, Item.MAGNET],
    [Item.SCOPE_LENS]: [Item.MYSTIC_WATER, Item.BLACK_GLASSES],
    [Item.STAR_DUST]: [Item.MYSTIC_WATER, Item.MIRACLE_SEED],
    [Item.GREEN_ORB]: [Item.MYSTIC_WATER, Item.NEVER_MELT_ICE],
    [Item.MANA_SCARF]: [Item.MYSTIC_WATER, Item.CHARCOAL],
    [Item.SMOKE_BALL]: [Item.MYSTIC_WATER, Item.HEART_SCALE],
    [Item.XRAY_VISION]: [Item.MAGNET, Item.MAGNET],
    [Item.RAZOR_FANG]: [Item.MAGNET, Item.BLACK_GLASSES],
    [Item.GRACIDEA_FLOWER]: [Item.MAGNET, Item.MIRACLE_SEED],
    [Item.CHOICE_SCARF]: [Item.MAGNET, Item.NEVER_MELT_ICE],
    [Item.PUNCHING_GLOVE]: [Item.MAGNET, Item.CHARCOAL],
    [Item.DEFENSIVE_RIBBON]: [Item.MAGNET, Item.HEART_SCALE],
    [Item.WONDER_BOX]: [Item.BLACK_GLASSES, Item.BLACK_GLASSES],
    [Item.CLEANSE_TAG]: [Item.BLACK_GLASSES, Item.MIRACLE_SEED],
    [Item.WIDE_LENS]: [Item.BLACK_GLASSES, Item.NEVER_MELT_ICE],
    [Item.RAZOR_CLAW]: [Item.BLACK_GLASSES, Item.CHARCOAL],
    [Item.FLUFFY_TAIL]: [Item.BLACK_GLASSES, Item.HEART_SCALE],
    [Item.KINGS_ROCK]: [Item.MIRACLE_SEED, Item.MIRACLE_SEED],
    [Item.SHINY_CHARM]: [Item.MIRACLE_SEED, Item.NEVER_MELT_ICE],
    [Item.PROTECTIVE_PADS]: [Item.MIRACLE_SEED, Item.CHARCOAL],
    [Item.MAX_REVIVE]: [Item.MIRACLE_SEED, Item.HEART_SCALE],
    [Item.ASSAULT_VEST]: [Item.NEVER_MELT_ICE, Item.NEVER_MELT_ICE],
    [Item.AMULET_COIN]: [Item.NEVER_MELT_ICE, Item.CHARCOAL],
    [Item.POKE_DOLL]: [Item.NEVER_MELT_ICE, Item.HEART_SCALE],
    [Item.RED_ORB]: [Item.CHARCOAL, Item.CHARCOAL],
    [Item.FLAME_ORB]: [Item.CHARCOAL, Item.HEART_SCALE],
    [Item.ROCKY_HELMET]: [Item.HEART_SCALE, Item.HEART_SCALE]
};
exports.Berries = [
    Item.AGUAV_BERRY,
    Item.APICOT_BERRY,
    Item.ASPEAR_BERRY,
    Item.BABIRI_BERRY,
    Item.CHERI_BERRY,
    Item.CHESTO_BERRY,
    Item.GANLON_BERRY,
    Item.JABOCA_BERRY,
    Item.LANSAT_BERRY,
    Item.LEPPA_BERRY,
    Item.LIECHI_BERRY,
    Item.LUM_BERRY,
    Item.ORAN_BERRY,
    Item.PECHA_BERRY,
    Item.PERSIM_BERRY,
    Item.PETAYA_BERRY,
    Item.RAWST_BERRY,
    Item.ROWAP_BERRY,
    Item.SALAC_BERRY,
    Item.SITRUS_BERRY
];
exports.ArtificialItems = [
    Item.EXP_SHARE,
    Item.ELECTIRIZER,
    Item.MAGMARIZER,
    Item.LIGHT_BALL,
    Item.TOXIC_ORB,
    Item.HARD_STONE,
    Item.METAL_COAT,
    Item.SWIFT_WING,
    Item.MACHO_BRACE,
    Item.INCENSE,
    Item.METRONOME,
    Item.BIG_NUGGET,
    Item.POKERUS_VIAL,
    Item.ROTOM_PHONE,
    Item.SILK_SCARF,
    Item.TINY_MUSHROOM
];
exports.ShinyItems = [
    Item.DYNAMAX_BAND,
    Item.SHINY_STONE,
    Item.RARE_CANDY,
    Item.EVIOLITE,
    Item.WHITE_FLUTE,
    Item.GOLD_BOTTLE_CAP,
    Item.ABSORB_BULB,
    Item.SACRED_ASH,
    Item.COMET_SHARD,
    Item.REPEAT_BALL
];
exports.WeatherRocks = [
    Item.DAMP_ROCK,
    Item.ICY_ROCK,
    Item.HEAT_ROCK,
    Item.SMOOTH_ROCK,
    Item.BLACK_AUGURITE,
    Item.FLOAT_STONE,
    Item.ELECTRIC_QUARTZ,
    Item.MIST_STONE,
    Item.BLOOD_STONE,
    Item.SMELLY_CLAY
];
exports.WeatherRocksByWeather = new Map([
    [Weather_1.Weather.SUN, Item.HEAT_ROCK],
    [Weather_1.Weather.RAIN, Item.DAMP_ROCK],
    [Weather_1.Weather.SANDSTORM, Item.SMOOTH_ROCK],
    [Weather_1.Weather.SNOW, Item.ICY_ROCK],
    [Weather_1.Weather.STORM, Item.ELECTRIC_QUARTZ],
    [Weather_1.Weather.MISTY, Item.MIST_STONE],
    [Weather_1.Weather.WINDY, Item.FLOAT_STONE],
    [Weather_1.Weather.SMOG, Item.SMELLY_CLAY],
    [Weather_1.Weather.NIGHT, Item.BLACK_AUGURITE],
    [Weather_1.Weather.BLOODMOON, Item.BLOOD_STONE],
    [Weather_1.Weather.NEUTRAL, null]
]);
exports.WeatherByWeatherRocks = (0, map_1.reverseMap)(exports.WeatherRocksByWeather);
exports.CraftableItems = Object.keys(exports.ItemRecipe);
exports.SynergyStones = [
    Item.OLD_AMBER,
    Item.DAWN_STONE,
    Item.WATER_STONE,
    Item.THUNDER_STONE,
    Item.FIRE_STONE,
    Item.MOON_STONE,
    Item.DUSK_STONE,
    Item.LEAF_STONE,
    Item.ICE_STONE
];
exports.SynergyItems = [
    Item.OLD_AMBER,
    Item.DAWN_STONE,
    Item.WATER_STONE,
    Item.THUNDER_STONE,
    Item.FIRE_STONE,
    Item.MOON_STONE,
    Item.DUSK_STONE,
    Item.LEAF_STONE,
    Item.ICE_STONE,
    Item.MACHO_BRACE,
    Item.LIGHT_BALL,
    Item.TOXIC_ORB,
    Item.METRONOME,
    Item.METAL_COAT,
    Item.SWIFT_WING,
    Item.HARD_STONE,
    Item.BIG_NUGGET,
    Item.ROTOM_PHONE,
    Item.SHINY_STONE,
    Item.SILK_SCARF,
    Item.TINY_MUSHROOM
];
exports.SynergyGivenByItem = {
    [Item.OLD_AMBER]: Synergy_1.Synergy.FOSSIL,
    [Item.DAWN_STONE]: Synergy_1.Synergy.PSYCHIC,
    [Item.WATER_STONE]: Synergy_1.Synergy.WATER,
    [Item.THUNDER_STONE]: Synergy_1.Synergy.ELECTRIC,
    [Item.FIRE_STONE]: Synergy_1.Synergy.FIRE,
    [Item.MOON_STONE]: Synergy_1.Synergy.FAIRY,
    [Item.DUSK_STONE]: Synergy_1.Synergy.DARK,
    [Item.LEAF_STONE]: Synergy_1.Synergy.GRASS,
    [Item.ICE_STONE]: Synergy_1.Synergy.ICE,
    [Item.MACHO_BRACE]: Synergy_1.Synergy.FIGHTING,
    [Item.LIGHT_BALL]: Synergy_1.Synergy.LIGHT,
    [Item.TOXIC_ORB]: Synergy_1.Synergy.POISON,
    [Item.METRONOME]: Synergy_1.Synergy.SOUND,
    [Item.METAL_COAT]: Synergy_1.Synergy.STEEL,
    [Item.SWIFT_WING]: Synergy_1.Synergy.FLYING,
    [Item.HARD_STONE]: Synergy_1.Synergy.ROCK,
    [Item.BIG_NUGGET]: Synergy_1.Synergy.GROUND,
    [Item.ROTOM_PHONE]: Synergy_1.Synergy.GHOST,
    [Item.SHINY_STONE]: Synergy_1.Synergy.LIGHT,
    [Item.SILK_SCARF]: Synergy_1.Synergy.NORMAL,
    [Item.TINY_MUSHROOM]: Synergy_1.Synergy.BUG
};
exports.NonSpecialItemComponents = [
    Item.TWISTED_SPOON,
    Item.MAGNET,
    Item.BLACK_GLASSES,
    Item.MIRACLE_SEED,
    Item.CHARCOAL,
    Item.NEVER_MELT_ICE,
    Item.HEART_SCALE,
    Item.MYSTIC_WATER
];
exports.NonHoldableItems = [
    ...exports.WeatherRocks,
    ...exports.FishingRods,
    Item.METEORITE,
    Item.ZYGARDE_CUBE,
    Item.FIRE_SHARD
];
exports.OgerponMasks = [
    Item.TEAL_MASK,
    Item.WELLSPRING_MASK,
    Item.CORNERSTONE_MASK,
    Item.HEARTHFLAME_MASK
];
exports.TMs = [
    Item.TM_RAGE,
    Item.TM_BRICK_BREAK,
    Item.TM_TAUNT,
    Item.TM_BULK_UP,
    Item.TM_BIDE,
    Item.TM_PSYCH_UP,
    Item.TM_RETALIATE,
    Item.TM_PAYDAY
];
exports.HMs = [
    Item.HM_CUT,
    Item.HM_FLY,
    Item.HM_SURF,
    Item.HM_STRENGTH,
    Item.HM_FLASH,
    Item.HM_ROCK_SMASH,
    Item.HM_WATERFALL,
    Item.HM_WHIRLPOOL
];
exports.AbilityPerTM = {
    [Item.TM_RAGE]: Ability_1.Ability.RAGE,
    [Item.TM_BRICK_BREAK]: Ability_1.Ability.BRICK_BREAK,
    [Item.TM_TAUNT]: Ability_1.Ability.TAUNT,
    [Item.TM_BULK_UP]: Ability_1.Ability.BULK_UP,
    [Item.TM_BIDE]: Ability_1.Ability.BIDE,
    [Item.TM_PSYCH_UP]: Ability_1.Ability.PSYCH_UP,
    [Item.TM_RETALIATE]: Ability_1.Ability.RETALIATE,
    [Item.TM_PAYDAY]: Ability_1.Ability.PAYDAY,
    [Item.HM_CUT]: Ability_1.Ability.CUT,
    [Item.HM_FLY]: Ability_1.Ability.FLY,
    [Item.HM_SURF]: Ability_1.Ability.SURF,
    [Item.HM_STRENGTH]: Ability_1.Ability.STRENGTH,
    [Item.HM_FLASH]: Ability_1.Ability.FLASH,
    [Item.HM_ROCK_SMASH]: Ability_1.Ability.ROCK_SMASH,
    [Item.HM_WATERFALL]: Ability_1.Ability.WATERFALL,
    [Item.HM_WHIRLPOOL]: Ability_1.Ability.WHIRLPOOL
};
//# sourceMappingURL=Item.js.map