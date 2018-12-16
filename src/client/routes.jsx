import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import Home from "./components/home";
import Tab from "./components/commonComponents/tabs/OverviewVizTab";

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute name="Tabs" component={Tab}/>
    </Route>
  </Router>);
