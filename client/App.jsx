import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { Questionnaire } from "./Questionnaire";

const App = () => {
  return (
    <div>
      <SignIn />,
      <Questionnaire />
      <a href="/auth/google">login with google</a>
    </div>
  );
};

export default App;
