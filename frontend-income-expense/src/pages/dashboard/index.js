import Image from "next/image";
import { DoughnutChart } from "@/components";
import { BarChartCard } from "@/components/BarChartCard";
import { DashCard1 } from "@/components/DashCard1";
import { DashCard2 } from "@/components/DashCard2";
import { BalanceCard } from "@/components/BalanceCard";
import { RecordsCard } from "@/components/RecordsCard";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

import { useRouter } from "next/router";
// import { DoughnutChart } from "@/components/DoghnutChart";
export default function Home() {
  const { userData } = useContext(DataContext);
  const { push } = useRouter();

  console.log(userData.username);
  return (
    <div className="w-[1440px] h-fit flex flex-col items-center m-auto bg-slate-200">
      <div className="w-screen flex justify-between items-center px-[500px] py-5 bg-white mb-[25px]">
        <div className="flex items-center gap-7 ">
          <Image src="/headerlogo.png" alt="logo" width={40} height={40} />
          <p
            className="heading-4 font-bold cursor-pointer"
            onClick={() => push("/dashboard")}
          >
            Dashboard
          </p>
          <p className="cursor-pointer" onClick={() => push("/records")}>
            Records
          </p>
          <p className="">{userData.username}</p>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn btn-sm h-[35px] text-[15px] rounded-full bg-[#0166FF] font-semibold text-white px-5">
            + Record
          </button>
          <Image src="/Avatar.png" alt="avatar" width={40} height={40} />
        </div>
      </div>
      <div className="bg-slate-200 h-fit w-full px-[100px] py-10 flex flex-col gap-10 items-center">
        <div className="flex justify-between w-full gap-5">
          <BalanceCard
            ammount={parseInt(userData.balance).toLocaleString("en-US")}
          />
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
    </div>
  );
}
