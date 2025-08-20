import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = () => {
  const data = {
    labels: [
      "JavaScript",
      "TypeScript",
      "TSX/JSX",
      "Python",
      "MD/MDX",
      "Notebook",
      "SQL",
    ],
    datasets: [
      {
        label: "Proficiency (%)",
        data: [90, 85, 80, 75, 70, 65, 70, 45],
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(92, 92, 92, 0.4)",
          "rgba(99, 255, 132, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 206, 86, 0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(92, 92, 92, 1)",
          "rgba(99, 255, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio to control height
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Top Programming Skills",
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
