import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useId } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Brand } from "../../../../sanity.types";

export type BrandsListProps = {
  brands: Brand[];
  selectedBrand: string | null;
  setSelectedBrand: Dispatch<SetStateAction<string | null>>;
};

const BrandsList = ({
  brands,
  selectedBrand,
  setSelectedBrand,
}: BrandsListProps) => {
  const headingId = useId();

  return (
    <div className="Brands py-3 mb-2">
      <h3
        id={headingId}
        className="font-semibold text-lg pb-1 mb-2 border-b text-shop-orange tracking-widest"
      >
        Brands
      </h3>

      <RadioGroup
        aria-labelledby={headingId}
        value={selectedBrand ?? ""}
        onValueChange={(val) => setSelectedBrand(val || null)}
        className="space-y-1"
      >
        {brands.map((brand) => {
          const value = brand.slug?.current ?? "";
          const isSelected = selectedBrand === value;

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
              <span>{brand.title}</span>
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default BrandsList;
