import React, { useState } from "react";
import { Home } from "./Home.jsx";
import { Switch, Route } from "react-router-dom";

const SignIn = () => {
  return (
    <div id="signInContainer">
      <h1 id="title">Green Score</h1>
      <a id="signInButton" href="/auth/google">
        log in with google
      </a>
    </div>
  );
};

export default SignIn;