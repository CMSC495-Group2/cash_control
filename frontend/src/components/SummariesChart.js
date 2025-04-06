import React, { useEffect, useState } from 'react';

// The below set needs pull data from the backend
//import { fetchBudgetSummary } from '../api/summaryApi'; 

const SummariesChart = () => {
  const [summary, setSummary] = useState({ income: 0, expenses: 0 });

  useEffect(() => {
    fetchBudgetSummary()
      .then(data => setSummary(data))
      .catch(error => {
        console.error("Failed to fetch budget summary:", error);
        // Optional: Handle fallback data here
      });
  }, []);

  const totalBalance = summary.income - summary.expenses;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontWeight: 'bold' }}>Budget Summary</h2>
      <div style={{ marginTop: '10px' }}>
        <p><strong>Total Balance:</strong> ${totalBalance.toFixed(2)}</p>
        <p>Total Income: ${summary.income.toFixed(2)}</p>
        <p>Total Expenses: ${summary.expenses.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SummariesChart;
