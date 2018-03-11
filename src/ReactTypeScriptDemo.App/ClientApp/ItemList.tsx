import * as React from "react";
import IItem from "./IItem";

interface IItemListProps {
    items: IItem[]
}

class ItemList extends React.Component<IItemListProps> {
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
                            <Item name={item.name} cost={item.cost} quantity={item.quantity} />
                        )
                    }
                </tbody>
            </table>
        );
    }
}

interface IItemProps extends IItem {
}

class Item extends React.Component<IItemProps>{
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

export default ItemList;