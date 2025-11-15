"use client";
import { useFavoriteContext } from "@/contexts/CartFavContextProvider";
import React from "react";

const WishlistProducts = () => {
  const { favoriteState } = useFavoriteContext();
  return (
    <div>
      {favoriteState.favorites.map((item) => (
        <p className="my-5 border rounded-md" key={item._id}>
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default WishlistProducts;
