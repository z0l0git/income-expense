import { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mainColor, setMainColor] = useState("#FFF");
  const [secondaryColor, setSecondaryColor] = useState("#0166FF");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        mainColor,
        setMainColor,
        secondaryColor,
        setSecondaryColor,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
