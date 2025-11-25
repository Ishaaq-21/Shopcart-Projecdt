"use client";
import { useFavoriteContext } from "@/contexts/CartFavContextProvider";
import React from "react";
import WishListTable from "./WishListTable";
import EmptyWishList from "./EmptyWishList";

const WishlistProducts = () => {
  const { favoriteState } = useFavoriteContext();
  return (
    <div>
      {favoriteState.favorites.length > 0 ? (
        <WishListTable favoritesItems={favoriteState.favorites} />
      ) : (
        <EmptyWishList />
      )}
    </div>
  );
};

export default WishlistProducts;
