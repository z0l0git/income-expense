// Imports
import { Steps } from "@/components/Steps";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";

// Component that renders the sign up page and handles the sign up process
export const SignUp = (props) => {
  const { stage = 0, nextHandle } = props;

  const [show, setShow] = useState(true);
  const [reshow, setReshow] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Handles the password visibility
  const handleClick = () => {
    setShow(!show);
  };
  const handleReclick = () => {
    setReshow(!reshow);
  };
  // States that stores the user data and the re-entered password
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [repassword, setRepassword] = useState({
    repassword: "",
  });
  const [passerror, setPasserror] = useState(false);

  // Router hook

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
  };

  // Stores user inputs in the userData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (userData.password === repassword.repassword) {
      setPasserror(false);
    } else {
      setPasserror(true);
    }
  }, [userData, repassword]);

  // Handles submit and sends the user data to the server
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      userData.username === "" ||
      userData.email === "" ||
      userData.password === "" ||
      repassword.repassword === ""
    ) {
      // Alerts the user if any field is empty
      alert("Please fill all the fields");
    } else {
      // Tries to send the user data to the server
      try {
        // Checks if the 2 passwords match
        if (userData.password !== repassword.repassword) {
          setPasserror(true);
        } else {
          // Sends the user data to the server if the passwords match
          await axios.post(url, userData);

          nextHandle();
        }
      } catch (err) {
        // Alerts the user if there is an error
        setErrorMsg(err.response.data.message);
        setError(true);
      }
    }
  };
  return (
    <div
      className="flex justify-center items-center gap-10 w-full h-full"
      style={{ display: `${stage === 0 ? "flex" : "none"}` }}
    >
      <div className="flex flex-col gap-10 justify-center items-center w-[50%] h-full">
        <div className=" w-[50%] h-[75%] items-center justify-center flex flex-col gap-10">
          <div>
            <Image src={"/hicon.png"} width={100} height={50} alt="logo" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Create Geld account</h1>
            <p>Sign up below to create your Wallet account</p>
          </div>
          <form
            className="flex flex-col gap-4 w-full h-1/2"
            action=""
            onSubmit={handleSubmit}
          >
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Name"
              className="inputStyle"
              required
            />
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
            <div className="w-full h-full relative flex items-center">
              <input
                onChange={handleRepassword}
                name="repassword"
                type={reshow ? "password" : "text"}
                placeholder="Re-Password"
                className="inputStyle"
                required
              />
              <div className="absolute right-0 w-10 h-10 cursor-pointer flex justify-center items-center">
                <FaEye
                  className={` ${reshow ? "block" : "hidden"}`}
                  onClick={handleReclick}
                  color="#0166FF"
                />
                <FaEyeSlash
                  className={` ${reshow ? "hidden" : "block"}`}
                  onClick={handleReclick}
                  color="#0166FF"
                />
              </div>
            </div>
            {passerror && (
              <p className="text-red-500 text-center">
                •Passwords do not match
              </p>
            )}
            {error && <p className="text-red-500 text-center">{errorMsg}</p>}

            <button
              className="w-full h-full bg-blue-500 rounded-xl text-white"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div>
            <p>
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleJump}
              >
                Log In
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-[#0166FF]"></div>
    </div>
  );
};
