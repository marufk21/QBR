

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [empId, setEmpId] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (empId) navigate(`/dashboard/${empId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
        className="p-2 border rounded"
      />
      <button onClick={handleLogin} className="mt-2 p-2 bg-blue-500 text-white">
        Login
      </button>
    </div>
  );
};

export default Login;
