import React, { useState } from "react";

const getAllUserData = () => {
  fetch('/allUserStats')
  .then(res => res.json())
  .then(data => console.log(data)) //set userProfile state)
}

export const Rankings = () => {
  const [allUserInfo, setUserInfo] = useState([]);

  return <div></div>;
};
