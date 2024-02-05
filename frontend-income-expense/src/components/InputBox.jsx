// Imports
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

// Component that renders an input box, if the input type is "password" renders an eye icon to show/hide the password
export const InputBox = ({
  handleChange,
  name,
  type,
  placeholder,
  withEye = false,
}) => {
  // State to show/hide the password
  const [show, setShow] = useState(false);

  // Function to show/hide the password
  const handleClick = () => {
    setShow(!show);
    type = "text";
  };
  // Render the component
  return (
    <form className="w-full h-1/3 flex justify-end items-center relative">
      <input
        onChange={handleChange}
        name={name}
        type={!withEye ? type : withEye && show ? "text" : "password"}
        placeholder={placeholder}
        className="w-full object-fit-contain h-full bg-gray-200 rounded-md px-4 border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
        required
      />
      <div
        className="absolute right-4 cursor-pointer flex justify-center items-center"
        style={{
          display: type === "password" ? "block" : "none",
        }}
      >
        <FaEye
          className={` ${show ? "block" : "hidden"}`}
          onClick={handleClick}
          color="#0166FF"
        />
        <FaEyeSlash
          className={` ${show ? "hidden" : "block"}`}
          onClick={handleClick}
          color="#0166FF"
        />
      </div>
    </form>
  );
};
