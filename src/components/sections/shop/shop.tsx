"use client";
import React, { useState } from "react";
import { Brand, Category, Product } from "../../../../sanity.types";
import Container from "@/components/common/Container";
import Title from "@/components/atoms/Title";
import ShopAside from "./ShopAside";
import { useSearchParams } from "next/navigation";

export type ShopProps = {
  categories: Category[];
  brands: Brand[];
};
const Shop = ({ categories, brands }: ShopProps) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams.get("brand");
  const categoryParams = searchParams.get("category");
  const [products, setproducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(
    categoryParams || null
  );
  const [selectedBrand, setSelectedBrand] = useState(brandParams || null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  return (
    <div>
      {" "}
      <Container>
        <div className="sticky flex justify-between items-center border-b border-shop-primary w-full pb-5">
          <Title className="font-bold uppercase !text-lg">
            Get the products based on your needs
          </Title>
          {(selectedCategory !== null ||
            selectedBrand !== null ||
            selectedPrice !== null) && (
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedBrand(null);
                setSelectedPrice(null);
              }}
              className="text-lg text-shop-orange hover:text-orange-500 hover-effect underline"
            >
              Reset Filters
            </button>
          )}
        </div>
        <ShopAside
          categories={categories}
          brands={brands}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      </Container>
    </div>
  );
};

export default Shop;
