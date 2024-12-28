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
exports.default = History;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const synergies_1 = require("../../../../../models/colyseus-models/synergies");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const Config_1 = require("../../../../../types/Config");
const date_1 = require("../../utils/date");
const team_1 = __importDefault(require("../after/team"));
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const elo_badge_1 = require("./elo-badge");
require("./history.css");
function History(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [gameHistory, setGameHistory] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [hasMore, setHasMore] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        if (props.onUpdate) {
            props.onUpdate(gameHistory);
        }
    }, [gameHistory, props.onUpdate]);
    const pageSize = 10;
    const loadHistory = (uid, page) => __awaiter(this, void 0, void 0, function* () {
        try {
            setLoading(true);
            const response = yield fetch(`/game-history/${uid}?page=${page}&t=${Date.now()}`);
            const data = yield response.json();
            if (props.uid !== uid)
                return;
            if (data.length < pageSize) {
                setHasMore(false);
            }
            setGameHistory((prevHistory) => [...prevHistory, ...data.filter(h => prevHistory.some(p => p.time == h.time) == false)]);
        }
        catch (error) {
            console.error("Failed to load history:", error);
        }
        finally {
            setLoading(false);
        }
    });
    const loadMore = () => __awaiter(this, void 0, void 0, function* () {
        if (loading || !hasMore)
            return;
        const skip = gameHistory.length;
        const page = Math.floor(skip / pageSize + 1);
        loadHistory(props.uid, page);
    });
    (0, react_1.useEffect)(() => {
        setGameHistory([]);
        setHasMore(true);
        loadHistory(props.uid, 1);
    }, [props.uid]);
    return ((0, jsx_runtime_1.jsxs)("article", { className: "game-history-list", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("game_history") }), (0, jsx_runtime_1.jsxs)("div", { children: [(!gameHistory || gameHistory.length === 0) && ((0, jsx_runtime_1.jsx)("p", { children: t("no_history_found") })), gameHistory &&
                        gameHistory.map((r) => ((0, jsx_runtime_1.jsxs)("div", { className: "my-box game-history", children: [(0, jsx_runtime_1.jsxs)("span", { className: "top", children: [t("top"), " ", r.rank] }), (0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: r.elo }), (0, jsx_runtime_1.jsx)("ul", { className: "synergies", children: getTopSynergies(r.pokemons).map(([type, value]) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), (0, jsx_runtime_1.jsx)("span", { children: value })] }, r.time + type))) }), (0, jsx_runtime_1.jsx)("p", { className: "date", children: (0, date_1.formatDate)(r.time) }), (0, jsx_runtime_1.jsx)(team_1.default, { team: r.pokemons })] }, r.time))), hasMore && ((0, jsx_runtime_1.jsx)("button", { onClick: loadMore, className: "bubbly green", disabled: loading, children: loading ? t("loading") : t("load_more") }))] })] }));
}
function getTopSynergies(team) {
    const synergies = (0, synergies_1.computeSynergies)(team.map((pkmRecord) => {
        const pkm = pokemon_factory_1.default.createPokemonFromName(pkmRecord.name);
        pkm.positionY = 1;
        pkmRecord.items.forEach((item) => {
            pkm.items.add(item);
        });
        return pkm;
    }));
    const topSynergies = [...synergies.entries()]
        .sort((a, b) => {
        const aReachedTrigger = a[1] >= Config_1.SynergyTriggers[a[0]][0];
        const bReachedTrigger = b[1] >= Config_1.SynergyTriggers[b[0]][0];
        return aReachedTrigger && !bReachedTrigger
            ? -1
            : bReachedTrigger && !aReachedTrigger
                ? +1
                : b[1] - a[1];
    })
        .slice(0, 3);
    return topSynergies;
}
//# sourceMappingURL=history.js.map