import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { Questionnaire } from "./Questionnaire";
import { Home } from "./Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

const App = () => {
  const history = useHistory();

  function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }
  const cookie = getCookie("greenRankCurrentUser0001");
  if (cookie) history.push("./Home");

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/Home" component={Home} />
          <Route path="/Questionnare" component={Questionnaire} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
