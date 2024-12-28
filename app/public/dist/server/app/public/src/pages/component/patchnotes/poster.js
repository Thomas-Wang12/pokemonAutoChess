"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poster = Poster;
const jsx_runtime_1 = require("react/jsx-runtime");
const marked_1 = require("marked");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
require("./poster.css");
function Poster(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [patchContent, setPatchContent] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        fetch(`/changelog/summary/summary-${props.version}.md`)
            .then((res) => res.text())
            .then((md) => marked_1.marked.parse(md))
            .then((parsed) => setPatchContent(parsed));
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "poster", onClick: (e) => e.currentTarget.classList.toggle("flipped"), children: [(0, jsx_runtime_1.jsx)("div", { className: "front", children: (0, jsx_runtime_1.jsx)("img", { src: `/assets/posters/${props.version}.png`, alt: props.version }) }), (0, jsx_runtime_1.jsx)("div", { className: "back", children: patchContent ? ((0, jsx_runtime_1.jsx)("div", { dangerouslySetInnerHTML: { __html: patchContent } })) : ((0, jsx_runtime_1.jsx)("p", { children: t("loading") })) })] }));
}
//# sourceMappingURL=poster.js.map