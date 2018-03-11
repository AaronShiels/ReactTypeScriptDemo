import * as React from "react";
import Nav from "./Nav";
import Inventory from "./Inventory";

interface HelloProps {
}

class App extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <Nav name="Demo" />
                <main className="container">
                    <Inventory name="Personal Inventory"/>
                </main>
            </div>
        );
    }
}

export default App;