import React, { useEffect, useState } from "react";
import { getTransactionsList } from "../api/transactionApi";
//import view_graph from "../assets/images/view_graph.png";

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
  const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0); // last day of last month

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          minWidth: "250px",
        }}
      >
        <h3 style={{ color: "#444", marginBottom: "10px" }}>{label}</h3>
        <p>
          <strong>Total Balance:</strong> ${balance.toFixed(2)}
        </p>
        <p style={{ color: "#2e7d32" }}>Income: ${data.income.toFixed(2)}</p>
        <p style={{ color: "#c62828" }}>
          Expenses: ${data.expenses.toFixed(2)}
        </p>
      </div>
    );
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "28px",
          color: "#374c59",
        }}
      >
        Budget Summary
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {renderSection("Last 30 Days", summaries.current30)}
        {renderSection(`${getLastMonthName()}’s Budget`, summaries.lastMonth)}
        {renderSection("Year to Date (YTD)", summaries.ytd)}
        {renderSection("Last 365 Days", summaries.last365)}
      </div>
      {/*  <div className="graphs">
        <img className="view-graph-img" src={view_graph} alt="View Graph" />
        <h3 className="graph-title">View Graph</h3>
      </div> */}
    </div>
  );
};

export default SummariesChart;
