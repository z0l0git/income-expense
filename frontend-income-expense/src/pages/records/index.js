import Image from "next/image";
import { RecordNav } from "@/components/RecorcNav";
import { TiArrowSortedDown } from "react-icons/ti";
import { RecordCol } from "@/components/RecordCol";

export default function Home() {
  return (
    <div className="w-[1440px] h-fit flex flex-col items-center m-auto bg-slate-200">
      <div className="w-screen flex justify-between items-center px-[310px] py-5 bg-white mb-[25px]">
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

      <div className="h-[100%] w-full flex justify-between px-[100px] gap-8">
        <div className="w-[25%] bg-white h-full rounded-md p-3 flex flex-col gap-6">
          <RecordCol />
        </div>
        <div className="w-[80%] h-[100%] mt-5">
          <RecordNav />
          <div></div>
        </div>
      </div>
    </div>
  );
}
