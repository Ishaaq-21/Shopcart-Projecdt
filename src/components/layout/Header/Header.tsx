import React from "react";
import Container from "../../common/Container";
import Logo from "../../atoms/Logo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <Container className="flex-between">
        <Logo />
        <HeaderMenu />
        <div>Last thing </div>
      </Container>
    </header>
  );
};

export default Header;
