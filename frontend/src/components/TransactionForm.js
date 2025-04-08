import React, { useState } from "react";
import "../assets/styles/transactionform.css"; // Assuming this is where login-form styles live

const TransactionForm = ({ userID, onAddTransaction }) => {
  const [formData, setFormData] = useState({
    transactionType: "Income",
    amount: "",
    dateHelper: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.amount && formData.dateHelper && formData.category && formData.description) {
      const transaction = {
        ...formData,
        userID: userID,
        amount: parseFloat(formData.amount),
      };
      onAddTransaction(transaction);
      setFormData({
        transactionType: "Income",
        amount: "",
        dateHelper: "",
        category: "",
        description: "",
      });
    }
  };

  return (
    <div className="transaction-container">
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <label htmlFor="transactionType">Type</label>
      <select
        id="transactionType"
        name="transactionType"
        value={formData.transactionType}
        onChange={handleChange}
        className="transaction-form-input"
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />

      <label htmlFor="dateHelper">Date</label>
      <input
        type="date"
        name="dateHelper"
        id="dateHelper"
        value={formData.dateHelper}
        onChange={handleChange}
        required
      />

      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        id="category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Transaction</button>
    </form>
    </div>
  );
};

export default TransactionForm;