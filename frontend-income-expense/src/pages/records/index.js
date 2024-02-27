import Image from "next/image";
import { RecordNav } from "@/components/RecorcNav";
import { Modal } from "@/components/Modal";
import { RecordCol } from "@/components/RecordCol";
import { CheckData } from "@/components/CheckData";
import { MdHomeFilled } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
{
  /* <MdHomeFilled size={22} color="#FFF" /> */
}

export default function Home() {
  const { userData } = useContext(DataContext);

  const { push } = useRouter();
  const data = [
    {
      icon: <MdHomeFilled size={22} color="#FFF" />,
      name: "Lending & Renting",
      time: "14:00",
      price: "1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: false,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: true,
    },
  ];
  const data2 = [
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: false,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "1,000₮",
      ifIncome: true,
    },
  ];

  return (
    <div className="w-[1440px] max-w-[1440px] h-fit flex flex-col items-center m-auto bg-slate-200">
      <div className="w-screen max-w-screen flex justify-center gap-[38%] items-center py-5 bg-white mb-[25px]">
        <div className="flex items-center gap-7 ">
          <Image src="/headerlogo.png" alt="logo" width={40} height={40} />
          <p
            className="heading-4  cursor-pointer"
            onClick={() => push("/dashboard")}
          >
            Dashboard
          </p>
          <p
            className="cursor-pointer font-bold"
            onClick={() => push("/records")}
          >
            Records
          </p>
          <p>{userData.username}</p>
        </div>
        <div className="flex items-center gap-5">
          <Modal />
          <Image src="/Avatar.png" alt="avatar" width={40} height={40} />
        </div>
      </div>

      <div className="h-[100%] w-full flex justify-between px-[100px] gap-8">
        <div className="w-[25%] bg-white h-full rounded-md p-3 flex flex-col gap-6">
          <RecordCol />
        </div>
        <div className="w-[80%] h-[100%] mt-5 flex flex-col gap-3">
          <RecordNav />
          <div className="flex flex-col gap-7">
            <div className="w-full bg-white rounded-lg flex items-center px-[25px] justify-between h-[50px]">
              <div className="flex items-center gap-4 ">
                <input type="checkbox" className="checkbox w-[27px] h-[27px]" />
                <p>Select All</p>
              </div>
              <p className="text-[#94A3B8] font-semibold">- 35,500₮</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Today</h2>
              {data.map((item, index) => (
                <CheckData
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  time={item.time}
                  price={item.price}
                  ifIncome={item.ifIncome}
                  iconColor={item.iconColor}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Yesterday</h2>
              {data2.map((item, index) => (
                <CheckData
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  time={item.time}
                  price={item.price}
                  ifIncome={item.ifIncome}
                  iconColor={item.iconColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
