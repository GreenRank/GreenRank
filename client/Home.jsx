import React, { useState, useEffect } from "react";
import { Nav } from "./Nav.jsx";
import { Rankings } from "./Rankings.jsx";
import { Profile } from "./Profile.jsx";

export const Home = () => {
  const [allUserInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch("/getRankings")
      .then((res) => res.json())
      .then((data) => {
        const sorted = Object.entries(data).sort((a, b) => a - b);
        setUserInfo(sorted);
        // sorted.map()

        // send sorted object with total footprint
        // users name to rankings component

        // filter out individual user data and pass
        // data to profile component
      });
  });

  return (
    <div>
      <Nav />
      <div id="homeContainer">
        <div className="homeColumn">
          <Rankings allUserInfo={allUserInfo} />
        </div>
        <div className="homeColumn">
          <Profile allUserInfo={allUserInfo} />
        </div>
      </div>
    </div>
  );
};
