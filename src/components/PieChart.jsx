import React from "react";
import { newData } from "./BarChart";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function PieChart() {
  return (
    <>
      <label htmlFor="pie">Most loved languages by programmers (%)</label>
      <Pie data={newData} id="pie" />
    </>
  );
}

export default PieChart;
