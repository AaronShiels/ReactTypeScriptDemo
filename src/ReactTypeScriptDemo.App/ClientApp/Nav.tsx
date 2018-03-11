import * as React from "react";

interface INav {
    name: string
}

class Nav extends React.Component<INav>{
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">{this.props.name}</a>
            </nav>
        );
    }
}

export default Nav;