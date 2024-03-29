import { Steps } from "@/components/Steps";
import { RiCoinsFill } from "react-icons/ri";
import { useState, useContext } from "react";
import { DataContext } from "@/context/DataContext";
import axios from "axios";

export const SignUpThird = (props) => {
  const { userInput, setUserInput } = useContext(DataContext);
  const { stage = 2, nextHandle } = props;
  const [ammount, setAmmount] = useState(0);

  const handleAmmount = (e) => {
    setAmmount(e.target.value);
    setUserInput({ ...userInput, balance: e.target.value });
    console.log(ammount);
  };
  const handleSubmit = async () => {
    const url = "http://localhost:4000/users/update";
    console.log(userInput);
    await axios.post(url, userInput).then((res) => {
      nextHandle();
    });
  };

  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ display: `${stage === 2 ? "flex" : "none"}` }}
    >
      <Steps step={stage} />
      <div className="h-[50%] w-[30%] flex flex-col justify-center items-center gap-5">
        <div className="flex justify-center bg-[#0166FF] w-[60px] h-[60px] rounded-full items-center">
          <RiCoinsFill color="white" size={40} />
        </div>
        <h1 className="text-[30px] font-bold">Select base currency</h1>
        <div className="w-full flex flex-col gap-2 items-center">
          <input
            className="input input-bordered w-full"
            type="number"
            placeholder="Ammount"
            onChange={handleAmmount}
          />
          <p className="text-[14px] text-gray-500">
            How much cash do you have in your wallet?
          </p>
        </div>
        <button
          className="btn btn-primary w-full rounded-[20px]"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
