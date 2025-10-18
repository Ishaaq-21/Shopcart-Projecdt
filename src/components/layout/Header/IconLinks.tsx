import CartIcon from "@/components/atoms/CartIcon";
import FavIcon from "@/components/atoms/FavIcon";
import SearchIcon from "@/components/atoms/SearchIcon";
import SignIn from "@/components/atoms/SignIn";
import React from "react";

const IconLinks = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <div
      className={`${
        isOpen ? "flex flex-col mt-5" : "hidden"
      } md:flex md:flex-row 
        gap-5 md:justify-between md:items-center
      `}
    >
      <SearchIcon />
      <CartIcon />
      <FavIcon />
      <SignIn />
    </div>
  );
};

export default IconLinks;
