"use client";
import { useFavoriteContext } from "@/contexts/CartFavContextProvider";
import { X } from "lucide-react";
import React from "react";
import { Product } from "../../../../sanity.types";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AddToCartBtn from "@/components/atoms/cart/AddToCartBtn";

const WishItem = ({ product }: { product: Product }) => {
  const { favDispatch } = useFavoriteContext();
  const removeClick = () => {
    favDispatch({ type: "FAV_CLICK", payload: product });
    toast.success("Removed from wishlist");
  };
  return (
    <tr className="border-b border-black/30">
      <td className="py-5 px-2 align-middle">
        <div className="flex items-center gap-2">
          <X
            onClick={removeClick}
            className="cursor-pointer hover:text-red-500 hover-effect flex-shrink-0"
            size={18}
          />
          {product.images && (
            <Link
              href={`product/${product.slug?.current}`}
              className="border border-black/30 bg-white rounded-md min-w-16  max-w-16 hidden md:table-cell"
            >
              <Image
                src={urlFor(product.images[0]).url()}
                alt={`pic of ${product.name}`}
                width={60}
                height={60}
                className="object-cover"
              />
            </Link>
          )}
          <p className="line-clamp-1 self-center">{product.name}</p>
        </div>
      </td>
      <td className="p-2 capitalize hidden md:table-cell">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs font-medium">
            {product.categories.map((cat) => cat).join(", ")}
          </p>
        )}
      </td>
      <td className="p-2 capitalize hidden md:table-cell">
        {product?.variant}
      </td>
      <td
        className={`p-2 w-24 ${
          (product?.stock as number) > 0 ? "text-green-600" : "text-red-600"
        } font-medium text-sm hidden md:table-cell`}
      >
        {(product?.stock as number) > 0 ? "In Stock" : "Out of Stock"}
      </td>
      <td className="p-2 px-4">${product.price}</td>
      <td className="p-2">
        <AddToCartBtn product={product} className="!px-3 !gap-1" />
      </td>
    </tr>
  );
};

export default WishItem;
