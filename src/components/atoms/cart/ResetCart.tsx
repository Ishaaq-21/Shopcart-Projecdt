"use client";
import { useCartContext } from "@/contexts/CartFavContextProvider";
import React from "react";

const ResetCart = () => {
  const { cartDispatch } = useCartContext();
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md"
      onClick={() => cartDispatch({ type: "RESET_CART" })}
    >
      Reset Cart
    </button>
  );
};

export default ResetCart;
