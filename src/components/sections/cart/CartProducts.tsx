"use client";
import React from "react";
import { useCartContext } from "@/contexts/CartFavContextProvider";
import { CartItem } from "@/types/types";
import ProductCart from "./ProductCart";
import ResetCart from "@/components/atoms/cart/ResetCart";
import { useAuth } from "@clerk/nextjs";
import NoAccess from "@/components/ui/customUI/NoAccess";
import EmptyCart from "@/components/sections/cart/EmptyCart";
import CartSummary from "./CartSummary";

const CartProducts = () => {
  const { cartState } = useCartContext();
  const cartItems = cartState.items;
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <NoAccess />;
  }

  if (!cartItems || cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex items-center gap-10 relative ">
      <div className="cart-container flex-2 border border-black/20 rounded-md">
        {cartItems.map((item: CartItem) => (
          <ProductCart key={item.product._id} cartItem={item} />
        ))}

        <div className="w-full p-5 bg-white">
          <ResetCart />
        </div>
      </div>
      <CartSummary />
    </div>
  );
};

export default CartProducts;
