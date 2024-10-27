import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title);

const PerformanceGraph = ({ data }) => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Performance",
        data: data,
        backgroundColor: "rgba(255, 182, 193, 0.5)", 
        borderColor: "rgba(255, 99, 71, 0.8)",       
        borderWidth: 4,
      },
    ],
  };

  console.log("Chart Data:", chartData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Performance',
      },
    },
  };

  return (
    <div style={{ height: "300%", width: "100%" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default PerformanceGraph;
