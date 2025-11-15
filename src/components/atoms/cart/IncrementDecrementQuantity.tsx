"use client";
import { useCartContext } from "@/contexts/Cart/CartContextProvider";
import React from "react";
import { Product } from "../../../../sanity.types";
import toast from "react-hot-toast";
import { Minus, Plus } from "lucide-react";

const IncrementDecrementQuantity = ({ product }: { product: Product }) => {
  const { state, dispatch } = useCartContext();
  const productCount = state.getItemCountById(state, product._id);
  const handleIncrement = () => {
    if (product.stock && productCount >= product.stock) {
      toast.error("The product is out of stock");
      return;
    }
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });

    toast.success(`${product.name?.substring(0, 10)}... added successfully`);
  };
  const handleDecrement = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { productId: product._id, removeEntirely: false },
    });
    toast.success(`${product.name?.substring(0, 10)}... removed successfully`);
  };
  return (
    <div className="flex gap-5 items-center">
      {" "}
      <button onClick={handleDecrement} className="text-">
        <Minus className="" size={20} />
      </button>
      {productCount}
      <button onClick={handleIncrement} className="text-xl">
        <Plus size={20} />
      </button>
    </div>
  );
};

export default IncrementDecrementQuantity;
