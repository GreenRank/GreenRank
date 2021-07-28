import React from "react";

export const About = () => {
  let count;

  fetch()
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      count = data.count;
    });
  return (
    <div>
      <p>Four cool guys just trying to save the world...</p>
      <button onClick={count++}>
        Join us oun our journey to reduce carbon emissions.
      </button>
      <p>{{ count }}</p>
    </div>
  );
};
