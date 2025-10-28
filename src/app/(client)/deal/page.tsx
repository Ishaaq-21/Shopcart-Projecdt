import NoProductAvailable from "@/components/ui/customUI/NoProductsAvailable";
import ProductCard from "@/components/ui/customUI/ProductCard";
import { getDealProducts } from "@/sanity/queries";
import React from "react";
import { Product } from "../../../../sanity.types";
import Container from "@/components/common/Container";
import Title from "@/components/atoms/Title";

const DealPage = async () => {
  const dealProducts = await getDealProducts();
  return (
    <div className="py-10 bg-deal-bg">
      <Container>
        <Title className="mb-5 pb-2 border-b border-black/20 w-fit ">
          {" "}
          Hot Deals of the week
        </Title>
        {dealProducts.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {dealProducts.map((product: Product, index: number) => (
              <ProductCard key={product?._id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <NoProductAvailable />
        )}
      </Container>
    </div>
  );
};

export default DealPage;
