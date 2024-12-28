"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discordService = void 0;
const discord_js_1 = require("discord.js");
const avatar_1 = require("../utils/avatar");
const logger_1 = require("../utils/logger");
let discordWebhook;
let discordBanWebhook;
if (process.env.DISCORD_WEBHOOK_URL) {
    discordWebhook = new discord_js_1.WebhookClient({
        url: process.env.DISCORD_WEBHOOK_URL
    });
}
if (process.env.DISCORD_BAN_WEBHOOK_URL) {
    discordBanWebhook = new discord_js_1.WebhookClient({
        url: process.env.DISCORD_BAN_WEBHOOK_URL
    });
}
exports.discordService = {
    announceBan(user, bannedUser, reason) {
        const dsEmbed = new discord_js_1.EmbedBuilder()
            .setTitle(`${user.displayName} banned the user ${bannedUser.displayName}`)
            .setAuthor({
            name: user.displayName,
            iconURL: (0, avatar_1.getAvatarSrc)(user.avatar)
        })
            .setDescription(`${user.displayName} banned the user ${bannedUser.displayName}. Reason: ${reason}`)
            .setThumbnail((0, avatar_1.getAvatarSrc)(bannedUser.avatar));
        try {
            discordBanWebhook === null || discordBanWebhook === void 0 ? void 0 : discordBanWebhook.send({
                embeds: [dsEmbed]
            });
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    },
    announceUnban(user, name) {
        const dsEmbed = new discord_js_1.EmbedBuilder()
            .setTitle(`${user.displayName} unbanned the user ${name}`)
            .setAuthor({
            name: user.displayName,
            iconURL: (0, avatar_1.getAvatarSrc)(user.avatar)
        })
            .setDescription(`${user.displayName} unbanned the user ${name}`)
            .setThumbnail((0, avatar_1.getAvatarSrc)(user.avatar));
        try {
            discordBanWebhook === null || discordBanWebhook === void 0 ? void 0 : discordBanWebhook.send({
                embeds: [dsEmbed]
            });
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    },
    announceBotCreation(bot, url, author) {
        const dsEmbed = new discord_js_1.EmbedBuilder()
            .setTitle(`BOT ${bot.name} created by ${author}`)
            .setURL(url)
            .setAuthor({
            name: author,
            iconURL: (0, avatar_1.getAvatarSrc)(bot.avatar)
        })
            .setDescription(`A new bot has been created by ${author}, You can import the data in the Pokemon Auto Chess Bot Builder (url: ${url} ).`)
            .setThumbnail((0, avatar_1.getAvatarSrc)(bot.avatar));
        try {
            discordWebhook === null || discordWebhook === void 0 ? void 0 : discordWebhook.send({
                embeds: [dsEmbed]
            });
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    },
    announceBotAddition(botData, url, user) {
        const dsEmbed = new discord_js_1.EmbedBuilder()
            .setTitle(`BOT ${botData.name} by @${botData.author} loaded by ${user.displayName}`)
            .setURL(url)
            .setAuthor({
            name: user.displayName,
            iconURL: (0, avatar_1.getAvatarSrc)(user.avatar)
        })
            .setDescription(`BOT ${botData.name} by @${botData.author} (url: ${url} ) loaded by ${user.displayName}`)
            .setThumbnail((0, avatar_1.getAvatarSrc)(botData.avatar));
        try {
            discordWebhook === null || discordWebhook === void 0 ? void 0 : discordWebhook.send({
                embeds: [dsEmbed]
            });
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    },
    announceBotDeletion(botData, user) {
        const dsEmbed = new discord_js_1.EmbedBuilder()
            .setTitle(`BOT ${botData === null || botData === void 0 ? void 0 : botData.name} by @${botData === null || botData === void 0 ? void 0 : botData.author} deleted by ${user.displayName}`)
            .setAuthor({
            name: user.displayName,
            iconURL: (0, avatar_1.getAvatarSrc)(user.avatar)
        })
            .setDescription(`BOT ${botData === null || botData === void 0 ? void 0 : botData.name} by @${botData === null || botData === void 0 ? void 0 : botData.author} (id: ${botData === null || botData === void 0 ? void 0 : botData.id} ) deleted by ${user.displayName}`)
            .setThumbnail((0, avatar_1.getAvatarSrc)((botData === null || botData === void 0 ? void 0 : botData.avatar) ? botData === null || botData === void 0 ? void 0 : botData.avatar : ""));
        try {
            discordWebhook === null || discordWebhook === void 0 ? void 0 : discordWebhook.send({
                embeds: [dsEmbed]
            });
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
};
//# sourceMappingURL=discord.js.map