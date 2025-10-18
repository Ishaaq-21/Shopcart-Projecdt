import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className="w-auto md:w-1/3">
      <h2
        className={cn(
          "text-2xl text-amber-600 tracking-wider hover:text-shop-orange font-black w-fit group hover-effect ",
          className
        )}
      >
        SHOPCAR
        <span className="text-shop-orange group-hover:text-amber-600 hover-effect">
          T
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
