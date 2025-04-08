import React from "react";
import { render, screen } from "@testing-library/react";
import UserPortal from "../UserPortal";
import { TestRouter } from "../../test-utils";

// Mock components
jest.mock("../../components/NavBar", () => () => <nav>Mock NavBar</nav>);
jest.mock("../../components/TabSelector", () => ({
  TabSelector: () => <aside>Mock TabSelector</aside>,
}));
jest.mock("../../components/SummariesChart", () => () => (
  <div>Mock SummariesChart</div>
));
jest.mock("../../components/TransactionsList", () => ({
  TransactionsList: () => <div>Mock TransactionsList</div>,
}));
jest.mock("../../components/TransactionForm", () => () => (
  <form>Mock TransactionForm</form>
));

// Mock APIs
jest.mock("../../api/userApi", () => ({
  getUser: jest.fn(() =>
    Promise.resolve({ data: { userID: 1, name: "Test User" } })
  ),
}));
jest.mock("../../api/transactionApi", () => ({
  getTransactionsList: jest.fn(() => Promise.resolve({ data: [] })),
  createTransaction: jest.fn(),
  deleteTransactionById: jest.fn(),
}));

describe("UserPortal Page", () => {
  it("renders loading initially and loads user content", async () => {
    render(
      <TestRouter initialEntries={["/user-portal/1"]} path="/user-portal/:id">
        <UserPortal />
      </TestRouter>
    );

    // Initial loading text
    expect(screen.getByText(/Loading user/i)).toBeInTheDocument();

    // Wait for async render of mocked components using findByText
    expect(await screen.findByText("Mock NavBar")).toBeInTheDocument();
    expect(await screen.findByText("Mock TabSelector")).toBeInTheDocument();
  });
});