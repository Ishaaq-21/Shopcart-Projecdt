"use client";
import React, { useEffect, useState } from "react";
import HomeTab from "./HomeTab";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import ProductCard from "@/components/ui/customUI/ProductCard";
import Loader from "@/components/ui/customUI/Loader";
import NoProductAvailable from "@/components/ui/customUI/NoProductsAvailable";
import { Product } from "../../../../sanity.types";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;
  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const productsData = await client.fetch(query, params);
        setProducts(productsData);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [selectedTab]);

  return (
    <div className="py-10">
      <HomeTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {isLoading && <Loader />}
      {!products.length ? (
        <NoProductAvailable selectedTab={selectedTab} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          {products.map((product: Product, index) => (
            <ProductCard key={product?._id} product={product} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
