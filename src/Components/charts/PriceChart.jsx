import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const PriceChart = ({ data: apiData }) => {
  // 1. Grab selected price from form inputs, or default to baseline if not submitted yet
  const userSelectedPrice = apiData?.product?.price || 0; 

  // Simulate regional platform pricing models using the user's base selection price
  const amazonEstimatedPrice = Math.round(userSelectedPrice * 0.95); // 2% cheaper
  const flipkartEstimatedPrice = Math.round(userSelectedPrice * 0.97); // 1% more expensive
  const marketAverage = Math.round((amazonEstimatedPrice + flipkartEstimatedPrice) / 2);

  const data = {
    labels: ["Your Target Price", "Amazon Quote", "Flipkart Quote", "Market Average"],
    datasets: [
      {
        label: "Price Value (₹)",
        data: [userSelectedPrice, amazonEstimatedPrice, flipkartEstimatedPrice, marketAverage],
        backgroundColor: [
          "#2563eb", // Blue
          "#22c55e", // Green
          "#f59e0b", // Amber
          "#a855f7", // Purple
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
        ticks: { 
          color: "#9ca3af",
          callback: (value) => "₹" + value.toLocaleString()
        },
        grid: { 
          color: "rgba(75, 85, 99, 0.2)",
          borderDash: [4, 4] 
        },
      },
      x: {
        ticks: { color: "#9ca3af" },
        grid: { display: false },
      },
    },
  };

  return (
    <ChartCard title="E-Shop Price Comparison" icon={<span>₹</span>}>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>

      {/* Dynamic Price Comparison Labels */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        <div className="bg-[#0d0f12]/60 border border-gray-800/40 rounded-lg text-center p-2 text-sm font-semibold text-blue-400">
          Target: ₹{userSelectedPrice.toLocaleString()}
        </div>
        <div className="bg-[#0d0f12]/60 border border-gray-800/40 rounded-lg text-center p-2 text-sm font-semibold text-emerald-400">
          Amazon: ₹{amazonEstimatedPrice.toLocaleString()}
        </div>
        <div className="bg-[#0d0f12]/60 border border-gray-800/40 rounded-lg text-center p-2 text-sm font-semibold text-amber-400">
          Flipkart: ₹{flipkartEstimatedPrice.toLocaleString()}
        </div>
        <div className="bg-[#0d0f12]/60 border border-gray-800/40 rounded-lg text-center p-2 text-sm font-semibold text-purple-400">
          Avg: ₹{marketAverage.toLocaleString()}
        </div>
      </div>
    </ChartCard>
  );
};

export default PriceChart;