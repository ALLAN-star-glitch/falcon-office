// components/charts/LineChart.tsx
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  data: { date: string; users: number }[];
}

export default function LineChart({ data }: LineChartProps) {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Active Users",
        data: data.map((d) => d.users),
        borderColor: "#165DFC",
        backgroundColor: "#63B3FF",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#EDF2F7" } },
    },
  };

  return <Line data={chartData} options={options} />;
}
