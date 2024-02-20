import { LuCircle } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { ColCategory } from "@/components/ColCategory";
import { Slider } from "@/components/ui/slider";
import { useRouter } from "next/router";
import { useState } from "react";

export const RecordCol = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" bg-[#fff] flex flex-col justify-center px-4 py-6 rounded-xl gap-6">
      <h2 className="text-[25px] font-semibold">Records</h2>
      <div className="flex flex-col gap-4">
        <button className="btn btn-sm h-[35px] text-[15px] rounded-full font-light bg-[#0166FF] text-white px-5">
          + Add
        </button>

        <input
          type="text"
          placeholder="Search"
          outline="none"
          className="border-2 px-2 py-1 rounded-md bg-gray-100"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-md font-semibold">Types</h2>
        <div className="pl-3 flex flex-col gap-3">
          <div className="flex items-center gap-3  ">
            <input
              type="radio"
              name="type"
              className="radio w-[15px] h-[15px]"
            />
            <p className="text-md">All</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="type"
              className="radio w-[15px] h-[15px]"
            />
            <p className="text-md">Income</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="type"
              className="radio w-[15px] h-[15px]"
            />
            <p className="text-md">Expense</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold">Category</h3>
          <p className="text-slate-300">Clear</p>
        </div>
        <div className="pl-2 w-full flex flex-col gap-2">
          <ColCategory />
          <p className="flex items-center text-md gap-2">
            <AiOutlinePlus color="#0166FF" /> Add Category
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-md font-semibold pb-3">Amount Range</h3>
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="0"
              className="border-2 w-[50%] bg-[#F3F4F6] py-2 rounded-lg px-2"
            />
            <input
              type="number"
              placeholder="1000"
              className="border-2 w-[50%] bg-[#F3F4F6] py-2 rounded-lg px-2"
            />
          </div>
          <Slider defaultValue={[0, 500]} min={0} max={1000} step={1} />
        </div>
      </div>
    </div>
  );
};
