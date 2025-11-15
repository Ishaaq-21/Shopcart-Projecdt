"use client";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartAction, cartReducer, initialCartState } from "./Cart/CartReducer";
import { CartState } from "@/types/types";
import favoriteReducer, {
  FavoriteAction,
  FavoriteState,
  initialState,
} from "./favorite/FavoriteReducer";

type CartContextType = {
  cartState: CartState;
  cartDispatch: React.Dispatch<CartAction>;
};
type FavoriteContextType = {
  favoriteState: FavoriteState;
  favDispatch: React.Dispatch<FavoriteAction>;
};
const CartContext = createContext<CartContextType | undefined>(undefined);
const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);
const CartReducerContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const [favoriteState, favDispatch] = useReducer(
    favoriteReducer,
    initialState
  );
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      <FavoriteContext.Provider value={{ favoriteState, favDispatch }}>
        {children}
      </FavoriteContext.Provider>
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
export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error(
      "useFavoriteContext must be used inside a FavoriteContextProvider"
    );
  }
  return context;
};
