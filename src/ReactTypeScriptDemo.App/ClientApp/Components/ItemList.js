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
var ItemList = /** @class */ (function (_super) {
    __extends(ItemList, _super);
    function ItemList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemList.prototype.render = function () {
        return (React.createElement("table", { className: "table" },
            React.createElement("thead", { className: "thead-dark" },
                React.createElement("tr", null,
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Cost"),
                    React.createElement("th", null, "Quantity"))),
            React.createElement("tbody", null, this.props.items.map(function (item) {
                return React.createElement(Item, { name: item.name, cost: item.cost, quantity: item.quantity });
            }))));
    };
    return ItemList;
}(React.Component));
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.render = function () {
        return (React.createElement("tr", null,
            React.createElement("td", null, this.props.name),
            React.createElement("td", null, this.props.quantity),
            React.createElement("td", null, this.props.cost)));
    };
    return Item;
}(React.Component));
exports.default = ItemList;
//# sourceMappingURL=ItemList.js.map