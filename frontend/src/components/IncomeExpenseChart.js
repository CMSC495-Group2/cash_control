import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
//Registering the chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);
const IncomeExpenseChart = ({ summaries, getLastMonthName }) => {
  const getChartData = () => {
    return {
      labels: ["Last 30 Days", `${getLastMonthName()}`, "YTD", "Last 365 Days"],
      datasets: [
        {
          label: "Income",
          data: [
            summaries.current30.income,
            summaries.lastMonth.income,
            summaries.ytd.income,
            summaries.last365.income,
          ],
          backgroundColor: "rgba(55, 76, 89, 0.9)",
          borderColor: "rgba(55, 76, 89, 0.9)",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Expenses",
          data: [
            summaries.current30.expenses,
            summaries.lastMonth.expenses,
            summaries.ytd.expenses,
            summaries.last365.expenses,
          ],
          backgroundColor: "rgba(132, 228, 168, 0.9)",
          borderColor: "rgba(132, 228, 168, 0.9)",
          fill: false,
          tension: 0.4,
        },
      ],
    };
  };

  const getChartOptions = (title) => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#374c59",
            font: {
              family: "'Spinnaker', sans-serif",
              size: 14,
              weight: "500",
            },
          },
        },
        title: {
          color: "#374c59",
          display: true,
          text: title,
          font: {
            family: "'Spinnaker', sans-serif",
            size: 28,
            weight: "bold",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#374c59",
            font: {
              family: "'Spinnaker', sans-serif",
              size: 12,
            },
          },
        },
        y: {
          ticks: {
            color: "#374c59",
            font: {
              family: "'Spinnaker', sans-serif",
              size: 12,
            },
          },
        },
      },
    };
  };

  return (
    <div className="chart-container">
      <div className="bar-container">
        <Bar
          data={getChartData()}
          options={getChartOptions("Income Vs. Expenses")}
        />
      </div>
      <div className="line-container">
        <Line data={getChartData()} options={getChartOptions("Live Trend")} />
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
