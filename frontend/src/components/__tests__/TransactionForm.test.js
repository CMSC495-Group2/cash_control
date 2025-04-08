// src/components/__tests__/TransactionForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TransactionForm from "../TransactionForm";

describe("TransactionForm", () => {
  const mockOnAddTransaction = jest.fn();
  const mockUserID = 123;

  beforeEach(() => {
    mockOnAddTransaction.mockClear();
  });

  it("renders all form fields", () => {
    render(<TransactionForm userID={mockUserID} onAddTransaction={mockOnAddTransaction} />);
    
    expect(screen.getByLabelText(/Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Add Transaction/i })).toBeInTheDocument();
  });

  it("submits the form with correct data", () => {
    render(<TransactionForm userID={mockUserID} onAddTransaction={mockOnAddTransaction} />);

    fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: "250" } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2024-04-01" } });
    fireEvent.change(screen.getByLabelText(/Category/i), { target: { value: "Groceries" } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: "Weekly food run" } });

    fireEvent.click(screen.getByRole("button", { name: /Add Transaction/i }));

    expect(mockOnAddTransaction).toHaveBeenCalledWith({
      transactionType: "Income",
      amount: 250,
      dateHelper: "2024-04-01",
      category: "Groceries",
      description: "Weekly food run",
      userID: mockUserID
    });
  });

  it("does not submit if required fields are missing", () => {
    render(<TransactionForm userID={mockUserID} onAddTransaction={mockOnAddTransaction} />);
    fireEvent.click(screen.getByRole("button", { name: /Add Transaction/i }));
    expect(mockOnAddTransaction).not.toHaveBeenCalled();
  });
});