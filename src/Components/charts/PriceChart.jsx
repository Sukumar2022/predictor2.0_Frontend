import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const PriceChart = () => {
  const data = {
    labels: ["Budget Pick", "Value Choice", "Mid-Range", "Premium"],
    datasets: [
      {
        data: [80, 90, 75, 65],
        backgroundColor: [
          "#2563eb",
          "#22c55e",
          "#f59e0b",
          "#a855f7",
        ],
        borderRadius: 8,
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
        max: 100,
        ticks: { stepSize: 25 },
        grid: { borderDash: [4, 4] },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <ChartCard title="Recommendations by Price" icon={<span>$</span>}>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>

      {/* Price labels */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {["$199", "$349", "$499", "$799"].map((price, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-lg text-center p-2 text-sm font-semibold"
          >
            {price}
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

export default PriceChart;
