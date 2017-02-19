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
var react_router_1 = require("react-router");
var Card = (function (_super) {
    __extends(Card, _super);
    function Card(props) {
        return _super.call(this, props) || this;
    }
    Card.prototype.render = function () {
        return (React.createElement("div", { className: "--le-card-item --le-flex-design --le-flex-center" },
            React.createElement(react_router_1.Link, { to: this.props.to },
                React.createElement("img", { src: this.props.image, className: "--le-card-item-image --le-flex-design" }),
                React.createElement("div", { className: "--le-card-item-content --le-flex-design --le-flex-center" },
                    React.createElement("h5", { className: "--le-card-item-title" }, this.props.title),
                    this.props.desc ? React.createElement("span", { className: "--le-card-item-desc" }, this.props.desc) : null))));
    };
    return Card;
}(React.PureComponent));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
//# sourceMappingURL=card.js.map