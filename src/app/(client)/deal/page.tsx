import NoProductAvailable from "@/components/ui/customUI/NoProductsAvailable";
import ProductCard from "@/components/ui/customUI/ProductCard";
import { getDealProducts } from "@/sanity/queries";
import React from "react";
import { Product } from "../../../../sanity.types";
import Container from "@/components/common/Container";

const DealPage = async () => {
  const dealProducts = await getDealProducts();
  return (
    <Container>
      {dealProducts.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          {dealProducts.map((product: Product, index: number) => (
            <ProductCard key={product?._id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <NoProductAvailable />
      )}
    </Container>
  );
};

export default DealPage;
