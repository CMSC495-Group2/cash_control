import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

const UserPortal = () => {
  // Load initial transactions from localStorage or set default ones
  const initialTransactions = JSON.parse(
    localStorage.getItem("transactions")
  ) || [
    { id: 1, date: "2025-03-20", description: "Grocery Shopping", amount: -50 },
    { id: 2, date: "2025-03-18", description: "Salary", amount: 500 },
    { id: 3, date: "2025-03-15", description: "Electric Bill", amount: -75 },
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    amount: "",
  });

  useEffect(() => {
    // Save transactions to localStorage whenever they change
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const addTransaction = () => {
    if (
      newTransaction.date &&
      newTransaction.description &&
      newTransaction.amount
    ) {
      setTransactions([
        ...transactions,
        {
          ...newTransaction,
          id: transactions.length + 1,
          amount: parseFloat(newTransaction.amount),
        },
      ]);
      setNewTransaction({ date: "", description: "", amount: "" });
    }
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
    
    <NavBar/>
    <div className="user-portal">
      <h1>Welcome to Your Budget Tracker</h1>
      <div className="budget-summary">
        <h2>Budget Summary</h2>
        <p>
          <strong>Total Balance:</strong> ${balance.toFixed(2)}
        </p>
      </div>

      <div className="add-transaction">
        <h2>Add New Transaction</h2>
        <input
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="description"
          value={newTransaction.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>

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
    </div>
    </>
  );
};

export default UserPortal;
