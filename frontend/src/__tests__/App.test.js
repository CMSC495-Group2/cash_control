import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";


// MOCK ALL ROUTED COMPONENTS BEFORE importing App
jest.mock("../pages/Home", () => () => <div>Mock Home</div>);
jest.mock("../pages/Features", () => () => <div>Mock Features</div>);
jest.mock("../pages/GetStarted", () => () => <div>Mock GetStarted</div>);
jest.mock("../pages/Login", () => () => <div>Mock Login</div>);
jest.mock("../pages/UserPortal", () => () => <div>Mock UserPortal</div>);

// Use require() to load the App after mocks

const App = require("../App").default;

describe("App Routing", () => {
  it("renders Home component at /", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText("Mock Home")).toBeInTheDocument();
  });

  it("renders Features component at /features", async () => {
    render(
      <MemoryRouter initialEntries={["/features"]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText("Mock Features")).toBeInTheDocument();
  });

  it("renders GetStarted component at /get-started", async () => {
    render(
      <MemoryRouter initialEntries={["/get-started"]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText("Mock GetStarted")).toBeInTheDocument();
  });

  it("renders Login component at /login", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText("Mock Login")).toBeInTheDocument();
  });

  it("renders UserPortal component at /user-portal/:id", async () => {
    render(
      <MemoryRouter initialEntries={["/user-portal/1"]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText("Mock UserPortal")).toBeInTheDocument();
  });

  it("redirects unknown route to Home", async () => {
    render(
      <MemoryRouter initialEntries={["/unknown-route"]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText("Mock Home")).toBeInTheDocument();
  });
});