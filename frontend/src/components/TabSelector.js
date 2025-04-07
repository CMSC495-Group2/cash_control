import React from "react";

export function TabSelector({ activeTab, setActiveTab, username }) {
  return (
    <aside className="tab-selector">
      <header>Welcome {username}!</header>
      <ul className="tabs">
        <li
          className={activeTab === "summaries-chart" ? "active" : ""}
          onClick={() => setActiveTab("summaries-chart")}
        >
          <i className="fas fa-file-invoice-dollar"></i> &nbsp; Budget Summary
        </li>
        <li
          className={activeTab === "transactions-list" ? "active" : ""}
          onClick={() => setActiveTab("transactions-list")}
        >
          <i className="fa fa-receipt"></i> &nbsp; Transactions
        </li>
        <li
          className={activeTab === "transaction-container" ? "active" : ""}
          onClick={() => setActiveTab("transaction-container")}
        >
          <i className="fa fa-plus"></i> &nbsp; New Transaction
        </li>
        <li>Another</li>
        <li>And Another one</li>
      </ul>
    </aside>
  );
}
