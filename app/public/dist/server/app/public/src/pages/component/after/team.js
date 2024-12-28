"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Team;
const jsx_runtime_1 = require("react/jsx-runtime");
const avatar_1 = require("../../../../../utils/avatar");
require("./team.css");
function Team(props) {
    return ((0, jsx_runtime_1.jsx)("ul", { className: "player-team-pokemons", children: props.team.map((p, index) => {
            return ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getAvatarSrc)(p.avatar), className: "pokemon-portrait" }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-items", children: p.items.map((item, i) => ((0, jsx_runtime_1.jsx)("img", { src: "/assets/item/" + item + ".png" }, i))) })] }, index));
        }) }));
}
//# sourceMappingURL=team.js.map