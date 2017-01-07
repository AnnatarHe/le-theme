"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement("button", null, "hello"));
    };
    return Button;
}(React.PureComponent));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=button.js.map