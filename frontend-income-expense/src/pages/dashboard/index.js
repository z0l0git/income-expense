import Image from "next/image";
import { DoughnutChart } from "@/components";
import { BarChartCard } from "@/components/BarChartCard";

import { DashCard1 } from "@/components/DashCard1";
import { DashCard2 } from "@/components/DashCard2";

// import { DoughnutChart } from "@/components/DoghnutChart";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center m-auto ">
      <div className="w-full flex justify-between items-center px-[200px] py-5">
        <div className="flex items-center gap-7 ">
          <Image src="/headerlogo.png" alt="logo" width={40} height={40} />
          <p className="heading-4 font-bold">Dashboard</p>
          <p className="">Records</p>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn btn-sm h-[35px] rounded-full bg-primary font-normal text-white px-5">
            + Record
          </button>
          <Image src="/Avatar.png" alt="avatar" width={40} height={40} />
        </div>
      </div>
      <div className="bg-slate-200 h-screen w-full px-[200px] py-10 flex flex-col gap-10 items-center">
        <div className="flex justify-between w-full gap-10">
          <div className="card w-[384px] bg-[url('/Large.png')]">
            <div className="card-body h-[216px] justify-between">
              <div className="card-title">
                <img src="/cardl.png" alt="logo" />
                <p className="text-white">Geld</p>
              </div>
              <div className="justify-end">
                <p className="text-slate-400">Cash</p>
                <p className="font-semibold text-white text-[25px]">
                  10,000,00
                </p>
              </div>
            </div>
          </div>
          <DashCard1
            incomeAmmount={"1,200,000₮"}
            incomePercent={"32% from last month"}
          />

          <DashCard2
            incomeAmmount={"-1,200,000₮"}
            incomePercent={"32% from last month"}
          />
        </div>
        <div className="flex h-fit w-full justify-between">
          <BarChartCard />
          <DoughnutChart />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
