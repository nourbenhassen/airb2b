import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import About from "./pages/About";
import Users from "./pages/Users";
import Home from "./pages/Home";

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/user" component={Users} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default RouterComponent;
