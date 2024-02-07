import Image from "next/image";
import { useState, useContext } from "react";
import { dataContext } from "@/context/dataContext";
import { FaCircleArrowUp, FaCircleArrowDown } from "react-icons/fa6";

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
          <div className="card-compact rounded-2xl w-[384px] bg-white shadow-xl">
            <div className="card-body justify-between gap-3">
              <div className="card-title">
                <span className="text-[#84CC16] text-[30px]">•</span>
                <h1>Your Income</h1>
              </div>
              <hr className="w-[400px] -mx-5"></hr>
              <div className="mt-[15px] flex flex-col gap-4">
                <p className="font-bold text-[35px] ">1,200,000₮</p>
                <p className="text-slate-400 text-[17px]">
                  Your Income Ammount
                </p>
              </div>
              <div className="h-full flex items-center gap-2 justify-end mt-4">
                <FaCircleArrowUp color="#84CC16" size={20} />
                <p>32% from last month</p>
              </div>
            </div>
          </div>
          <div className="card-compact rounded-2xl w-[384px] bg-white shadow-xl">
            <div className="card-body justify-between gap-3">
              <div className="card-title">
                <span className="text-[#0166FF] text-[30px]">•</span>
                <h1>Total Expenses</h1>
              </div>
              <hr className="w-[400px] -mx-5"></hr>
              <div className="mt-[15px] flex flex-col gap-4">
                <p className="font-bold text-[35px] ">-1,200,000₮</p>
                <p className="text-slate-400 text-[17px]">
                  Your Income Ammount
                </p>
              </div>
              <div className="h-full flex items-center gap-2 justify-end mt-4">
                <FaCircleArrowDown color="#84CC16" size={20} />
                <p>32% from last month</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
