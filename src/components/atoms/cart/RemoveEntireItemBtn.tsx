"use client";
import { useCartContext } from "@/contexts/CartFavContextProvider";
import { Trash } from "lucide-react";
import React from "react";
import { Product } from "../../../../sanity.types";
import toast from "react-hot-toast";

const RemoveEntireItem = ({ product }: { product: Product }) => {
  const { cartDispatch } = useCartContext();
  const handleRemoveEntirely = () => {
    cartDispatch({
      type: "REMOVE_ITEM",
      payload: { productId: product._id, removeEntirely: true },
    });
    toast.success("Item Deleted Successfully");
  };
  return (
    <button onClick={handleRemoveEntirely}>
      <Trash
        className="text-gray-500 hover:text-red-600 hover-effect"
        size={20}
      />
    </button>
  );
};

export default RemoveEntireItem;
