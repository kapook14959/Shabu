import React, { Component } from "react";
import Login from "./components/login/login";
import Kitchen from "./components/kitchen/kitchen";
import Pos from "./components/pos_of_customer/pos";
import Queue from "./components/queue/queue";
import Checklist from "./components/checklist/checklist";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/kitchen">
            <Kitchen />
          </Route>
          <Route path="/pos">
            <Pos />
          </Route>
          <Route path="/queue">
            <Queue />
          </Route>
          <Route path="/checklist">
            <Checklist />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
