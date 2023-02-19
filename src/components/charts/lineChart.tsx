import React from "react";

import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

type lineChartProps = {};

const lineChart: React.FC<lineChartProps> = () => {
  const data = { labels: ["m", "w", "d"], datasets: [{ data: [1, 3, 4, 5] }] };
  const options = {
    responsive: true,
    plugins: { title: { display: true, text: "test only" } },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};
export default lineChart;
