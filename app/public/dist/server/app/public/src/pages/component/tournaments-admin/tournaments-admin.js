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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsAdmin = TournamentsAdmin;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const date_1 = require("../../utils/date");
require("./tournament-admin.css");
function TournamentsAdmin() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const [tournamentName, setTournamentName] = (0, react_1.useState)("");
    const [tournamentDate, setTournamentDate] = (0, react_1.useState)("");
    const tournaments = (0, hooks_1.useAppSelector)((state) => state.lobby.tournaments);
    const isLoading = !tournaments;
    function createNewTournament(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            dispatch((0, NetworkStore_1.createTournament)({
                name: tournamentName,
                startDate: tournamentDate
            }));
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "tournaments-admin", children: [(0, jsx_runtime_1.jsxs)("div", { className: "content", children: [isLoading && (0, jsx_runtime_1.jsx)("p", { children: "Loading..." }), tournaments.length === 0 && (0, jsx_runtime_1.jsx)("p", { children: "No tournaments planned" }), tournaments && ((0, jsx_runtime_1.jsx)("ul", { children: tournaments.map((tournament) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(TournamentItem, { tournament: tournament }) }, tournament.id))) }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "content my-box", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Create a new tournament" }), (0, jsx_runtime_1.jsxs)("form", { className: "tournament-form", onSubmit: createNewTournament, children: [(0, jsx_runtime_1.jsxs)("label", { children: ["Tournament name", " ", (0, jsx_runtime_1.jsx)("input", { type: "text", required: true, value: tournamentName, onChange: (event) => {
                                            setTournamentName(event.target.value);
                                        } })] }), (0, jsx_runtime_1.jsxs)("label", { children: ["Start at", " ", (0, jsx_runtime_1.jsx)("input", { type: "datetime-local", required: true, onChange: (event) => {
                                            if (event.target["validity"].valid) {
                                                const d = new Date(event.target.value).toISOString();
                                                setTournamentDate(d);
                                            }
                                        } })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "bubbly blue", children: "Create tournament" })] })] })] }));
}
function TournamentItem(props) {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "my-box tournament-item", children: [(0, jsx_runtime_1.jsx)("button", { className: "remove-btn bubbly red", onClick: () => {
                    if (confirm("Delete tournament and all registrations ?")) {
                        dispatch((0, NetworkStore_1.removeTournament)({ id: props.tournament.id }));
                    }
                }, children: t("delete") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly orange", onClick: () => {
                    if (confirm("Remake tournament lobbies ? Previous lobbies won't be deleted so do this only after a server reboot if lobbies have been lost")) {
                        dispatch((0, NetworkStore_1.createTournamentLobbies)({ id: props.tournament.id }));
                    }
                }, children: "Remake lobbies" }), (0, jsx_runtime_1.jsx)("p", { className: "name", children: props.tournament.name }), (0, jsx_runtime_1.jsx)("p", { className: "date", children: (0, date_1.formatDate)(new Date(props.tournament.startDate)) })] }));
}
//# sourceMappingURL=tournaments-admin.js.map