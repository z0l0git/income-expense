import { Steps } from "@/components/Steps";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/router";
export const SignUpFinal = (props) => {
  const { push } = useRouter();
  const nextHandle = () => {
    push("/dashboard");
  };
  const { stage = 3 } = props;
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ display: `${stage === 3 ? "flex" : "none"}` }}
    >
      <Steps step={stage} />
      <div className="h-[50%] w-[30%] flex flex-col justify-center items-center gap-3">
        <div className="flex justify-center bg-[#0166FF] w-[60px] h-[60px] rounded-full items-center">
          <FaCheck color="white" size={40} />
        </div>
        <h1 className="text-[30px] font-bold">Good Job</h1>
        <div className="w-full flex flex-col gap-2 items-center">
          <p className="text-[14px] text-gray-500 text-center">
            Your very first account has been created. Now continute to dashboard
            and start tracking.
          </p>
        </div>
        <button
          className="btn btn-primary w-full rounded-[20px]"
          onClick={nextHandle}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};
