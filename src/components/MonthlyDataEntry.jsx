import React, { useState } from "react";

const MonthlyDataEntry = () => {
  const [progress, setProgress] = useState("");

  const handleSubmit = () => {
    console.log("Data submitted:", progress);
    setProgress("");
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Monthly Data Entry</h2>
      <label htmlFor="progress-input" className="block text-gray-700 text-lg font-medium mb-2">
        Enter Progress
      </label>
      <input
        id="progress-input"
        type="text"
        placeholder="e.g., 75% completion"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 w-full p-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition duration-150"
      >
        Submit
      </button>
    </div>
  );
};

export default MonthlyDataEntry;
