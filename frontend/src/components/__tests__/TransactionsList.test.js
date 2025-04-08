import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TransactionsList from "../TransactionsList";

describe("TransactionsList", () => {
  const mockTransactions = [
    {
      id: 1,
      transactionID: 101,
      date: "2024-04-01",
      type: "Income",
      category: "Salary",
      description: "Monthly paycheck",
      amount: 3000,
    },
    {
      id: 2,
      transactionID: 102,
      date: "2024-04-02",
      type: "Expense",
      category: "Groceries",
      description: "Supermarket trip",
      amount: -150.75,
    },
  ];

  const mockDeleteTransaction = jest.fn();

  it("renders transaction rows", () => {
    render(
      <TransactionsList
        transactions={mockTransactions}
        deleteTransaction={mockDeleteTransaction}
      />
    );

    expect(screen.getByText("2024-04-01")).toBeInTheDocument();
    expect(screen.getByText("Monthly paycheck")).toBeInTheDocument();
    expect(screen.getByText("$3000.00")).toBeInTheDocument();

    expect(screen.getByText("2024-04-02")).toBeInTheDocument();
    expect(screen.getByText("Supermarket trip")).toBeInTheDocument();
    expect(screen.getByText("-$150.75")).toBeInTheDocument();
  });

  it("displays the correct running balance", () => {
    render(
      <TransactionsList
        transactions={mockTransactions}
        deleteTransaction={mockDeleteTransaction}
      />
    );

    const balanceText = screen.getByText(/Running Balance:/i);
    expect(balanceText).toHaveTextContent("Running Balance: $2849.25");
  });

  it("calls deleteTransaction when a delete button is clicked", () => {
    render(
      <TransactionsList
        transactions={mockTransactions}
        deleteTransaction={mockDeleteTransaction}
      />
    );

    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    fireEvent.click(deleteButtons[0]);
    expect(mockDeleteTransaction).toHaveBeenCalledWith(101);
  });
});