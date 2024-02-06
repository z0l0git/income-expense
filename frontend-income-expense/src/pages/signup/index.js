import { SignUp } from "@/components/SignUp";
import { SignUpSecond } from "@/components/SignUpSecond";
import { SignUpThird } from "@/components/SignUpThird";
import { SignUpFinal } from "@/components/SignUpFinal";
import { useState } from "react";

// Renders sign up page in "/signup" route
export default function Home() {
  const [step, setStep] = useState(0);
  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div className="w-full h-screen flex flex-col  items-center">
      <div className="w-full h-screen flex ">
        <div className="w-full h-screen flex justify-center ">
          {step === 0 && <SignUp stage={step} nextHandle={handleNext} />}
          {step === 1 && <SignUpSecond stage={step} nextHandle={handleNext} />}
          {step === 2 && <SignUpThird stage={step} nextHandle={handleNext} />}
          {step === 3 && <SignUpFinal stage={step} nextHandle={handleNext} />}
        </div>
      </div>
    </div>
  );
}
