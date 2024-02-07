import { SignUp, SignUpSecond, SignUpThird, SignUpFinal } from "@/components";

import { useState } from "react";
import { useRouter } from "next/router";

const SignUpSteps = [SignUp, SignUpSecond, SignUpThird, SignUpFinal];

// Renders sign up page in "/signup" route
export default function Home() {
  const { push } = useRouter();
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
          {step === 3 && <SignUpFinal stage={step} />}
        </div>
      </div>
    </div>
  );
}
