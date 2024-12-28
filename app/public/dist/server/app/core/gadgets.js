"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GADGETS = void 0;
const Config_1 = require("../types/Config");
const TRAINER_CARD = {
    name: "gadget.trainer_card",
    description: "gadget.trainer_card_desc",
    icon: "profile",
    levelRequired: 0
};
const BAG = {
    name: "gadget.bag",
    description: "gadget.bag_desc",
    icon: "school-bag",
    levelRequired: 1
};
const TEAM_PLANNER = {
    name: "gadget.team_planner",
    description: "gadget.team_planner_desc",
    icon: "team-builder",
    levelRequired: 2
};
const JUKEBOX = {
    name: "gadget.jukebox",
    description: "gadget.jukebox_desc",
    icon: "compact-disc",
    levelRequired: 10
};
const BOT_BUILDER = {
    name: "gadget.bot_builder",
    description: "gadget.bot_builder_desc",
    icon: "bot",
    levelRequired: 20,
    disabled: !Config_1.BOTS_ENABLED
};
const GAMEBOY = {
    name: "gadget.gameboy",
    description: "gadget.gameboy_desc",
    icon: "gameboy",
    levelRequired: 30
};
exports.GADGETS = {
    TRAINER_CARD,
    BAG,
    TEAM_PLANNER,
    JUKEBOX,
    BOT_BUILDER,
    GAMEBOY
};
//# sourceMappingURL=gadgets.js.map