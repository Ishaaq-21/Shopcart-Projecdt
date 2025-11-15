"use client";
import { useCartContext } from "@/contexts/Cart/CartContextProvider";
import React from "react";

const ResetCart = () => {
  const { dispatch } = useCartContext();
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md"
      onClick={() => dispatch({ type: "RESET_CART" })}
    >
      Reset Cart
    </button>
  );
};

export default ResetCart;
