import { ShoppingBag } from "lucide-react";
import React from "react";

const CartIcon = () => {
  return (
    <div className="relative">
      <ShoppingBag
        role="button"
        className="w-5 h-5 hover:text-shop-primary hover-effect"
      />
      <span className="header-icon-span ">0</span>
    </div>
  );
};

export default CartIcon;
