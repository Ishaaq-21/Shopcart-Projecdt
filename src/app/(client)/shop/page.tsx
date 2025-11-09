import Shop from "@/components/sections/shop/shop";
import { getAllBrands, getAllProducts, getCategories } from "@/sanity/queries";
import React from "react";

const page = async () => {
  const [categories, brands, initialProducts] = await Promise.all([
    getCategories(),
    getAllBrands(),
    getAllProducts(),
  ]);
  return (
    <div className="shop-page pt-6">
      <Shop
        categories={categories}
        brands={brands}
        initialProducts={initialProducts}
      />
    </div>
  );
};

export default page;
