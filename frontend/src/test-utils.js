import React from "react";
import { MemoryRouter } from "react-router-dom";

export function TestRouter({ children }) {
  return (
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {children}
    </MemoryRouter>
  );
}