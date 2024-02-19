import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const RecordNav = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3 ">
      <div className="flex gap-5 items-center">
        <button className="btn btn-square btn-sm">
          <IoIosArrowBack />
        </button>
        <p>Last 30 Days</p>
        <button className="btn btn-square btn-sm">
          <IoIosArrowForward />
        </button>
      </div>
      <select className="select h-[35px] w-[200px] max-w-xs font-semibold">
        <option selected>Newest First</option>
        <option>Oldest First</option>
        <option>A - Z</option>
        <option>Z - A</option>
      </select>
    </div>
  );
};
