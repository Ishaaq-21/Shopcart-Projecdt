import Title from "@/components/atoms/Title";
import Container from "@/components/common/Container";
import CartProducts from "@/components/sections/cart/CartProducts";
import { ShoppingBag } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="py-10 bg-gray-100">
      <Container>
        <Title className="mb-10 flex gap-2 items-center tracking-wide">
          <ShoppingBag />
          Shopping Cart{" "}
        </Title>
        <CartProducts />
      </Container>
    </div>
  );
};

export default page;
