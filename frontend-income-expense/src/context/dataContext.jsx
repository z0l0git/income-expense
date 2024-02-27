import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState({});
  const [userInput, setUserInput] = useState({});
  const [recordInput, setRecordInput] = useState({});
  console.log(userInput);
  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (accessToken) {
      const getloggedUser = async () => {
        const { data } = await axios.get(
          "http://localhost:4000/users/refresh",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setUserData(data);
      };

      getloggedUser();
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        userEmail,
        setUserEmail,
        userData,
        setUserData,
        userInput,
        setUserInput,
        recordInput,
        setRecordInput,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
