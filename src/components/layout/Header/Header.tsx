import React from "react";
import Container from "../../common/Container";
import Logo from "../../atoms/Logo";

import HeaderLgMenu from "./HeaderLgMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white py-5 fixed inset-0 z-50 h-[70px] mb-[70px]">
      <Container className="flex-between">
        <Logo />
        <HeaderLgMenu />
        <MobileMenu />
      </Container>
    </header>
  );
};

export default Header;
