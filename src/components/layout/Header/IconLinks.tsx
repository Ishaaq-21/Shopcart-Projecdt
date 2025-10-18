"use client";
import CartIcon from "@/components/atoms/CartIcon";
import FavIcon from "@/components/atoms/FavIcon";
import SearchIcon from "@/components/atoms/SearchIcon";
import SignIn from "@/components/atoms/SignIn";
import { ClerkLoaded, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import React from "react";

const IconLinks = ({ isOpen }: { isOpen?: boolean }) => {
  const user = useUser();
  return (
    <div
      className={`${
        isOpen ? "flex flex-col my-5" : "hidden"
      } md:flex md:flex-row gap-5 md:justify-between md:items-center
      `}
    >
      <SearchIcon />
      <CartIcon />
      <FavIcon />
      <ClerkLoaded>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {!user.user && <SignIn />}
      </ClerkLoaded>
    </div>
  );
};

export default IconLinks;
