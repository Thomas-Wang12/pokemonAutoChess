"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
require("./progress-bar.css");
const ROUND_PRECISION = 1000;
function onlyProgressBar(props, propName, componentName) {
    const children = props[propName];
    if (!children) {
        return null;
    }
    let error = null;
    React.Children.forEach(children, (child) => {
        if (error) {
            return;
        }
        const element = (0, jsx_runtime_1.jsx)(ProgressBar, {});
        if (child.type === element.type)
            return;
        const childType = child.type;
        const childIdentifier = React.isValidElement(child)
            ? childType.displayName || childType.name || childType
            : child;
        error = new Error(`Children of ${componentName} can contain only ProgressBar ` +
            `components. Found ${childIdentifier}.`);
    });
    return error;
}
const propTypes = {
    min: prop_types_1.default.number,
    now: prop_types_1.default.number,
    max: prop_types_1.default.number,
    label: prop_types_1.default.node,
    visuallyHidden: prop_types_1.default.bool,
    striped: prop_types_1.default.bool,
    animated: prop_types_1.default.bool,
    children: onlyProgressBar,
    isChild: prop_types_1.default.bool
};
function getPercentage(now, min, max) {
    const percentage = ((now - min) / (max - min)) * 100;
    return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}
function renderProgressBar(_a, ref) {
    var { min, now, max, label, visuallyHidden, striped, animated, className, style } = _a, props = __rest(_a, ["min", "now", "max", "label", "visuallyHidden", "striped", "animated", "className", "style"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref }, props, { role: "progressbar", className: (0, classnames_1.default)(className, `progress-bar`, {
            [`progress-bar-animated`]: animated,
            [`progress-bar-striped`]: animated || striped
        }), style: Object.assign({ width: `${getPercentage(now, min, max)}%` }, style), "aria-valuenow": now, "aria-valuemin": min, "aria-valuemax": max, children: visuallyHidden ? ((0, jsx_runtime_1.jsx)("span", { className: "visually-hidden", children: label })) : (label) })));
}
renderProgressBar.propTypes = propTypes;
const ProgressBar = React.forwardRef((_a, ref) => {
    var { isChild = false } = _a, rest = __rest(_a, ["isChild"]);
    const props = Object.assign({ min: 0, max: 100, animated: false, visuallyHidden: false, striped: false }, rest);
    if (isChild) {
        return renderProgressBar(props, ref);
    }
    const { min, now, max, label, visuallyHidden, striped, animated, variant, className, children } = props, wrapperProps = __rest(props, ["min", "now", "max", "label", "visuallyHidden", "striped", "animated", "variant", "className", "children"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref }, wrapperProps, { className: (0, classnames_1.default)("progress", className), children: children
            ? map(children, (child) => (0, react_1.cloneElement)(child, { isChild: true }))
            : renderProgressBar({
                min,
                now,
                max,
                label,
                visuallyHidden,
                striped,
                animated,
                variant
            }, ref) })));
});
ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = propTypes;
exports.default = ProgressBar;
function map(children, func) {
    let index = 0;
    return React.Children.map(children, (child) => React.isValidElement(child) ? func(child, index++) : child);
}
//# sourceMappingURL=progress-bar.js.map