import { DoughnutChart } from "@/components";
import { BarChartCard } from "@/components/BarChartCard";
import { DashCard1 } from "@/components/DashCard1";
import { DashCard2 } from "@/components/DashCard2";
import { BalanceCard } from "@/components/BalanceCard";
import { RecordsCard } from "@/components/RecordsCard";

export const DashboardPage = () => {
  return (
    <div className="bg-slate-200 h-fit w-full px-[100px] py-10 flex flex-col gap-10 items-center">
      <div className="flex justify-between w-full gap-5">
        <BalanceCard ammount={"10,000,00"} />
        <DashCard1
          incomeAmmount={"1,200,000₮"}
          incomePercent={"32% from last month"}
        />

        <DashCard2
          incomeAmmount={"-1,200,000₮"}
          incomePercent={"32% from last month"}
        />
      </div>
      <div className="flex h-fit w-full justify-between gap-5">
        <BarChartCard />
        <DoughnutChart />
      </div>
      <div className="w-full h-fit">
        <RecordsCard />
      </div>
    </div>
  );
};
