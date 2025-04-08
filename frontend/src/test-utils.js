import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export function TestRouter({ children, initialEntries = ["/"], path = "/" }) {
  return (
    <MemoryRouter initialEntries={initialEntries} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path={path} element={children} />
      </Routes>
    </MemoryRouter>
  );
}