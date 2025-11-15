"use client";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Product } from "../../../../sanity.types";
import { useCartContext } from "@/contexts/CartFavContextProvider";
import ExistingCartItem from "./ExistingCartItem";

const AddToCartBtn = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const isOutOfStock = product?.stock === 0;
  const { cartState, cartDispatch } = useCartContext();
  const handleClick = () => {
    cartDispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  };
  const productCount = cartState.getItemCountById(cartState, product._id);
  return productCount === 0 ? (
    <button
      onClick={handleClick}
      className={`flex w-fit items-center font-semibold gap-2 mt-2 py-2 px-2 md:px-4 rounded-lg text-sm tracking-wider hover-effect ${
        isOutOfStock
          ? "bg-shop-primary text-black/70"
          : "bg-shop-primary hover:bg-shop-orange text-white"
      } ${className}`}
      disabled={isOutOfStock}
    >
      <ShoppingBag className="w-5 h-5" />
      {isOutOfStock ? "Out of Stock" : "Add to cart"}
    </button>
  ) : (
    <ExistingCartItem product={product} />
  );
};

export default AddToCartBtn;
