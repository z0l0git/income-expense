import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const dataBar = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Income",
      backgroundColor: "#84CC16",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [1500],
    },
    {
      label: "Expense",
      backgroundColor: "#F97316",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      borderRadius: 20,
      barThickness: 15,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [100],
    },
  ],
};

export const BarChartComp = () => {
  return (
    <div className="w-full h-full">
      <Bar data={dataBar} width={100} height={30} />
    </div>
  );
};
