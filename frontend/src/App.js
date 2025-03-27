import "./index.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
