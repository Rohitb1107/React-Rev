import React, { createContext } from "react";

// create context
const AppContext = createContext();

const initState = {
  hits: [],
  page: 0,
  nbPages: 0,
  query: "html",
};

// create provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

// export
export { AppContext, AppProvider };
