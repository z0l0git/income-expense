import { FaCirclePlus, FaGift } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { PiForkKnifeFill, PiWineFill } from "react-icons/pi";
import {
  FaTaxi,
  FaTshirt,
  FaCar,
  FaPhone,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdLocalMovies } from "react-icons/md";
import { TbDotsCircleHorizontal } from "react-icons/tb";

import { RecordsData } from "@/components/RecordsData";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/DataContext";
import axios from "axios";

export const RecordsCard = () => {
  const { userData } = useContext(DataContext);
  const [recordData, setRecordData] = useState([]);

  const getRecords = async () => {
    const { data } = await axios.post("http://localhost:4000/records", {
      email: userData.email,
    });
    setRecordData(data);
  };

  useEffect(() => {
    getRecords();
  }, [userData]);
  console.log(recordData);

  const categoryData = [
    {
      id: 1,
      name: "Housing",
      Icon: () => <GoHomeFill color="#0166FF" size={24} />,
    },
    {
      id: 2,
      name: "Gift",
      Icon: () => <FaGift color="#FF4545" size={24} />,
    },
    {
      id: 3,
      name: "Food",
      Icon: () => <PiForkKnifeFill color="#FB8A22" size={24} />,
    },
    {
      id: 4,
      name: "Drinks",
      Icon: () => <PiWineFill color="purple" size={24} />,
    },
    {
      id: 5,
      name: "Transportation",
      Icon: () => <FaTaxi color="yellow" size={24} />,
    },
    {
      id: 6,
      name: "Shopping",
      Icon: () => <FaTshirt color="red" size={24} />,
    },

    { id: 7, name: "Vehicle", Icon: () => <FaCar color="black" size={24} /> },
    {
      id: 8,
      name: "Entertainment",
      Icon: () => <MdLocalMovies color="gray" size={24} />,
    },

    {
      id: 9,
      name: "Communication",
      Icon: () => <FaPhone color="cyan" size={24} />,
    },
    {
      id: 10,
      name: "Financial",
      Icon: () => <FaMoneyBillAlt color="green" size={24} />,
    },
    {
      id: 11,
      name: "Investment",
      Icon: () => <GrMoney color="lime" size={24} />,
    },
    {
      id: 12,
      name: "Income",
      Icon: () => <FcMoneyTransfer size={24} />,
    },
    {
      id: 13,
      name: "Other",
      Icon: () => <TbDotsCircleHorizontal color="blue" size={24} />,
    },
  ];
  return (
    <div className="card bg-white shadow-xl w-full">
      <div className="card-body justify-between">
        <div className="card-title">
          <p className="">Last Records</p>
        </div>
        <hr className="w-full left-0 top-10"></hr>
        <div className="flex flex-col gap-10">
          {recordData?.map((item, index) => {
            const getIcon = categoryData.find(
              ({ name }) => name === item.category
            );

            return (
              <RecordsData
                key={index}
                title={item.category}
                Icon={getIcon.Icon}
                amount={item.amount}
                when={item.time}
                income={item.income}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
