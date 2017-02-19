/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.01.10
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
var index_1 = require("./index");
var Root = (function (_super) {
    __extends(Root, _super);
    function Root(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            switchStatus: true
        };
        return _this;
    }
    Root.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(index_1.Switch, { desc: "hello", onChange: function (e) { return _this.setState({ switchStatus: !_this.state.switchStatus }); }, pos: this.state.switchStatus }),
            React.createElement(index_1.Loading, null),
            React.createElement(index_1.Alert, { msg: "hello", type: "success", cb: function () { return console.log('oh'); } })));
    };
    return Root;
}(React.PureComponent));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
//# sourceMappingURL=_root.js.map