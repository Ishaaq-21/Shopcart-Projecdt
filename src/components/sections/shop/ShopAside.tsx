import React from "react";
import { shopProps } from "./shop";
import { Category } from "@/constants/data";
import { Brand } from "../../../../sanity.types";

const prices = [
  "Under $100",
  "$100 - $200",
  "$200 - $300",
  "$300 - $500",
  "Over $500",
];
const ShopAside = ({ categories, brands }: shopProps) => {
  return (
    <aside className="max-w-60 px-3 border-r border-shop-primary pt-5">
      <div className="categories py-3 mb-2">
        <h3 className="font-semibold text-lg pb-1 mb-2 border-b text-shop-orange tracking-widest">
          Categories
        </h3>
        {categories.map((category: Category) => (
          <div
            key={category.title}
            className="shop-list-item flex items-center gap-2 py-1 w-full"
          >
            <input
              type="checkbox"
              name={category.title}
              id={category.title}
              className="w-4 h-4"
            />
            <label htmlFor={category.title} className="block w-full ">
              {category.title}
            </label>
          </div>
        ))}
      </div>

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
      <div className="price border-b py-3">
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
