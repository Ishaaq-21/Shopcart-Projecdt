import React from "react";
import { Product } from "../../../../sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getBrand } from "@/sanity/queries";
const ProductChars = async ({ product }: { product: Product }) => {
  const productBrand = await getBrand(product.slug?.current as string);
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-b border-black/10 py-6 flex gap-5 items-center"
    >
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger className="font-semibold text-sm tracking-wider flex justify-between w-full">
          {" "}
          {product.name} : characteristics{" "}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex justify-between items-center my-2">
            <span className="text-sm">Brand : </span>
            <span className="font-semibold text-sm">
              {productBrand && productBrand[0]?.brandName}
            </span>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="text-sm">Collection : </span>
            <span className="font-semibold text-sm">2025</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="text-sm">Type : </span>
            <span className="font-semibold text-sm">{product.variant}</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="text-sm">Stock : </span>
            <span className="font-semibold text-sm">
              {product.stock ? "Available" : "Out of Stock"}
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductChars;
