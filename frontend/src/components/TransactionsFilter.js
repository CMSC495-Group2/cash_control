import React, { useState } from "react";
// Transaction filter to be applied to TransactionsList
const TransactionsFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    date: "",
    // startDate: "",
    // endDate: "",
    type: "",
    //category: "",
    // minAmount: "",
    // maxAmount: "",
    // amount: "",
    keyword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const activeFilters = {};
    for (const key in filters) {
      if (filters[key]) {
        activeFilters[key] = filters[key];
      }
    }
    onFilter(activeFilters);
  };

  const handleReset = () => {
    setFilters({
      date: "",
      //startDate: "",
      //endDate: "",
      type: "",
      //category: "",
      //minAmount: "",
      //maxAmount: "",
      //amount: "",
      keyword: "",
    });
    onFilter({});
  };

  return (
    <div className="transactions-filter">
      <form onSubmit={handleSubmit}>
        <div className="filter-row">
          <div className="filter-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label>Type</label>
            <select name="type" value={filters.type} onChange={handleChange}>
              <option value="">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group full-width">
            <label>Keyword Search</label>
            <input
              type="text"
              name="keyword"
              value={filters.keyword}
              onChange={handleChange}
              placeholder="Enter a description..."
            />
          </div>
        </div>

        <div className="filter-actions">
          <button type="submit" className="apply-btn">
            Apply Filter
          </button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionsFilter;
