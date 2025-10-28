import { Flame } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Product } from "../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import AddToWishlistBtn from "@/components/atoms/AddToWishlistBtn";
import AddToCartBtn from "@/components/atoms/AddToCartBtn";
import StartsReview from "@/components/atoms/StartsReview";

const StatusIcon = ({
  productStatus,
}: {
  productStatus?: "hot" | "new" | "sale";
}) => {
  return productStatus !== "hot" ? (
    <span className="px-3 py-0.5 text-xs text-black rounded-xl border ">
      {productStatus} !
    </span>
  ) : (
    <Flame color="red" />
  );
};

const ProductCard = ({
  className,
  product,
  index,
}: {
  className?: string;
  product: Product;
  index: number;
}) => {
  console.log(product); // this is returing an object that has images and they do exist

  return (
    <div
      className={`relative rounded-lg border border-black/30 group min-h-80 overflow-hidden ${className}`}
    >
      <div className="flex justify-between items-center p-2 absolute w-full z-10">
        <StatusIcon productStatus={product.status} />
        <AddToWishlistBtn product={product} />
      </div>{" "}
      {product?.images && (
        <Link href={`/product/${product?.slug?.current}`}>
          <Image
            src={urlFor(product.images[0]).url()}
            alt="productImage"
            width={500}
            height={500}
            priority
            className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop-light-bg duration-500 
              ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
          />
        </Link>
      )}
      <div className="infos my-2 p-4 min-h-48 flex flex-col justify-between gap-2">
        {product.categories && (
          <p className="text-gray-500/80 text-[10px] uppercase font-semibold">
            {product.categories.join(", ")}
          </p>
        )}
        <h3 className="font-semibold text-sm ">{product.name}</h3>

        <StartsReview productIndex={index} />

        <p className="text-sm ">
          In Stock :{" "}
          <span className="font-semibold text-sm text-shop-orange">
            {product.stock}
          </span>{" "}
        </p>

        <p className="font-semibold text-sm text-shop-orange">
          ${product.price}{" "}
          <del className="font-semibold text-sm text-gray-500/80">
            {product.price ? (product.price * 1.15).toFixed(2) : ""}
          </del>
        </p>
        <AddToCartBtn />
      </div>
    </div>
  );
};

export default ProductCard;
