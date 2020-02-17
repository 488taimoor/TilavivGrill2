import React, { createContext, useReducer } from "react";

export const ProductsContext = createContext();

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

const ProductsContextProvider = props => {
  const [products, productsDispatch] = useReducer(authReducer, {
    state: "LOADING"
  });

  return (
    <ProductsContext.Provider value={{ products, productsDispatch }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
