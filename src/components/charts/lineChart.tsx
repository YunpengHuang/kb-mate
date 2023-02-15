import React from "react";
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
  Legend
);

import { Line } from "react-chartjs-2";

type lineChartProps = {};

const lineChart: React.FC<lineChartProps> = () => {
  return <div>Have a good coding</div>;
};
export default lineChart;
