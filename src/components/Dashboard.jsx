import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEmployee } from "../data/mockApi"; // Ensure this function is implemented correctly
import PerformanceGraph from "./PerformanceGraph";

const Dashboard = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [selectedTask, setSelectedTask] = useState("present-goals"); // Initialize selectedTask

  useEffect(() => {
    const employeeData = fetchEmployee(id);
    setEmployee(employeeData);
  }, [id]);

  const handleTaskChange = (event) => {
    setSelectedTask(event.target.value); // Update selected task
  };

  if (!employee) return <div>Employee not found</div>;

  // Assuming employee.data is structured as in your previous example
  const performanceData = employee.data[selectedTask] || []; // Access based on task

  return (
    <div className="p-4">
      <h1>Welcome, {employee.employeeName}</h1>

      <label htmlFor="task-select">Select a task:</label>
      <select id="task-select" onChange={handleTaskChange}>
        <option value="present-goals">Present Goals</option>
        <option value="future-goals">Future Goals</option>
        <option value="tasks-cleared">Tasks Cleared</option>
        <option value="changes-in-plans">Changes in Plans</option>
        <option value="graph-performance">Graph Performance</option>
        <option value="team-performance">Team Performance</option>
        <option value="attendance">Attendance</option>
      </select>

      <PerformanceGraph data={performanceData} />
    </div>
  );
};

export default Dashboard;
