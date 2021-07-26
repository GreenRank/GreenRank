import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { Questionnaire } from "./Questionnaire";

const App = () => {
  return (
    <div>
      <SignIn />,
      <Questionnaire />
    </div>
  );
};

export default App;
