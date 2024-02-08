import { BarChartComp } from "@/components/BarChart";

export const BarChartCard = () => {
  return (
    <div className="card w-[48%] h-[270px] bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-title w-full items-center relative">
          <h1>Income - Expense</h1>
          <p className="text-sm text-gray-400 font-light absolute right-0">
            Jun 1 - Nov 30
          </p>
        </div>
        <hr className="w-[800px] -mx-10"></hr>
        <BarChartComp />
      </div>
    </div>
  );
};
