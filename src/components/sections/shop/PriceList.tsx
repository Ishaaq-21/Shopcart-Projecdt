import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import type { Dispatch, SetStateAction } from "react";

export type PriceListProps = {
  selectedPrice: string | null;
  setSelectedPrice: Dispatch<SetStateAction<string | null>>;
};

const prices = [
  { title: "Under $100", value: "0-100" },
  { title: "$100 - $200", value: "100-200" },
  { title: "$200 - $300", value: "200-300" },
  { title: "$300 - $500", value: "300-500" },
  { title: "Over $500", value: "500-10000" },
];
const PriceList = ({ selectedPrice, setSelectedPrice }: PriceListProps) => {
  return (
    <div className="Price py-3 mb-2">
      <h3 className="font-semibold text-lg pb-1 mb-2 border-b text-shop-orange tracking-widest">
        Price
      </h3>

      <RadioGroup
        value={selectedPrice ?? ""}
        onValueChange={(val) => setSelectedPrice(val)}
        className="space-y-1"
      >
        {prices.map((price) => {
          const value = price.value ?? "";
          const isSelected = selectedPrice === value;

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
              <span>{price.title}</span>
            </label>
          );
        })}
      </RadioGroup>
      <button
        onClick={() => setSelectedPrice("")}
        className="mt-3 text-s text-shop-orange hover:text-orange-500 hover-effect underline"
      >
        Reset filters
      </button>
    </div>
  );
};

export default PriceList;
