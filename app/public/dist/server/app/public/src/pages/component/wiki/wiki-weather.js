"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiWeather;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Config_1 = require("../../../../../types/Config");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Weather_1 = require("../../../../../types/enum/Weather");
const avatar_1 = require("../../../../../utils/avatar");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
function WikiWeather() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-weather", children: [(0, jsx_runtime_1.jsxs)("div", { className: "my-box", style: { marginBottom: "0.5em" }, children: [(0, jsx_runtime_1.jsx)("p", { children: t("weather_dominant_hint") }), (0, jsx_runtime_1.jsx)("p", { children: t("weather_dominant_hint2") })] }), (0, jsx_runtime_1.jsx)("ul", { children: Object.values(Weather_1.Weather).map((weather) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("li", { className: "my-box", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("img", { className: "weather-icon", src: `/assets/icons/weather/${weather.toLowerCase()}.svg` }), (0, jsx_runtime_1.jsx)("h2", { children: t(`weather.${weather}`) }), (0, jsx_runtime_1.jsxs)("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [Config_1.WeatherThreshold[weather], (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Weather_1.SynergyAssociatedToWeather.get(weather) })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "description", children: (0, descriptions_1.addIconsToDescription)(t(`weather_description.${weather}`)) }), (0, jsx_runtime_1.jsx)("ul", { children: ((_a = pokemonsInfluencingWeather.get(weather)) !== null && _a !== void 0 ? _a : [])
                                    .map(p => (0, precomputed_pokemon_data_1.getPokemonData)(p))
                                    .map((p) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                            additional: p.additional,
                                            regional: p.regional
                                        }), "data-tooltip-id": `pokemon-detail-${p.index}`, children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index) }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: `pokemon-detail-${p.index}`, className: "custom-theme-tooltip game-pokemon-detail-tooltip", children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: p.name }) })] }, p.name) }, p.index))) })] }, weather));
                }) })] }));
}
const pokemonsInfluencingWeather = new Map([
    [Weather_1.Weather.SUN, [Pokemon_1.Pkm.HO_OH, Pokemon_1.Pkm.SOLROCK, Pokemon_1.Pkm.CASTFORM_SUN]],
    [Weather_1.Weather.NIGHT, [Pokemon_1.Pkm.LUNATONE, Pokemon_1.Pkm.SHADOW_LUGIA]],
    [Weather_1.Weather.WINDY, [Pokemon_1.Pkm.LUGIA, Pokemon_1.Pkm.LANDORUS, Pokemon_1.Pkm.THUNDURUS, Pokemon_1.Pkm.TORNADUS, Pokemon_1.Pkm.ENAMORUS]],
    [Weather_1.Weather.MISTY, [Pokemon_1.Pkm.ENAMORUS, Pokemon_1.Pkm.XERNEAS]],
    [Weather_1.Weather.RAIN, [Pokemon_1.Pkm.PRIMAL_KYOGRE, Pokemon_1.Pkm.CASTFORM_RAIN,]],
    [Weather_1.Weather.SNOW, [Pokemon_1.Pkm.ARTICUNO, Pokemon_1.Pkm.CASTFORM_HAIL]],
    [Weather_1.Weather.STORM, [Pokemon_1.Pkm.ZAPDOS, Pokemon_1.Pkm.THUNDURUS]],
    [Weather_1.Weather.SANDSTORM, [Pokemon_1.Pkm.LANDORUS, Pokemon_1.Pkm.PRIMAL_GROUDON]],
    [Weather_1.Weather.NEUTRAL, [Pokemon_1.Pkm.MEGA_RAYQUAZA]],
]);
//# sourceMappingURL=wiki-weather.js.map