import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "../LoginForm";
import { getUserList, getUser } from "../../api/userApi";
import {TestRouter} from "../../test-utils";

// Mock API
jest.mock("../../api/userApi", () => ({
  getUserList: jest.fn(),
  getUser: jest.fn(),
}));

describe("LoginForm", () => {
  const mockUser = {
    userID: 1,
    name: "John Doe",
    email: "john@example.com",
  };

  beforeEach(() => {
    getUserList.mockResolvedValue({ data: [mockUser] });
    getUser.mockResolvedValue({ data: mockUser });
  });

  it("renders form inputs and login button", () => {
    render(
      <TestRouter>
        <LoginForm />
      </TestRouter>
    );

    expect(screen.getByText(/account login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  });

  it("submits form and triggers navigation on successful login", async () => {
    render(
      <TestRouter>
        <LoginForm />
      </TestRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/enter your name/i), {
      target: { value: "John Doe", name: "name" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: "john@example.com", name: "email" },
    });

    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(getUserList).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(getUser).toHaveBeenCalledWith(mockUser.userID);
    });
  });

  it("shows error message when user is not found", async () => {
    getUserList.mockResolvedValueOnce({ data: [] });

    render(
      <TestRouter>
        <LoginForm />
      </TestRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/enter your name/i), {
      target: { value: "Jane", name: "name" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: "wrong@example.com", name: "email" },
    });

    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.getByText(/invalid name or email/i)).toBeInTheDocument();
    });
  });
});

