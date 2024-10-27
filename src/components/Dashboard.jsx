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

  if (!employee) return <div className="p-4 text-center">Employee not found</div>;

  const performanceData = employee.data[selectedTask] || [];

  return (
    <div className="flex flex-col items-center p-4 bg-gray-200 min-h-screen">
      <h1 className="text-gray-700 text-3xl font-bold mb-4 mt-10">Welcome, {employee.employeeName}</h1>

      <div className="flex items-center mb-6">
        <label htmlFor="task-select" className="mr-4 text-lg font-medium text-gray-700">
          Select a task:
        </label>
        <select
          id="task-select"
          value={selectedTask}
          onChange={handleTaskChange}
          className="p-1 bg-gray-200 border border-soft-coral rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-soft-coral transition duration-150 ease-in-out w-44"
        >
          <option className="bg-gray-200" value="Present Goals">Present Goals</option>
          <option className="bg-gray-200" value="Future Goals">Future Goals</option>
          <option className="bg-gray-200" value="Tasks Cleared">Tasks Cleared</option>
          <option className="bg-gray-200" value="Changes in Plans">Changes in Plans</option>
          <option className="bg-gray-200" value="Graph Performance">Graph Performance</option>
          <option className="bg-gray-200" value="Team Performance">Team Performance</option>
          <option className="bg-gray-200" value="Attendance">Attendance</option>
        </select>
      </div>

      <div className="w-full max-w-2xl mx-auto my-4">
        <PerformanceGraph data={performanceData} className="w-full h-64 md:h-80 lg:h-96" />
      </div>

    </div>
  );
};

export default Dashboard;
