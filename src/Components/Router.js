import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Questions from "Routes/Questions";
import Result from "Routes/Result";
export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/questions" component={Questions} />
    <Route path="/result" component={Result} />
  </Router>
);
