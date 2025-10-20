import Container from "@/components/common/Container";
import React from "react";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="border-t  border-black/20">
      <Container>
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
