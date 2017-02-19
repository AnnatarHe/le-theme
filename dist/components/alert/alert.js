"use strict";
var React = require("react");
var button_1 = require("../button/button");
var Alert = function (props) {
    return (React.createElement("div", { className: "--le-alert-container --le-alert-" + props.type + " --le-flex-design" },
        React.createElement("p", { className: "--le-alert-text --le-flex-design" }, props.msg),
        props.cb ? React.createElement(button_1.default, { type: "error", size: "large", radius: "radius" }, "\u597D\u54D2") : null));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Alert;
//# sourceMappingURL=alert.js.map