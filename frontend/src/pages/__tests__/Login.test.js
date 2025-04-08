import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../Login";
import { TestRouter } from "../../test-utils";

// Mock components used in Login page
jest.mock("../../components/NavBar", () => () => <nav>Mock NavBar</nav>);
jest.mock("../../components/LoginForm", () => () => <form>Mock LoginForm</form>);
jest.mock("../../components/LoginImage", () => () => <div>Mock LoginImage</div>);

describe("Login Page", () => {
  it("renders NavBar, LoginImage, and LoginForm", () => {
    render(
      <TestRouter>
        <Login />
      </TestRouter>
    );

    expect(screen.getByText("Mock NavBar")).toBeInTheDocument();
    expect(screen.getByText("Mock LoginImage")).toBeInTheDocument();
    expect(screen.getByText("Mock LoginForm")).toBeInTheDocument();
  });
});