import Image from "next/image";
import { useState } from "react";
import { InputBox } from "@/components/InputBox";
import { Button } from "@/components/Button";

export const LoginBox = () => {
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
      <div>
        <Image src={"/hicon.png"} width={100} height={50} />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p>Welcome back please enter your details</p>
      </div>
      <div className="flex flex-col gap-6 w-full h-1/3">
        <InputBox
          handleChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
        />
        <InputBox
          handleChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button handleSubmit={handleSubmit} label="Login" />
      </div>
      <div>
        <p>
          Don't have an account? <span className="text-blue-500">Sign Up</span>
        </p>
      </div>
    </div>
  );
};
