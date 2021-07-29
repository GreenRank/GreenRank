import React, { useState, useEffect } from "react";
import { Nav } from "./Nav.jsx";
import { Rankings } from "./Rankings.jsx";
import { Profile } from "./Profile.jsx";

export const Home = () => {

  return (
    <div>
      <div id="homeContainer">
        <div className="homeColumn" id='rankings-component'>
          <Rankings />
        </div>
        <div className="homeColumn" id='profile-component'>
          <Profile />
        </div>
      </div>
    </div>
  );
};
