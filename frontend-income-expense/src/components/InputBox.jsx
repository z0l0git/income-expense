import React from "react";

export const InputBox = ({ handleChange, name, type, placeholder }) => {
  return (
    <input
      onChange={handleChange}
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full h-1/3 bg-gray-100 rounded-md px-4 "
    />
  );
};
