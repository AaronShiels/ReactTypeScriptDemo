import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addItem } from "../Redux/Actions";
import Item from "../Models/Item";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import State from "../Redux/State";

interface InventoryStateProps {
    items: Item[]
}

interface InventoryDispatchProps {
    addItem: (item: Item) => void;
}

class ConnectedInventory extends React.Component<InventoryStateProps & InventoryDispatchProps> {
    constructor(props) {
        super(props);

        this.handleItemAdded = this.handleItemAdded.bind(this);
    }
    public handleItemAdded(item: Item) {
        this.props.addItem(item);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header text-center">Store Inventory</div>
                <div className="card-body">
                    <NewItemForm onItemAdded={this.handleItemAdded} />
                </div>
                <div className="card-body">
                    <ItemList items={this.props.items} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: State): InventoryStateProps => ({ items: state.items });
const mapDispatchToProps = (dispatch: Dispatch<State>): InventoryDispatchProps => ({ addItem: (item: Item) => dispatch(addItem(item)) });
const Inventory = connect<InventoryStateProps, InventoryDispatchProps>(mapStateToProps, mapDispatchToProps)(ConnectedInventory);

export default Inventory;