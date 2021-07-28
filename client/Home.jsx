import React, { useState, useEffect } from "react";
import { Nav } from "./Nav.jsx";
import { Rankings } from "./Rankings.jsx";
import { Profile } from "./Profile.jsx";



export const Home = () => {
  const [allUserInfo, setUserInfo] = useState();



  return (
    <div>
      <Nav />
      <div id="homeContainer">
        <Rankings 
          // getAllUserData={getAllUserData} 
          />
        <Profile 
          // getAllUserData={getAllUserData} 
          />
      </div>
    </div>
  );
};
