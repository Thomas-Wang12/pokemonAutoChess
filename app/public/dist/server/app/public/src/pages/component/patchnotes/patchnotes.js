"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PatchNotes;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./patchnotes.css");
const poster_1 = require("./poster");
function PatchNotes() {
    const PATCHES = [
        "5.8",
        "5.7",
        "5.6",
        "5.5",
        "5.4",
        "5.3",
        "5.2",
        "5.1",
        "5.0",
        "4.9",
        "4.8",
        "4.7",
        "4.6",
        "4.5",
        "4.4",
        "4.3",
        "4.2",
        "4.1",
        "4.0",
        "3.10",
        "3.9",
        "3.8"
    ];
    return ((0, jsx_runtime_1.jsx)("ul", { children: PATCHES.map((v) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(poster_1.Poster, { version: v }) }, v))) }));
}
//# sourceMappingURL=patchnotes.js.map