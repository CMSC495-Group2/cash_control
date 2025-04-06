import React from "react";
export const SummariesChart = ({ balance }) => {
  return (
    <>
      <h2>Budget Summary</h2>
      <p>
        <strong>Total Balance:</strong> ${balance.toFixed(2)}
      </p>
    </>
  );
};
