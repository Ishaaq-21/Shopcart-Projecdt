"use client";
import React from "react";
import { useCartContext } from "@/contexts/Cart/CartContextProvider";
import { CartItem } from "@/types/types";

const CartProducts = () => {
  const { state } = useCartContext();
  const cartItems = state.items;
  return (
    <div>
      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((item: CartItem) => (
          <div key={item.product._id}>
            <span className="block font-semibold text-primary">
              Product Name: {item.product.name}
            </span>
            <span>Product Stock : {item.product.stock}</span>
          </div>
        ))}
    </div>
  );
};

export default CartProducts;
