import { Steps } from "@/components/Steps";
import { FaMoneyBill } from "react-icons/fa";
export const SignUpSecond = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Steps />
      <div className="h-[50%] w-[30%] flex flex-col justify-center items-center gap-3">
        <div className="flex justify-center bg-[#0166FF] w-[60px] h-[60px] rounded-full items-center">
          <FaMoneyBill color="white" size={40} />
        </div>
        <h1 className="text-[30px] font-bold">Select base currency</h1>
        <div className="w-full flex flex-col gap-2 items-center">
          <select className="select w-full max-w-xs bg-gray-100 outline-none">
            <option disabled selected>
              MNT - Mongolian Tugrik
            </option>
            <option>USD - United States Dollar</option>
            <option>EUR - Euro</option>
            <option>JPY - Japanese Yen</option>
            <option>GBP - British Pound</option>
            <option>CNY - Chinese Yuan</option>
          </select>
          <p className="text-[14px] text-gray-500">
            Your base currency should be the one you use most often. All
            transaction in other countries will be calculated based on this one.
          </p>
        </div>
        <button className="btn btn-primary w-full rounded-[20px]">
          Confirm
        </button>
      </div>
    </div>
  );
};
