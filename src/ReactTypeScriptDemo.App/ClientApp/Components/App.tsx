import * as React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import Inventory from "./Inventory";
import Item from "../Models/Item";
import State from "../Redux/State";

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav name="Demo" />
                <main className="container">
                    <Inventory />
                </main>
            </div>
        );
    }
}

export default App;