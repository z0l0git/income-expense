import Image from "next/image";
import { DashboardPage } from "@/components/DashboardPage";
export default function Home() {
  return (
    <div className="w-[1440px] h-screen flex flex-col items-center m-auto bg-slate-200">
      <div className="w-full flex justify-between items-center px-[100px] py-5 bg-white">
        <div className="flex items-center gap-7 ">
          <Image src="/headerlogo.png" alt="logo" width={40} height={40} />
          <p className="heading-4 font-bold cursor-pointer">Dashboard</p>
          <p className="cursor-pointer">Records</p>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn btn-sm h-[35px] text-[15px] rounded-full bg-[#0166FF] font-semibold text-white px-5">
            + Record
          </button>
          <Image src="/Avatar.png" alt="avatar" width={40} height={40} />
        </div>
      </div>
      <DashboardPage />
    </div>
  );
}
