import { createContext, useContext } from "react";

export const dataContext = createContext();

export const dataProvider = ({ children }) => {
  return <dataContext.Provider>{children}</dataContext.Provider>;
};
