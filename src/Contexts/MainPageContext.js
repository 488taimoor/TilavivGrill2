import React, { createContext, useReducer } from "react";

export const MainPageContext = createContext();

export const authReducer = (state, action) => {
  console.log("this is reducer", state, action);
  switch (action.type) {
    case "LOADING":
      return { ...state, state: "LOADING" };
    case "SETDATA":
      return { ...state, state: "SUCCESS", data: action.payload };
    default:
      return state;
  }
};

const MainPageContextProvider = props => {
  const [categories, mainPagedispatch] = useReducer(authReducer, {
    state: "LOADING"
  });

  return (
    <MainPageContext.Provider value={{ categories, mainPagedispatch }}>
      {props.children}
    </MainPageContext.Provider>
  );
};

export default MainPageContextProvider;
