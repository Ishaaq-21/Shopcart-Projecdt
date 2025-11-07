import React, { Dispatch, SetStateAction } from "react";
import { Brand, Category } from "../../../../sanity.types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CategoriesList from "./CategoriesList";

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
  category: string | null;
  setCategory: Dispatch<SetStateAction<string | null>>;
  brand: string | null;
  setBrand: Dispatch<SetStateAction<string | null>>;
};

const ShopAside = ({
  categories,
  brands,
  category,
  setCategory,
  brand,
  setBrand,
}: AsideProps) => {
  return (
    <aside className="max-w-60 px-3 min-h-[calc(100vh-160px)] overflow-hidden md:border-r border-shop-primary pt-2">
      <CategoriesList
        categories={categories}
        selectedCategory={category}
        setCategory={setCategory}
      />
      {/* Brands */}
      <div className="brands py-3 mb-5">
        <h3 className="font-semibold text-lg pb-1 mb-2 border-b text-shop-orange tracking-widest">
          Brands
        </h3>
        {brands.map((brand: Brand) => (
          <div
            key={brand.title}
            className="shop-list-item flex items-center gap-2 py-1  w-full"
          >
            <input
              type="checkbox"
              name={brand.title}
              id={brand.title}
              className="w-4 h-4"
            />
            <label htmlFor={brand.title} className="block w-full ">
              {brand.title}
            </label>{" "}
          </div>
        ))}
      </div>

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
