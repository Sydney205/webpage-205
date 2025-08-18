import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart2 = () => {
  const data = {
    labels: ["Git", "NPM", "VS Code", "Tableau", "Excel"],
    datasets: [
      {
        label: "Tools",
        data: [30, 20, 15, 20, 5],
        backgroundColor: [
          "rgba(255, 159, 64, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(99, 255, 132, 0.4)",
        ],
        borderColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(99, 255, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart2;
