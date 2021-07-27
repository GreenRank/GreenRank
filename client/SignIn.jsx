import React, { useState } from "react";
import { Questionnaire } from "./Questionnaire";
import { Switch, Route } from "react-router-dom";

export const SignIn = () => {
  return (
    <div>
      <h1 id="title">Green Score</h1>

      <Switch>
        <Route path="/Questionnaire" component={Questionnaire} />
      </Switch>
    </div>
  );
};
