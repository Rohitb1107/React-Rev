import React, { createContext } from "react";

// create context
const AppContext = createContext();

// create provider
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Rohit Bagadi"}>{children}</AppContext.Provider>
  );
};

// export
export { AppContext, AppProvider };
