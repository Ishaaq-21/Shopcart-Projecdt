import React from "react";
import { Product } from "../../../sanity.types";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

const AddToWishlistBtn = ({
  product,
  className,
  iconSize,
}: {
  product: Product;
  className?: string;
  iconSize?: number;
}) => {
  return (
    <div className={cn("z-10", className)}>
      <button className="p-2 border rounded-full hover:bg-shop-orange hover-effect">
        <Heart size={12} />
      </button>
    </div>
  );
};

export default AddToWishlistBtn;
