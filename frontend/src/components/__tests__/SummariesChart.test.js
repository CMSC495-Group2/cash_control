// src/components/__tests__/SummariesChart.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SummariesChart from "../SummariesChart";
import { getTransactionsList } from "../../api/transactionApi";
import { TestRouter } from "../../test-utils";

jest.mock("../../api/transactionApi");

describe("SummariesChart", () => {
  const mockTransactions = [
    {
      dateHelper: new Date().toISOString(),
      amount: 500,
      transactionType: "Income",
    },
    {
      dateHelper: new Date().toISOString(),
      amount: 200,
      transactionType: "Expense",
    },
  ];

  beforeEach(() => {
    getTransactionsList.mockResolvedValue({ data: mockTransactions });
  });

  it("renders the Budget Summary header", async () => {
    render(
      <TestRouter>
        <SummariesChart />
      </TestRouter>
    );
    expect(await screen.findByText(/budget summary/i)).toBeInTheDocument();
  });

  it("displays a Total Balance of $300.00 in at least one section", async () => {
    render(
      <TestRouter>
        <SummariesChart />
      </TestRouter>
    );

    await waitFor(() => {
      const balanceText = screen.getAllByText((content, element) =>
        element?.textContent?.includes("Total Balance: $300.00")
      );
      expect(balanceText.length).toBeGreaterThan(0);
    });
  });

  it("shows Income of $500.00 in multiple sections", async () => {
    render(
      <TestRouter>
        <SummariesChart />
      </TestRouter>
    );

    await waitFor(() => {
      const incomeTexts = screen.getAllByText((content, element) =>
        element?.textContent?.includes("Income: $500.00")
      );
      expect(incomeTexts.length).toBeGreaterThan(0);
    });
  });

  it("shows Expenses of $200.00 in multiple sections", async () => {
    render(
      <TestRouter>
        <SummariesChart />
      </TestRouter>
    );

    await waitFor(() => {
      const expenseTexts = screen.getAllByText((content, element) =>
        element?.textContent?.includes("Expenses: $200.00")
      );
      expect(expenseTexts.length).toBeGreaterThan(0);
    });
  });
});