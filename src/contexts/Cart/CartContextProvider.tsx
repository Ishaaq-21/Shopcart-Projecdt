"use client";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { cartReducer, initialCartState } from "./CartReducer";

const CartContext = createContext({});

const CartReducerContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartReducerContextProvider;

export const useCartContext = () => useContext(CartContext);
