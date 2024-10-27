import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [empId, setEmpId] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (empId) navigate(`/dashboard/${empId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Employee Dashboard</h2>
        <input
          type="text"
          placeholder="Enter Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          className="w-full p-3 border text-base border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button 
          onClick={handleLogin} 
          className="w-full p-3 bg-orange-500 text-slate-900 text-lg rounded-3xl hover:bg-orange-600 transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
