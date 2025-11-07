import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Category } from "../../../../sanity.types";

export type CategoriesListProps = {
  categories: Category[];
  selectedCategory: string | null;
  setCategory: Dispatch<SetStateAction<string | null>>;
};

const CategoriesList = ({
  categories,
  selectedCategory,
  setCategory,
}: CategoriesListProps) => {
  return (
    <div className="categories py-3 mb-2">
      <h3 className="font-semibold text-lg pb-1 mb-2 border-b text-shop-orange tracking-widest">
        Categories
      </h3>

      <RadioGroup
        value={selectedCategory ?? ""}
        onValueChange={(val) => setCategory(val || null)}
        className="space-y-1"
      >
        {categories.map((category) => {
          const value = category.slug?.current ?? "";
          const isSelected = selectedCategory === value;

          return (
            <label
              key={value}
              htmlFor={value}
              className={`flex items-center gap-3 cursor-pointer w-full group ${
                isSelected ? "font-semibold text-shop-orange" : "text-black"
              } hover:text-shop-primary transition-colors hover-effect block text-sm`}
            >
              <RadioGroupItem
                value={value}
                id={value}
                className="rounded-sm border-black group-hover:border-shop-primary transition-colors"
              />
              <span>{category.title}</span>
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default CategoriesList;
