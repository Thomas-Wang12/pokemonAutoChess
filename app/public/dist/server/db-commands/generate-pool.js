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
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const user_metadata_1 = __importDefault(require("../app/models/mongo-models/user-metadata"));
const logger_1 = require("../app/utils/logger");
const tournamentNames = [
    "Keldaan",
    "PokemonFather",
    "froggydojo",
    "Zony11",
    "SmilingImp",
    "ChewT",
    "Pockels",
    "Batotsu",
    "BluntRaptor",
    "Radda",
    "PlatRyan",
    "Roi Tofu",
    "I am no Jedi",
    "The Sleepy Shaman",
    "No meta Player",
    "Draguin",
    "SaileYume",
    "Plagued",
    "Solede",
    "GGillou",
    "Tiger58",
    "Lockthia",
    "Xerion",
    "Pyrra",
    "Bonko",
    "ComeGoblin",
    "Xavrey",
    "GalaxyRider",
    "Irn0X",
    "Nafto",
    "iSeux",
    "DaffyDethklok",
    "Tigereye",
    "Spud",
    "Hiros",
    "throat",
    "Curry",
    "CrimsonNoble",
    "EssAater",
    "🍃💨AnitaDab🍃💨",
    "TheSadLittleChicken",
    "Starchon",
    "andyxd",
    "Da mite",
    "Azior",
    "Thoraque",
    "Constant",
    "Lidl",
    "J-Ray",
    "UnknownToasted",
    "Emeri",
    "Fall.-",
    "julie",
    "Giga",
    "Mrspooghetti",
    "isyshelly",
    "SCEPTILEAV52",
    "TeoSkrn",
    "Rabuuhs",
    "TuamaCrost",
    "Argros",
    "Felosion",
    "RegoBing",
    "Milenity",
    "stormo",
    "TheShadoWalker21",
    "Javiercillo16",
    "Ketzer",
    "Plushiant",
    "spyepic222",
    "Spicy",
    "Master9000dn",
    "BlueJellyO",
    "RGBill",
    "Smughtro",
    "XD737483"
];
const tournamentUsers = [];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        try {
            logger_1.logger.info("connect to db ...");
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            for (let i = 0; i < tournamentNames.length; i++) {
                const name = tournamentNames[i];
                const regExp = new RegExp(name);
                const users = yield user_metadata_1.default.find({ displayName: { $regex: regExp, $options: "i" } }, ["displayName", "elo", "level"], { limit: 100, sort: { level: -1 } });
                if (users && users.length > 0) {
                    const user = users[0];
                    tournamentUsers.push({
                        displayName: name,
                        elo: user.elo,
                        level: user.level
                    });
                }
                else {
                    tournamentUsers.push({
                        displayName: name,
                        elo: 0,
                        level: 0
                    });
                }
            }
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Parsing error:", e);
        }
        tournamentUsers.sort((a, b) => {
            return b.level - a.level;
        });
        tournamentUsers.forEach((u) => {
            console.log(`${u.displayName} (Lvl${u.level}, Elo ${u.elo})`);
        });
    });
}
main();
//# sourceMappingURL=generate-pool.js.map