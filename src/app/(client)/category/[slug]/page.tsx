import Title from "@/components/atoms/Title";
import Container from "@/components/common/Container";
import CategoriesProducts from "@/components/sections/Categories/CategoriesProducts";
import { getCategories } from "@/sanity/queries";

import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title className="mb-5 ">
          Products Categories:{" "}
          <span className="font-bold text-shop-primary tracking-wider capitalize">
            {slug && slug}
          </span>
        </Title>
        <CategoriesProducts slug={slug} categories={categories} />
      </Container>
    </div>
  );
};

export default CategoryPage;
