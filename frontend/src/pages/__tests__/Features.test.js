// src/pages/__tests__/Features.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Features from "../Features";
import { TestRouter } from "../../test-utils";

jest.mock("../../components/NavBar", () => () => <nav>Mock NavBar</nav>);
jest.mock("../../components/FeatureCard", () => ({ title }) => <div>{title}</div>);

describe("Features Page", () => {
  it("renders the heading and call-to-action", () => {
    render(
      <TestRouter>
        <Features />
      </TestRouter>
    );

    expect(screen.getByText("Explore Our Features")).toBeInTheDocument();
    expect(screen.getByText("Take Control of Your Budget")).toBeInTheDocument();
    expect(screen.getByText(/manage your finances/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get started!/i })).toBeInTheDocument();
  });

  it("renders all feature cards", () => {
    const expectedTitles = [
      "Track Income & Expenses",
      "Filter by Date & Type",
      "Local Data Storage",
      "Simple Financial Summaries"
    ];

    render(
      <TestRouter>
        <Features />
      </TestRouter>
    );

    expectedTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});