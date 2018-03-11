import * as React from "react";
import IItem from "./IItem";

interface INewItemFormProps {
    onItemAdded: (item: IItem) => void;
}

interface INewItemFormState {
    name?: string,
    cost?: number,
    quantity?: number
}

class NewItemForm extends React.Component<INewItemFormProps, INewItemFormState>{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e: React.FormEvent<HTMLInputElement>) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        this.setState(prevState => ({ [name as any]: value }));
    }
    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (this.state.name && this.state.cost && this.state.quantity)
            this.props.onItemAdded({ name: this.state.name, cost: this.state.cost, quantity: this.state.quantity });
    }
    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="cost">Cost</label>
                        <input type="number" className="form-control" name="cost" value={this.state.cost} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" className="form-control" name="quantity" value={this.state.quantity} onChange={this.handleChange} required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    <span className="oi oi-plus"></span> Add Item
                </button>
            </form>
        );
    }
}

export default NewItemForm;