
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { TestRouter } from "../../test-utils";

// Mock NavBar to isolate the Home component test
jest.mock("../../components/NavBar", () => () => <nav>Mock NavBar</nav>);

describe("Home Page", () => {
  it("renders NavBar and hero section content", () => {
    render(
      <TestRouter>
        <Home />
      </TestRouter>
    );

    expect(screen.getByText("Mock NavBar")).toBeInTheDocument();
    expect(screen.getByAltText("Cash Control Hero")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Take Control of Your Budget/i })).toBeInTheDocument();
    expect(screen.getByText(/manage your finances/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get Started!/i })).toBeInTheDocument();
  });
});