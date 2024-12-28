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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        try {
            logger_1.logger.info("connect to db ...");
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            const users = yield user_metadata_1.default.find({});
            for (let i = 0; i < users.length; i++) {
                const u = users[i];
                logger_1.logger.info(u.displayName, u.language);
                u.language = "";
                yield u.save();
            }
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Parsing error:", e);
        }
    });
}
main();
//# sourceMappingURL=update-user.js.map