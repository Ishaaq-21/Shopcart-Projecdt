"use client";
import React from "react";
import { useCartContext } from "@/contexts/CartFavContextProvider";
import { CartItem } from "@/types/types";
import ProductCart from "./ProductCart";
import ResetCart from "@/components/atoms/cart/ResetCart";

const CartProducts = () => {
  const { state } = useCartContext();
  const cartItems = state.items;
  return (
    <div className="carts-container">
      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((item: CartItem) => (
          <ProductCart key={item.product._id} cartItem={item} />
        ))}
    </div>
  );
};

export default CartProducts;
