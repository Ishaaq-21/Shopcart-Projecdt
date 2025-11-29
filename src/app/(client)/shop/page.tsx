import Shop from "@/components/sections/shop/shop";
import Loader from "@/components/ui/customUI/Loader";
import { getAllBrands, getAllProducts, getCategories } from "@/sanity/queries";
import React, { Suspense } from "react";

const page = async () => {
  const [categories, brands, initialProducts] = await Promise.all([
    getCategories(),
    getAllBrands(),
    getAllProducts(),
  ]);
  return (
    <div className="shop-page pt-6">
      <Suspense fallback={<Loader />}>
        <Shop
          categories={categories}
          brands={brands}
          initialProducts={initialProducts}
        />
      </Suspense>
    </div>
  );
};

export default page;
