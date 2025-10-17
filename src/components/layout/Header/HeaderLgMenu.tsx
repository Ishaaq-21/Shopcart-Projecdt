import CartIcon from "@/components/atoms/CartIcon";
import FavIcon from "@/components/atoms/FavIcon";
import SignIn from "@/components/atoms/SignIn";
import React from "react";
import HeaderNav from "./HeaderNav";
import SearchIcon from "@/components/atoms/SearchIcon";

const HeaderLgMenu = () => {
  return (
    <>
      <HeaderNav />
      <div className="gap-5 hidden md:flex justify-between items-center">
        <SearchIcon />
        <CartIcon />
        <FavIcon />
        <SignIn />
      </div>
    </>
  );
};

export default HeaderLgMenu;
