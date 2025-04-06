import React from "react";

export function TransactionsList({ transactions, deleteTransaction }) {
  const runningBalance = transactions.reduce((total, tx) => total + tx.amount, 0);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '10px' }}>Recent Transactions</h2>
      <p style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Running Balance: ${runningBalance.toFixed(2)}
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid black' }}>
            <th style={cellStyle}>Date</th>
            <th style={cellStyle}>Type</th>
            <th style={cellStyle}>Category</th>
            <th style={cellStyle}>Description</th>
            <th style={cellStyle}>Amount</th>
            <th style={cellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} style={{ textAlign: 'center' }}>
              <td style={cellStyle}>{transaction.date}</td>
              <td style={cellStyle}>{transaction.type}</td>
              <td style={cellStyle}>{transaction.category}</td>
              <td style={cellStyle}>{transaction.description}</td>
              <td style={cellStyle}>
                {transaction.amount < 0
                  ? `-$${Math.abs(transaction.amount).toFixed(2)}`
                  : `$${transaction.amount.toFixed(2)}`}
              </td>
              <td style={cellStyle}>
                <button
                  onClick={() => deleteTransaction(transaction.id)}
                  style={deleteButton}
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

const cellStyle = {
  padding: '8px',
  borderBottom: '1px solid #ccc',
};

const deleteButton = {
  background: 'none',
  color: '#c62828',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
};
