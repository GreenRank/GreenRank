import React, { useState } from "react";
import { Nav } from "./components/Nav.jsx";
import { SignIn } from "./components/SignIn.jsx";
import { Profile } from "./components/Profile.jsx";
import { Questionnaire } from "./components/Questionnaire.jsx";
import { About } from "./components/About.jsx";
import { Home } from "./components/Home.jsx";
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
    <div id='main-container'>
      <Router>

        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route>

            <Nav />
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/Questionnaire" component={Questionnaire} />
              <Route path="/About" component={About} />
              {/* <Route path="/Profile" component={Profile} /> */}
            </Switch>

          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
