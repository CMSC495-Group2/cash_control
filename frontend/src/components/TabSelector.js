import React from "react";

export function TabSelector({
  activeTab,
  setActiveTab,
  username,
  onOpenModal,
}) {
  return (
    <aside className="tab-selector">
      <header>Welcome, {username}!</header>
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
      </ul>
      <div className="modal-button-container">
        <button className="add-transaction-btn" onClick={onOpenModal}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </aside>
  );
}
