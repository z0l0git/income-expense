import { MdHomeFilled } from "react-icons/md";

export const RecordsData = (props) => {
  const { title, when, amount } = props;
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="w-[40px] h-[40px] rounded-full bg-[#0166FF] flex justify-center items-center">
          <MdHomeFilled size={24} color="#FFF" />
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p>{when}</p>
        </div>
      </div>
      <div>
        <p className="text-lime-500 font-bold">{amount}</p>
      </div>
    </div>
  );
};
