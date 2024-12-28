"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
exports.sum = sum;
exports.deduplicateArray = deduplicateArray;
exports.removeInArray = removeInArray;
exports.count = count;
const groupBy = (arr, key) => arr.reduce((groups, item) => {
    const k = key(item);
    if (!(k in groups))
        groups[k] = [];
    groups[k].push(item);
    return groups;
}, {});
exports.groupBy = groupBy;
function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
function deduplicateArray(arr) {
    return arr.filter((item, index, array) => array.indexOf(item) === index);
}
function removeInArray(arr, el) {
    const index = arr.indexOf(el);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
function count(arr, el) {
    let count = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === el)
            count++;
    return count;
}
//# sourceMappingURL=array.js.map