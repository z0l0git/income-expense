import Image from "next/image";
import { Steps } from "@/components/Steps";
import { BarChartCard } from "@/components/BarChartCard";

export default function Home() {
  return (
    <div className="bg-blue-100 w-full h-screen p-20">
      <BarChartCard />
    </div>
  );
}
