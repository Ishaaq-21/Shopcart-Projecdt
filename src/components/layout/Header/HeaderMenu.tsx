"use client";
import { headerMenuData, HeaderMenuItemType } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex w-1/3 capitalize gap-5 whitespace-nowrap">
      {headerMenuData.map((headerItem: HeaderMenuItemType) => {
        return (
          <Link
            className="hover:text-shop-primary relative hover-effect group"
            key={headerItem.href}
            href={headerItem.href}
          >
            {headerItem.title}
            <span
              className={`${
                pathname === headerItem.href ? "w-full" : "w-0"
              } group-hover:w-full h-0.5 block bg-shop-orange hover-effect absolute -bottom-1.5`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
