// src/pages/__tests__/GetStarted.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import GetStarted from "../GetStarted";
import { TestRouter } from "../../test-utils";

jest.mock("../../components/NavBar", () => () => <nav>Mock NavBar</nav>);
jest.mock("../../components/GetStartedForm", () => () => <form>Mock GetStartedForm</form>);

describe("GetStarted Page", () => {
  it("renders NavBar and GetStartedForm", () => {
    render(
      <TestRouter>
        <GetStarted />
      </TestRouter>
    );

    expect(screen.getByText("Mock NavBar")).toBeInTheDocument();
    expect(screen.getByText("Mock GetStartedForm")).toBeInTheDocument();
  });
});
