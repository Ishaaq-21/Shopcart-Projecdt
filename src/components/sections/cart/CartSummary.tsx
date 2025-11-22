"use client";
import CheckoutBtn from "@/components/atoms/cart/CheckoutBtn";
import Title from "@/components/atoms/Title";
import { useCartContext } from "@/contexts/CartFavContextProvider";
import React from "react";

const CartSummary = () => {
  const { cartState } = useCartContext();
  return (
    <div className="self-start flex-1 w-full p-5 border border-black/20 bg-white rounded-md ">
      <Title className="!text-xl tracking-widest pb-2 border-b border-b-black/40 mb-2">
        Order Summary
      </Title>
      <div className="w-full flex-between py-2 mb-3">
        <h3 className="font-semibold text-lg tracking-wide">Total</h3>
        <span className="font-semibold text-xl tracking-wide text-shop-orange">
          ${cartState.totalPrice.toFixed(2)}
        </span>
      </div>
      <CheckoutBtn />
    </div>
  );
};

export default CartSummary;
