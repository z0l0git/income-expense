import daisyui from "daisyui";
import Image from "next/image";
export const Steps = (props) => {
  const { step = 1 } = props;

  return (
    <div className="w-full flex flex-col items-center p-10 gap-20 bg-white">
      <Image src={"/logos.png"} width={100} height={100} alt="logo"></Image>
      <ul className="steps steps-vertical lg:steps-horizontal w-[20%] flex flex-col items-center step-secondary-container">
        <li className={`step step-primary`}>Currency</li>
        <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Balance</li>
        <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Finish</li>
      </ul>
    </div>
  );
};
