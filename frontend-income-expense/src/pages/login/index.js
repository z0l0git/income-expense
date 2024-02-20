import { LoginBox } from "@/components/LoginBox";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

// Renders Login Page in "/login route"
// It contains LoginBox component
export default function Home() {
  // Theme context
  const { mainColor, secondaryColor, darkMode } = useContext(ThemeContext);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        style={{ backgroundColor: darkMode ? mainColor : secondaryColor }}
        className="w-[50%] h-screen flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center gap-10 w-1/2 h-[70%]">
          <LoginBox />
        </div>
      </div>
      <div
        className="w-[50%] h-screen bg-[#0166FF]"
        style={{ backgroundColor: darkMode ? secondaryColor : mainColor }}
      ></div>
    </div>
  );
}
