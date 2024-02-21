import { AiFillPlusCircle } from "react-icons/ai";
export const CategoryOption = () => {
  return (
    <option className="bg-white ">
      <div className="flex">
        <AiFillPlusCircle color="#0166FF" />
        <p>Add Category</p>
      </div>
    </option>
  );
};
