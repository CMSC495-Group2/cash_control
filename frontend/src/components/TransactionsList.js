import React from "react";
export function TransactionsList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2>Recent Transactions</h2>
      <ul className="transactions-list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <strong>Date:</strong> {transaction.date}
            <br />
            <strong>Description:</strong> {transaction.description}
            <br />
            <strong>Amount:</strong> ${transaction.amount.toFixed(2)}
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
