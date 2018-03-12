import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "open-iconic/font/css/open-iconic-bootstrap.min.css";
import "./site.css";
import store from "./Redux/Store";
import App from "./Components/App";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);