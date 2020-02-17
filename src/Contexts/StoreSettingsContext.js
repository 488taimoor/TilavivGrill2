import React, { createContext, useReducer, useState } from "react";

export const StoreSettingsContext = createContext();
export const settings = {
  restaurantID: "",
  storeHours: [],
  deliveryArea: {},
  paymentMethod: {},
  stateTax: [],
  appTheme: {},
  storetypes: {},

  base_url: "http://13.57.247.65/",
  store_id: "5e1e22ac3027734d357e2cd1",
  base_image_url:
    "http://web-admin-11122019-development.s3-website-us-west-1.amazonaws.com/public/Stores/"
};
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


const StoreSettingsContextProvider = props => {
  const [storeSettings, storeSettingsDispatch] = useReducer(authReducer, {
    state: "LOADING",
    data: settings
  });

  return (
    <StoreSettingsContext.Provider
      value={{ storeSettings, storeSettingsDispatch }}
    >
      {props.children}
    </StoreSettingsContext.Provider>
  );
};

export default StoreSettingsContextProvider;
