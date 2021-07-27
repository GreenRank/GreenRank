import React from "react";

export const Home = () => {
  const getAllUserData = () => {
    fetch("/allUserStats")
      .then((res) => res.json())
      .then((data) => console.log(data)); //set userProfile state)
  };

  return (
    <div>
      <Nav />,
      <div id="homeContainer">
        <Rankings getAllUserData={getAllUserData} />
        <Profile getAllUserData={getAllUserData} />
      </div>
    </div>
  );
};
