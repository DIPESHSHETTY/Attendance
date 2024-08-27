import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Attended', 'Remaining'],
    datasets: [
      {
        data: [data.percentage, 100 - data.percentage],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: 'easeInOutQuad',
    },
  };

  return (
    <div className="donut-chart">
      <Doughnut data={chartData} options={options} />
      <div className="percentage">{data.percentage.toFixed(2)}%</div>
    </div>
  );
};

export default PieChart;
