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
const bot_v2_1 = require("../models/mongo-models/bot-v2");
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const types_1 = require("../types");
const logger_1 = require("../utils/logger");
class Bot {
    constructor(player) {
        this.player = player;
        this.step = 0;
        this.progress = 0;
        this.initialize();
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield bot_v2_1.BotV2.findOne({ id: this.player.id }, ["steps"]);
                if (data) {
                    this.scenario = data;
                    this.updatePlayerTeam();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
    updateProgress() {
        this.progress += 1;
        if (this.scenario &&
            this.scenario.steps[this.step + 1] &&
            this.progress >= this.scenario.steps[this.step + 1].roundsRequired) {
            this.step += 1;
            this.progress -= this.scenario.steps[this.step].roundsRequired;
            this.updatePlayerTeam();
        }
    }
    updatePlayerTeam() {
        this.player.board.forEach((pokemon, key) => {
            this.player.board.delete(key);
        });
        if (this.scenario) {
            const stepTeam = this.scenario.steps[this.step];
            for (let i = 0; i < stepTeam.board.length; i++) {
                const potentialEmotion = stepTeam.board[i].emotion;
                const emotion = potentialEmotion ? potentialEmotion : types_1.Emotion.NORMAL;
                const pkm = pokemon_factory_1.default.createPokemonFromName(stepTeam.board[i].name, {
                    selectedEmotion: emotion,
                    selectedShiny: !!stepTeam.board[i].shiny
                });
                pkm.positionX = stepTeam.board[i].x;
                pkm.positionY = stepTeam.board[i].y;
                if (stepTeam.board[i].items) {
                    stepTeam.board[i].items.forEach((item) => {
                        if (!pkm.items.has(item)) {
                            pkm.items.add(item);
                        }
                    });
                }
                this.player.board.set(pkm.id, pkm);
            }
            this.player.updateSynergies();
        }
    }
}
exports.default = Bot;
//# sourceMappingURL=bot.js.map