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
exports.EndTournamentCommand = exports.EndTournamentMatchCommand = exports.CreateTournamentLobbiesCommand = exports.NextTournamentStageCommand = exports.ParticipateInTournamentCommand = exports.RemoveTournamentCommand = exports.OnCreateTournamentCommand = exports.OpenGameCommand = exports.JoinOrOpenRoomCommand = exports.DeleteBotCommand = exports.AddBotCommand = exports.SelectLanguageCommand = exports.UnbanUserCommand = exports.BanUserCommand = exports.OnSearchCommand = exports.OnSearchByIdCommand = exports.BuyBoosterCommand = exports.BuyEmotionCommand = exports.ChangeAvatarCommand = exports.ChangeSelectedEmotionCommand = exports.ChangeTitleCommand = exports.ChangeNameCommand = exports.OpenBoosterCommand = exports.RemoveMessageCommand = exports.OnNewMessageCommand = exports.GiveRoleCommand = exports.GiveBoostersCommand = exports.HeapSnapshotCommand = exports.GiveTitleCommand = exports.OnLeaveCommand = exports.OnJoinCommand = void 0;
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const nanoid_1 = require("nanoid");
const v8_1 = require("v8");
const tournament_logic_1 = require("../../core/tournament-logic");
const tournament_1 = require("../../models/colyseus-models/tournament");
const banned_user_1 = __importDefault(require("../../models/mongo-models/banned-user"));
const bot_v2_1 = require("../../models/mongo-models/bot-v2");
const tournament_2 = require("../../models/mongo-models/tournament");
const user_metadata_1 = __importDefault(require("../../models/mongo-models/user-metadata"));
const precomputed_emotions_1 = require("../../models/precomputed/precomputed-emotions");
const precomputed_rarity_1 = require("../../models/precomputed/precomputed-rarity");
const bots_1 = require("../../services/bots");
const discord_1 = require("../../services/discord");
const pastebin_1 = require("../../services/pastebin");
const types_1 = require("../../types");
const Config_1 = require("../../types/Config");
const CloseCodes_1 = require("../../types/enum/CloseCodes");
const EloRank_1 = require("../../types/enum/EloRank");
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Starters_1 = require("../../types/enum/Starters");
const array_1 = require("../../utils/array");
const avatar_1 = require("../../utils/avatar");
const elo_1 = require("../../utils/elo");
const logger_1 = require("../../utils/logger");
const profanity_filter_1 = require("../../utils/profanity-filter");
const promise_1 = require("../../utils/promise");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
class OnJoinCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, user }) {
            try {
                client.send(types_1.Transfer.ROOMS, this.room.rooms);
                client.userData = { joinedAt: Date.now() };
                if (user) {
                    this.room.users.set(client.auth.uid, user);
                    client.send(types_1.Transfer.USER_PROFILE, user);
                }
                else {
                    const starterBoosters = 3;
                    const starterAvatar = (0, random_1.pickRandomIn)(Starters_1.StarterAvatars);
                    yield user_metadata_1.default.create({
                        uid: client.auth.uid,
                        displayName: client.auth.displayName,
                        avatar: starterAvatar,
                        booster: starterBoosters,
                        pokemonCollection: new Map()
                    });
                    const newUser = {
                        uid: client.auth.uid,
                        displayName: client.auth.displayName,
                        language: client.auth.metadata.language,
                        avatar: starterAvatar,
                        wins: 0,
                        exp: 0,
                        level: 0,
                        elo: 1000,
                        pokemonCollection: new Map(),
                        booster: starterBoosters,
                        titles: [],
                        title: "",
                        role: types_1.Role.BASIC
                    };
                    this.room.users.set(client.auth.uid, newUser);
                    client.send(types_1.Transfer.USER_PROFILE, newUser);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnJoinCommand = OnJoinCommand;
class OnLeaveCommand extends command_1.Command {
    execute({ client }) {
        try {
            if (client && client.auth && client.auth.displayName && client.auth.uid) {
                this.room.users.delete(client.auth.uid);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnLeaveCommand = OnLeaveCommand;
class GiveTitleCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, title }) {
            try {
                const u = this.room.users.get(client.auth.uid);
                const targetUser = this.room.users.get(uid);
                if (u && u.role && u.role === types_1.Role.ADMIN) {
                    const user = yield user_metadata_1.default.findOne({ uid });
                    if (user && user.titles && !user.titles.includes(title)) {
                        user.titles.push(title);
                        user.save();
                        if (targetUser) {
                            targetUser.titles.push(title);
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.GiveTitleCommand = GiveTitleCommand;
class HeapSnapshotCommand extends command_1.Command {
    execute() {
        logger_1.logger.info("writing heap snapshot");
        (0, v8_1.writeHeapSnapshot)();
    }
}
exports.HeapSnapshotCommand = HeapSnapshotCommand;
class GiveBoostersCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, numberOfBoosters = 1 }) {
            try {
                const u = this.room.users.get(client.auth.uid);
                const targetUser = this.room.users.get(uid);
                if (u && u.role && u.role === types_1.Role.ADMIN) {
                    const user = yield user_metadata_1.default.findOne({ uid: uid });
                    if (user) {
                        user.booster += numberOfBoosters;
                        user.save();
                        if (targetUser) {
                            targetUser.booster = user.booster;
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.GiveBoostersCommand = GiveBoostersCommand;
class GiveRoleCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, role }) {
            try {
                const u = this.room.users.get(client.auth.uid);
                const targetUser = this.room.users.get(uid);
                if (u && u.role === types_1.Role.ADMIN) {
                    const user = yield user_metadata_1.default.findOne({ uid: uid });
                    if (user) {
                        user.role = role;
                        user.save();
                        if (targetUser) {
                            targetUser.role = user.role;
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.GiveRoleCommand = GiveRoleCommand;
class OnNewMessageCommand extends command_1.Command {
    execute({ client, message }) {
        try {
            const MAX_MESSAGE_LENGTH = 250;
            message = (0, profanity_filter_1.cleanProfanity)(message.substring(0, MAX_MESSAGE_LENGTH));
            const user = this.room.users.get(client.auth.uid);
            if (user &&
                [types_1.Role.ADMIN, types_1.Role.MODERATOR].includes(user.role) &&
                message != "") {
                this.state.addMessage(message, user.uid, user.displayName, user.avatar);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnNewMessageCommand = OnNewMessageCommand;
class RemoveMessageCommand extends command_1.Command {
    execute({ client, messageId }) {
        try {
            const user = this.room.users.get(client.auth.uid);
            if (user &&
                user.role &&
                (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR)) {
                this.state.removeMessage(messageId);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.RemoveMessageCommand = RemoveMessageCommand;
class OpenBoosterCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (!user)
                    return;
                const mongoUser = yield user_metadata_1.default.findOneAndUpdate({ uid: client.auth.uid, booster: { $gt: 0 } }, { $inc: { booster: -1 } }, { new: true });
                if (!mongoUser)
                    return;
                const NB_PER_BOOSTER = 10;
                const boosterContent = [];
                for (let i = 0; i < NB_PER_BOOSTER; i++) {
                    const guaranteedUnique = i === NB_PER_BOOSTER - 1;
                    boosterContent.push(pickRandomPokemonBooster(guaranteedUnique));
                }
                boosterContent.forEach((pkmWithConfig) => {
                    const index = Pokemon_1.PkmIndex[pkmWithConfig.name];
                    const mongoPokemonConfig = mongoUser.pokemonCollection.get(index);
                    const dustGain = pkmWithConfig.shiny ? Config_1.DUST_PER_SHINY : Config_1.DUST_PER_BOOSTER;
                    if (mongoPokemonConfig) {
                        mongoPokemonConfig.dust += dustGain;
                    }
                    else {
                        mongoUser.pokemonCollection.set(index, {
                            id: index,
                            emotions: [],
                            shinyEmotions: [],
                            dust: dustGain,
                            selectedEmotion: types_1.Emotion.NORMAL,
                            selectedShiny: false
                        });
                    }
                });
                mongoUser.save();
                user.booster = mongoUser.booster - 1;
                boosterContent.forEach((pkmWithConfig) => {
                    const index = Pokemon_1.PkmIndex[pkmWithConfig.name];
                    const pokemonConfig = user.pokemonCollection.get(index);
                    const mongoPokemonConfig = mongoUser.pokemonCollection.get(index);
                    if (!mongoPokemonConfig)
                        return;
                    if (pokemonConfig) {
                        pokemonConfig.dust = mongoPokemonConfig.dust;
                    }
                    else {
                        const newConfig = {
                            dust: mongoPokemonConfig.dust,
                            id: mongoPokemonConfig.id,
                            emotions: mongoPokemonConfig.emotions.map((e) => e),
                            shinyEmotions: mongoPokemonConfig.shinyEmotions.map((e) => e),
                            selectedEmotion: mongoPokemonConfig.selectedEmotion,
                            selectedShiny: mongoPokemonConfig.selectedShiny
                        };
                        user.pokemonCollection.set(index, newConfig);
                    }
                });
                client.send(types_1.Transfer.BOOSTER_CONTENT, boosterContent);
                client.send(types_1.Transfer.USER_PROFILE, mongoUser);
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OpenBoosterCommand = OpenBoosterCommand;
function pickRandomPokemonBooster(guarantedUnique) {
    var _a;
    let pkm = Pokemon_1.Pkm.MAGIKARP, emotion = types_1.Emotion.NORMAL;
    const shiny = (0, random_1.chance)(0.03);
    const rarities = Object.keys(Game_1.Rarity);
    const seed = Math.random() * (0, array_1.sum)(Object.values(Config_1.BoosterRarityProbability));
    let threshold = 0;
    if (guarantedUnique) {
        pkm = (0, random_1.pickRandomIn)([
            ...precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[Game_1.Rarity.UNIQUE],
            ...precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[Game_1.Rarity.LEGENDARY]
        ]);
    }
    else {
        for (let i = 0; i < rarities.length; i++) {
            const rarity = rarities[i];
            const rarityProbability = Config_1.BoosterRarityProbability[rarity];
            threshold += rarityProbability;
            if (seed < threshold) {
                const candidates = ((_a = precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[rarity]) !== null && _a !== void 0 ? _a : []).filter((p) => Pokemon_1.Unowns.includes(p) === false);
                if (candidates.length > 0) {
                    pkm = (0, random_1.pickRandomIn)(candidates);
                    break;
                }
            }
        }
    }
    const availableEmotions = Object.values(types_1.Emotion).filter((e, i) => { var _a; return ((_a = precomputed_emotions_1.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX[Pokemon_1.PkmIndex[pkm]]) === null || _a === void 0 ? void 0 : _a[i]) === 1; });
    emotion = (0, random_1.pickRandomIn)(availableEmotions);
    return { name: pkm, shiny, emotion };
}
class ChangeNameCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, name }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (!user)
                    return;
                if (types_1.USERNAME_REGEXP.test(name)) {
                    user.displayName = name;
                    const mongoUser = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (mongoUser) {
                        mongoUser.displayName = name;
                        yield mongoUser.save();
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeNameCommand = ChangeNameCommand;
class ChangeTitleCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, title }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (user) {
                    if (user.title === title) {
                        title = "";
                    }
                    user.title = title;
                    const mongoUser = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (mongoUser) {
                        mongoUser.title = title;
                        yield mongoUser.save();
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeTitleCommand = ChangeTitleCommand;
class ChangeSelectedEmotionCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, emotion, index, shiny }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (!user)
                    return;
                const pokemonConfig = user.pokemonCollection.get(index);
                if (pokemonConfig) {
                    const emotionsToCheck = shiny
                        ? pokemonConfig.shinyEmotions
                        : pokemonConfig.emotions;
                    if (emotionsToCheck.includes(emotion) &&
                        (emotion != pokemonConfig.selectedEmotion ||
                            shiny != pokemonConfig.selectedShiny)) {
                        pokemonConfig.selectedEmotion = emotion;
                        pokemonConfig.selectedShiny = shiny;
                        const mongoUser = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                        const pkmConfig = mongoUser === null || mongoUser === void 0 ? void 0 : mongoUser.pokemonCollection.get(index);
                        if (mongoUser && pkmConfig) {
                            pkmConfig.selectedEmotion = emotion;
                            pkmConfig.selectedShiny = shiny;
                            yield mongoUser.save();
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeSelectedEmotionCommand = ChangeSelectedEmotionCommand;
class ChangeAvatarCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, index, emotion, shiny }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                const mongoUser = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                if (!user)
                    return;
                if (!mongoUser)
                    return;
                const config = mongoUser.pokemonCollection.get(index);
                if (config) {
                    const emotionsToCheck = shiny ? config.shinyEmotions : config.emotions;
                    if (emotionsToCheck.includes(emotion)) {
                        const portrait = (0, avatar_1.getPortraitSrc)(index, shiny, emotion)
                            .replace(types_1.CDN_PORTRAIT_URL, "")
                            .replace(".png", "");
                        user.avatar = portrait;
                        mongoUser.avatar = portrait;
                        mongoUser.save();
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeAvatarCommand = ChangeAvatarCommand;
class BuyEmotionCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, emotion, index, shiny }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                const cost = (0, Config_1.getEmotionCost)(emotion, shiny);
                if (!user)
                    return;
                const pokemonConfig = user.pokemonCollection.get(index);
                if (!pokemonConfig)
                    return;
                const mongoUser = yield user_metadata_1.default.findOneAndUpdate({
                    uid: client.auth.uid,
                    $and: [
                        { [`pokemonCollection.${index}.dust`]: { $gte: cost } },
                        {
                            [`pokemonCollection.${index}.${shiny ? "shinyEmotions" : "emotions"}`]: { $ne: emotion }
                        }
                    ]
                }, {
                    $inc: { [`pokemonCollection.${index}.dust`]: -cost },
                    $push: {
                        [`pokemonCollection.${index}.${shiny ? "shinyEmotions" : "emotions"}`]: emotion
                    },
                    [`pokemonCollection.${index}.selectedEmotion`]: emotion,
                    [`pokemonCollection.${index}.selectedShiny`]: shiny
                }, { new: true });
                if (!mongoUser)
                    return;
                const mongoPokemonConfig = mongoUser.pokemonCollection.get(index);
                if (!mongoPokemonConfig)
                    return;
                pokemonConfig.dust = mongoPokemonConfig.dust;
                pokemonConfig.selectedShiny = mongoPokemonConfig.selectedShiny;
                pokemonConfig.selectedEmotion = mongoPokemonConfig.selectedEmotion;
                if (shiny && mongoPokemonConfig.shinyEmotions.includes(emotion)) {
                    pokemonConfig.shinyEmotions.push(emotion);
                }
                if (!shiny && mongoPokemonConfig.emotions.includes(emotion)) {
                    pokemonConfig.emotions.push(emotion);
                }
                if (!mongoUser.titles.includes(types_1.Title.SHINY_SEEKER)) {
                    let numberOfShinies = 0;
                    mongoUser.pokemonCollection.forEach((c) => {
                        numberOfShinies += c.shinyEmotions.length;
                    });
                    if (numberOfShinies >= 30) {
                        mongoUser.titles.push(types_1.Title.SHINY_SEEKER);
                    }
                }
                if (!mongoUser.titles.includes(types_1.Title.DUKE)) {
                    let countProfile = 0;
                    mongoUser.pokemonCollection.forEach((c) => {
                        countProfile += c.emotions.length + c.shinyEmotions.length;
                    });
                    if (countProfile >= 30) {
                        mongoUser.titles.push(types_1.Title.DUKE);
                    }
                }
                if (emotion === types_1.Emotion.ANGRY &&
                    index === Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARBOK] &&
                    !mongoUser.titles.includes(types_1.Title.DENTIST)) {
                    mongoUser.titles.push(types_1.Title.DENTIST);
                }
                if (!mongoUser.titles.includes(types_1.Title.ARCHEOLOGIST) &&
                    Pokemon_1.Unowns.some((unown) => index === Pokemon_1.PkmIndex[unown]) &&
                    Pokemon_1.Unowns.every((name) => {
                        const index = Pokemon_1.PkmIndex[name];
                        const collection = mongoUser.pokemonCollection.get(index);
                        const isUnlocked = collection &&
                            (collection.emotions.length > 0 ||
                                collection.shinyEmotions.length > 0);
                        return isUnlocked || index === index;
                    })) {
                    mongoUser.titles.push(types_1.Title.ARCHEOLOGIST);
                }
                if (!mongoUser.titles.includes(types_1.Title.DUCHESS) &&
                    mongoPokemonConfig.shinyEmotions.length >=
                        Object.keys(types_1.Emotion).length &&
                    mongoPokemonConfig.emotions.length >= Object.keys(types_1.Emotion).length) {
                    mongoUser.titles.push(types_1.Title.DUCHESS);
                }
                yield mongoUser.save();
                client.send(types_1.Transfer.USER_PROFILE, mongoUser);
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.BuyEmotionCommand = BuyEmotionCommand;
class BuyBoosterCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, index }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                const BOOSTER_COST = 500;
                if (!user)
                    return;
                const mongoUser = yield user_metadata_1.default.findOneAndUpdate({
                    uid: client.auth.uid,
                    [`pokemonCollection.${index}.dust`]: { $gte: BOOSTER_COST }
                }, {
                    $inc: {
                        booster: 1,
                        [`pokemonCollection.${index}.dust`]: -BOOSTER_COST
                    }
                }, { new: true });
                if (!mongoUser)
                    return;
                const pokemonConfig = user.pokemonCollection.get(index);
                if (!pokemonConfig)
                    return;
                const mongoPokemonConfig = mongoUser.pokemonCollection.get(index);
                if (!mongoPokemonConfig)
                    return;
                user.booster = mongoUser.booster;
                pokemonConfig.dust = mongoPokemonConfig.dust;
                client.send(types_1.Transfer.USER_PROFILE, mongoUser);
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.BuyBoosterCommand = BuyBoosterCommand;
class OnSearchByIdCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid }) {
            try {
                const user = yield user_metadata_1.default.findOne({ uid: uid });
                if (user) {
                    client.send(types_1.Transfer.USER, user);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnSearchByIdCommand = OnSearchByIdCommand;
class OnSearchCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, name }) {
            try {
                const regExp = new RegExp("^" + name);
                const users = yield user_metadata_1.default.find({ displayName: { $regex: regExp, $options: "i" } }, ["uid", "elo", "displayName", "level", "avatar"], { limit: 100, sort: { level: -1 } });
                if (users) {
                    const suggestions = users.map((u) => {
                        return {
                            id: u.uid,
                            elo: u.elo,
                            name: u.displayName,
                            level: u.level,
                            avatar: u.avatar
                        };
                    });
                    client.send(types_1.Transfer.SUGGESTIONS, suggestions);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnSearchCommand = OnSearchCommand;
class BanUserCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, reason }) {
            try {
                const bannedUser = yield user_metadata_1.default.findOne({ uid: uid });
                const user = this.room.users.get(client.auth.uid);
                if (user &&
                    bannedUser &&
                    (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR) &&
                    bannedUser.role !== types_1.Role.ADMIN) {
                    this.state.removeMessages(uid);
                    const banned = yield banned_user_1.default.findOne({ uid });
                    if (!banned) {
                        banned_user_1.default.create({
                            uid,
                            author: user.displayName,
                            time: Date.now(),
                            name: bannedUser.displayName
                        });
                        client.send(types_1.Transfer.BANNED, `${user.displayName} banned the user ${bannedUser.displayName}`);
                        discord_1.discordService.announceBan(user, bannedUser, reason);
                    }
                    else {
                        client.send(types_1.Transfer.BANNED, `${bannedUser.displayName} was already banned`);
                    }
                    this.room.clients.forEach((c) => {
                        if (c.auth.uid === uid) {
                            c.leave(CloseCodes_1.CloseCodes.USER_BANNED);
                        }
                    });
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.BanUserCommand = BanUserCommand;
class UnbanUserCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, name }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (user && (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR)) {
                    const res = yield banned_user_1.default.deleteOne({ uid });
                    if (res.deletedCount > 0) {
                        client.send(types_1.Transfer.BANNED, `${user.displayName} unbanned the user ${name}`);
                        discord_1.discordService.announceUnban(user, name);
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.UnbanUserCommand = UnbanUserCommand;
class SelectLanguageCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, message }) {
            try {
                const u = this.room.users.get(client.auth.uid);
                if (client.auth.uid && u) {
                    const user = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (user) {
                        user.language = message;
                        yield user.save();
                    }
                    u.language = message;
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.SelectLanguageCommand = SelectLanguageCommand;
class AddBotCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, url }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (user &&
                    (user.role === types_1.Role.ADMIN ||
                        user.role === types_1.Role.BOT_MANAGER ||
                        user.role === types_1.Role.MODERATOR)) {
                    const id = url.slice(21);
                    client.send(types_1.Transfer.BOT_DATABASE_LOG, `retrieving id : ${id} ...`);
                    client.send(types_1.Transfer.BOT_DATABASE_LOG, "retrieving data ...");
                    const data = yield pastebin_1.pastebinService.getPaste(id, false);
                    if (data) {
                        client.send(types_1.Transfer.BOT_DATABASE_LOG, "parsing JSON data ...");
                        const json = JSON.parse(data);
                        const resultDelete = yield bot_v2_1.BotV2.deleteMany({
                            avatar: json.avatar,
                            author: json.author
                        });
                        const keys = new Array();
                        this.room.bots.forEach((b) => {
                            if (b.avatar === json.avatar && b.author === json.author) {
                                keys.push(b.id);
                            }
                        });
                        keys.forEach((k) => {
                            this.room.bots.delete(k);
                        });
                        client.send(types_1.Transfer.BOT_DATABASE_LOG, JSON.stringify(resultDelete, null, 2));
                        client.send(types_1.Transfer.BOT_DATABASE_LOG, `creating Bot ${json.avatar} by ${json.author}...`);
                        const resultCreate = yield (0, bots_1.addBotToDatabase)({
                            name: json.name,
                            avatar: json.avatar,
                            elo: json.elo ? json.elo : 1200,
                            author: json.author,
                            steps: json.steps
                        });
                        discord_1.discordService.announceBotAddition(resultCreate, url, user);
                        this.room.bots.set(resultCreate.id, resultCreate);
                    }
                    else {
                        client.send(types_1.Transfer.BOT_DATABASE_LOG, `no pastebin found with given url ${url}`);
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
                client.send(types_1.Transfer.BOT_DATABASE_LOG, JSON.stringify(error));
            }
        });
    }
}
exports.AddBotCommand = AddBotCommand;
class DeleteBotCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, message }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (user &&
                    (user.role === types_1.Role.ADMIN ||
                        user.role === types_1.Role.BOT_MANAGER ||
                        user.role === types_1.Role.MODERATOR)) {
                    const id = message;
                    const botData = (0, bots_1.getBotData)(id);
                    if (!botData) {
                        client.send(types_1.Transfer.BOT_DATABASE_LOG, `Bot not found:${id}`);
                        return;
                    }
                    client.send(types_1.Transfer.BOT_DATABASE_LOG, `deleting bot ${botData === null || botData === void 0 ? void 0 : botData.name}by @${botData === null || botData === void 0 ? void 0 : botData.author} id ${id}`);
                    const resultDelete = yield (0, bots_1.deleteBotFromDatabase)(id);
                    client.send(types_1.Transfer.BOT_DATABASE_LOG, JSON.stringify(resultDelete, null, 2));
                    discord_1.discordService.announceBotDeletion(botData, user);
                    this.room.bots.delete(id);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
                client.send(types_1.Transfer.BOT_DATABASE_LOG, JSON.stringify(error));
            }
        });
    }
}
exports.DeleteBotCommand = DeleteBotCommand;
class JoinOrOpenRoomCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, gameMode }) {
            var _b, _c, _d;
            const user = this.room.users.get(client.auth.uid);
            if (!user)
                return;
            switch (gameMode) {
                case Game_1.GameMode.CUSTOM_LOBBY:
                    return [new OpenGameCommand().setPayload({ gameMode, client })];
                case Game_1.GameMode.QUICKPLAY: {
                    const existingQuickplay = (_b = this.room.rooms) === null || _b === void 0 ? void 0 : _b.find((room) => {
                        var _a;
                        return room.name === "preparation" &&
                            ((_a = room.metadata) === null || _a === void 0 ? void 0 : _a.gameMode) === Game_1.GameMode.QUICKPLAY &&
                            room.clients < Config_1.MAX_PLAYERS_PER_GAME;
                    });
                    if (existingQuickplay) {
                        client.send(types_1.Transfer.REQUEST_ROOM, existingQuickplay.roomId);
                    }
                    else {
                        return [new OpenGameCommand().setPayload({ gameMode, client })];
                    }
                    break;
                }
                case Game_1.GameMode.RANKED: {
                    let userRank = (0, elo_1.getRank)(user.elo);
                    if (userRank === EloRank_1.EloRank.BEAST_BALL || userRank === EloRank_1.EloRank.MASTER_BALL)
                        userRank = EloRank_1.EloRank.ULTRA_BALL;
                    const existingRanked = (_c = this.room.rooms) === null || _c === void 0 ? void 0 : _c.find((room) => {
                        var _a, _b;
                        return room.name === "preparation" &&
                            ((_a = room.metadata) === null || _a === void 0 ? void 0 : _a.gameMode) === Game_1.GameMode.RANKED &&
                            ((_b = room.metadata) === null || _b === void 0 ? void 0 : _b.minRank) === userRank &&
                            room.clients < Config_1.MAX_PLAYERS_PER_GAME;
                    });
                    if (existingRanked) {
                        client.send(types_1.Transfer.REQUEST_ROOM, existingRanked.roomId);
                    }
                    else {
                        return [new OpenGameCommand().setPayload({ gameMode, client })];
                    }
                    break;
                }
                case Game_1.GameMode.SCRIBBLE: {
                    const existingScribble = (_d = this.room.rooms) === null || _d === void 0 ? void 0 : _d.find((room) => {
                        var _a;
                        return room.name === "preparation" &&
                            ((_a = room.metadata) === null || _a === void 0 ? void 0 : _a.gameMode) === Game_1.GameMode.SCRIBBLE &&
                            room.clients < Config_1.MAX_PLAYERS_PER_GAME;
                    });
                    if (existingScribble) {
                        client.send(types_1.Transfer.REQUEST_ROOM, existingScribble.roomId);
                    }
                    else {
                        return [new OpenGameCommand().setPayload({ gameMode, client })];
                    }
                    break;
                }
            }
        });
    }
}
exports.JoinOrOpenRoomCommand = JoinOrOpenRoomCommand;
class OpenGameCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ gameMode, client }) {
            const user = this.room.users.get(client.auth.uid);
            if (!user)
                return;
            let roomName = `${user.displayName}'${user.displayName.endsWith("s") ? "" : "s"} room`;
            let minRank = null;
            let maxRank = null;
            let noElo = false;
            let password = null;
            let ownerId = null;
            if (gameMode === Game_1.GameMode.RANKED) {
                let rank = (0, elo_1.getRank)(user.elo);
                if (rank === EloRank_1.EloRank.BEAST_BALL || rank === EloRank_1.EloRank.MASTER_BALL) {
                    rank = EloRank_1.EloRank.ULTRA_BALL;
                    minRank = EloRank_1.EloRank.ULTRA_BALL;
                    maxRank = EloRank_1.EloRank.BEAST_BALL;
                }
                else {
                    minRank = rank;
                    maxRank = rank;
                }
                roomName = "Ranked Match";
            }
            else if (gameMode === Game_1.GameMode.SCRIBBLE) {
                roomName = "Smeargle's Scribble";
                noElo = true;
            }
            else if (gameMode === Game_1.GameMode.CUSTOM_LOBBY) {
                ownerId = user.uid;
                password = Math.random().toString(36).substring(2, 6).toUpperCase();
            }
            else if (gameMode === Game_1.GameMode.QUICKPLAY) {
                roomName = "Quick play";
            }
            const newRoom = yield colyseus_1.matchMaker.createRoom("preparation", {
                gameMode,
                minRank,
                maxRank,
                noElo,
                password,
                ownerId,
                roomName
            });
            client.send(types_1.Transfer.REQUEST_ROOM, newRoom.roomId);
        });
    }
}
exports.OpenGameCommand = OpenGameCommand;
class OnCreateTournamentCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, name, startDate }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (user && user.role && user.role === types_1.Role.ADMIN) {
                    yield this.state.createTournament(name, startDate);
                    yield this.room.fetchTournaments();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnCreateTournamentCommand = OnCreateTournamentCommand;
class RemoveTournamentCommand extends command_1.Command {
    execute({ client, tournamentId }) {
        try {
            const user = this.room.users.get(client.auth.uid);
            if (user && user.role && user.role === types_1.Role.ADMIN) {
                this.state.removeTournament(tournamentId);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.RemoveTournamentCommand = RemoveTournamentCommand;
class ParticipateInTournamentCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, tournamentId, participate }) {
            try {
                if (!client.auth.uid || this.room.users.has(client.auth.uid) === false)
                    return;
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const user = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                if (!user)
                    return;
                if (participate) {
                    const tournamentPlayer = new tournament_1.TournamentPlayerSchema(user.displayName, user.avatar, user.elo);
                    tournament.players.set(user.uid, tournamentPlayer);
                }
                else if (tournament.players.has(user.uid)) {
                    tournament.players.delete(user.uid);
                }
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.players = (0, schemas_1.convertSchemaToRawObject)(tournament.players);
                    mongoTournament.save();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ParticipateInTournamentCommand = ParticipateInTournamentCommand;
class NextTournamentStageCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId }) {
            try {
                logger_1.logger.debug(`Tournament ${tournamentId} is moving to next stage`);
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const remainingPlayers = (0, tournament_logic_1.getRemainingPlayers)(tournament);
                if (remainingPlayers.length <= 4 &&
                    remainingPlayers.some((p) => p.ranks.length > 0)) {
                    return [new EndTournamentCommand().setPayload({ tournamentId })];
                }
                else {
                    return [
                        new CreateTournamentLobbiesCommand().setPayload({ tournamentId })
                    ];
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.NextTournamentStageCommand = NextTournamentStageCommand;
class CreateTournamentLobbiesCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId, client }) {
            try {
                if (client) {
                    const user = this.room.users.get(client.auth.uid);
                    if (!user || !user.role || user.role !== types_1.Role.ADMIN) {
                        return;
                    }
                }
                logger_1.logger.debug(`Creating tournament lobbies for tournament ${tournamentId}`);
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                this.state.addAnnouncement(`${tournament.name} ${(0, tournament_logic_1.getTournamentStage)(tournament)} are starting !`);
                const brackets = (0, tournament_logic_1.makeBrackets)(tournament);
                tournament.brackets.clear();
                for (const bracket of brackets) {
                    const bracketId = (0, nanoid_1.nanoid)();
                    logger_1.logger.info(`Creating tournament game ${bracket.name} id: ${bracketId}`);
                    tournament.brackets.set(bracketId, new tournament_1.TournamentBracketSchema(bracket.name, bracket.playersId));
                    yield colyseus_1.matchMaker.createRoom("preparation", {
                        gameMode: Game_1.GameMode.TOURNAMENT,
                        noElo: true,
                        ownerId: null,
                        roomName: bracket.name,
                        autoStartDelayInSeconds: 10 * 60,
                        whitelist: bracket.playersId,
                        tournamentId,
                        bracketId
                    });
                    yield (0, promise_1.wait)(1000);
                }
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                    yield mongoTournament.save();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.CreateTournamentLobbiesCommand = CreateTournamentLobbiesCommand;
class EndTournamentMatchCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId, bracketId, players }) {
            logger_1.logger.debug(`Tournament ${tournamentId} bracket ${bracketId} has ended`);
            try {
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const bracket = tournament.brackets.get(bracketId);
                if (!bracket)
                    return logger_1.logger.error(`Tournament bracket not found: ${bracketId}`);
                bracket.finished = true;
                players.forEach((p) => {
                    const player = tournament.players.get(p.id);
                    if (player) {
                        player.ranks.push(p.rank);
                        if (p.rank > 4) {
                            player.eliminated = true;
                        }
                    }
                });
                bracket.playersId.forEach((playerId) => {
                    const player = tournament.players.get(playerId);
                    if (player && players.every((p) => p.id !== playerId)) {
                        player.eliminated = true;
                    }
                });
                if ((0, schemas_1.values)(tournament.brackets).every((b) => b.finished)) {
                    const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                    if (mongoTournament) {
                        mongoTournament.players = (0, schemas_1.convertSchemaToRawObject)(tournament.players);
                        mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                        mongoTournament.save();
                    }
                    return [new NextTournamentStageCommand().setPayload({ tournamentId })];
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.EndTournamentMatchCommand = EndTournamentMatchCommand;
class EndTournamentCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId }) {
            var _b;
            try {
                logger_1.logger.debug(`Tournament ${tournamentId} is finished`);
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                let finalists = [], nbMatchsPlayed = 0;
                tournament.players.forEach((player, playerId) => {
                    if (player.ranks.length > nbMatchsPlayed) {
                        finalists = [];
                        nbMatchsPlayed = player.ranks.length;
                    }
                    if (player.ranks.length === nbMatchsPlayed) {
                        finalists.push(Object.assign({ id: playerId }, player));
                    }
                });
                const winner = finalists.find((p) => p.ranks.at(-1) === 1);
                if (winner) {
                    this.room.presence.publish("tournament-winner", winner);
                }
                for (const player of finalists) {
                    const mongoUser = yield user_metadata_1.default.findOne({ uid: player.id });
                    const user = this.room.users.get(player.id);
                    const rank = (_b = player.ranks.at(-1)) !== null && _b !== void 0 ? _b : 1;
                    if (mongoUser == null || user == null)
                        continue;
                    mongoUser.booster += 3;
                    if (mongoUser.titles.includes(types_1.Title.ACE_TRAINER) === false) {
                        mongoUser.titles.push(types_1.Title.ACE_TRAINER);
                        user.titles.push(types_1.Title.ACE_TRAINER);
                    }
                    if (rank <= 4) {
                        mongoUser.booster += 3;
                        if (mongoUser.titles.includes(types_1.Title.ELITE_FOUR_MEMBER) === false) {
                            mongoUser.titles.push(types_1.Title.ELITE_FOUR_MEMBER);
                            user.titles.push(types_1.Title.ELITE_FOUR_MEMBER);
                        }
                    }
                    if (rank === 1) {
                        mongoUser.booster += 4;
                        if (mongoUser.titles.includes(types_1.Title.CHAMPION) === false) {
                            mongoUser.titles.push(types_1.Title.CHAMPION);
                            user.titles.push(types_1.Title.CHAMPION);
                        }
                    }
                    user.booster = mongoUser.booster;
                    yield mongoUser.save();
                }
                tournament.brackets.clear();
                tournament.finished = true;
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.finished = true;
                    mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                    yield mongoTournament.save();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.EndTournamentCommand = EndTournamentCommand;
//# sourceMappingURL=lobby-commands.js.map