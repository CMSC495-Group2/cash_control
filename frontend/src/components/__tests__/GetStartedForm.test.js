import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GetStartedForm from "../GetStartedForm";
import { createUser } from "../../api/userApi";
import { TestRouter } from "../../test-utils";

jest.mock("../../api/userApi", () => ({
  createUser: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("GetStartedForm", () => {
  it("renders input fields and button", () => {
    render(
      <TestRouter>
        <GetStartedForm />
      </TestRouter>
    );

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /create account/i })
    ).toBeInTheDocument();
  });

  it("submits the form and navigates on success", async () => {
    createUser.mockResolvedValue({
      data: { name: "Test User", userID: 123 },
    });

    window.alert = jest.fn();

    render(
      <TestRouter>
        <GetStartedForm />
      </TestRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /create account/i }));

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith({
        name: "Test User",
        email: "test@example.com",
      });
    });

    expect(window.alert).toHaveBeenCalledWith("Welcome, Test User!");
    expect(mockNavigate).toHaveBeenCalledWith("/user-portal/123");
  });

  it("shows alert on error", async () => {
    createUser.mockRejectedValueOnce(new Error("Server error"));
    window.alert = jest.fn();

    render(
      <TestRouter>
        <GetStartedForm />
      </TestRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /create account/i }));

    await waitFor(() =>
      expect(window.alert).toHaveBeenCalledWith(
        "Something went wrong. Please try again."
      )
    );
  });
});