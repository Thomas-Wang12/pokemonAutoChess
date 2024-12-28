"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DiscordButton;
const jsx_runtime_1 = require("react/jsx-runtime");
function DiscordButton(props) {
    return ((0, jsx_runtime_1.jsx)("a", { href: props.url, target: "_blank", rel: "noopener noreferrer", className: "discord-button", children: (0, jsx_runtime_1.jsxs)("button", { type: "button", className: "bubbly discord", children: [(0, jsx_runtime_1.jsx)("img", { width: 32, height: 32, src: `assets/ui/discord.svg` }), "Discord"] }) }));
}
//# sourceMappingURL=discord-button.js.map