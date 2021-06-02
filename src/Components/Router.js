import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Question from "Routes/Question";
import ResultA from "Routes/ResultA";
import ResultB from "Routes/ResultB";
import ResultC from "Routes/ResultC";
import ResultD from "Routes/ResultD";
export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/question/:id" component={Question} />
    <Route path="/resultA" component={ResultA} />
    <Route path="/resultB" component={ResultB} />
    <Route path="/resultC" component={ResultC} />
    <Route path="/resultD" component={ResultD} />
  </Router>
);
