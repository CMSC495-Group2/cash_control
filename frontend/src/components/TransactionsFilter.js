import React, { useState } from "react";

// Transaction filter to be applied to TransactionsList

const TransactionsFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    date: "",
    startDate: "",
    endDate: "",
    type: "",
    category: "",
    minAmount: "",
    maxAmount: "",
    amount: "",
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
    // Filter out empty values from the filters object
    const activeFilters = {};
    for (const key in filters) {
      if (filters[key]) {
        activeFilters[key] = filters[key];
      }
    }
    // Pass the cleaned filters to the parent
    onFilter(activeFilters);
  };
  const handleReset = () => {
    setFilters({
      date: "",
      startDate: "",
      endDate: "",
      type: "",
      category: "",
      minAmount: "",
      maxAmount: "",
      amount: "",
      keyword: "",
    });
    onFilter({});
  };

  return (
    <div className="transactions-filter">
      <form onSubmit={handleSubmit}>
        <div className="filter-row">
          <div className="filter-group">
            <label>Specific Date:</label>

            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleChange}
            />
          </div>

          <div className="filter-group">
            <label>Date Range:</label>

            <div className="date-range">
              <input
                type="date"
                name="startDate"
                value={filters.startDate}
                onChange={handleChange}
                placeholder="Start"
              />

              <span>to</span>

              <input
                type="date"
                name="endDate"
                value={filters.endDate}
                onChange={handleChange}
                placeholder="End"
              />
            </div>
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label>Type:</label>

            <select name="type" value={filters.type} onChange={handleChange}>
              <option value="">All</option>

              <option value="income">Income</option>

              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Category:</label>

            <input
              type="text"
              name="category"
              value={filters.category}
              onChange={handleChange}
              placeholder="Category"
            />
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label>Amount Range:</label>

            <div className="amount-range">
              <input
                type="number"
                name="minAmount"
                value={filters.minAmount}
                onChange={handleChange}
                placeholder="Min"
                min="0"
                step="0.01"
              />

              <span>to</span>

              <input
                type="number"
                name="maxAmount"
                value={filters.maxAmount}
                onChange={handleChange}
                placeholder="Max"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="filter-group">
            <label>Exact Amount:</label>

            <input
              type="number"
              name="amount"
              value={filters.amount}
              onChange={handleChange}
              placeholder="Amount"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group full-width">
            <label>Keyword Search:</label>

            <input
              type="text"
              name="keyword"
              value={filters.keyword}
              onChange={handleChange}
              placeholder="Search descriptions..."
            />
          </div>
        </div>

        <div className="filter-actions">
          <button type="submit" className="apply-btn">
            Apply Filters
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
