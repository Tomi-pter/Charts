import React from "react";
import "../App.css";

function Table() {
  const data = [
    { name: "JavaScript", love: 69.7 },
    { name: "TypeScript", love: 28.3 },
    { name: "HTML/CSS", love: 62.4 },
    { name: "SQL", love: 56.9 },
    { name: "C#", love: 32.3 },
    { name: "Python", love: 41.6 },
    { name: "Java", love: 38.4 },
  ];

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Used by programmers (%)</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.love}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
