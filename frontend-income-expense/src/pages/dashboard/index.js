import Image from "next/image";
// import { DoughnutChart } from "@/components/DoghnutChart";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
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
      <div className="bg-slate-200 h-screen w-full">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
