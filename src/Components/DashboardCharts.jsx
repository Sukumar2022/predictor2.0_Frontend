import React from "react";
import PriceChart from "./charts/PriceChart";
import ReliabilityChart from "./charts/ReliabilityChart";
import ReviewChart from "./charts/ReviewChart";

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-3">
        <PriceChart />
      </div>

      <ReliabilityChart />
      <ReviewChart />
    </div>
  );
};

export default DashboardCharts;
