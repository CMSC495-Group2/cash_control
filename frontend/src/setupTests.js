// src/setupTests.js
import '@testing-library/jest-dom';

let originalConsoleError;
let originalConsoleWarn;

beforeAll(() => {
  // Suppress React Router future flag warnings
  originalConsoleError = jest.spyOn(console, "error").mockImplementation(() => {});
  originalConsoleWarn = jest.spyOn(console, "warn").mockImplementation((msg, ...args) => {
    if (
      typeof msg === "string" &&
      msg.includes("No routes matched location")
    ) {
      return; // ignore this specific warning
    }
    // fallback to original console.warn for other messages
    if (originalConsoleWarn) {
      originalConsoleWarn.mock.calls.length === 0 && console.log(msg, ...args);
    }
  });
});

afterAll(() => {
  originalConsoleError.mockRestore();
  originalConsoleWarn.mockRestore();
});
