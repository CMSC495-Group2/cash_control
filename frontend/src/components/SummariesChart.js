import React, { useEffect, useState } from "react";
import { getTransactionsList } from "../api/transactionApi";

//*******Extracted all styling to its own css file 'summarieschart.css'*************

const SummariesChart = () => {
  const [summaries, setSummaries] = useState({
    current30: { income: 0, expenses: 0 },
    lastMonth: { income: 0, expenses: 0 },
    ytd: { income: 0, expenses: 0 },
    last365: { income: 0, expenses: 0 },
  });

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const last30Days = new Date(now);
  last30Days.setDate(now.getDate() - 30);
  const last365Days = new Date(now);
  last365Days.setDate(now.getDate() - 365);
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);

  const getLastMonthName = () => {
    return lastMonthStart.toLocaleString("default", { month: "long" });
  };

  const calculateSummaries = (transactions) => {
    const summaries = {
      current30: { income: 0, expenses: 0 },
      lastMonth: { income: 0, expenses: 0 },
      ytd: { income: 0, expenses: 0 },
      last365: { income: 0, expenses: 0 },
    };

    transactions.forEach((tx) => {
      const date = new Date(tx.dateHelper);
      const amount = tx.amount;
      const isIncome = tx.transactionType === "Income";

      const addToSummary = (key) => {
        if (isIncome) summaries[key].income += amount;
        else summaries[key].expenses += amount;
      };

      if (date >= last30Days) addToSummary("current30");
      if (date >= lastMonthStart && date <= lastMonthEnd)
        addToSummary("lastMonth");
      if (date >= startOfYear) addToSummary("ytd");
      if (date >= last365Days) addToSummary("last365");
    });

    return summaries;
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getTransactionsList();
        const data = response.data || [];
        const calculated = calculateSummaries(data);
        setSummaries(calculated);
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    };
    fetchTransactions();
  }, []);

  const renderSection = (label, data) => {
    const balance = data.income - data.expenses;
    return (
      <div className="summaries-chart-item">
        <h3>{label}</h3>
        <p>
          <strong>Total Balance:</strong> ${balance.toFixed(2)}
        </p>
        <p className="income">Income: ${data.income.toFixed(2)}</p>
        <p className="expenses">Expenses: ${data.expenses.toFixed(2)}</p>
      </div>
    );
  };

  return (
    <div className="summaries-chart-container">
      <h2 className="summaries-chart-title">Budget Summary</h2>
      <div className="summaries-chart-grid">
        {renderSection("Last 30 Days", summaries.current30)}
        {renderSection(`${getLastMonthName()}’s Budget`, summaries.lastMonth)}
        {renderSection("Year to Date (YTD)", summaries.ytd)}
        {renderSection("Last 365 Days", summaries.last365)}
      </div>
    </div>
  );
};

export default SummariesChart;
