import React from "react";
import { Product } from "../../../../sanity.types";
import WishItem from "./WishItem";
import { useFavoriteContext } from "@/contexts/CartFavContextProvider";
import toast from "react-hot-toast";

const WishListTable = ({ favoritesItems }: { favoritesItems: Product[] }) => {
  const { favDispatch } = useFavoriteContext();
  const resetClick = () => {
    favDispatch({ type: "RESET_FAV" });
    toast.success("Wishlist has been reset");
  };
  return (
    <div>
      <table className="w-full mb-8 ">
        <thead className="border-b border-black/70">
          <tr>
            <th className="text-center md:text-left  p-2">Image</th>
            <th className="text-center md:text-left   hidden md:table-cell p-2">
              Category
            </th>
            <th className="text-center md:text-left  hidden md:table-cell p-2">
              type
            </th>
            <th className="text-center md:text-left  hidden md:table-cell p-2">
              status
            </th>
            <th className="text-center md:text-left  p-2 px-4">Price</th>
            <th className="text-center md:text-left  p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {favoritesItems.map((item) => (
            <WishItem key={item._id} product={item} />
          ))}
        </tbody>
      </table>
      <button
        onClick={resetClick}
        className="px-4 py-2 text-sm tracking-wider rounded-md mt border border-black/50 hover:bg-shop-primary hover-effect font-semibold"
      >
        Reset Cart
      </button>
    </div>
  );
};

export default WishListTable;
