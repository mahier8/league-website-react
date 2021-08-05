import React from "react";
import "./tables.css";

function Tables() {
  return (
    <div className="tables">
      <div className="table-fixtures">
        <table className="table" cellspacing="0">
          <thead>
            <tr>
              <th colspan="3">League Fixtures</th>
            </tr>
            <tr>
              <th colspan="3">Week 1</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row-color">
              <td colspan="3">Kickoff 1pm Saturday 7 May</td>
            </tr>
            <tr>
              <td className="table-game">Seoul Fury FC</td>
              <td className="table-game">vs</td>
              <td className="table-game">Seoul Fury FC</td>
            </tr>
            <tr className="table-row-color">
              <td colspan="3">Kickoff 1pm Saturday 7 May</td>
            </tr>
            <tr>
              <td className="table-game">Seoul Fury FC</td>
              <td className="table-game">vs</td>
              <td className="table-game">Seoul Fury FC</td>
            </tr>
            <tr className="table-row-color">
              <td colspan="3">Kickoff 1pm Saturday 7 May</td>
            </tr>
            <tr>
              <td className="table-game">Seoul Fury FC</td>
              <td className="table-game">vs</td>
              <td className="table-game">Seoul Fury FC</td>
            </tr>
            <tr className="table-row-color">
              <td colspan="3">Kickoff 1pm Saturday 7 May</td>
            </tr>
            <tr>
              <td className="table-game">Seoul Fury FC</td>
              <td className="table-game">vs</td>
              <td className="table-game">Seoul Fury FC</td>
            </tr>
            <tr className="table-row-color">
              <td colspan="3">Kickoff 1pm Saturday 7 May</td>
            </tr>
            <tr>
              <td className="table-game">Seoul Fury FC</td>
              <td className="table-game">vs</td>
              <td className="table-game">Seoul Fury FC</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* the standings */}
      <div className="table-standings">
        <table className="table-standings-list" cellspacing="0">
          <thead>
            <tr>
              <th colspan="9">League Standings</th>
            </tr>
            <tr>
              <td colspan="3">Club</td>
              <td colspan="1">P</td>
              <td colspan="1">W</td>
              <td colspan="1">D</td>
              <td colspan="1">L</td>
              <td colspan="1">Pts</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3">Seoul Fury FC</td>
              <td colspan="1">4</td>
              <td colspan="1">4</td>
              <td colspan="1">0</td>
              <td colspan="1">0</td>
              <td colspan="1">16</td>
            </tr>
            <tr>
              <td colspan="3">Seoul Fury FC</td>
              <td colspan="1">4</td>
              <td colspan="1">3</td>
              <td colspan="1">1</td>
              <td colspan="1">0</td>
              <td colspan="1">13</td>
            </tr>
            <tr>
              <td colspan="3">Seoul Fury FC</td>
              <td colspan="1">4</td>
              <td colspan="1">3</td>
              <td colspan="1">0</td>
              <td colspan="1">1</td>
              <td colspan="1">12</td>
            </tr>
            <tr>
              <td colspan="3">Seoul Fury FC</td>
              <td colspan="1">4</td>
              <td colspan="1">2</td>
              <td colspan="1">2</td>
              <td colspan="1">0</td>
              <td colspan="1">8</td>
            </tr>
            <tr>
              <td colspan="3">Seoul Fury FC</td>
              <td colspan="1">4</td>
              <td colspan="1">2</td>
              <td colspan="1">1</td>
              <td colspan="1">1</td>
              <td colspan="1">7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tables;
