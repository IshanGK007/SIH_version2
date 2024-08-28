import React from "react";
import { Line } from "react-chartjs-2";

const AnalyticsDashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Session Metrics",
        data: [30, 45, 35, 50],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <Line data={data} />
      {/* Add more analytics and data visualization here */}
    </div>
  );
};

export default AnalyticsDashboard;
