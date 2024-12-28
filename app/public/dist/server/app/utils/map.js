"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseMap = reverseMap;
exports.mapToObj = mapToObj;
function reverseMap(map) {
    return new Map(Array.from(map.entries()).map(([k, v]) => [v, k]));
}
function mapToObj(map) {
    const obj = {};
    for (const [k, v] of map)
        obj[k] = v;
    return obj;
}
//# sourceMappingURL=map.js.map