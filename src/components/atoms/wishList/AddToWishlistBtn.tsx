"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { Product } from "../../../../sanity.types";
import { useFavoriteContext } from "@/contexts/CartFavContextProvider";

const AddToWishlistBtn = ({
  product,
  className,
  iconSize,
}: {
  product: Product;
  className?: string;
  iconSize?: number;
}) => {
  const { favoriteState, favDispatch } = useFavoriteContext();
  const handleAddToWishlist = () => {
    favDispatch({ type: "FAV_CLICK", payload: product });
  };
  const isInWishlist = favoriteState.favorites.find(
    (item) => item._id === product._id
  );
  return (
    <div className={cn("z-10")}>
      <button
        onClick={handleAddToWishlist}
        className={`p-2 border rounded-full hover-effect ${className} ${isInWishlist ? "bg-shop-primary hover:bg-white" : "bg-white hover:bg-shop-primary"}`}
      >
        <Heart size={(iconSize && iconSize) || 12} />
      </button>
    </div>
  );
};

export default AddToWishlistBtn;
