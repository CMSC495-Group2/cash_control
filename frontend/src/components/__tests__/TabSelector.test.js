// src/components/__tests__/TabSelector.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TabSelector } from "../TabSelector";

describe("TabSelector", () => {
  const mockSetActiveTab = jest.fn();
  const username = "Jeremy";

  beforeEach(() => {
    mockSetActiveTab.mockClear();
  });

  it("renders the welcome message with the username", () => {
    render(<TabSelector activeTab="summaries-chart" setActiveTab={mockSetActiveTab} username={username} />);
    expect(screen.getByText(`Welcome ${username}!`)).toBeInTheDocument();
  });

  it("applies 'active' class to the correct tab", () => {
    render(<TabSelector activeTab="transactions-list" setActiveTab={mockSetActiveTab} username={username} />);
    const activeTab = screen.getByText(/Transactions/i);
    expect(activeTab).toHaveClass("active");
  });

  it("calls setActiveTab with the correct key when a tab is clicked", () => {
    render(<TabSelector activeTab="summaries-chart" setActiveTab={mockSetActiveTab} username={username} />);

    const transactionsTab = screen.getByText(/Transactions/i);
    fireEvent.click(transactionsTab);
    expect(mockSetActiveTab).toHaveBeenCalledWith("transactions-list");

    const newTxTab = screen.getByText(/New Transaction/i);
    fireEvent.click(newTxTab);
    expect(mockSetActiveTab).toHaveBeenCalledWith("transaction-container");
  });
});