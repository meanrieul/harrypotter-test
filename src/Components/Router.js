import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Question from "Routes/Question";
import Result from "Routes/Result";
export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/question/:id" component={Question} />
    <Route path="/result" component={Result} />
  </Router>
);
