import React from "react";
export const BudgetSummary = ({ balance }) => {
  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>
      <p>
        <strong>Total Balance:</strong> ${balance.toFixed(2)}
      </p>
    </div>
  );
};
