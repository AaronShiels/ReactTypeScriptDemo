import * as React from "react";
import Item from "../Models/Item";

interface ItemRowProps extends Item {
}

class ItemRow extends React.Component<ItemRowProps>{
    public render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.quantity}</td>
                <td>{this.props.cost}</td>
            </tr>
        );
    }
}

interface ItemListProps {
    items: Item[]
}

class ItemList extends React.Component<ItemListProps> {
    public render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.items.map(item =>
                            <ItemRow name={item.name} cost={item.cost} quantity={item.quantity} />
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default ItemList;