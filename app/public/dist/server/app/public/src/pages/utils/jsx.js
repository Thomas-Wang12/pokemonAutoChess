"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cc = cc;
function cc(...classes) {
    if (classes.length > 1)
        return classes.map((c) => cc(c)).join(" ");
    else if (typeof classes[0] === "object")
        return Object.keys(classes[0])
            .filter((c) => classes[0][c])
            .join(" ");
    else
        return classes[0].toString();
}
//# sourceMappingURL=jsx.js.map