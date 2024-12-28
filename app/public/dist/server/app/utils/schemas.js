"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = keys;
exports.values = values;
exports.entries = entries;
exports.resetArraySchema = resetArraySchema;
exports.convertSchemaToRawObject = convertSchemaToRawObject;
const schema_1 = require("@colyseus/schema");
function keys(schema) {
    const keys = [];
    schema.forEach((value, key) => keys.push(key));
    return keys;
}
function values(schema) {
    const values = [];
    schema.forEach((value) => values.push(value));
    return values;
}
function entries(schema) {
    const entries = [];
    schema.forEach((value, key) => entries.push([key, value]));
    return entries;
}
function resetArraySchema(schema, newArray) {
    schema.clear();
    newArray.forEach((value) => schema.push(value));
}
function convertSchemaToRawObject(schema) {
    if (schema instanceof schema_1.ArraySchema) {
        const values = [];
        schema.forEach((value) => values.push(convertSchemaToRawObject(value)));
        return values;
    }
    if (schema instanceof schema_1.CollectionSchema) {
        const values = [];
        schema.forEach((value) => values.push(convertSchemaToRawObject(value)));
        return values;
    }
    if (schema instanceof schema_1.MapSchema) {
        const map = new Map();
        schema.forEach((val, key) => map.set(key, convertSchemaToRawObject(val)));
        return map;
    }
    if (schema instanceof schema_1.SetSchema) {
        const set = new Set();
        schema.forEach((val) => set.add(convertSchemaToRawObject(val)));
        return set;
    }
    if (schema instanceof schema_1.Schema === false)
        return schema;
    const raw = {};
    Object.getOwnPropertyNames(schema).forEach((prop) => {
        if (prop.startsWith("_") === false && prop.startsWith("$") === false) {
            raw[prop] = convertSchemaToRawObject(schema[prop]);
        }
    });
    return raw;
}
//# sourceMappingURL=schemas.js.map