"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleBadge = RoleBadge;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const jsx_1 = require("../../utils/jsx");
require("./role-badge.css");
function RoleBadge(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return props.role && props.role !== types_1.Role.BASIC ? ((0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("badge", props.role.toLowerCase()), children: t("role." + props.role) })) : null;
}
//# sourceMappingURL=role-badge.js.map