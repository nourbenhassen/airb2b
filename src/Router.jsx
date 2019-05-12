import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./pages/About"

class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/user" Component={() => <div>User</div>} />
                <Route path="/about" Component={About} />
                <Route exact path="/" component={() => <div>Home</div>} />
            </Router>
        )
    }
}

export default RouterComponent;