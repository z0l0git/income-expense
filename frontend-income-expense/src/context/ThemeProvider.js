import { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mainColor, setMainColor] = useState("#C0C2C9");
  const [secondaryColor, setSecondaryColor] = useState("#064884");
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
