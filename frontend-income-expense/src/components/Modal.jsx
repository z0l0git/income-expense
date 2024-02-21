import React from "react";

import { useState } from "react";

export const Modal = () => {
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setButton(!button);
  };

  return (
    <div>
      <button
        className="btn btn-sm h-[35px] text-[15px] rounded-full bg-[#0166FF] font-semibold text-white px-5"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        + Record
      </button>
      <dialog id="my_modal_2" className="modal">
        <div
          className="modal-box overflow-hidden"
          style={{ width: "900px", maxWidth: "100%" }}
        >
          <h3 className="font-bold text-[20px]">Add Record</h3>
          <hr className="w-[120%] absolute left-0 my-5" />
          <div className="flex w-full mt-10 justify-between">
            <div className="w-[48%]">
              <div className="w-full flex rounded-full bg-[#F3F4F6]">
                <button
                  className="rounded-full bg-[#0166FF] w-[50%] h-[40px] flex justify-center items-center text-white font-semibold text-[15px] px-[10px] py-2"
                  style={{
                    backgroundColor: button ? "#0166FF" : "#F3F4F6",
                    color: button ? "white" : "black",
                  }}
                  onClick={handleClick}
                >
                  Income
                </button>
                <button
                  className="rounded-full bg-slate-200 w-[50%] flex justify-center items-center text-white font-semibold text-[15px] px-[10px] py-2"
                  style={{
                    backgroundColor: button ? "#F3F4F6" : "#16A34A",
                    color: button ? "black" : "white",
                  }}
                  onClick={handleClick}
                >
                  Expense
                </button>
              </div>
              <div className="relative mt-6 w-full py-5">
                <label className="absolute top-3 ml-5 z-10">Amount</label>
                <input
                  type="number"
                  placeholder="₮ 000.00"
                  className="bg-slate-100 p-5 absolute top-0 h-[76px] rounded-xl w-full pt-12"
                />
              </div>
              <div className="mt-6 w-full py-5 flex flex-col gap-2">
                <label className="">Category</label>
              </div>
              <div className="flex gap-4 w-full">
                <div className=" flex flex-col w-[50%]">
                  <label className="">Date</label>
                  <input
                    type="date"
                    className="bg-[#F3F4F6] p-2 border-2 rounded-xl "
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="">Time</label>
                  <input
                    type="time"
                    className="bg-[#F3F4F6] p-2 border-2 rounded-xl"
                  />
                </div>
              </div>
              <button
                className="rounded-full bg-[#0166FF] w-full text-white text-[15px] px-[10px] py-2 mt-6"
                style={{ backgroundColor: button ? "#0166FF" : "#16A34A" }}
              >
                Add Record
              </button>
            </div>
            <div className="w-[48%] flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p>Payee</p>
                <select className="select w-full bg-slate-100">
                  <option selected>Write Here</option>
                  <option>Write Here</option>
                  <option>Write Here</option>
                  <option>Write Here</option>
                  <option>Write Here</option>
                  <option>Write Here</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <p>Note</p>
                <textarea
                  className="textarea w-full bg-slate-100 h-[268px]"
                  style={{ resize: "none" }}
                  placeholder="Write Here"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
