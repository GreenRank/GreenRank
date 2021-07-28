import React, { useState, useEffect } from "react";

export const Rankings = () => {
  return (
    <div id="rankingsContainer">
      <header>
        <h1 id="tableTitle">Greenest Users</h1>
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
            <tr>
              <td className="rank">2</td>
              <td className="userName">Nitin</td>
              <td className="Footprint">2241</td>
            </tr>
            <tr>
              <td className="rank">3</td>
              <td className="userName">Walker</td>
              <td className="Footprint">2476</td>
            </tr>
            <tr>
              <td className="rank">4</td>
              <td className="userName">Ian</td>
              <td className="Footprint">2700</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
