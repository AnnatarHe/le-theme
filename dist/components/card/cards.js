/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 08/01/2017
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
var Cards = (function (_super) {
    __extends(Cards, _super);
    function Cards() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cards.prototype.render = function () {
        return (React.createElement("div", { className: "--le-cards-container --le-flex-design" }, this.props.children));
    };
    return Cards;
}(React.PureComponent));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cards;
//# sourceMappingURL=cards.js.map