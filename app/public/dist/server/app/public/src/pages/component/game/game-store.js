"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameStore;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const game_1 = require("../../game");
const audio_1 = require("../../utils/audio");
const store_1 = require("../../utils/store");
const game_pokemon_portrait_1 = __importDefault(require("./game-pokemon-portrait"));
function GameStore() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const shop = (0, hooks_1.useAppSelector)((state) => state.game.shop);
    const [teamPlanner, setTeamPlanner] = (0, react_1.useState)(store_1.localStore.get(store_1.LocalStoreKeys.TEAM_PLANNER));
    (0, react_1.useEffect)(() => {
        const updateTeamPlanner = (e) => {
            if (e.key === store_1.LocalStoreKeys.TEAM_PLANNER) {
                setTeamPlanner(store_1.localStore.get(store_1.LocalStoreKeys.TEAM_PLANNER));
            }
        };
        window.addEventListener("storage", updateTeamPlanner);
        return () => {
            window.removeEventListener("storage", updateTeamPlanner);
        };
    }, []);
    const scene = (0, game_1.getGameScene)();
    return ((0, jsx_runtime_1.jsx)("ul", { className: "game-pokemons-store", children: shop.map((pokemon, index) => {
            var _a;
            if (pokemon != Pokemon_1.Pkm.DEFAULT) {
                return ((0, jsx_runtime_1.jsx)(game_pokemon_portrait_1.default, { origin: "shop", index: index, pokemon: pokemon, inPlanner: (_a = teamPlanner === null || teamPlanner === void 0 ? void 0 : teamPlanner.some(p => p.name === pokemon)) !== null && _a !== void 0 ? _a : false, onMouseEnter: () => {
                        if (scene) {
                            if (scene.pokemonHovered)
                                scene.clearHovered(scene.pokemonHovered);
                            scene.pokemonHovered = null;
                            scene.shopIndexHovered = index;
                        }
                    }, onMouseLeave: () => {
                        if (scene)
                            scene.shopIndexHovered = null;
                    }, click: (e) => {
                        (0, audio_1.playSound)(audio_1.SOUNDS.BUTTON_CLICK);
                        dispatch((0, NetworkStore_1.shopClick)(index));
                    } }, "shop" + index));
            }
            else {
                return ((0, jsx_runtime_1.jsx)(game_pokemon_portrait_1.default, { origin: "shop", index: index, pokemon: undefined }, "shop" + index));
            }
        }) }));
}
//# sourceMappingURL=game-store.js.map