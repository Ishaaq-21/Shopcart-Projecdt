"use client";
import { headerMenuData, HeaderMenuItemType } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderNav = ({ isOpened }: { isOpened?: boolean }) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        isOpened ? "flex flex-col" : "hidden"
      } md:flex md:justify-center md:items-center w-1/3 capitalize gap-5 whitespace-nowrap`}
    >
      {headerMenuData.map((headerItem: HeaderMenuItemType) => {
        return (
          <Link
            className={`md:hover:text-shop-primary relative hover-effect group text-gray-400 md:text-black  ${
              pathname === headerItem.href ? "!text-shop-primary font-bold" : ""
            }`}
            key={headerItem.href}
            href={headerItem.href}
          >
            {headerItem.title}
            <span
              className={`hidden md:block ${
                pathname === headerItem.href ? "w-full" : "w-0"
              } md:group-hover:w-full h-0.5 bg-shop-orange hover-effect absolute -bottom-1.5`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderNav;
