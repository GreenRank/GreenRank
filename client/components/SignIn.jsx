import React, { useState } from "react";
// import { Home } from "./Home.jsx";
import { Link, Switch, Route } from "react-router-dom";

export const SignIn = () => {
  return (
    <div id="signInContainer">
      <h1 id="title">Green Rank</h1>
      <a id="signInButton" href="/auth/google">
        log in with google
      </a>
      <button id='bypass'>
        <Link to="/Home">
          click to go home
        </Link>
      </button>
    </div>
  );
};
