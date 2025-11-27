"use client";
import CartIcon from "@/components/atoms/cart/CartIcon";
import FavIcon from "@/components/atoms/wishList/FavIcon";
import SearchIcon from "@/components/atoms/SearchIcon";
import SignIn from "@/components/atoms/SignIn";
import { ClerkLoaded, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import { Logs } from "lucide-react";

const IconLinks = ({ isOpen }: { isOpen?: boolean }) => {
  const user = useUser();
  return (
    <div
      className={`${
        isOpen ? "flex flex-col my-5" : "hidden"
      } md:flex md:flex-row gap-5 md:justify-end md:items-center w-auto md:w-1/3
      `}
    >
      <SearchIcon />
      <CartIcon />
      <FavIcon />
      <ClerkLoaded>
        <SignedIn>
          <Link href={"/orders"}>
            <Logs className="hover:text-shop-orange hover-effect" />
          </Link>
          <UserButton />
        </SignedIn>
        {!user.user && <SignIn />}
      </ClerkLoaded>
    </div>
  );
};

export default IconLinks;
