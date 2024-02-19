import { Steps } from "@/components/Steps";
import { RiCoinsFill } from "react-icons/ri";
export const SignUpThird = (props) => {
  const { stage = 2, nextHandle } = props;
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ display: `${stage === 2 ? "flex" : "none"}` }}
    >
      <Steps step={stage} />
      <div className="h-[50%] w-[30%] flex flex-col justify-center items-center gap-5">
        <div className="flex justify-center bg-[#0166FF] w-[60px] h-[60px] rounded-full items-center">
          <RiCoinsFill color="white" size={40} />
        </div>
        <h1 className="text-[30px] font-bold">Select base currency</h1>
        <div className="w-full flex flex-col gap-2 items-center">
          <input
            className="input input-bordered w-full"
            type="number"
            placeholder="Ammount"
          />
          <p className="text-[14px] text-gray-500">
            How much cash do you have in your wallet?
          </p>
        </div>
        <button
          className="btn btn-primary w-full rounded-[20px]"
          onClick={nextHandle}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
