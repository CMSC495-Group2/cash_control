import React from "react";
import { render, screen } from "@testing-library/react";
import LoginImage from "../LoginImage";
import { TestRouter } from "../../test-utils";

describe("LoginImage", () => {
  it("renders the image with correct alt text", () => {
    render(
      <TestRouter>
        <LoginImage />
      </TestRouter>
    );

    const img = screen.getByRole("img", { name: /login-pic/i });
    expect(img).toBeInTheDocument();
  });
});