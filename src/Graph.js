import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Graph.css';
import AttendanceTable from './AttendanceTable';
import studentDetails from './studentDetails.json'; // Import the JSON data

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const attendanceData = studentDetails['2022037933'].attendance; // Assuming student ID is the key

  if (!attendanceData || !attendanceData.theory || !attendanceData.practical) {
    return <div>Loading...</div>; // Add a loading state or error message
  }

  const subjects = Object.keys(attendanceData.theory).filter(key => key !== 'dates');

  const theoryData = subjects.map(subject => ({
    subject,
    percentage: (attendanceData.theory[subject].reduce((a, b) => a + b, 0) / attendanceData.theory[subject].length) * 100,
    type: 'theory'
  }));

  const practicalData = subjects.map(subject => ({
    subject,
    percentage: (attendanceData.practical[subject].reduce((a, b) => a + b, 0) / attendanceData.practical[subject].length) * 100,
    type: 'practical'
  }));

  const theoryPercentages = subjects.map(subject => {
    const data = theoryData.find(data => data.subject === subject);
    return data ? data.percentage : 0;
  });

  const practicalPercentages = subjects.map(subject => {
    const data = practicalData.find(data => data.subject === subject);
    return data ? data.percentage : 0;
  });

  const data = {
    labels: subjects,
    datasets: [
      {
        label: 'Theory Attendance',
        data: theoryPercentages,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Practical Attendance',
        data: practicalPercentages,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      }
    }
  };

  return (
    <div className="graph-container">
      <h2>Attendance Graph</h2>
      <Bar data={data} options={options} />
      <AttendanceTable attendanceData={attendanceData} /> {/* Include the new component */}
    </div>
  );
};

export default Graph;