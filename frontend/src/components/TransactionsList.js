import React from "react";
import "../assets/styles/transactionslist.css";

export function TransactionsList({ transactions, deleteTransaction }) {
  const runningBalance = transactions.reduce((total, tx) => total + tx.amount, 0);

  return (
    <div className="transactions-wrapper">
      <h2>Recent Transactions</h2>
      <p className="balance">
        Running Balance: ${runningBalance.toFixed(2)}
      </p>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
              <td>
                {transaction.amount < 0
                  ? `-$${Math.abs(transaction.amount).toFixed(2)}`
                  : `$${transaction.amount.toFixed(2)}`}
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteTransaction(transaction.transactionID)}}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 

export default TransactionsList;
