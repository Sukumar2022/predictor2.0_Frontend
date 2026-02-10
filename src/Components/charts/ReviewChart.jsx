import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const ReviewChart = () => {
  const data = {
    labels: ["Top Rated", "Popular", "Rising", "New Entry"],
    datasets: [
      {
        data: [4.9, 4.7, 4.5, 4.3],
        backgroundColor: [
          "#f59e0b",
          "#2563eb",
          "#22c55e",
          "#a855f7",
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: { stepSize: 1 },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <ChartCard title="By Customer Reviews" icon={<span>⭐</span>}>
      <div className="h-56">
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
};

export default ReviewChart;
