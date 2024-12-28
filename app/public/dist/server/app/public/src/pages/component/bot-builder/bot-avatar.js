"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BotAvatar;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const avatar_1 = require("../../../../../utils/avatar");
const bot_logic_1 = require("./bot-logic");
function BotAvatar(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    function handleOnDragOver(e) {
        e.preventDefault();
    }
    function handleDrop(e) {
        if (e.dataTransfer.getData("pokemon") != "") {
            props.onChangeAvatar({
                name: e.dataTransfer.getData("pokemon"),
                emotion: types_1.Emotion.NORMAL,
                shiny: false
            });
        }
    }
    const errors = (0, bot_logic_1.validateBot)(props.bot);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "bot-info", className: "my-box", children: [(0, jsx_runtime_1.jsx)("img", { className: "bot-avatar", src: (0, avatar_1.getAvatarSrc)(props.bot.avatar), onDragOver: handleOnDragOver, onDrop: handleDrop, onClick: props.onClick }), (0, jsx_runtime_1.jsxs)("p", { children: [props.bot.name, " ", props.bot.author && "by " + props.bot.author] }), (0, jsx_runtime_1.jsxs)("p", { children: ["ELO: ", props.bot.elo] }), (0, jsx_runtime_1.jsx)("p", { children: errors.length > 0 ? ((0, jsx_runtime_1.jsx)("span", { style: { color: "red" }, title: errors.join("\n"), children: t("invalid") })) : ((0, jsx_runtime_1.jsx)("span", { style: { color: "lime" }, children: t("valid") })) })] }));
}
//# sourceMappingURL=bot-avatar.js.map