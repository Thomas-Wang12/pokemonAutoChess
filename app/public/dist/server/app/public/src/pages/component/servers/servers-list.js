"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServersList;
exports.ServerInfo = ServerInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const markdown_to_config_1 = require("markdown-to-config");
const discord_button_1 = __importDefault(require("../buttons/discord-button"));
const jsx_1 = require("../../utils/jsx");
require("./servers-list.css");
function ServersList() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [servers, setServers] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const url = "https://raw.githubusercontent.com/keldaanCommunity/pokemonAutoChess/master/community-servers.md";
        fetch(url).then(res => res.text()).then(md => (0, markdown_to_config_1.markdownToConfig)(md)).then(config => {
            setServers(Object.entries(config).map(([name, server]) => {
                var _a;
                return {
                    name,
                    url: server.url,
                    logo: (_a = server.logo) !== null && _a !== void 0 ? _a : "https://pokemon-auto-chess.com/assets/ui/pokemon_autochess_final.svg",
                    creator: server.creator,
                    version: server.version,
                    discord: server.discord,
                    location: server.location,
                    description: server[markdown_to_config_1.CONTENT_AS_HTML]
                };
            }));
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "servers-list", children: [servers.length === 0 && (0, jsx_runtime_1.jsx)("p", { children: t("loading") }), (0, jsx_runtime_1.jsx)("ul", { children: servers.map((server) => ((0, jsx_runtime_1.jsx)(ServerInfo, { server: server }, server.name))) })] }));
}
function ServerInfo(props) {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const server = props.server;
    const isCurrentServer = (_a = server.url) === null || _a === void 0 ? void 0 : _a.startsWith(window.location.origin);
    const [serverStatus, setServerStatus] = (0, react_1.useState)({ status: "checking...", ccu: 0, maxCcu: 0, version: "unknown", ping: "" });
    (0, react_1.useEffect)(() => {
        if (!server.url) {
            setServerStatus({ status: "unknown", ccu: 0, maxCcu: 0, version: "unknown", ping: "" });
            return;
        }
        const url = server.url + "/status";
        const t = performance.now();
        fetch(url, { signal: AbortSignal.timeout(5000) })
            .then(res => {
            if (res.status === 200) {
                return res.json();
            }
            else {
                throw new Error(res.statusText);
            }
        })
            .then(serverStatus => {
            const ping = Math.round(performance.now() - t);
            setServerStatus(Object.assign({ status: "online", ping: `${ping}ms` }, serverStatus));
        })
            .catch(error => {
            if (error.name === "TimeoutError") {
                setServerStatus({ status: "offline", ccu: 0, maxCcu: 0, version: "unknown", ping: "" });
            }
            else {
                setServerStatus({ status: error.message || "unknown", ccu: 0, maxCcu: 0, version: "unknown", ping: "" });
            }
        });
    }, [server.url]);
    return (0, jsx_runtime_1.jsxs)("li", { className: (0, jsx_1.cc)("server my-box", { current: isCurrentServer }), children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("img", { className: "logo", src: server.logo, alt: server.name }), (0, jsx_runtime_1.jsxs)("h2", { children: [server.name, server.url && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [" - ", (0, jsx_runtime_1.jsx)("a", { href: server.url, children: server.url })] })] }), !isCurrentServer && (0, jsx_runtime_1.jsx)("a", { className: "bubbly blue", href: server.url, children: t("switch_server") }), server.discord && (0, jsx_runtime_1.jsx)(discord_button_1.default, { url: server.discord })] }), (0, jsx_runtime_1.jsxs)("dl", { children: [(0, jsx_runtime_1.jsx)("dt", { children: t("creator") }), (0, jsx_runtime_1.jsx)("dd", { children: server.creator }), (0, jsx_runtime_1.jsx)("dt", { children: t("location") }), (0, jsx_runtime_1.jsx)("dd", { children: server.location }), (0, jsx_runtime_1.jsx)("dt", { children: t("status_label") }), (0, jsx_runtime_1.jsx)("dd", { className: "status-" + serverStatus.status, children: serverStatus.status }), serverStatus.status === "online" && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("dt", { children: t("version") }), (0, jsx_runtime_1.jsx)("dd", { children: serverStatus.version }), (0, jsx_runtime_1.jsx)("dt", { children: t("players") }), (0, jsx_runtime_1.jsxs)("dd", { children: [serverStatus.ccu, "/", serverStatus.maxCcu] }), (0, jsx_runtime_1.jsx)("dt", { children: t("ping") }), (0, jsx_runtime_1.jsx)("dd", { children: serverStatus.ping })] })] }), (0, jsx_runtime_1.jsx)("div", { dangerouslySetInnerHTML: { __html: server.description }, className: "description" })] });
}
//# sourceMappingURL=servers-list.js.map