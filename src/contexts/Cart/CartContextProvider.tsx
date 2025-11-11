"use client";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartAction, cartReducer, initialCartState } from "./CartReducer";
import { CartState } from "@/types/types";

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartReducerContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartReducerContextProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used inside a CartContextProvider");
  }

  return context;
};
