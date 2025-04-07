// src/setupTests.js
import '@testing-library/jest-dom';

beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });
  
  afterAll(() => {
    console.error.mockRestore();
  });