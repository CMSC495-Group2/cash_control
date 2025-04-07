import React, { useEffect, useState } from 'react';
// import { fetchBudgetSummaries } from '../api/summaryApi'; // Enable when backend is up

const SummariesChart = () => {
  const [summaries, setSummaries] = useState({
    current30: { income: 0, expenses: 0 },
    lastMonth: { income: 0, expenses: 0 },
    ytd: { income: 0, expenses: 0 },
    last365: { income: 0, expenses: 0 },
  });

  // Get last month name dynamically
  const getLastMonthName = () => {
    const now = new Date();
    const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1);
    return lastMonthDate.toLocaleString('default', { month: 'long' });
  };

  useEffect(() => {
    // Using mock data while backend is disabled
    setSummaries({
      current30: { income: 2200, expenses: 1450 },
      lastMonth: { income: 3000, expenses: 2700 },
      ytd: { income: 18500, expenses: 12350 },
      last365: { income: 42000, expenses: 38000 },
    });

    // fetchBudgetSummaries().then(data => setSummaries(data)).catch(console.error);
  }, []);

  const renderSection = (label, data) => {
    const balance = data.income - data.expenses;
    return (
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        minWidth: '250px',
      }}>
        <h3 style={{ color: '#444', marginBottom: '10px' }}>{label}</h3>
        <p><strong>Total Balance:</strong> ${balance.toFixed(2)}</p>
        <p style={{ color: '#2e7d32' }}>Income: ${data.income.toFixed(2)}</p>
        <p style={{ color: '#c62828' }}>Expenses: ${data.expenses.toFixed(2)}</p>
      </div>
    );
  };

  return (
    <div style={{
      padding: '40px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px' }}>
        Budget Summary
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {renderSection('Last 30 Days', summaries.current30)}
        {renderSection(`${getLastMonthName()}’s Budget`, summaries.lastMonth)}
        {renderSection('Year to Date (YTD)', summaries.ytd)}
        {renderSection('Last 365 Days', summaries.last365)}
      </div>
    </div>
  );
};

export default SummariesChart;
