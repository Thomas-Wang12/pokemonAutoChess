"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Booster;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Config_1 = require("../../../../../types/Config");
const hooks_1 = require("../../../hooks");
const LobbyStore_1 = require("../../../stores/LobbyStore");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const jsx_1 = require("../../utils/jsx");
const booster_card_1 = require("./booster-card");
require("./booster.css");
function Booster() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const boosterContent = (0, hooks_1.useAppSelector)((state) => state.lobby.boosterContent);
    const numberOfBooster = user ? user.booster : 0;
    (0, react_1.useEffect)(() => () => {
        dispatch((0, LobbyStore_1.setBoosterContent)([]));
    }, [dispatch]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "boosters-page", children: [(0, jsx_runtime_1.jsx)("p", { className: "help", children: numberOfBooster === 0 ? t("boosters_hint") : t("open_boosters_hint") }), (0, jsx_runtime_1.jsx)("div", { className: "boosters-content", children: boosterContent.map((pkm, i) => ((0, jsx_runtime_1.jsx)(booster_card_1.BoosterCard, { pkm: pkm, shards: pkm.shiny ? Config_1.DUST_PER_SHINY : Config_1.DUST_PER_BOOSTER }, "booster" + i))) }), (0, jsx_runtime_1.jsxs)("div", { className: "actions", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => {
                            if (numberOfBooster > 0) {
                                dispatch((0, LobbyStore_1.setBoosterContent)([]));
                                dispatch((0, NetworkStore_1.openBooster)());
                            }
                        }, className: (0, jsx_1.cc)("bubbly", { blue: numberOfBooster > 0 }), disabled: numberOfBooster <= 0, children: t("open_booster") }), (0, jsx_runtime_1.jsx)("span", { className: "booster-count", children: numberOfBooster }), (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/booster.png", alt: "booster" })] })] }));
}
//# sourceMappingURL=booster.js.map