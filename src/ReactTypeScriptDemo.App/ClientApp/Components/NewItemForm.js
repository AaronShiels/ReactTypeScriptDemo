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
var NewItemForm = /** @class */ (function (_super) {
    __extends(NewItemForm, _super);
    function NewItemForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    NewItemForm.prototype.handleChange = function (e) {
        var name = e.currentTarget.name;
        var value = e.currentTarget.value;
        this.setState(function (prevState) {
            return (_a = {}, _a[name] = value, _a);
            var _a;
        });
    };
    NewItemForm.prototype.handleSubmit = function (e) {
        e.preventDefault();
        if (this.state.name && this.state.cost && this.state.quantity)
            this.props.onItemAdded({ name: this.state.name, cost: this.state.cost, quantity: this.state.quantity });
    };
    NewItemForm.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("div", { className: "form-row" },
                React.createElement("div", { className: "form-group col" },
                    React.createElement("label", { htmlFor: "name" }, "Name"),
                    React.createElement("input", { type: "text", className: "form-control", placeholder: "Name", name: "name", value: this.state.name, onChange: this.handleChange, required: true })),
                React.createElement("div", { className: "form-group col" },
                    React.createElement("label", { htmlFor: "cost" }, "Cost"),
                    React.createElement("input", { type: "number", className: "form-control", name: "cost", value: this.state.cost, onChange: this.handleChange, required: true })),
                React.createElement("div", { className: "form-group col" },
                    React.createElement("label", { htmlFor: "quantity" }, "Quantity"),
                    React.createElement("input", { type: "number", className: "form-control", name: "quantity", value: this.state.quantity, onChange: this.handleChange, required: true }))),
            React.createElement("button", { type: "submit", className: "btn btn-primary" },
                React.createElement("span", { className: "oi oi-plus" }),
                " Add Item")));
    };
    return NewItemForm;
}(React.Component));
exports.default = NewItemForm;
//# sourceMappingURL=NewItemForm.js.map