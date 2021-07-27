import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { Questionnaire } from "./Questionnaire";
import { BrowserRouter as Router, Switch, Route } from "./react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <SignIn />,
          <Questionnaire />
          <a href="/auth/google">login with google</a>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
