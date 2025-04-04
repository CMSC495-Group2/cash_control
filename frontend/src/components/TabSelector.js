import React from "react";

export function TabSelector({ activeTab, setActiveTab }) {
  return (
    <aside className="sidebar">
      <header> User Portal</header>
      <ul className="nav nav-tabs">
        <li
          className={activeTab === "summary" ? "active" : ""}
          onClick={() => setActiveTab("summary")}
        >
          Budget Summary
        </li>
        <li
          className={activeTab === "addTransaction" ? "active" : ""}
          onClick={() => setActiveTab("addTransaction")}
        >
          Transactions
        </li>
        <li
          className={activeTab === "transactions" ? "active" : ""}
          onClick={() => setActiveTab("transactions")}
        >
          Add New +
        </li>
        <li>Something Else Here</li>
        <li>Another</li>
        <li>And Another one</li>
      </ul>
    </aside>
  );
}
