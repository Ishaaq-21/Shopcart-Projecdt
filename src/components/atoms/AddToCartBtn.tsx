import { ShoppingBag } from "lucide-react";
import React from "react";

const AddToCartBtn = () => {
  return (
    <button className="flex w-fit items-center  bg-shop-orange font-semibold  gap-2 mt-2 py-2 px-2 md:px-4 rounded-lg text-sm tracking-wider text-white hover:bg-shop-orange/70 hover-effect">
      <ShoppingBag className="w-5 h-5" />
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
