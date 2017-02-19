"use strict";
var React = require("react");
var Loading = function () {
    return (React.createElement("div", { className: "--le-loading-container --le-flex-design --le-flex-center" },
        React.createElement("i", { className: "fa fa-spinner fa-pulse fa-3x" }),
        React.createElement("span", { className: "--le-loading-text" }, " loading... ")));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Loading;
//# sourceMappingURL=index.js.map