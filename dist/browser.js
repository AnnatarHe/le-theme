"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_hot_loader_1 = require("react-hot-loader");
var _root_1 = require("./_root");
require("./index.styl");
var Root = function () {
    return (React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(_root_1.default, null)));
};
var mountEle = document.getElementById('root');
ReactDOM.render(React.createElement(Root, null), mountEle);
if (module.hot) {
    module.hot.accept("./_root", function () {
        var NextApp = require("./_root").default;
        ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
            React.createElement(NextApp, null)), mountEle);
    });
}
//# sourceMappingURL=browser.js.map