import React, { Dispatch, SetStateAction } from "react";
import { Brand, Category } from "../../../../sanity.types";
import CategoriesList from "./CategoriesList";
import BrandsList from "./BrandList";
import PriceList from "./PriceList";

type AsideProps = {
  categories: Category[];
  brands: Brand[];
  selectedCategory: string | null;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
  selectedBrand: string | null;
  setSelectedBrand: Dispatch<SetStateAction<string | null>>;
  selectedPrice: string;
  setSelectedPrice: Dispatch<SetStateAction<string | null>>;
};

const ShopAside = ({
  categories,
  brands,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  selectedPrice,
  setSelectedPrice,
}: AsideProps) => {
  return (
    <aside className="scrollbar-hide max-w-60 px-3 md:h-[calc(100vh-160px)] overflow-y-scroll md:border-r border-shop-primary pt-2">
      <CategoriesList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {/* Brands */}
      <BrandsList
        brands={brands}
        setSelectedBrand={setSelectedBrand}
        selectedBrand={selectedBrand}
      />

      {/* Prices */}
      <PriceList
        setSelectedPrice={setSelectedPrice}
        selectedPrice={selectedPrice}
      />
    </aside>
  );
};

export default ShopAside;
