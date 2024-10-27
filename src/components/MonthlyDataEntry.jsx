import React, { useState } from "react";

const MonthlyDataEntry = () => {
  const [progress, setProgress] = useState("");

  const handleSubmit = () => {
    console.log("Data submitted:", progress);
    setProgress("");
  };

  return (
    <div className="p-4">
      <h2>Monthly Data Entry</h2>
      <input
        type="text"
        placeholder="Enter progress"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <button onClick={handleSubmit} className="mt-2 p-2 bg-green-500 text-white">
        Submit
      </button>
    </div>
  );
};

export default MonthlyDataEntry;
