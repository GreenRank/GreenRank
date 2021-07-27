import React, { useState } from "react";

export const Rankings = () => {
  const [allUserInfo, setUserInfo] = useState([]);

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
              <th>+/-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="rank">1</td>
              <td class="userName">Raubern</td>
              <td class="Footprint">1460</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
