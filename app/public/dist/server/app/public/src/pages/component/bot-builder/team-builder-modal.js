"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TeamBuilderModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const store_1 = require("../../utils/store");
const modal_1 = require("../modal/modal");
const team_builder_1 = __importDefault(require("./team-builder"));
function TeamBuilderModal(props) {
    const [board, updateBoard] = (0, react_1.useState)(store_1.localStore.get(store_1.LocalStoreKeys.TEAM_PLANNER));
    (0, react_1.useEffect)(() => {
        store_1.localStore.set(store_1.LocalStoreKeys.TEAM_PLANNER, board);
    }, [board]);
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.show, onClose: props.handleClose, header: (0, i18next_1.t)("team_builder"), className: "team-builder-modal", children: (0, jsx_runtime_1.jsx)(team_builder_1.default, { board: board, updateBoard: updateBoard }) }));
}
//# sourceMappingURL=team-builder-modal.js.map