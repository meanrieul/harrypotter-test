import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Question from "Routes/Question";
import ResultFleur from "Routes/ResultFleur";
import ResultDumbledore from "Routes/ResultDumbledore";
import ResultMcGonagall from "Routes/ResultMcGonagall";
import ResultHermione from "Routes/ResultHermione";
import ResultHarryPotter from "Routes/ResultHarryPotter";
import ResultTomRiddle from "Routes/ResultTomRiddle";
import ResultHagird from "Routes/ResultHagird";
import ResultRonaldWeasley from "Routes/ResultRonaldWeasley";
import ResultSeverusSnape from "Routes/ResultSeverusSnape";
import ResultCedric from "Routes/ResultCedric";
import ResultGinevraWeasley from "Routes/ResultGinevraWeasley";
import ResultLunaLovegood from "Routes/ResultLunaLovegood";
import ResultGeorgeAndFred from "Routes/ResultGeorgeAndFred";
import ResultMalfoy from "Routes/ResultMalfoy";
import ResultNeville from "Routes/ResultNeville";
import ResultChoChang from "Routes/ResultChoChang";

export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/question/:id" component={Question} />
    <Route path="/Fleur" component={ResultFleur} />
    <Route path="/Dumbledore" component={ResultDumbledore} />
    <Route path="/McGonagall" component={ResultMcGonagall} />
    <Route path="/Hermione" component={ResultHermione} />
    <Route path="/HarryPotter" component={ResultHarryPotter} />
    <Route path="/TomRiddle" component={ResultTomRiddle} />
    <Route path="/Hagird" component={ResultHagird} />
    <Route path="/RonaldWeasley" component={ResultRonaldWeasley} />
    <Route path="/SeverusSnape" component={ResultSeverusSnape} />
    <Route path="/Cedric" component={ResultCedric} />
    <Route path="/GinevraWeasley" component={ResultGinevraWeasley} />
    <Route path="/LunaLovegood" component={ResultLunaLovegood} />
    <Route path="/GeorgeAndFred" component={ResultGeorgeAndFred} />
    <Route path="/Malfoy" component={ResultMalfoy} />
    <Route path="/Neville" component={ResultNeville} />
    <Route path="/ChoChang" component={ResultChoChang} />
  </Router>
);
