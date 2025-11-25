import React from "react";
import { Product } from "../../../../sanity.types";
import WishItem from "./WishItem";

const WishListTable = ({ favoritesItems }: { favoritesItems: Product[] }) => {
  return (
    <table className="w-full ">
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
  );
};

export default WishListTable;
