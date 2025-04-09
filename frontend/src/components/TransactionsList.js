import React from "react";

export function TransactionsList({
  transactions,
  deleteTransaction,
  filters = {},
}) {
  const filteredTransactions = transactions.filter((transaction) => {
    // Filter by specific date
    if (filters.date) {
      const transactionDate = new Date(transaction.dateHelper);
      const formattedDate = transactionDate.toISOString().split("T")[0];
      if (formattedDate !== filters.date) {
        return false;
      }
    }
    // Filter by date range  => to be implemented

    // Filter by Type
    if (filters.type) {
      if (!transaction.transactionType) {
        return false;
      }
      if (
        transaction.transactionType.toLowerCase() !== filters.type.toLowerCase()
      ) {
      }
    }

    // Filter by category => to be implemented
    // Filter by amount range=> to be implemented

    // Filter by keyword
    if (
      filters.keyword &&
      !transaction.description
        .toLowerCase()
        .includes(filters.keyword.toLowerCase())
    )
      return false;

    return true;
  });

  const runningBalance = filteredTransactions.reduce(
    (total, tx) => total + tx.amount,
    0
  );

  return (
    <div className="transactions-wrapper">
      <h2>Recent Transactions</h2>
      <p className="balance">Running Balance: ${runningBalance.toFixed(2)}</p>

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
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.dateHelper}</td>
              <td>{transaction.transactionType}</td>
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
                    console.log("Click for ID: ", transaction.transactionID);
                    deleteTransaction(transaction.transactionID);
                  }}
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
