import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href={"/cart"} className="relative flex-between gap-3">
      <span className="text-gray-400 md:hidden">Cart</span>

      <ShoppingBag
        role="button"
        className="w-4 h-4 md:w-5 md:h-5 text-white md:text-black hover:text-shop-primary hover-effect"
      />
      <span className="header-icon-span ">0</span>
    </Link>
  );
};

export default CartIcon;
