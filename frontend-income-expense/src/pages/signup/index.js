import { SignUp } from "@/components/SignUp";
import { SignUpSecond } from "@/components/SignUpSecond";
// Renders sign up page in "/signup" route
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col  items-center">
      <div className="w-full h-screen flex ">
        <div className="w-full h-screen flex justify-center ">
          <SignUpSecond />
        </div>
      </div>
    </div>
  );
}
