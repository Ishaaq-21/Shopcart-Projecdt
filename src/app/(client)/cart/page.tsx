import Title from "@/components/atoms/Title";
import Container from "@/components/common/Container";
import CartProducts from "@/components/sections/cart/CartProducts";
import React from "react";

const page = () => {
  return (
    <div className="pt-10">
      <Container>
        <Title className="mb-10">Shopping Cart </Title>
        <CartProducts />
      </Container>
    </div>
  );
};

export default page;
