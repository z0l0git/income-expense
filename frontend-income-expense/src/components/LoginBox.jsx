// Imports
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";

// LoginBox Component: Renders and handles login form

export const LoginBox = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  // User data storage useState
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
        localStorage.setItem(`token`, res.data);
        push("/dashboard");

        if (res.data !== "Invalid email or password") {
          push("/");
        } else {
          setError(true);
          setErrorMsg(res.data);
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
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full h-full gap-5 flex flex-col relative"
        >
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className="inputStyle"
            required
          />
          <div className="w-full h-full relative flex items-center">
            <input
              onChange={handleChange}
              name="password"
              type={show ? "password" : "text"}
              placeholder="Password"
              className="inputStyle"
              required
            />
            <div className="absolute right-0 w-10 h-10 cursor-pointer flex justify-center items-center">
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
          </div>
          <button
            className="w-full h-full bg-blue-500 rounded-xl text-white"
            type="submit"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 text-center">{errorMsg}</p>}
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
