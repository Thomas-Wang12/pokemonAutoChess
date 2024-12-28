"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyAssociatedToWeather = exports.WeatherAssociatedToSynergy = exports.PassivesAssociatedToWeather = exports.WeatherEffects = exports.Weather = void 0;
const map_1 = require("../../utils/map");
const Effect_1 = require("./Effect");
const Passive_1 = require("./Passive");
const Synergy_1 = require("./Synergy");
var Weather;
(function (Weather) {
    Weather["SUN"] = "SUN";
    Weather["NIGHT"] = "NIGHT";
    Weather["WINDY"] = "WINDY";
    Weather["MISTY"] = "MISTY";
    Weather["RAIN"] = "RAIN";
    Weather["SNOW"] = "SNOW";
    Weather["STORM"] = "STORM";
    Weather["SANDSTORM"] = "SANDSTORM";
    Weather["BLOODMOON"] = "BLOODMOON";
    Weather["SMOG"] = "SMOG";
    Weather["NEUTRAL"] = "NEUTRAL";
})(Weather || (exports.Weather = Weather = {}));
exports.WeatherEffects = new Map([
    [Weather.WINDY, Effect_1.Effect.WINDY],
    [Weather.SMOG, Effect_1.Effect.SMOG],
    [Weather.NIGHT, Effect_1.Effect.NIGHT],
    [Weather.MISTY, Effect_1.Effect.MISTY]
]);
exports.PassivesAssociatedToWeather = new Map([
    [Weather.SUN, [Passive_1.Passive.SUN]],
    [Weather.RAIN, [Passive_1.Passive.RAIN]],
    [Weather.SANDSTORM, [Passive_1.Passive.SANDSTORM]],
    [Weather.MISTY, [Passive_1.Passive.MISTY]],
    [Weather.SNOW, [Passive_1.Passive.SNOW]],
    [Weather.STORM, [Passive_1.Passive.STORM]],
    [Weather.NIGHT, [Passive_1.Passive.NIGHT]],
    [Weather.WINDY, [Passive_1.Passive.WINDY, Passive_1.Passive.LUGIA]],
    [Weather.NEUTRAL, [Passive_1.Passive.AIRLOCK]]
]);
exports.WeatherAssociatedToSynergy = new Map([
    [Synergy_1.Synergy.FIRE, Weather.SUN],
    [Synergy_1.Synergy.WATER, Weather.RAIN],
    [Synergy_1.Synergy.GROUND, Weather.SANDSTORM],
    [Synergy_1.Synergy.FAIRY, Weather.MISTY],
    [Synergy_1.Synergy.ICE, Weather.SNOW],
    [Synergy_1.Synergy.ELECTRIC, Weather.STORM],
    [Synergy_1.Synergy.DARK, Weather.NIGHT],
    [Synergy_1.Synergy.FLYING, Weather.WINDY],
    [Synergy_1.Synergy.WILD, Weather.BLOODMOON],
    [Synergy_1.Synergy.POISON, Weather.SMOG],
    [Synergy_1.Synergy.NORMAL, Weather.NEUTRAL]
]);
exports.SynergyAssociatedToWeather = (0, map_1.reverseMap)(exports.WeatherAssociatedToSynergy);
//# sourceMappingURL=Weather.js.map