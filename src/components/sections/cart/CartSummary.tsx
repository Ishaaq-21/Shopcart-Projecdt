"use client";
import CheckoutBtn from "@/components/atoms/cart/CheckoutBtn";
import Title from "@/components/atoms/Title";
import Container from "@/components/common/Container";
import { useCartContext } from "@/contexts/CartFavContextProvider";
import React from "react";

const CartSummary = () => {
  const { cartState } = useCartContext();
  return (
    <>
      <div className="hidden md:block self-start flex-1 w-full p-5 border border-black/20 bg-white rounded-md ">
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
      {/* Mobile view */}
      <Container className="pt-6 z-50 fixed bottom-0 left-0 md:hidden border-black/20 bg-white rounded-md ">
        <div className="border border-black/30 p-5 rounded-md">
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
      </Container>
    </>
  );
};

export default CartSummary;
