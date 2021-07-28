import React, { useState, useEffect } from "react";

export const Rankings = () => {
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
            <tr>
              <td className="rank">1</td>
              <td className="userName">Raubern</td>
              <td className="Footprint">1460</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
