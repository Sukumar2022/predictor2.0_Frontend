import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const ReliabilityChart = () => {
  const data = {
    labels: ["Brand A", "Brand B", "Brand C", "Brand D"],
    datasets: [
      {
        data: [90, 85, 75, 70],
        backgroundColor: [
          "#22c55e",
          "#2563eb",
          "#f59e0b",
          "#a855f7",
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: { borderDash: [4, 4] },
      },
      y: {
        grid: { display: false },
      },
    },
  };

  return (
    <ChartCard title="By Reliability" icon={<span>🛡️</span>}>
      <div className="h-56">
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
};

export default ReliabilityChart;
