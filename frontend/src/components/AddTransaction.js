import React from "react";

const AddTransaction = ({ newTransaction, handleChange, addTransaction }) => {
  return (
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
  );
};

export default AddTransaction;
