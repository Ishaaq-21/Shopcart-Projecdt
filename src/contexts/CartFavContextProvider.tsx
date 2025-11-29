"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useEffect,
} from "react";
import {
  CartAction,
  cartReducer,
  getSavedState,
  initialCartState,
} from "./Cart/CartReducer";
import { CartState } from "@/types/types";
import favoriteReducer, {
  FavoriteAction,
  FavoriteState,
  getSavedWishList,
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
  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    initialCartState,
    getSavedState
  );
  const [favoriteState, favDispatch] = useReducer(
    favoriteReducer,
    initialState,
    getSavedWishList
  );
  useEffect(() => {
    try {
      const { getItemCountById, ...stateToSave } = cartState;
      localStorage.setItem("cartState", JSON.stringify(stateToSave));
    } catch (error) {}
  }, [cartState]);

  useEffect(() => {
    try {
      localStorage.setItem("wishlistState", JSON.stringify(favoriteState));
    } catch (error) {}
  }, [favoriteState]);
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
