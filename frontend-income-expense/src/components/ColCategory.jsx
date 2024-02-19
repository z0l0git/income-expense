import { MdRemoveRedEye } from "react-icons/md";
import { GoTriangleRight } from "react-icons/go";

export const ColCategory = () => {
  const categories = [
    { text: "Food & Drinks" },
    { text: "Shopping" },
    { text: "Housing" },
    { text: "Transportation" },
    { text: "Vehicle" },
    { text: "Life & Entertainment" },
    { text: "Communication, PC" },
    { text: "Financial expenses" },
    { text: "Investments" },
    { text: "Income" },
    { text: "Others" },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      {categories.map(({ text }, index) => {
        return (
          <div key={index} className="flex items-center justify-between ">
            <div className="flex items-center gap-2 py-2">
              <MdRemoveRedEye size={20} color="#94a3b9" />
              <p className="text-md">{text}</p>
            </div>
            <GoTriangleRight />
          </div>
        );
      })}
    </div>
  );
};
