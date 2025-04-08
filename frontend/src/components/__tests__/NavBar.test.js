import React from "react";
import { render, screen } from "@testing-library/react";
import { TestRouter } from "../../test-utils";
import NavBar from "../NavBar";

test("renders NavBar", () => {
  render(
    <TestRouter>
      <NavBar />
    </TestRouter>
  );

  expect(screen.getByRole("navigation")).toBeInTheDocument();
});