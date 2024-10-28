import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEmployee } from "../data/mockApi";
import PerformanceGraph from "./PerformanceGraph";

const Dashboard = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [selectedTask, setSelectedTask] = useState("Attendence");

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
      
        {/* Graph Visualisation Data */}
        {["Attendence", "Performance Graph"].includes(selectedTask) && (
          <PerformanceGraph data={performanceData} className="w-full h-80 md:h-96 lg:h-[500px]" />
        )}

        {/* Paragraph Visualisation Data */}
        {performanceData?.title && (
          <h2 className="text-3xl md:text-3xl font-semibold text-black mb-4 text-center leading-snug transition-all duration-300 hover:text-coral">
            {performanceData.title}
          </h2>
        )}

        {performanceData?.content && (
          <p className="text-black text-lg md:text-xl leading-relaxed mb-8 text-justify md:text-center tracking-wide bg-dark-coral rounded-lg shadow-md p-6 border-2 border-soft-coral hover:bg-coral transition-colors duration-300">
            {performanceData.content}
          </p>
        )}

        {performanceData?.tasks && (
          <div className="bg-dark-coral rounded-lg p-6 mt-8 shadow-lg transition-colors duration-300 border-2 border-soft-coral">
            <h3 className="text-2xl font-semibold text-black mb-6 text-left">
              Task List
            </h3>
            <ul className="list-disc list-inside space-y-3 text-black text-lg leading-relaxed">
              {performanceData.tasks.map((task, index) => (
                <li key={index} className="pl-1 transform transition-transform duration-200 hover:translate-x-2">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
