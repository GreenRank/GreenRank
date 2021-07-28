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
          id={3}
          googleId={110466235164956177628}
          // getAllUserData={getAllUserData} 
          />
      </div>
    </div>
  );
};
