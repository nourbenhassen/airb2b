import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import About from "./pages/About";

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/user" component={() => <div>User</div>} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={() => <div>Home</div>} />
        </Switch>
      </Router>
    );
  }
}

export default RouterComponent;
