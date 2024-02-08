import { GoDotFill } from "react-icons/go";
export const DoughnutData = (props) => {
  const { color, desc, ammount, percent } = props;
  return (
    <div className="flex w-full items-center gap-10 justify-between">
      <div className="flex items-center w-[100px]">
        <GoDotFill color={color} size={20} />
        <p>{desc}</p>
      </div>
      <div className="flex justify-end w-fit text-[14px]">
        <p>{ammount}</p>
      </div>
      <div className="flex justify-end">
        <p>{percent}</p>
      </div>
    </div>
  );
};
