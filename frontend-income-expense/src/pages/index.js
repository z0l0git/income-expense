import Image from "next/image";
import { Steps } from "@/components/Steps";
import { BarChartCard } from "@/components/BarChartCard";
import { RecordsCard } from "@/components/RecordsCard";

export default function Home() {
  return (
    <div className="bg-blue-100 w-full h-screen p-20">
      <RecordsCard />
    </div>
  );
}
