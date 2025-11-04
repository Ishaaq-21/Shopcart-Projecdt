import Title from "@/components/atoms/Title";
import Container from "@/components/common/Container";
import ShopAside from "@/components/sections/shop/ShopAside";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";

const page = async () => {
  const categeries = await getCategories();
  const brands = await getAllBrands();
  return (
    <div className="shop-page py-6 overflow-y-scroll">
      <Container>
        <div className="sticky flex justify-between items-center border-b border-shop-primary w-full pb-5">
          <Title className="">Products</Title>
          <button className="text-lg text-orange hover:text-orange-500 hover-effect underline">
            Reset filters
          </button>
        </div>
        <ShopAside categories={categeries} brands={brands} />
      </Container>
    </div>
  );
};

export default page;
