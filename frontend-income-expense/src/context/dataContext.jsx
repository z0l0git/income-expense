import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState({});

  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    const getloggedUser = async () => {
      const { data } = await axios.get("http://localhost:4000/users/refresh", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserData(data);
    };

    getloggedUser();
  }, []);

  return (
    <DataContext.Provider
      value={{
        userEmail,
        setUserEmail,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
