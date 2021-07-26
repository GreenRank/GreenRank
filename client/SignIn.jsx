import React, { useState } from "react";
import { Questionnaire } from "./Questionnaire";
import { Switch, Route } from 'react-router-dom'

export const SignIn = () => {
  const [answers, setAnswers] = useState([
    {
      mobility_vehicles: "",
      consumption_food: "",
      consumption_shopping: "",
      household_area: "",
      household_building: "",
      household_heating: "",
    },
  ]);

  return (
    <div>
      <h1 id="title">Green Rank</h1>
      <Switch>
        <Route path="/Questionnaire" component={Questionnaire} />
      </Switch>
    </div>
  );
};
