import Image from "next/image";
import { Steps } from "@/components/Steps";
import { BarChartComp } from "@/components/BarChart";

export default function Home() {
  return (
    <div className="bg-white w-full h-screen">
      <BarChartComp />
    </div>
  );
}
