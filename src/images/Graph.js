import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Graph.css';

const Graph = ({ attendanceData }) => {
  const data = {
    labels: attendanceData.map((data) => data.subject),
    datasets: [
      {
        label: 'Attendance Percentage',
        data: attendanceData.map((data) => data.percentage),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="graph-container">
      <h3>Attendance Graph</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
