import React, { useState, useEffect } from "react";

export const Rankings = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
  fetch("/postQuestionnaire/ranks")
    .then((res) => res.json())
    .then((data) => {
      const sorted = Object.entries(data.ranks).sort(
        (a, b) => a.score - b.score
      );
      const newRank = [];
      sorted.forEach((user, index) => {
        newRank.push(
          <tr key={index}>
            <td className="rank">{index + 1}</td>
            <td className="userName">{user[0]}</td>
            <td className="Footprint">{user[1].toFixed(1)}</td>
          </tr>
        );
      });
      setRankings(newRank);
    });
  }, []);

  return (
    <div id="rankingsContainer">
      <header>
        <h1 id="tableTitle">Greenest Users</h1>
      </header>
      <div className="wrapper">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Footprint</th>
            </tr>
          </thead>
          <tbody>{rankings}</tbody>
        </table>
      </div>
    </div>
  );
};
