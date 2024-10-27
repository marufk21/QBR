import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MonthlyDataEntry from "./components/MonthlyDataEntry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/monthly-entry" element={<MonthlyDataEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
