import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import { CartItem } from "@/types/types";
import FavIcon from "@/components/atoms/FavIcon";
import { Trash } from "lucide-react";
import ExistingCartItem from "@/components/atoms/cart/ExistingCartItem";

// I need to fix the layout of this.
const ProductCart = ({ cartItem }: { cartItem: CartItem }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full">
      {cartItem.product.images && (
        <div className="image relative size-44 border p-5">
          <Image
            src={urlFor(cartItem.product.images[0]).url()}
            alt="productImage"
            fill={true}
          />
        </div>
      )}
      <div className="flex justify-between items-start self-start">
        <div>
          <h3 className="font-semibold text-lg ">{cartItem.product.name}</h3>
          <span className="text-gray-600 block my-3">
            variant :{" "}
            <span className="font-semibold text-black">
              {cartItem.product.variant}
            </span>
          </span>
          <span className="text-gray-600 block">
            Statue :{" "}
            <span className="font-semibold text-black">
              {cartItem.product.status}
            </span>
          </span>
        </div>
        <p className="price font-semibold text-lg">
          $
          {cartItem.product.price && cartItem.product.price * cartItem.quantity}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <FavIcon />
            <Trash size={30} />
          </div>
          <ExistingCartItem product={cartItem.product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
