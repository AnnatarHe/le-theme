"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        return _super.apply(this, arguments) || this;
    }
    Alert.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "hello")));
    };
    return Alert;
}(React.PureComponent));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Alert;
//# sourceMappingURL=alert.js.map