"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarterAvatars = exports.Starters = void 0;
const Pokemon_1 = require("./Pokemon");
exports.Starters = [
    Pokemon_1.Pkm.BULBASAUR,
    Pokemon_1.Pkm.CHARMANDER,
    Pokemon_1.Pkm.SQUIRTLE,
    Pokemon_1.Pkm.PIKACHU,
    Pokemon_1.Pkm.MEOWTH,
    Pokemon_1.Pkm.PSYDUCK,
    Pokemon_1.Pkm.MACHOP,
    Pokemon_1.Pkm.CUBONE,
    Pokemon_1.Pkm.EEVEE,
    Pokemon_1.Pkm.CHIKORITA,
    Pokemon_1.Pkm.CYNDAQUIL,
    Pokemon_1.Pkm.TOTODILE,
    Pokemon_1.Pkm.TREECKO,
    Pokemon_1.Pkm.TORCHIC,
    Pokemon_1.Pkm.MUDKIP,
    Pokemon_1.Pkm.TURTWIG,
    Pokemon_1.Pkm.CHIMCHAR,
    Pokemon_1.Pkm.PIPLUP,
    Pokemon_1.Pkm.MUNCHLAX,
    Pokemon_1.Pkm.VULPIX,
    Pokemon_1.Pkm.PHANPY,
    Pokemon_1.Pkm.SHINX,
    Pokemon_1.Pkm.RIOLU
];
exports.StarterAvatars = exports.Starters.map(p => Pokemon_1.PkmIndex[p] + "/Normal");
//# sourceMappingURL=Starters.js.map