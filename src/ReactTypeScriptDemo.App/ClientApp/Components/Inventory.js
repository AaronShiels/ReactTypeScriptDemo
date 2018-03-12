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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ItemList_1 = require("./ItemList");
var NewItemForm_1 = require("./NewItemForm");
var Inventory = /** @class */ (function (_super) {
    __extends(Inventory, _super);
    function Inventory(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: []
        };
        _this.handleItemAdded = _this.handleItemAdded.bind(_this);
        return _this;
    }
    Inventory.prototype.handleItemAdded = function (item) {
        this.setState(function (prevState) { return ({ items: prevState.items.concat([item]) }); });
    };
    Inventory.prototype.render = function () {
        return (React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card-header text-center" }, this.props.name),
            React.createElement("div", { className: "card-body" },
                React.createElement(NewItemForm_1.default, { onItemAdded: this.handleItemAdded })),
            React.createElement("div", { className: "card-body" },
                React.createElement(ItemList_1.default, { items: this.state.items }))));
    };
    return Inventory;
}(React.Component));
exports.default = Inventory;
//# sourceMappingURL=Inventory.js.map