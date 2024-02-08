import { GoDotFill } from "react-icons/go";
export const DoughnutData = (props) => {
  const { color, desc, ammount, percent } = props;
  return (
    <div className="flex w-full items-center gap-7 justify-between">
      <div className="flex items-center w-[100px]">
        <GoDotFill color={color} size={20} />
        <p>{desc}</p>
      </div>
      <div className="flex w-fit text-[16px]">
        <p>{ammount}</p>
      </div>
      <div className="flex w-fit">
        <p>{percent}</p>
      </div>
    </div>
  );
};
