import React, { useState } from "react";
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
      });
  });

  return (
    <div>
      <Nav />
      <div id="homeContainer">
        <Rankings getAllUserData={getAllUserData} />
        <Profile getAllUserData={getAllUserData} />
      </div>
    </div>
  );
};
