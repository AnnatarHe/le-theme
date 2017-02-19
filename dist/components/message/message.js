/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 25/01/2017
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var React = require("react");
var ReactCssTransitionGroup = require("react-addons-css-transition-group");
var Message = (function (_super) {
    __extends(Message, _super);
    function Message(props) {
        return _super.call(this, props) || this;
    }
    Message.prototype.render = function () {
        var Content = typeof this.props.Content === 'string' ? (React.createElement("div", { className: "--le-message-content" },
            React.createElement("span", { className: "--le-message-text" }, this.props.Content))) : this.props.Content;
        var Result = this.props.show ? (React.createElement("div", null, Content)) : null;
        return (React.createElement(ReactCssTransitionGroup, { transitionName: "fade", transitionEnterTimeout: 350, transitionLeaveTimeout: 250 }, Result));
    };
    return Message;
}(React.PureComponent));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Message;
//# sourceMappingURL=message.js.map