"use strict";
var React = require("react");
var Switch = function (props) {
    return (React.createElement("div", { className: "--le-switch-container --le-flex-design --le-flex-center" },
        React.createElement("div", { className: "--le-switch-bar-container", onClick: props.onChange },
            React.createElement("div", { className: "--le-switch-bar" }),
            React.createElement("div", { className: "--le-switch-pointer " + (props.pos ? '--le-switch-pointer-left' : '--le-switch-pointer-right') })),
        React.createElement("div", { className: "--le-switch-display" },
            React.createElement("span", null, props.desc))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Switch;
//# sourceMappingURL=switch.js.map