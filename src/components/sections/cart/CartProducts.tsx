"use client";
import React from "react";
import { useCartContext } from "@/contexts/CartFavContextProvider";
import { CartItem } from "@/types/types";
import ProductCart from "./ProductCart";
import ResetCart from "@/components/atoms/cart/ResetCart";

const CartProducts = () => {
  const { cartState } = useCartContext();
  const cartItems = cartState.items;
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <NoAccess />;
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="w-full p-5 bg-white border border-red-500 rounded-md">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cartItems.map((item: CartItem) => (
        <ProductCart key={item.product._id} cartItem={item} />
      ))}

      <div className="w-full p-5 bg-white">
        <ResetCart />
      </div>
    </div>
  );
};

export default CartProducts;
