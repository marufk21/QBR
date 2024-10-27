import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEmployee } from "../data/mockApi";
import PerformanceGraph from "./PerformanceGraph";

const Dashboard = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [selectedTask, setSelectedTask] = useState("Present Goals");

  useEffect(() => {
    const employeeData = fetchEmployee(id);
    setEmployee(employeeData);
  }, [id]);

  const handleTaskChange = (event) => {
    setSelectedTask(event.target.value);
  };

  if (!employee) return <div>Employee not found</div>;

  const performanceData = employee.data[selectedTask] || [];

  return (
    <div className="p-4">
      <h1>Welcome, {employee.employeeName}</h1>

      <label htmlFor="task-select">Select a task:</label>
      <select id="task-select" value={selectedTask} onChange={handleTaskChange}>
        <option value="Present Goals">Present Goals</option>
        <option value="Future Goals">Future Goals</option>
        <option value="Tasks Cleared">Tasks Cleared</option>
        <option value="Changes in Plans">Changes in Plans</option>
        <option value="Graph Performance">Graph Performance</option>
        <option value="Team Performance">Team Performance</option>
        <option value="Attendance">Attendance</option>
      </select>

      <PerformanceGraph data={performanceData} />
    </div>
  );
};

export default Dashboard;
