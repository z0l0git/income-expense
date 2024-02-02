import Image from "next/image";
import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useRouter } from "next/router";
import axios from "axios";

export const SignUp = () => {
  const [userData, setUserData] = useState({});
  const [repassword, setRepassword] = useState("");

  const { push } = useRouter();
  const url = "http://localhost:4000/users";

  const handleJump = async (e) => {
    push("/login");
  };
  const handleRepassword = (e) => {
    setRepassword(e.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
      if (userData.password !== repassword) {
        alert("Passwords do not match");
        console.log(userData);
      } else {
        await axios.post(url, userData).then((res) => {
          console.log(res.data);
          if (res.data !== "User already exists") {
            push("/login");
          } else {
            alert(res.data);
          }
        });
        console.log(userData);
      }
    } catch (err) {
      alert("User already exists");
    }
  };
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
      <div>
        <Image src={"/hicon.png"} width={100} height={50} alt="logo" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create Geld account</h1>
        <p>Sign up below to create your Wallet account</p>
      </div>
      <div className="flex flex-col gap-6 w-full h-full">
        <InputBox
          handleChange={handleChange}
          name="username"
          type="text"
          placeholder="Name"
        />
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
        <InputBox
          handleChange={handleRepassword}
          name="repassword"
          type="password"
          placeholder="Re-Password"
        />
        <Button handleSubmit={handleSubmit} label="Sign Up" />
      </div>{" "}
      <div>
        <p>
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={handleJump}>
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};
