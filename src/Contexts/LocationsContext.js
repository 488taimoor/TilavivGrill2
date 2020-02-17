import React, { createContext, useReducer, useState } from "react";

export const LocationsContext = createContext();

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

const LocationsContextProvider = props => {
  const [location, locationDispatch] = useReducer(authReducer, {
    state: "LOADING"
  });

  return (
    <LocationsContext.Provider
      value={{ location, locationDispatch }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
