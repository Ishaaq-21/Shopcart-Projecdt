import { ShoppingBag } from "lucide-react";
import React from "react";
import { Product } from "../../../sanity.types";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const isOutOfStock = product?.stock === 0;
  return (
    <button
      className={`flex w-fit items-center font-semibold  gap-2 mt-2 py-2 px-2 md:px-4 rounded-lg text-sm tracking-wider   hover-effect ${isOutOfStock ? "bg-shop-orange/70 text-black/70" : "bg-shop-orange hover:bg-shop-orange/70 text-white"}`}
      disabled={isOutOfStock}
    >
      <ShoppingBag className="w-5 h-5" />
      {isOutOfStock ? "Out of Stock" : "Add to cart"}
    </button>
  );
};

export default AddToCartBtn;
