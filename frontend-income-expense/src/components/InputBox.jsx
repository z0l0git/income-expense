import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export const InputBox = ({
  handleChange,
  name,
  type,
  placeholder,
  withEye = false,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    type = "text";
  };
  return (
    <div className="w-full h-1/3 relative">
      <input
        onChange={handleChange}
        name={name}
        type={!withEye ? type : withEye && show ? "text" : "password"}
        placeholder={placeholder}
        className="w-full h-full bg-gray-100 rounded-md px-4 border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
      />
      <div
        className="absolute top-4 right-8 cursor-pointer flex justify-center items-center"
        style={{
          display: type === "password" ? "block" : "none",
        }}
      >
        <FaEye
          className={`absolute ${show ? "block" : "hidden"}`}
          onClick={handleClick}
        />
        <FaEyeSlash
          className={`absolute ${show ? "hidden" : "block"}`}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
