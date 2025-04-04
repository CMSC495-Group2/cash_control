import React from "react";
export const SummariesChart = ({ balance }) => {
  return (
    <div className="summaries-chart-container">
      <h2>Budget Summary</h2>
      <p>
        <strong>Total Balance:</strong> ${balance.toFixed(2)}
      </p>
    </div>
  );
};
