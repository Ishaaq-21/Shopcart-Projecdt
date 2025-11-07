import React, { Dispatch, SetStateAction } from "react";
import { Brand, Category } from "../../../../sanity.types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CategoriesList from "./CategoriesList";
import BrandsList from "./BrandList";

const prices = [
  "Under $100",
  "$100 - $200",
  "$200 - $300",
  "$300 - $500",
  "Over $500",
];

type AsideProps = {
  categories: Category[];
  brands: Brand[];
  selectedCategory: string | null;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
  selectedBrand: string | null;
  setSelectedBrand: Dispatch<SetStateAction<string | null>>;
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
    <aside className="max-w-60 px-3 min-h-[calc(100vh-160px)] overflow-hidden md:border-r border-shop-primary pt-2">
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
      <div className="price py-3">
        <h3 className="font-semibold text-lg pb-1 mb-2 border-b text-shop-orange tracking-widest">
          Price
        </h3>
        {prices.map((price) => (
          <div
            key={price}
            className="shop-list-item flex items-center gap-2 py-1 w-full"
          >
            <input
              type="checkbox"
              name={price}
              id={price}
              className="w-4 h-4"
            />
            <label htmlFor={price} className="block font-seibold w-full">
              {price}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ShopAside;
