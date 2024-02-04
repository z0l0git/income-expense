// Imports
import Image from "next/image";
import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useRouter } from "next/router";
import axios from "axios";

// Component that renders the sign up page and handles the sign up process
export const SignUp = () => {
  // States that stores the user data and the re-entered password
  const [userData, setUserData] = useState({});
  const [repassword, setRepassword] = useState({});

  const { push } = useRouter();
  const url = "http://localhost:4000/users";

  // Handles the sign up process and redirects to the login page if successful
  const handleJump = async (e) => {
    push("/login");
  };

  // Handles the re-entered password. It is separete from the userData state because it is not sent to the server
  const handleRepassword = (e) => {
    const { value } = e.target;
    setRepassword({
      ...repassword,
      repassword: value,
    });
    console.log(repassword.repassword);
  };

  // Stores user inputs in the userData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handles submit and sends the user data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (
      userData.username === "" ||
      userData.email === "" ||
      userData.password === "" ||
      repassword.repassword === ""
    ) {
      alert("Please fill in all fields");
    } else {
      // Tries to send the user data to the server
      try {
        // Checks if the 2 passwords match
        if (userData.password !== repassword.repassword) {
          alert("Passwords do not match");
        } else {
          // Sends the user data to the server if the passwords match
          await axios.post(url, userData).then((res) => {
            if (res.data !== "User already exists") {
              push("/login");
            } else {
              alert(res.data);
            }
          });
        }
      } catch (err) {
        alert(err.message);
      }
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
          withEye={true}
          placeholder="Password"
        />
        <InputBox
          handleChange={handleRepassword}
          name="repassword"
          type="password"
          withEye={true}
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
