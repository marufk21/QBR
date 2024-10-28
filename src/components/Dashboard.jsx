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

  const performanceData = employee.data[selectedTask];

  return (
    <div className="flex flex-col items-center p-4 bg-gray-200 min-h-screen">
      <h1 className="text-gray-700 text-3xl font-bold mb-4 mt-10">Welcome, {employee.employeeName}</h1>

      {/* Dropdown for Task Selection */}
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
          {Object.keys(employee.data).map((key) => (
            <option key={key} value={key} className="bg-gray-200">
              {key}
            </option>
          ))}
        </select>
      </div>


      {/* Display Task Content */}
      <div className="w-full max-w-4xl mx-auto my-4">
        {performanceData && performanceData.title && (
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{performanceData.title}</h2>
        )}
        {performanceData && performanceData.content && (
          <p className="text-gray-700 mb-4">{performanceData.content}</p>
        )}
        {performanceData && performanceData.tasks && (
          <ul className="list-disc list-inside text-gray-700">
            {performanceData.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}

        

        {/* Display Graph for "Graph Performance" and "Attendance" */}
        {[ "Attendance", "Performance Graph"].includes(selectedTask) && (
          <PerformanceGraph data={performanceData} className="w-full h-80 md:h-96 lg:h-[500px]" />
        )}


      </div>
    </div>
  );
};

export default Dashboard;
