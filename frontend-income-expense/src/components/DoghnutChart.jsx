import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#F2901C",
          "#16BDCA",
          "#FDBA8C",
          "#E74694",
          "#1C64F2",
        ],
      },
    ],
  };
  return (
    <div className="w-[200px] h-[200px]">
      <Doughnut data={data} />
    </div>
  );
};
