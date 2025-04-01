import React from "react";

export function TabSelector({ activeTab, setActiveTab }) {
  return (
    <aside className="sidebar">
      <button
        className={activeTab === "summary" ? "active" : ""}
        onClick={() => setActiveTab("summary")}
      >
        Budget Summary
      </button>
      <button
        className={activeTab === "transactions" ? "active" : ""}
        onClick={() => setActiveTab("transactions")}
      >
        Add New Transaction
      </button>
      <button
        className={activeTab === "addTransaction" ? "active" : ""}
        onClick={() => setActiveTab("addTransaction")}
      >
        Transactions
      </button>
    </aside>
  );
}
