// Imports
import Image from "next/image";
import { useState } from "react";
import { InputBox } from "@/components/InputBox";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import axios from "axios";

// LoginBox Component: Renders and handles login form

export const LoginBox = () => {
  // User data storage useState
  const [userData, setUserData] = useState({});
  // Router
  const { push } = useRouter();
  const url = "http://localhost:4000/users/login";

  // Handles page jump to signup page
  const handleJump = () => {
    push("/signup");
  };

  // Stores input values to userData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, userData).then((res) => {
        console.log(res.data);
        if (res.data !== "Invalid email or password") {
          push("/");
        } else {
          alert(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
      <div>
        <Image src={"/hicon.png"} width={100} height={50} alt="logo" />
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
          withEye={true}
          type="password"
          placeholder="Password"
        />
        <Button handleSubmit={handleSubmit} label="Login" />
      </div>
      <div>
        <p>
          Don't have an account?
          <span onClick={handleJump} className="text-blue-500 cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};
