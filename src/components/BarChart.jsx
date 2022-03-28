import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const newData = {
  labels: [
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "SQL",
    "C#",
    "Python",
    "Java",
  ],
  datasets: [
    {
      // label: "Most loved languages by programmers (%)",
      data: [69.7, 28.3, 62.4, 56.9, 32.3, 41.6, 38.4],
      backgroundColor: [
        "#61dafb",
        "#ff0000",
        "#ffff00",
        "#8b008b",
        "#008000",
        "#800000",
        "#d2b48c",
      ],
    },
  ],
};

function BarChart() {
  return (
    <>
      <label htmlFor="barChart">Most used languages by programmers (%)</label>
      <Bar id="barChart" data={newData} />
    </>
  );
}

export default BarChart;
