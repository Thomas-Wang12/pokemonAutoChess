"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOT_SCORES = exports.POWER_AVERAGES = exports.POWER_SCORE_BY_CATEGORY = exports.DEFAULT_BOT_STATE = exports.MAX_BOTS_STAGE = void 0;
exports.getBotScore = getBotScore;
exports.getCategory = getCategory;
exports.getPowerScore = getPowerScore;
exports.getUnitPowerScore = getUnitPowerScore;
exports.getPowerEvaluation = getPowerEvaluation;
exports.getMaxItemComponents = getMaxItemComponents;
exports.getNbComponentsOnBoard = getNbComponentsOnBoard;
exports.rewriteBotRoundsRequiredto1 = rewriteBotRoundsRequiredto1;
exports.estimateElo = estimateElo;
exports.validateBot = validateBot;
exports.validateBoard = validateBoard;
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Config_1 = require("../../../../../types/Config");
const Game_1 = require("../../../../../types/enum/Game");
const Item_1 = require("../../../../../types/enum/Item");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const logger_1 = require("../../../../../utils/logger");
const number_1 = require("../../../../../utils/number");
exports.MAX_BOTS_STAGE = 30;
exports.DEFAULT_BOT_STATE = {
    steps: Array.from({ length: exports.MAX_BOTS_STAGE + 1 }, () => ({
        roundsRequired: 1,
        board: []
    })),
    avatar: Pokemon_1.PkmIndex[Pokemon_1.Pkm.DITTO] + "/Normal",
    author: "",
    elo: 1200,
    name: Pokemon_1.Pkm.DITTO,
    id: ""
};
exports.POWER_SCORE_BY_CATEGORY = {
    "COMMON T1": 1,
    "COMMON 2S T2": 2.5,
    "COMMON 2S T3": 3.5,
    "COMMON 3S T2": 2,
    "COMMON 3S T3": 4,
    "COMMON 3S T4": 5,
    "UNCOMMON T1": 1.25,
    "UNCOMMON 2S T2": 3,
    "UNCOMMON 2S T3": 4,
    "UNCOMMON 3S T2": 2.5,
    "UNCOMMON 3S T3": 5,
    "UNCOMMON 3S T4": 7,
    "RARE T1": 1.5,
    "RARE 2S T2": 4,
    "RARE 3S T2": 3,
    "RARE 3S T3": 6,
    "HATCH T1": 1.5,
    "HATCH 3S T2": 3,
    "HATCH 3S T3": 5,
    "EPIC T1": 2,
    "EPIC 2S T2": 5,
    "EPIC 2S T3": 7,
    "EPIC 3S T2": 4,
    "EPIC 3S T3": 8,
    "EPIC 2S T2 DUO": 4,
    "ULTRA T1": 3,
    "ULTRA 3S T2": 6,
    "ULTRA 3S T3": 10,
    "UNIQUE T1": 2,
    "UNIQUE T2": 3,
    "UNIQUE T3": 4,
    "UNIQUE T4": 5,
    "UNIQUE T3 DUO": 3,
    "LEGENDARY T3": 6,
    "LEGENDARY T4": 8,
    "LEGENDARY DUO": 4,
    "SPECIAL T1": 1.5,
    "SPECIAL T2": 3,
    "SPECIAL T3": 4.5,
    "SPECIAL T4": 6
};
exports.POWER_AVERAGES = [
    2, 2, 3, 4, 4.5, 5, 6, 7, 8, 9, 11, 11.5, 12, 13, 14, 15, 16, 17, 18, 19, 24,
    25, 25.5, 26, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33,
    33.5, 34, 34.5, 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40
];
exports.BOT_SCORES = {
    INCOMPLETE: { label: "Incomplete", color: "#999" },
    VERY_EASY: { label: "Very Easy", color: "#109fff" },
    EASY: { label: "Easy", color: "#92cc41" },
    MEDIUM: { label: "Medium", color: "yellow" },
    HARD: { label: "Hard", color: "#f7d51d" },
    VERY_HARD: { label: "Very Hard", color: "#e76e55" },
    ILLEGAL: { label: "Illegal", color: "#761c1e" }
};
function getBotScore(value) {
    let score = exports.BOT_SCORES.INCOMPLETE;
    if (value < 10)
        score = exports.BOT_SCORES.INCOMPLETE;
    else if (value < 26)
        score = exports.BOT_SCORES.VERY_EASY;
    else if (value < 42)
        score = exports.BOT_SCORES.EASY;
    else if (value < 58)
        score = exports.BOT_SCORES.MEDIUM;
    else if (value < 74)
        score = exports.BOT_SCORES.HARD;
    else if (value < 90)
        score = exports.BOT_SCORES.VERY_HARD;
    else
        score = exports.BOT_SCORES.ILLEGAL;
    return score;
}
function getCategory(pkm) {
    const p = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
    let category = p.rarity.toUpperCase();
    if ([Game_1.Rarity.UNIQUE, Game_1.Rarity.LEGENDARY, Game_1.Rarity.SPECIAL].includes(p.rarity) ===
        false &&
        p.stars > 1) {
        category += p.stages === 2 ? " 2S" : " 3S";
    }
    category += ` T${p.stars}`;
    if (Object.values(Pokemon_1.PkmDuos).some((duo) => duo.includes(pkm))) {
        category += " DUO";
    }
    return category;
}
Object.values(Pokemon_1.Pkm).forEach((pkm) => {
    const c = getCategory(pkm);
    if (c in exports.POWER_SCORE_BY_CATEGORY === false) {
        logger_1.logger.warn(`Couldn't find power category for ${pkm}: ${c}`);
    }
});
function getPowerScore(board) {
    return board.reduce((sum, pkm) => sum + getUnitPowerScore(pkm.name), 0);
}
function getUnitPowerScore(pkm) {
    var _a;
    return (_a = exports.POWER_SCORE_BY_CATEGORY[getCategory(pkm)]) !== null && _a !== void 0 ? _a : 1;
}
function getPowerEvaluation(powerScore, stage) {
    var _a;
    const powerAverage = (_a = exports.POWER_AVERAGES[stage]) !== null && _a !== void 0 ? _a : 40;
    return (0, number_1.clamp)(50 + (100 * (powerScore - powerAverage)) / powerAverage, 0, 100);
}
function getMaxItemComponents(stage) {
    var _a;
    const nbComponentsPerStage = [
        0, 0, 1, 2, 4, 5, 6, 6, 6, 7, 8, 8, 9, 10, 10, 11, 12, 12, 13, 13, 14, 14,
        14, 16, 16, 16, 18, 18, 20, 20, 22, 22, 22, 22, 24, 26, 26, 28, 28, 28, 28,
        30
    ];
    return (_a = nbComponentsPerStage[stage]) !== null && _a !== void 0 ? _a : 30;
}
function getNbComponentsOnBoard(board) {
    return board
        .flatMap((pkm) => pkm.items)
        .reduce((nbComponents, item) => nbComponents +
        (Item_1.CraftableItems.includes(item)
            ? 2
            : Item_1.ItemComponents.includes(item)
                ? 1
                : 0), 0);
}
function rewriteBotRoundsRequiredto1(bot) {
    const oneSteps = [];
    bot.steps.forEach((step) => {
        for (let i = 0; i < (0, number_1.min)(1)(step.roundsRequired); i++) {
            oneSteps.push({ board: step.board, roundsRequired: 1 });
        }
    });
    bot = structuredClone(bot);
    bot.steps = oneSteps.slice(0, exports.MAX_BOTS_STAGE + 1);
    return bot;
}
function estimateElo(bot) {
    const scores = bot.steps
        .map((step, stage) => getPowerEvaluation(getPowerScore(step.board), stage))
        .slice(3);
    const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
    if (averageScore < 10)
        return 500;
    if (averageScore < 20)
        return 600;
    if (averageScore < 30)
        return 700;
    if (averageScore < 40)
        return 800;
    if (averageScore < 50)
        return 900;
    if (averageScore < 60)
        return 1000;
    if (averageScore < 70)
        return 1100;
    if (averageScore < 80)
        return 1200;
    if (averageScore < 90)
        return 1300;
    return 1400;
}
function validateBot(bot) {
    const errors = [];
    for (let stage = 0; stage < bot.steps.length; stage++) {
        try {
            validateBoard(bot.steps[stage].board, stage);
        }
        catch (err) {
            errors.push(`Stage ${stage}: ${err}`);
        }
    }
    return errors;
}
function validateBoard(board, stage) {
    const team = board.map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p.name));
    const items = getNbComponentsOnBoard(board);
    const maxItems = getMaxItemComponents(stage);
    const duos = Object.values(Pokemon_1.PkmDuos);
    function removeDuoPartner(p, index, arr) {
        const duo = duos.find((duo) => duo.includes(p.name));
        if (duo != null) {
            const partnerName = duo.find((x) => x !== p.name);
            const partner = arr.find((x) => x.name === partnerName);
            if (partner && arr.indexOf(partner) < index) {
                return false;
            }
        }
        return true;
    }
    const uniques = team
        .filter((p) => p.rarity === Game_1.Rarity.UNIQUE)
        .filter(removeDuoPartner);
    const legendaries = team
        .filter((p) => p.rarity === Game_1.Rarity.LEGENDARY)
        .filter(removeDuoPartner);
    const additionalUncommon = team.filter((p) => p.additional &&
        (p.rarity === Game_1.Rarity.UNCOMMON || p.rarity === Game_1.Rarity.COMMON));
    const additionalRare = team.filter((p) => p.additional && p.rarity === Game_1.Rarity.RARE);
    const additionalEpic = team.filter((p) => p.additional && p.rarity === Game_1.Rarity.EPIC);
    if (stage < Config_1.PortalCarouselStages[0] && uniques.length > 0) {
        throw new Error(`Unique Pokemons can't be played before stage ${Config_1.PortalCarouselStages[0]}`);
    }
    if (stage < Config_1.PortalCarouselStages[1] && legendaries.length > 0) {
        throw new Error(`Legendary Pokemons can't be played before stage ${Config_1.PortalCarouselStages[1]}`);
    }
    if (stage < Config_1.AdditionalPicksStages[0] && additionalUncommon.length > 0) {
        throw new Error(`Uncommon additional picks can't be played before stage ${Config_1.AdditionalPicksStages[0]}`);
    }
    if (stage < Config_1.AdditionalPicksStages[1] && additionalRare.length > 0) {
        throw new Error(`Rare additional picks can't be played before stage ${Config_1.AdditionalPicksStages[1]}`);
    }
    if (stage < Config_1.AdditionalPicksStages[2] && additionalEpic.length > 0) {
        throw new Error(`Epic additional picks can't be played before stage ${Config_1.AdditionalPicksStages[2]}`);
    }
    if (uniques.length > 1) {
        throw new Error(`Only one Unique Pokemon can be played`);
    }
    if (legendaries.length > 1) {
        throw new Error(`Only one Legendary Pokemon can be played`);
    }
    if (team.length > 9) {
        throw new Error(`Maximum 9 Pokemon can be played in a team`);
    }
    if (items > maxItems) {
        throw new Error(`Too many item components are used at this stage`);
    }
}
//# sourceMappingURL=bot-logic.js.map