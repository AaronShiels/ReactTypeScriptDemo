import * as React from "react";
import IItem from "./IItem";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

interface IInventoryProps {
    name: string
}

interface IInventoryState {
    items: IItem[]
}

class Inventory extends React.Component<IInventoryProps, IInventoryState>{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.handleItemAdded = this.handleItemAdded.bind(this);
    }
    public handleItemAdded(item: IItem) {
        this.setState(prevState => ({ items: [...prevState.items, item] }));
    }
    public render() {
        return (
            <div className="card">
                <div className="card-header text-center">{this.props.name}</div>
                <div className="card-body">
                    <NewItemForm onItemAdded={this.handleItemAdded} />
                </div>
                <div className="card-body">
                    <ItemList items={this.state.items} />
                </div>
            </div>
        );
    }
}

export default Inventory;