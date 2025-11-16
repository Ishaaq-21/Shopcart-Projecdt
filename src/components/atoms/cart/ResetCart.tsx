"use client";
import { useCartContext } from "@/contexts/CartFavContextProvider";
import React from "react";
import toast from "react-hot-toast";

const ResetCart = () => {
  const { cartDispatch } = useCartContext();
  const resetCart = () => {
    cartDispatch({ type: "RESET_CART" });
    toast.success("Cart reset successfully");
  };
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md"
      onClick={resetCart}
    >
      Reset Cart
    </button>
  );
};

export default ResetCart;
