import React, { useState, useEffect } from "react";

export const Rankings = () => {
  const [rankings, setRankings] = useState([]);

  // useEffect(() => {
  fetch("/postQuestionnaire/ranks")
    .then((res) => res.json())
    .then((data) => {
      console.log("DATARanks: ", data.ranks);
      console.log("data", data);
      const sorted = Object.entries(data.ranks).sort(
        (a, b) => a.score - b.score
      );
      console.log("SORTED: ", sorted);
      sorted.forEach((user, index) => {
        console.log(`${index + 1} => ${user[0]} => ${user[1]}`);
        console.log("rankings to render: ", rankings);
        const newRank = rankings;
        newRank.push(
          <tr>
            <td className="rank">{index + 1}</td>
            <td className="userName">{user[0]}</td>
            <td className="Footprint">{user[1]}</td>
          </tr>
        );
        setRankings(newRank);
      });
    });
  // },[])

  // rankings.push(
  //   <tr key={0}>
  //     <td className="rank">1</td>
  //     <td className="userName">why cant i get this to work T.T</td>
  //     <td className="Footprint">1</td>
  //   </tr>,
  //   <tr key={1}>
  //     <td className="rank">1</td>
  //     <td className="userName">mee</td>
  //     <td className="Footprint">1</td>
  //   </tr>
  // );
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
