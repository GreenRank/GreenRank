import React from "react";
import { PieChart, Pie } from "recharts";

const getUserData = (id) => {
  fetch("/userStats")
    .then((res) => res.json())
    .then((data) => console.log(data)); //set userProfile state)
};

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

/* onPieEnter(data, index) {
  this.setState({
    activeIndex: index,
  });
} */

const getUserData = (id) => {};

export const Profile = ({ id, googleId }) => {
  console.log("inside profile");

  fetch(`/scores/getUserResults/:id`)
    // fetch(`/scores/getUserResults/:${googleId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div>
      <header>
        <h1 id="tableTitle">Your Footprint</h1>
      </header>
      <PieChart id="tableTitle" id="pieChart" width={730} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          // onMouseEnter={this.onPieEnter}
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};