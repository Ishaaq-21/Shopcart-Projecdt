import React from "react";
import Container from "../../common/Container";
import Logo from "../../atoms/Logo";

import MobileMenu from "./MobileMenu";
import HeaderLgMenu from "./HeaderLgMenu";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <Container className="flex-between">
        <Logo />
        <HeaderLgMenu />
        <MobileMenu />
      </Container>
    </header>
  );
};

export default Header;
