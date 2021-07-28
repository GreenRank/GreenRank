import React, { useState, useEffect } from "react";

const fakeData = [
  {
    name: 'Raubern',
    score: '1049'
  },
  {
    name: 'Ian',
    score: '1600'
  },
  {
    name: 'Walker',
    score: '2106'
  },
  {
    name: 'Nitin',
    score: '9001'
  },
]

export const Rankings = () => {
  let rankings = [];

  // rankings = fakeData.map((user, index) => {
  //   return (
  //     <tr>
  //       <td className="rank">{index + 1}</td>
  //       <td className="userName">{user.name}</td>
  //       <td className="Footprint">{user.score}</td>
  //     </tr>
  //   )
  // })

    fetch("/ranks")
      .then((res) => res.json())
      .then((data) => {
        const sorted = Object.entries(data).sort((a, b) => a.score - b.score);
        console.log('SORTED: ', sorted)
        // setUserInfo(sorted);
        sorted.map((user, index) => {
          return (
            <tr>
              <td className="rank">{index + 1}</td>
              <td className="userName">{user.name}</td>
              <td className="Footprint">{user.score}</td>
            </tr>
          )
        })
      });


  return (
    <div id="rankingsContainer">
      <header>
        <h1>Greenest Users</h1>
      </header>
      <div class="wrapper">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {rankings}
          </tbody>
        </table>
      </div>
    </div>
  );
};
