import Shop from "@/components/sections/shop/shop";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";
import { Product } from "../../../../sanity.types";
import { client } from "@/sanity/lib/client";
const initialProductQuery = `
  *[_type == 'product'][0...9] | order(name asc) { 
    ..., "categories": categories[]->title 
  }
`;
const page = async () => {
  const [categories, brands, initialProducts] = await Promise.all([
    getCategories(),
    getAllBrands(),
    client.fetch<Product[]>(
      initialProductQuery,
      {},
      { next: { revalidate: 3600 } }
    ),
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
