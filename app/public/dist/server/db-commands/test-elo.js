"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elo_engine_1 = require("../app/core/elo-engine");
const elo = new elo_engine_1.EloEngine();
console.log(elo.updateRating(elo.getExpected(1000, 1468), 1, 1000));
//# sourceMappingURL=test-elo.js.map