import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutData } from "@/components/DoghnutData";

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
    <div className="">
      <div className="card w-[588px] h-[270px] bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-title w-full items-center relative">
            <h1>Income - Expense</h1>
            <p className="text-sm text-gray-400 font-light absolute right-0">
              Jun 1 - Nov 30
            </p>
          </div>
          <hr className="w-[10000px] -mx-10"></hr>
          <div className="flex w-full gap-8">
            <div className="w-[156px] h-[156px]">
              <Doughnut data={data} />
            </div>
            <div className="w-full flex flex-col items-center justify-between">
              <DoughnutData
                color={"#F2901C"}
                desc={"Bills"}
                ammount={"5’000’000₮"}
                percent={"15.50%"}
              />
              <DoughnutData
                color={"#16BDCA"}
                desc={"Food"}
                ammount={"5’000’000₮"}
                percent={"15.50%"}
              />
              <DoughnutData
                color={"#FDBA8C"}
                desc={"Shopping"}
                ammount={"5’000’000₮"}
                percent={"15.50%"}
              />
              <DoughnutData
                color={"#E74694"}
                desc={"Insurance"}
                ammount={"5’000’000₮"}
                percent={"15.50%"}
              />
              <DoughnutData
                color={"#1C64F2"}
                desc={"Clothing"}
                ammount={"5’000’000₮"}
                percent={"15.50%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
